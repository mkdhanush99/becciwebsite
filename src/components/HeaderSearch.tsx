import * as React from "react"
import { CommandPalette, BECCI_ITEMS } from "@/components/ui/command-palette"

/**
 * Site-wide search in the header. The header's search links ([data-search-open]) go to /opportunities
 * until this island loads; after that they open the palette. ⌘K / Ctrl+K opens it on every page.
 */
export default function HeaderSearch() {
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("[data-search-open]")
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
      e.preventDefault()
      // The mobile menu is a modal dialog in the top layer; close it so the palette is visible.
      document.querySelectorAll<HTMLDialogElement>("dialog[open]").forEach((d) => d.close())
      window.dispatchEvent(new Event("becci:search"))
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])
  return <CommandPalette items={BECCI_ITEMS} hideTrigger openEvent="becci:search" placeholder="Search pages, schemes and opportunities" />
}

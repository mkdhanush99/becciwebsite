import * as React from "react"
import { BECCI_ITEMS, fuzzy, type CommandItem } from "@/components/ui/command-palette"

/**
 * Header search, Google style: a search field in the top bar. On focus it shows recommended searches and
 * popular pages; as you type it suggests matching pages, schemes and listings. Enter opens the highlighted
 * suggestion, or searches all opportunities for the text. ⌘K / Ctrl+K focuses it.
 */
const RECOMMENDED = ["PMEGP", "Mudra", "Scholarships", "Tenders", "Jobs", "Stand-Up India", "Seed Fund", "Membership"]
const POPULAR = ["schemes", "membership", "tenders", "finance", "events", "knowledge"]

function Lit({ text, idx }: { text: string; idx: number[] }) {
  if (!idx.length) return <>{text}</>
  const set = new Set(idx)
  return <>{Array.from(text).map((c, i) => (set.has(i) ? <b key={i}>{c}</b> : c))}</>
}
const Mag = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
)

export default function SearchBox() {
  const uid = React.useId()
  const [q, setQ] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState(-1)
  const input = React.useRef<HTMLInputElement>(null)
  const root = React.useRef<HTMLFormElement>(null)

  const rows = React.useMemo(() => {
    const term = q.trim()
    if (!term) return POPULAR.map((id) => BECCI_ITEMS.find((i) => i.id === id)).filter(Boolean).map((it) => ({ it: it as CommandItem, idx: [] as number[] }))
    const hits = BECCI_ITEMS.map((it) => {
      const a = fuzzy(it.title, term), b = fuzzy(`${it.subtitle ?? ""} ${it.keywords ?? ""}`, term)
      if (!a && !b) return null
      return { it, idx: a?.idx ?? [], score: a ? a.score : 60 + (b?.score ?? 0) }
    }).filter(Boolean) as { it: CommandItem; idx: number[]; score: number }[]
    // Prefer whole-word style matches (the text contains what you typed); fall back to looser matches.
    const exact = hits.filter((h) => `${h.it.title} ${h.it.subtitle ?? ""} ${h.it.keywords ?? ""}`.toLowerCase().includes(term.toLowerCase()))
    return (exact.length ? exact : hits).sort((x, y) => x.score - y.score).slice(0, 7).map((r) => ({ it: r.it, idx: r.idx }))
  }, [q])
  const recs = q.trim() ? [] : RECOMMENDED

  React.useEffect(() => { setActive(-1) }, [q])
  React.useEffect(() => {
    // ⌘K / Ctrl+K focuses this field when it is on screen (the full-screen palette keeps the shortcut otherwise).
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k" && input.current && input.current.offsetParent) {
        e.preventDefault(); e.stopImmediatePropagation(); input.current.focus(); setOpen(true)
      }
    }
    window.addEventListener("keydown", h, true)
    const out = (e: PointerEvent) => { if (root.current && !root.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener("pointerdown", out)
    return () => { window.removeEventListener("keydown", h, true); document.removeEventListener("pointerdown", out) }
  }, [])

  const searchAll = (text: string) => { window.location.href = `/opportunities?q=${encodeURIComponent(text)}` }
  const choose = (i: number) => {
    const r = rows[i]
    if (r?.it.onSelect) r.it.onSelect()
  }
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setOpen(true); setActive((a) => Math.min(rows.length - 1, a + 1)) }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(-1, a - 1)) }
    else if (e.key === "Escape") { setOpen(false); input.current?.blur() }
  }
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (active >= 0) return choose(active)
    if (q.trim()) searchAll(q.trim())
  }

  return (
    <form ref={root} className="sbx" role="search" action="/opportunities" method="get" onSubmit={submit} data-open={open || undefined}>
      <label htmlFor={`${uid}-q`} className="visually-hidden">Search BECCI</label>
      <span className="sbx__icon"><Mag /></span>
      <input
        ref={input} id={`${uid}-q`} name="q" type="search" autoComplete="off" spellCheck={false}
        className="sbx__input" placeholder="Search schemes, tenders, pages…" value={q}
        role="combobox" aria-expanded={open} aria-controls={`${uid}-list`} aria-autocomplete="list"
        aria-activedescendant={active >= 0 ? `${uid}-o-${active}` : undefined}
        onChange={(e) => { setQ(e.target.value); setOpen(true) }} onFocus={() => setOpen(true)} onKeyDown={onKey}
      />
      <kbd className="sbx__kbd" aria-hidden="true">Ctrl K</kbd>
      {open && (
        <div className="sbx__panel">
          {recs.length > 0 && (
            <div className="sbx__sec">
              <p className="sbx__h">Recommended searches</p>
              <ul className="sbx__chips">
                {recs.map((r) => (
                  <li key={r}><button type="button" onClick={() => { setQ(r); input.current?.focus() }}><Mag />{r}</button></li>
                ))}
              </ul>
            </div>
          )}
          <div className="sbx__sec">
            <p className="sbx__h">{q.trim() ? "Suggestions" : "Popular pages"}</p>
            <ul className="sbx__list" id={`${uid}-list`} role="listbox">
              {rows.map((r, i) => (
                <li key={r.it.id} id={`${uid}-o-${i}`} role="option" aria-selected={i === active}>
                  <a href="#" onMouseEnter={() => setActive(i)} onClick={(e) => { e.preventDefault(); choose(i) }}>
                    <span className="sbx__ri">{r.it.icon}</span>
                    <span className="sbx__rt"><span className="sbx__t"><Lit text={r.it.title} idx={r.idx} /></span>{r.it.subtitle && <span className="sbx__s">{r.it.subtitle}</span>}</span>
                    <span className="sbx__g">{r.it.group}</span>
                  </a>
                </li>
              ))}
              {q.trim() && rows.length === 0 && <li className="sbx__none">No page or scheme matches “{q.trim()}”.</li>}
            </ul>
          </div>
          {q.trim() && (
            <button type="button" className="sbx__all" onClick={() => searchAll(q.trim())}><Mag />Search all opportunities for “{q.trim()}”</button>
          )}
        </div>
      )}
    </form>
  )
}

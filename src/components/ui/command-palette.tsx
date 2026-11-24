"use client"
import * as React from "react"
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion"
import { ArrowDown, ArrowUp, BookOpen, Briefcase, Building2, CalendarDays, Command, CornerDownLeft, FileText, GraduationCap, Handshake, Home, Info, Landmark, Mail, Search, Store, UserPlus, Users, Wallet } from "lucide-react"
import { cn } from "@/lib/utils"
import { opportunities, CATEGORY_META } from "@/data/opportunities"

export interface CommandItem {
  id: string
  group: string
  title: string
  subtitle?: string
  icon?: React.ReactNode
  keywords?: string
  shortcut?: string
  preview?: { description: string; details?: [string, string][] }
  onSelect?: () => void
}

export interface CommandPaletteProps {
  items: CommandItem[]
  placeholder?: string
  /** Start with the palette open. */
  defaultOpen?: boolean
  triggerLabel?: string
  className?: string
}

// BECCI brand: royal blue action colour, sapphire, sky light on dark.
const LIGHT = "#65b9f2"
const GRADIENT = "linear-gradient(120deg,#123f9c,#174fc1 45%,#2869e8)"

/** Subsequence match. Returns the matched indexes and a score (lower is better), or null. */
function fuzzy(text: string, q: string): { idx: number[]; score: number } | null {
  if (!q) return { idx: [], score: 0 }
  const t = text.toLowerCase(), s = q.toLowerCase()
  const at = t.indexOf(s)
  if (at >= 0) return { idx: Array.from({ length: s.length }, (_, i) => at + i), score: at * 0.5 }
  const idx: number[] = []
  let j = 0
  for (let i = 0; i < t.length && j < s.length; i++) if (t[i] === s[j]) { idx.push(i); j++ }
  if (j < s.length) return null
  return { idx, score: 20 + idx[idx.length - 1] - idx[0] }
}
function Lit({ text, idx }: { text: string; idx: number[] }) {
  if (!idx.length) return <>{text}</>
  const set = new Set(idx)
  return <>{Array.from(text).map((c, i) => (set.has(i) ? <span key={i} className="font-bold text-primary underline decoration-[#65b9f2] decoration-2 underline-offset-[3px]">{c}</span> : c))}</>
}

function KeyCap({ children, down, label }: { children: React.ReactNode; down: boolean; label?: string }) {
  return (
    <motion.kbd aria-label={label} animate={{ y: down ? 2 : 0, boxShadow: down ? "0 0 0 rgba(0,0,0,0)" : "0 2px 0 var(--border)" }} transition={{ duration: 0.08 }}
      className="grid h-6 min-w-6 place-items-center rounded-md border border-border bg-background px-1.5 font-sans text-[11px] font-semibold text-muted-foreground">{children}</motion.kbd>
  )
}

export function CommandPalette({ items, placeholder = "Type a command or search", defaultOpen = false, triggerLabel = "Search", className }: CommandPaletteProps) {
  const reduce = !!useReducedMotion()
  const uid = React.useId()
  const [open, setOpen] = React.useState(defaultOpen)
  const [q, setQ] = React.useState("")
  const [active, setActive] = React.useState(0)
  const [pressed, setPressed] = React.useState<string | null>(null)
  const trigger = React.useRef<HTMLButtonElement>(null)
  const input = React.useRef<HTMLInputElement>(null)
  const listRef = React.useRef<HTMLUListElement>(null)

  const results = React.useMemo(() => {
    const scored = items.map((it) => {
      const a = fuzzy(it.title, q), b = q ? fuzzy(`${it.subtitle ?? ""} ${it.keywords ?? ""} ${it.group}`, q) : null
      if (!a && !b) return null
      return { it, idx: a?.idx ?? [], score: a ? a.score : 60 + (b?.score ?? 0) }
    }).filter(Boolean) as { it: CommandItem; idx: number[]; score: number }[]
    if (q) scored.sort((x, y) => x.score - y.score)
    const groups: { name: string; rows: typeof scored }[] = []
    for (const r of scored) {
      let g = groups.find((x) => x.name === r.it.group)
      if (!g) { g = { name: r.it.group, rows: [] }; groups.push(g) }
      g.rows.push(r)
    }
    return groups
  }, [items, q])
  const flat = results.flatMap((g) => g.rows)
  const cur = flat[Math.min(active, flat.length - 1)]

  const close = React.useCallback(() => { setOpen(false); setQ(""); setActive(0); setTimeout(() => trigger.current?.focus(), 0) }, [])
  React.useEffect(() => {
    const h = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((o) => !o) } }
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h)
  }, [])
  React.useEffect(() => { if (open) setTimeout(() => input.current?.focus(), 30) }, [open])
  React.useEffect(() => { setActive(0) }, [q])
  React.useEffect(() => { listRef.current?.querySelector(`[data-i="${active}"]`)?.scrollIntoView({ block: "nearest" }) }, [active])

  const run = (it?: CommandItem) => { if (!it) return; it.onSelect?.(); close() }
  const onKey = (e: React.KeyboardEvent) => {
    const n = flat.length
    const flash = (k: string) => { setPressed(k); setTimeout(() => setPressed(null), 140) }
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => (a + 1) % Math.max(1, n)); flash("down") }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => (a - 1 + n) % Math.max(1, n)); flash("up") }
    else if (e.key === "Home") { e.preventDefault(); setActive(0) } else if (e.key === "End") { e.preventDefault(); setActive(Math.max(0, n - 1)) }
    else if (e.key === "Enter") { e.preventDefault(); flash("enter"); run(cur?.it) }
    else if (e.key === "Escape") { e.preventDefault(); close() }
    else if (e.key === "Tab") { e.preventDefault(); input.current?.focus() }
  }

  // light that follows the cursor and a slight tilt on the preview
  const px = useMotionValue(-300), py = useMotionValue(-300)
  const glow = useMotionTemplate`radial-gradient(280px circle at ${px}px ${py}px, color-mix(in oklab, ${LIGHT} 16%, transparent), transparent 70%)`
  const tx = useMotionValue(0.5), ty = useMotionValue(0.5)
  const rX = useSpring(useTransform(ty, [0, 1], [8, -8]), { stiffness: 140, damping: 16 }), rY = useSpring(useTransform(tx, [0, 1], [-10, 10]), { stiffness: 140, damping: 16 })
  let counter = -1

  return (
    <div data-theme="becci" className={className}>
      <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}
        className="group inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-border bg-card px-3.5 font-sans text-sm font-bold text-muted-foreground shadow-sm outline-none transition-colors hover:border-primary/50 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <Search className="size-4" aria-hidden /> {triggerLabel}
        <span className="ml-6 flex gap-1" aria-hidden><KeyCap down={false}><Command className="size-3" /></KeyCap><KeyCap down={false}>K</KeyCap></span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 grid place-items-start justify-items-center px-4 pt-[9vh]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
            <motion.div aria-hidden onClick={close} className="absolute inset-0 bg-[#081a35]/55 backdrop-blur-md" />
            <motion.div role="dialog" aria-modal="true" aria-label="Search BECCI" onKeyDown={onKey}
              onPointerMove={(e) => { const b = e.currentTarget.getBoundingClientRect(); px.set(e.clientX - b.left); py.set(e.clientY - b.top) }}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.9, y: reduce ? 0 : -24, rotateX: reduce ? 0 : 12 }} animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }} exit={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : -10 }}
              transition={reduce ? { duration: 0.1 } : { type: "spring", stiffness: 380, damping: 26 }} style={{ transformPerspective: 1000 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-[0_50px_100px_-30px_rgba(8,26,53,0.55),0_0_0_1px_color-mix(in_oklab,var(--primary)_10%,transparent)]">
              {!reduce && <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glow }} />}
              <div className="relative flex items-center gap-3 border-b border-border px-4">
                <Search className="size-5 text-primary" aria-hidden />
                <input ref={input} role="combobox" aria-expanded="true" aria-controls={`${uid}-l`} aria-activedescendant={cur ? `${uid}-o-${cur.it.id}` : undefined} aria-label="Search pages and schemes"
                  value={q} onChange={(e) => setQ(e.target.value)} placeholder={placeholder} autoComplete="off" spellCheck={false}
                  className="h-14 min-w-0 flex-1 bg-transparent font-sans text-base text-foreground outline-none placeholder:text-muted-foreground" />
                <kbd className="rounded-md border border-border px-1.5 py-0.5 font-sans text-[11px] font-semibold text-muted-foreground">Esc</kbd>
                <motion.span aria-hidden className="absolute bottom-0 left-0 h-0.5" style={{ background: GRADIENT }} animate={{ width: q ? ["0%", "100%"] : "0%", opacity: q ? 1 : 0 }} transition={{ duration: 0.6 }} key={q.length} />
              </div>

              <div className="relative grid sm:grid-cols-[1.15fr_1fr]">
                <ul ref={listRef} role="listbox" id={`${uid}-l`} aria-label="Results" className="m-0 max-h-[22rem] list-none overflow-y-auto p-2">
                  {flat.length === 0 && <li className="grid h-40 place-items-center px-6 text-center text-sm text-muted-foreground">Nothing matches “{q}”. Try fewer letters.</li>}
                  {results.map((g) => (
                    <li key={g.name} role="presentation">
                      <p className="sticky top-0 z-10 m-0 bg-card/90 px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground backdrop-blur">{g.name}</p>
                      <ul role="group" aria-label={g.name} className="m-0 list-none p-0">
                        {g.rows.map(({ it, idx }) => {
                          counter++
                          const i = counter, on = i === active
                          return (
                            <motion.li key={it.id} id={`${uid}-o-${it.id}`} data-i={i} role="option" aria-selected={on} onMouseMove={() => setActive(i)} onClick={() => run(it)}
                              initial={{ opacity: 0, x: reduce ? 0 : -14 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 400, damping: 28, delay: reduce ? 0 : Math.min(i, 8) * 0.02 }}
                              className="relative flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-3 py-1.5 text-sm">
                              {on && <motion.span layoutId={`${uid}-pill`} transition={{ type: "spring", stiffness: 500, damping: 36 }} className="absolute inset-0 rounded-xl bg-muted ring-1 ring-primary/30" />}
                              {on && <motion.span layoutId={`${uid}-bar`} transition={{ type: "spring", stiffness: 500, damping: 36 }} className="absolute inset-y-2 left-0 w-1 rounded-full" style={{ background: GRADIENT }} />}
                              <span className={cn("relative grid size-8 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary transition-colors", on && "border-transparent text-white")} style={on ? { background: GRADIENT } : undefined}>{it.icon}</span>
                              <span className="relative min-w-0 flex-1"><span className="block truncate font-semibold"><Lit text={it.title} idx={idx} /></span>{it.subtitle && <span className="block truncate text-xs text-muted-foreground">{it.subtitle}</span>}</span>
                              {it.shortcut && <kbd className="relative rounded-md border border-border px-1.5 py-0.5 text-[11px] text-muted-foreground">{it.shortcut}</kbd>}
                            </motion.li>
                          )
                        })}
                      </ul>
                    </li>
                  ))}
                </ul>

                <div className="relative hidden border-l border-border p-4 sm:block" onPointerMove={(e) => { const b = e.currentTarget.getBoundingClientRect(); tx.set((e.clientX - b.left) / b.width); ty.set((e.clientY - b.top) / b.height) }} onPointerLeave={() => { tx.set(0.5); ty.set(0.5) }} style={{ perspective: 800 }}>
                  <AnimatePresence mode="wait" initial={false}>
                    {cur && (
                      <motion.div key={cur.it.id} initial={{ opacity: 0, y: reduce ? 0 : 14, filter: reduce ? "none" : "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: reduce ? 0 : -8 }} transition={{ duration: 0.2 }}>
                        <motion.div style={{ rotateX: reduce ? 0 : rX, rotateY: reduce ? 0 : rY, transformStyle: "preserve-3d", background: GRADIENT }}
                          className="relative grid h-28 place-items-center overflow-hidden rounded-2xl text-white shadow-[0_20px_40px_-18px_rgba(23,79,193,0.55)]">
                          <span aria-hidden className="absolute -left-6 -top-8 size-28 rounded-full bg-white/25 blur-2xl" />
                          <span className="relative scale-[1.9]" style={{ transform: "translateZ(30px) scale(1.9)" }}>{cur.it.icon}</span>
                        </motion.div>
                        <h3 className="m-0 mt-3 text-base font-bold">{cur.it.title}</h3>
                        <p className="m-0 mt-1 text-sm leading-relaxed text-muted-foreground">{cur.it.preview?.description ?? cur.it.subtitle ?? "Press Enter to open."}</p>
                        {cur.it.preview?.details && (
                          <dl className="m-0 mt-3 space-y-1.5 text-xs">
                            {cur.it.preview.details.map(([k, v], i) => (
                              <motion.div key={k} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.05 }} className="flex justify-between gap-3 border-b border-border/60 pb-1.5">
                                <dt className="text-muted-foreground">{k}</dt><dd className="m-0 text-right font-semibold">{v}</dd>
                              </motion.div>
                            ))}
                          </dl>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="relative flex items-center justify-between border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                <span aria-live="polite">{flat.length} {flat.length === 1 ? "result" : "results"}</span>
                <span className="flex items-center gap-3" aria-hidden>
                  <span className="flex items-center gap-1"><KeyCap down={pressed === "up"}><ArrowUp className="size-3" /></KeyCap><KeyCap down={pressed === "down"}><ArrowDown className="size-3" /></KeyCap>move</span>
                  <span className="flex items-center gap-1"><KeyCap down={pressed === "enter"}><CornerDownLeft className="size-3" /></KeyCap>open</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// BECCI items: only pages that exist on the site, and schemes from the site's own verified data.
const I = "size-4"
const go = (path: string) => () => { window.location.href = path }

const PAGES: CommandItem[] = [
  { id: "home", group: "Go to", title: "Home", subtitle: "Where Community Meets Commerce", icon: <Home className={I} />, onSelect: go("/"), preview: { description: "The BECCI homepage: opportunities, membership and the chamber's work." } },
  { id: "about", group: "Go to", title: "About BECCI", subtitle: "Purpose, vision and governance", icon: <Info className={I} />, keywords: "vision mission governance", onSelect: go("/about"), preview: { description: "Who BECCI is, why it exists and how it is run." } },
  { id: "schemes", group: "Go to", title: "Government schemes", subtitle: "Central and State schemes", icon: <Landmark className={I} />, keywords: "yojana subsidy", onSelect: go("/schemes"), preview: { description: CATEGORY_META.schemes.blurb } },
  { id: "membership", group: "Go to", title: "Membership", subtitle: "Join the chamber", icon: <UserPlus className={I} />, keywords: "join member login", onSelect: go("/membership"), preview: { description: "How to become a BECCI member and what membership includes." } },
  { id: "events", group: "Go to", title: "Events", subtitle: "Chamber events", icon: <CalendarDays className={I} />, keywords: "meetings programmes", onSelect: go("/events") },
  { id: "biz-connect", group: "Go to", title: "Biz Connect", subtitle: "Business networking", icon: <Handshake className={I} />, keywords: "network b2b", onSelect: go("/biz-connect") },
  { id: "marketplace", group: "Go to", title: "Marketplace", subtitle: "Member businesses", icon: <Store className={I} />, keywords: "shop buy sell", onSelect: go("/marketplace") },
  { id: "wings", group: "Go to", title: "Women and Youth wings", subtitle: "BECCI wings", icon: <Users className={I} />, keywords: "women youth", onSelect: go("/wings") },
  { id: "knowledge", group: "Go to", title: "Knowledge", subtitle: "Guides and resources", icon: <BookOpen className={I} />, keywords: "learn guides", onSelect: go("/knowledge") },
  { id: "contact", group: "Go to", title: "Contact", subtitle: "Reach the BECCI team", icon: <Mail className={I} />, keywords: "email help", onSelect: go("/contact") },
  { id: "tenders", group: "Opportunities", title: CATEGORY_META.tenders.label, icon: <Building2 className={I} />, keywords: "bids procurement gem", onSelect: go(CATEGORY_META.tenders.path), preview: { description: CATEGORY_META.tenders.blurb } },
  { id: "jobs", group: "Opportunities", title: CATEGORY_META.jobs.label, icon: <Briefcase className={I} />, keywords: "internship apprenticeship careers", onSelect: go(CATEGORY_META.jobs.path), preview: { description: CATEGORY_META.jobs.blurb } },
  { id: "scholarships", group: "Opportunities", title: CATEGORY_META.scholarships.label, icon: <GraduationCap className={I} />, keywords: "students education", onSelect: go(CATEGORY_META.scholarships.path), preview: { description: CATEGORY_META.scholarships.blurb } },
  { id: "finance", group: "Opportunities", title: CATEGORY_META.finance.label, icon: <Wallet className={I} />, keywords: "loan credit grant subsidy", onSelect: go(CATEGORY_META.finance.path), preview: { description: CATEGORY_META.finance.blurb } },
]

const SCHEMES: CommandItem[] = opportunities.map((o) => ({
  id: `o-${o.slug}`,
  group: o.categories.includes("schemes") ? "Schemes" : "Listings",
  title: o.title,
  subtitle: o.authority,
  icon: o.categories.includes("scholarships") ? <GraduationCap className={I} /> : o.categories.includes("finance") ? <Wallet className={I} /> : <FileText className={I} />,
  keywords: `${o.slug} ${o.categories.join(" ")}`,
  onSelect: go(o.scheme ? `/schemes/${o.slug}` : `/opportunities/${o.slug}`),
  preview: { description: o.summary, details: [["Level", o.level], ["Where", o.geography.join(", ")], ["Last verified", o.lastVerified]] },
}))

export const BECCI_ITEMS: CommandItem[] = [...PAGES, ...SCHEMES]

export default function Demo() {
  return (
    <div data-theme="becci" className="fixed inset-0 grid place-items-center overflow-auto bg-background p-6 text-foreground">
      <CommandPalette items={BECCI_ITEMS} placeholder="Search pages, schemes and opportunities" triggerLabel="Search BECCI" />
    </div>
  )
}

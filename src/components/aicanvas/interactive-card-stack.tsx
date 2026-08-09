import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, type PanInfo } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Card {
  id: number
  orientation: 'portrait' | 'landscape'
  title?: string
  image: string
}

interface Slot {
  x: number
  y: number
  rotate: number
  scale: number
  zIndex: number
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// Five tropical and woodland birds. Each photo is pre-cropped to its card
// aspect (portrait 4:5, landscape 16:10) so the CDN delivers a tight crop with
// no layout shift. Every card carries a short title strip above the image; the
// title is also the card's accessible name. Photos are decorative here (the
// visible title names them), so the <img> alt is empty.

const CARDS: Card[] = [
  {
    id: 0,
    orientation: 'landscape',
    title: 'Front 3/4 — awning out, lights on',
    image: '/images/exterior/img_3660.webp',
  },
  {
    id: 1,
    orientation: 'portrait',
    title: 'Rear doors open at sunset',
    image: '/images/exterior/img_3623.webp',
  },
  {
    id: 2,
    orientation: 'landscape',
    title: 'Front 3/4 — headlights on, interior lit',
    image: '/images/exterior/img_3727.webp',
  },
  {
    id: 3,
    orientation: 'landscape',
    title: 'Full passenger side at dusk',
    image: '/images/exterior/img_3737.webp',
  },
  {
    id: 4,
    orientation: 'landscape',
    title: 'Dead rear — lights off',
    image: '/images/exterior/img_3739.webp',
  },
  {
    id: 5,
    orientation: 'landscape',
    title: 'Rear 3/4 — interior lights on',
    image: '/images/exterior/img_3714.webp',
  },
  {
    id: 6,
    orientation: 'landscape',
    title: 'Driver side front — sunset sky',
    image: '/images/exterior/img_3724.webp',
  },
  {
    id: 7,
    orientation: 'landscape',
    title: 'Low angle offside — BFGoodrich tyres',
    image: '/images/exterior/img_3682.webp',
  },
  {
    id: 8,
    orientation: 'landscape',
    title: 'Topographic wrap detail',
    image: '/images/exterior/img_3681.webp',
  },
  {
    id: 9,
    orientation: 'landscape',
    title: 'Offside front — wrap pattern',
    image: '/images/exterior/img_3683.webp',
  },
  {
    id: 10,
    orientation: 'portrait',
    title: 'Front 3/4 at golden hour',
    image: '/images/exterior/img_3690.webp',
  },
  {
    id: 11,
    orientation: 'landscape',
    title: 'Offside — sunset reflection in windows',
    image: '/images/exterior/img_3742.webp',
  },
  {
    id: 12,
    orientation: 'landscape',
    title: 'Nearside — sliding door open',
    image: '/images/exterior/img_3669.webp',
  },
]

// ─── Slot tables ──────────────────────────────────────────────────────────────
// Slot 0 is the focused front card. Slots 1-4 scatter behind it. The mobile
// table tightens the spread so all 5 cards remain visible at narrow widths.

const VISIBLE_SLOTS = 8

const SLOTS_DESKTOP: Slot[] = [
  { x:    0, y:   0, rotate:  1.5, scale: 1.00, zIndex: 80 },
  { x:  170, y: -30, rotate:  12,  scale: 0.92, zIndex: 70 },
  { x: -160, y: -10, rotate: -14,  scale: 0.91, zIndex: 60 },
  { x:  100, y:  70, rotate:  8,   scale: 0.88, zIndex: 50 },
  { x: -120, y:  60, rotate: -9,   scale: 0.86, zIndex: 40 },
  { x:  200, y:  20, rotate:  16,  scale: 0.83, zIndex: 30 },
  { x: -190, y:  40, rotate: -17,  scale: 0.82, zIndex: 20 },
  { x:  140, y: -60, rotate:  10,  scale: 0.80, zIndex: 10 },
]

const SLOTS_MOBILE: Slot[] = [
  { x:   0, y:   0, rotate:  1,   scale: 1.00, zIndex: 80 },
  { x:  90, y: -15, rotate:  6,   scale: 0.92, zIndex: 70 },
  { x: -85, y:  20, rotate: -7,   scale: 0.91, zIndex: 60 },
  { x:  60, y:  35, rotate:  4,   scale: 0.88, zIndex: 50 },
  { x: -60, y:  25, rotate: -4.5, scale: 0.87, zIndex: 40 },
  { x:  100, y:  10, rotate:  8,   scale: 0.84, zIndex: 30 },
  { x: -95, y:  40, rotate: -9,   scale: 0.83, zIndex: 20 },
  { x:  70, y: -30, rotate:  5,   scale: 0.81, zIndex: 10 },
]

// ─── Motion + chrome constants (hoisted so identities stay stable) ──────────────

const SPRING = { type: 'spring' as const, stiffness: 280, damping: 26 }
const MOUNT_SPRING = { type: 'spring' as const, stiffness: 200, damping: 22 }
const STAGGER_S = 0.08

const BREATH_Y_FOCUS = [0, -14, 0, 10, 0]
const BREATH_Y_REST = [0, -8, 0, 6, 0]
const BREATH_ROTATE_FOCUS = [0, 1.5, 0, -1.5, 0]
const BREATH_ROTATE_REST = [0, 1, 0, -1, 0]

const SHADOW_FOCUS = '0 24px 48px rgba(0,0,0,0.28), 0 6px 14px rgba(0,0,0,0.16)'
const SHADOW_REST = '0 12px 28px rgba(0,0,0,0.18), 0 4px 8px rgba(0,0,0,0.12)'

// Visible focus ring, matched to the olive accent.
const RING = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8B94D]'


// ─── InteractiveCardStack ───────────────────────────────────────────────────────

export default function InteractiveCardStack() {
  // order[slotIndex] = cardId. order[0] is always the focused front card.
  const [order, setOrder] = useState<number[]>(CARDS.map((c) => c.id))
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Scopes the arrow-key handler so it only fires when focus is inside the
  // widget, so the host page keeps its own arrow-key behaviour.
  const containerRef = useRef<HTMLDivElement | null>(null)
  // Separates a tap (< 8px) from a drag on the focused card.
  const dragDelta = useRef(0)

  const reduceMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Mobile breakpoint: flip slot table below 640px.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(min-width: 640px)')
    const apply = () => setIsMobile(!mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  // Bring a card to slot 0. The rest of the order rotates so the previous
  // trailing cards keep their relative order behind it.
  const focusCard = useCallback((cardId: number) => {
    setOrder((prev) => {
      const idx = prev.indexOf(cardId)
      if (idx <= 0) return prev
      return [cardId, ...prev.slice(0, idx), ...prev.slice(idx + 1)]
    })
  }, [])

  // Cycle focus by ±1 with wrap. +1 → next (front card moves to the back),
  // -1 → previous (back card comes to the front).
  const step = useCallback((dir: 1 | -1) => {
    setOrder((prev) =>
      dir === 1
        ? [...prev.slice(1), prev[0]]
        : [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)],
    )
  }, [])

  // Arrow keys cycle focus, but ONLY while focus is inside the widget so the
  // page's own Left/Right behaviour (caret, scroll, native controls) is intact.
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
      const root = containerRef.current
      if (!root || !root.contains(document.activeElement)) return
      event.preventDefault()
      step(event.key === 'ArrowRight' ? 1 : -1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [step])

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      const distance = info.offset.x
      const velocity = info.velocity.x
      if (distance < -80 || velocity < -400) step(1)
      else if (distance > 80 || velocity > 400) step(-1)
    },
    [step],
  )

  const slots = isMobile ? SLOTS_MOBILE : SLOTS_DESKTOP
  const frontCardId = order[0]
  const frontTitle = CARDS.find((c) => c.id === frontCardId)?.title ?? ''

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#FFFFFF] px-4">
      <div ref={containerRef} className="relative flex w-full max-w-4xl flex-col items-center gap-10 py-12">
        {/* Stage: overflow-hidden so the scattered, rotated cards never spill
            past the container and trigger a horizontal page scrollbar. */}
        <div
          role="group"
          aria-label="Interactive card stack"
          aria-describedby="ics-hint"
          className="relative flex w-full select-none items-center justify-center overflow-hidden"
          style={{ perspective: '1400px', height: 'clamp(350px, 48vw, 484px)' }}
        >
          {CARDS.map((card) => {
            const slotIndex = order.indexOf(card.id)
            const isVisible = slotIndex < VISIBLE_SLOTS
            const slot = isVisible ? slots[slotIndex] : slots[VISIBLE_SLOTS - 1]
            const isFocus = slotIndex === 0
            const isLandscape = card.orientation === 'landscape'

            // Entrance stagger (outer cards land first, focus lands last);
            // skipped entirely under reduced motion.
            const transition =
              !reduceMotion && !mounted
                ? { ...MOUNT_SPRING, delay: slotIndex * STAGGER_S }
                : SPRING

            const widthClass = isLandscape
              ? isMobile
                ? 'w-[clamp(220px,66vw,286px)]'
                : 'w-[clamp(242px,31vw,352px)]'
              : isMobile
                ? 'w-[clamp(143px,46vw,198px)]'
                : 'w-[clamp(176px,22vw,242px)]'

            // Breathing is suppressed for reduced-motion users.
            const breathY = reduceMotion ? 0 : isFocus ? BREATH_Y_FOCUS : BREATH_Y_REST
            const breathRotate = reduceMotion
              ? 0
              : isFocus
                ? BREATH_ROTATE_FOCUS
                : BREATH_ROTATE_REST

            return (
              <motion.div
                key={card.id}
                tabIndex={0}
                // Only back cards are activatable controls. The focused card has
                // no action (it is dragged, not clicked), so it is not a button.
                role={isFocus ? undefined : 'button'}
                aria-label={
                  isFocus
                    ? `${card.title ?? 'Card'}, current. Drag or use the arrow keys to change cards.`
                    : `Show ${card.title ?? `card ${card.id + 1}`}`
                }
                onClick={
                  isFocus
                    ? undefined
                    : (event) => {
                        event.preventDefault()
                        if (Math.abs(dragDelta.current) >= 8) return
                        focusCard(card.id)
                      }
                }
                onKeyDown={
                  isFocus
                    ? undefined
                    : (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          focusCard(card.id)
                        }
                      }
                }
                onPointerDown={() => {
                  dragDelta.current = 0
                }}
                drag={isFocus ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDrag={(_, info) => {
                  dragDelta.current = info.offset.x
                }}
                onDragEnd={handleDragEnd}
                className={`absolute ${widthClass} rounded-[18px] outline-none ${isFocus ? '' : RING}`}
                // z-index follows the slot, so a flicked card drops behind the
                // others the instant it is released and slides under them as it
                // travels to the rear (no late, visible z-index swap).
                style={{ cursor: isFocus ? 'grab' : 'pointer', zIndex: isVisible ? slot.zIndex : 0, pointerEvents: isVisible ? 'auto' : 'none' }}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.5, y: 60 }}
                animate={{ x: slot.x, y: slot.y, rotate: slot.rotate, scale: isVisible ? slot.scale : 0.75, opacity: isVisible ? 1 : 0 }}
                transition={transition}
                whileTap={isFocus ? { cursor: 'grabbing' } : undefined}
              >
                {/* Middle layer owns the breathing loop AND the polaroid
                    chrome, so frame, shadow, title, and image move as one unit. */}
                <motion.div
                  className="relative flex w-full flex-col rounded-[18px] ring-1 ring-black/[0.08] dark:ring-white/[0.12]"
                  style={{ backgroundColor: '#FFFFFF', padding: '10px', boxShadow: isFocus ? SHADOW_FOCUS : SHADOW_REST }}
                  animate={{ y: breathY, rotate: breathRotate }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 7 + card.id * 0.6, repeat: Infinity, ease: 'easeInOut' }
                  }
                >
                  {/* Dark-mode paper colour overlay, pinned inside the frame. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[18px] dark:bg-[#F5F5F0]"
                  />

                  {/* Image well: rounded, clipped, aspect-locked. The focused
                      image loads eagerly at high priority (it is the LCP hero);
                      the rest defer. */}
                  <div
                    className={`relative w-full overflow-hidden ${isLandscape ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}
                    style={{ borderRadius: 10 }}
                  >
                    <img
                      src={card.image}
                      alt=""
                      loading={isFocus ? 'eager' : 'lazy'}
                      fetchPriority={isFocus ? 'high' : 'low'}
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Announce the front-card change to assistive tech. */}
        <p className="sr-only" aria-live="polite">
          {frontTitle ? `${frontTitle} in focus` : ''}
        </p>

        {/* Dot indicator + hint */}
        {/*<div className="flex flex-col items-center gap-3">*/}
        {/*  <div className="flex items-center gap-1.5">*/}
        {/*    {CARDS.map((card) => {*/}
        {/*      const isCurrent = frontCardId === card.id*/}
        {/*      return (*/}
        {/*        <button*/}
        {/*          key={card.id}*/}
        {/*          type="button"*/}
        {/*          aria-label={`Show ${card.title ?? `card ${card.id + 1}`}`}*/}
        {/*          aria-current={isCurrent ? true : undefined}*/}
        {/*          onClick={() => focusCard(card.id)}*/}
        {/*          // 24px hit box (WCAG 2.5.8) around the small visible pill.*/}
        {/*          className={`flex items-center justify-center rounded-full outline-none ${RING}`}*/}
        {/*          style={{ width: 24, height: 24 }}*/}
        {/*        >*/}
        {/*          <motion.span*/}
        {/*            className="block rounded-full bg-[#21211F] dark:bg-[#FAFAF0]"*/}
        {/*            animate={{ width: isCurrent ? 20 : 5, opacity: isCurrent ? 1 : 0.3 }}*/}
        {/*            transition={{ type: 'spring', stiffness: 400, damping: 30 }}*/}
        {/*            style={{ height: 5 }}*/}
        {/*          />*/}
        {/*        </button>*/}
        {/*      )*/}
        {/*    })}*/}
        {/*  </div>*/}
        {/*  <p id="ics-hint" className="text-sm tracking-wide text-[#666662] dark:text-[#9E9E98]">*/}
        {/*    drag, click, or use the arrow keys*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

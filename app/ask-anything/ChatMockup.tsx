'use client'

import { useEffect, useRef, useState } from 'react'

type StudentItem = { role: 'student'; text: string }
type KivoItem    = { role: 'kivo'; text: string; ref?: string }
type Item = StudentItem | KivoItem

export default function ChatMockup() {
  const [items, setItems]           = useState<Item[]>([])
  const [typing, setTyping]         = useState(false)
  const [showCaption, setShowCaption] = useState(false)
  const [phase, setPhase]           = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ids: ReturnType<typeof setTimeout>[] = []
    const add = (fn: () => void, ms: number) => ids.push(setTimeout(fn, ms))

    setItems([])
    setTyping(false)
    setShowCaption(false)

    // Turn 1 — student
    add(() => setItems([{ role: 'student', text: "What is Newton's first law?" }]), 700)

    // Turn 2 — Kivo
    add(() => setTyping(true), 1500)
    add(() => {
      setTyping(false)
      setItems(p => [...p, {
        role: 'kivo',
        text: "Newton's First Law: an object at rest stays at rest, and an object in motion keeps moving — unless an external force acts on it.",
        ref: 'Ch. 8: Laws of Motion',
      }])
    }, 3200)

    // Turn 3 — student
    add(() => setItems(p => [...p, { role: 'student', text: "I still don't understand" }]), 4600)

    // Turn 4 — Kivo
    add(() => setTyping(true), 5400)
    add(() => {
      setTyping(false)
      setItems(p => [...p, {
        role: 'kivo',
        text: "No problem! Imagine a football on a field. It won't move on its own. You kick it — it rolls and keeps rolling until friction stops it. That's the first law.",
        ref: 'Ch. 8: Laws of Motion',
      }])
    }, 7400)

    // Turn 5 — student
    add(() => setItems(p => [...p, { role: 'student', text: "Can you explain it one more time?" }]), 8700)

    // Turn 6 — Kivo
    add(() => setTyping(true), 9500)
    add(() => {
      setTyping(false)
      setItems(p => [...p, {
        role: 'kivo',
        text: "Of course! Things are lazy: they don't want to start moving, and once moving, they don't want to stop — until a force makes them.",
      }])
    }, 11500)

    // Caption
    add(() => setShowCaption(true), 12700)

    // Loop
    add(() => setPhase(p => p + 1), 17000)

    return () => ids.forEach(clearTimeout)
  }, [phase])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [items, typing])

  return (
    <>
      <style>{css}</style>
      <div className="cm-wrap" aria-hidden="true">
        <div className="cm-frame">

          <div className="cm-header">
            <span className="cm-header-label">Kivo AI</span>
            <span className="cm-header-online" />
          </div>

          <div className="cm-messages">
            {items.map((item, i) =>
              item.role === 'student' ? (
                <div key={i} className="cm-row cm-row-student">
                  <div className="cm-bubble cm-bubble-student">{item.text}</div>
                </div>
              ) : (
                <div key={i} className="cm-row cm-row-kivo">
                  <span className="cm-kivo-name">Kivo</span>
                  <div className="cm-bubble cm-bubble-kivo">{item.text}</div>
                  {item.ref && (
                    <div className="cm-ref">📖 {item.ref}</div>
                  )}
                </div>
              )
            )}

            {typing && (
              <div className="cm-row cm-row-kivo">
                <span className="cm-kivo-name">Kivo</span>
                <div className="cm-bubble cm-bubble-kivo cm-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {showCaption && (
            <div className="cm-caption">
              No judgment. No limit. Ask as many times as you need.
            </div>
          )}

          <div className="cm-input-area" aria-hidden="true">
            <div className="cm-input-box">Ask questions from this textbook…</div>
            <div className="cm-send-btn">Send</div>
          </div>

        </div>
      </div>
    </>
  )
}

const css = `
  .cm-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cm-frame {
    width: 100%;
    max-width: 358px;
    height: 520px;
    background: #ffffff;
    border-radius: 20px;
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.10),
      0 28px 72px rgba(0,0,0,0.55);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  /* ── Header ── */
  .cm-header {
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
    padding: 13px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .cm-header-label {
    flex: 1;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: #0d9488;
  }

  .cm-header-online {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
  }

  /* ── Messages ── */
  .cm-messages {
    flex: 1;
    overflow-y: auto;
    padding: 14px 13px 6px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    scrollbar-width: none;
  }
  .cm-messages::-webkit-scrollbar { display: none; }

  .cm-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .cm-row-student {
    align-items: flex-end;
    animation: cm-in-right 0.28s ease both;
  }

  .cm-row-kivo {
    align-items: flex-start;
    animation: cm-in-left 0.28s ease both;
  }

  @keyframes cm-in-right {
    from { opacity: 0; transform: translateX(14px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  @keyframes cm-in-left {
    from { opacity: 0; transform: translateX(-14px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .cm-kivo-name {
    font-size: 0.64rem;
    font-weight: 800;
    color: #0d9488;
    letter-spacing: 0.08em;
    padding-left: 3px;
    text-transform: uppercase;
  }

  .cm-bubble {
    max-width: 86%;
    padding: 9px 13px;
    font-size: 0.85rem;
    line-height: 1.5;
    color: #1e293b;
  }

  .cm-bubble-student {
    background: #f1f5f9;
    border-radius: 14px 14px 4px 14px;
  }

  .cm-bubble-kivo {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-left: 3px solid #0d9488;
    border-radius: 4px 14px 14px 14px;
  }

  /* ── Ref chip ── */
  .cm-ref {
    margin-left: 3px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.69rem;
    color: #0d9488;
    background: rgba(13,148,136,0.08);
    border: 1px solid rgba(13,148,136,0.22);
    border-radius: 6px;
    padding: 3px 9px;
    animation: cm-fade 0.4s ease 0.15s both;
  }

  @keyframes cm-fade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── Typing dots ── */
  .cm-typing {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 12px 14px;
    min-width: 52px;
  }

  .cm-typing span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #94a3b8;
    animation: cm-dot 1.1s ease-in-out infinite;
  }
  .cm-typing span:nth-child(2) { animation-delay: 0.18s; }
  .cm-typing span:nth-child(3) { animation-delay: 0.36s; }

  @keyframes cm-dot {
    0%, 60%, 100% { transform: translateY(0);    opacity: 0.45; }
    30%            { transform: translateY(-5px); opacity: 1; }
  }

  /* ── Caption ── */
  .cm-caption {
    padding: 9px 16px;
    text-align: center;
    font-size: 0.77rem;
    font-style: italic;
    color: #64748b;
    border-top: 1px solid #f1f5f9;
    flex-shrink: 0;
    animation: cm-fade 0.5s ease both;
  }

  /* ── Input bar (static) ── */
  .cm-input-area {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border-top: 1px solid #e2e8f0;
    background: #f8fafc;
    flex-shrink: 0;
  }

  .cm-input-box {
    flex: 1;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 9px;
    padding: 9px 12px;
    font-size: 0.83rem;
    color: #94a3b8;
    font-family: inherit;
  }

  .cm-send-btn {
    background: #0f766e;
    color: #ffffff;
    border-radius: 9px;
    padding: 9px 15px;
    font-size: 0.8rem;
    font-weight: 700;
    font-family: inherit;
    opacity: 0.55;
    user-select: none;
  }

  /* ── Reduced motion ── */
  @media (prefers-reduced-motion: reduce) {
    .cm-row-student,
    .cm-row-kivo,
    .cm-ref,
    .cm-caption { animation: none; }
    .cm-typing span { animation: none; opacity: 0.5; }
  }
`

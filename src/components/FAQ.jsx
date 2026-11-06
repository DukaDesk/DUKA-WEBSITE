import { useState } from "react";
import { ISLAND, ISLAND_INK, ISLAND_MUTE, ISLAND_BORDER, AMBER, INK, sora, inter } from "../constants";

const FAQS = [
  { q: "What is DukaDesk?", a: "DukaDesk gives businesses a branded app experience inside one shared app, managed from a single dashboard." },
  { q: "Do customers need the DukaDesk app?", a: "Yes. Customers install DukaDesk once, then browse businesses or scan a QR code in the app." },
  { q: "How does publishing work?", a: "Configure and preview your app, then submit it for review. It goes live once approved." },
  { q: "What can I manage from the dashboard?", a: "Products, orders, customers, inventory and payments, with more tools available by plan." },
  { q: "Where can I read about privacy?", a: <>Read how DukaDesk handles personal information in our <a href="/privacy" style={{ color: INK, fontWeight: 600 }}>Privacy Policy</a>.</> },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" data-pad="wide" style={{ background: ISLAND, color: ISLAND_INK, padding: "104px 56px" }}>
      <div data-grid="faq" style={{ display: "grid", gridTemplateColumns: "minmax(280px, 380px) 1fr", gap: 64, maxWidth: 1080, margin: "0 auto", alignItems: "start" }}>
        <div style={{ position: "sticky", top: 96 }}>
          <span style={{ fontFamily: sora, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: AMBER }}>
            Questions
          </span>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(32px,3.6vw,52px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "18px 0 0" }}>
            Answered
            <br />
            plainly.
          </h2>
          <div style={{ width: 64, height: 3, background: AMBER, marginTop: 26 }} />
        </div>

        <div>
          {FAQS.map((f, i) => (
            <div key={f.q} style={{ borderTop: i === 0 ? `1px solid ${ISLAND_BORDER}` : "none", borderBottom: `1px solid ${ISLAND_BORDER}` }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "24px 0", display: "grid", gridTemplateColumns: "40px 1fr 24px", gap: 14, alignItems: "baseline", textAlign: "left", color: ISLAND_INK }}
                aria-label={`${f.q}${open === i ? " — collapse" : ""}`}
              >
                <span style={{ fontFamily: sora, fontSize: 11, letterSpacing: "0.14em", color: AMBER }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: sora, fontWeight: 700, fontSize: "clamp(17px,1.6vw,22px)", letterSpacing: "-0.01em" }}>{f.q}</span>
                <span style={{ fontFamily: sora, fontSize: 20, color: AMBER, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.25s" }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 320 : 0, overflow: "hidden", transition: "max-height 0.3s ease" }}>
                <p style={{ fontFamily: inter, fontSize: 15, lineHeight: 1.75, color: ISLAND_MUTE, margin: "0 0 24px", paddingLeft: 54, maxWidth: 620 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

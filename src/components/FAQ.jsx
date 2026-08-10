import { useState } from "react";
import { NAVY, AMBER, sora, inter } from "../constants";

const FAQS = [
  { q: "How fast can I go live?", a: "Most businesses go live within 48 hours: pick a template, add your products, print the code." },
  { q: "Do I need any tech skills?", a: "None. Everything happens in a visual builder in your browser — no code, no app store submission." },
  { q: "Which payments are supported?", a: "Paystack and Flutterwave, covering card, bank transfer, USSD and mobile money." },
  { q: "Do you take a cut of my sales?", a: "Never. You keep 100% of revenue. We only charge a flat subscription." },
  { q: "Can I run more than one location?", a: "Yes — the Business plan covers up to ten storefronts, each with its own code and catalogue." },
  { q: "Can my customers browse offline?", a: "Yes — the storefront loads in the DukaDesk app and stays browsable without connectivity. Payments need internet." },
  { q: "Is my data safe?", a: "Encrypted in transit and at rest, hosted with 99.9% uptime, and handled under NDPR guidelines." },
  { q: "What kind of support do you offer?", a: "Free plans get community support. Paid plans include priority support via email and WhatsApp." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ background: NAVY, color: "#FAF8F5", padding: "104px 56px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(280px, 380px) 1fr", gap: 64, maxWidth: 1080, margin: "0 auto", alignItems: "start" }}>
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
            <div key={f.q} style={{ borderTop: i === 0 ? "1px solid rgba(250,248,245,0.16)" : "none", borderBottom: "1px solid rgba(250,248,245,0.16)" }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "24px 0", display: "grid", gridTemplateColumns: "40px 1fr 24px", gap: 14, alignItems: "baseline", textAlign: "left", color: "#FAF8F5" }}
                aria-label={`${f.q}${open === i ? " — collapse" : ""}`}
              >
                <span style={{ fontFamily: sora, fontSize: 11, letterSpacing: "0.14em", color: AMBER }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: sora, fontWeight: 700, fontSize: "clamp(17px,1.6vw,22px)", letterSpacing: "-0.01em" }}>{f.q}</span>
                <span style={{ fontFamily: sora, fontSize: 20, color: AMBER, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.25s" }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 200 : 0, overflow: "hidden", transition: "max-height 0.3s ease" }}>
                <p style={{ fontFamily: inter, fontSize: 15, lineHeight: 1.75, color: "rgba(250,248,245,0.66)", margin: "0 0 24px", paddingLeft: 54, maxWidth: 620 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
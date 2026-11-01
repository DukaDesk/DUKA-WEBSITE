import { useState } from "react";
import { ISLAND, ISLAND_INK, ISLAND_MUTE, ISLAND_BORDER, AMBER, INK, sora, inter } from "../constants";

const FAQS = [
  { q: "What is DukaDesk?", a: "DukaDesk helps businesses create a branded experience inside the shared DukaDesk mobile app, then manage products, orders and other business tools from a merchant dashboard." },
  { q: "Do customers need the DukaDesk app?", a: "Yes. Customers install DukaDesk, create one account, then browse businesses or scan a business QR code in the app." },
  { q: "How does publishing work?", a: "After you configure and preview your app, submit it for review. It becomes available to customers after it has been approved. Review times can vary." },
  { q: "Who is DukaDesk for?", a: "DukaDesk supports businesses in commerce, food and hospitality, and services. Available workflows depend on the business setup and plan." },
  { q: "Which payment options can businesses use?", a: "Merchant setup currently documents Paystack, Flutterwave and bank transfer. The options a customer sees depend on what the business has configured." },
  { q: "What can I manage from the merchant dashboard?", a: "The dashboard includes tools for products, orders, customers and inventory, with features such as bookings and analytics available according to plan and setup." },
  { q: "How do customers find a business?", a: "Customers can explore businesses in DukaDesk, browse categories, or scan a QR code after the business app is approved." },
  { q: "Can I update my business after publishing?", a: "You can make changes from the merchant dashboard. Updates to a published experience may need to be submitted for review before customers see them." },
  { q: "Where can I read about privacy?", a: <>Read how DukaDesk handles personal information in our <a href="/privacy" style={{ color: INK, fontWeight: 600 }}>Privacy Policy</a>.</> },
  { q: "How do I join the waitlist?", a: "Use the waitlist form and DukaDesk can contact you with product and access updates." },
];

export function FAQ({ onWaitlist }) {
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
          <button
            onClick={onWaitlist}
            className="btn-waitlist"
            style={{ fontFamily: sora, border: "none", borderRadius: 999, padding: "14px 28px", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", marginTop: 28 }}
          >
            Join the waitlist
          </button>
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

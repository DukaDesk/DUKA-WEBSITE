import { useState } from "react";
import { Plus } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { NAVY, AMBER, CREAM, BORDER, CHAR, LGREY, sora } from "../constants";

const faqs = [
  { q: "How long does it take to set up?", a: "Most businesses go live in under 10 minutes. Choose your template, upload your logo and products, and you're ready to share your QR code." },
  { q: "Do I need technical skills?", a: "No. DukaDesk is built for non-technical users. Everything is done through our visual builder — no coding required." },
  { q: "What payment methods are supported?", a: "We integrate with Paystack and Flutterwave, so your customers can pay via card, bank transfer, USSD, and mobile money." },
  { q: "Can I use DukaDesk offline?", a: "Your customers can browse your menu and products offline once loaded. The merchant dashboard requires internet to process payments and sync data." },
  { q: "Is my data secure?", a: "Yes. All data is encrypted in transit (256-bit SSL) and at rest. We follow industry best practices for data protection and comply with NDPR guidelines." },
  { q: "Does DukaDesk take a commission on sales?", a: "No. You keep 100% of what you earn. We only charge a flat subscription fee — we never take a cut of your transactions." },
  { q: "Can I have multiple locations?", a: "Yes. Our Business plan supports up to 10 apps/locations under one account. Each location gets its own QR code and tenant app." },
  { q: "What kind of support do you offer?", a: "Free plan users get community support. Paid plans include priority support via email and WhatsApp. Business plans include a dedicated account manager." },
];

export function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" data-pad="wide" style={{ padding: "100px 80px", background: CREAM }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Got questions?</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: NAVY, marginBottom: 16 }}>Frequently asked questions</h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 480, margin: "0 auto" }}>Everything you need to know about DukaDesk.</p>
        </div>
      </FadeIn>

      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {faqs.map((faq, i) => (
          <FadeIn key={i} delay={i * 60}>
            <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0" }}>
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
                style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, fontFamily: sora, textAlign: "left" }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: NAVY, flex: 1 }}>{faq.q}</span>
                <Plus size={20} color={AMBER} aria-hidden="true" style={{ flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "none" }} />
              </button>
              <div style={{
                maxHeight: open === i ? 200 : 0,
                overflow: "hidden",
                transition: "max-height 0.3s ease, padding 0.3s ease",
                padding: open === i ? "0 0 20px" : "0",
              }}>
                <p style={{ fontSize: 15, color: CHAR, lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
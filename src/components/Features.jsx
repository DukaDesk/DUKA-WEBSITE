import { FadeIn } from "./ui/FadeIn";
import { NAVY, AMBER, WHITE, CREAM, BORDER, LGREY, sora } from "../constants";

export function Features() {
  const features = [
    { icon: "▣",  title: "Auto-generated QR code",    desc: "Every app gets a unique QR code the moment you publish. Download as PNG or PDF, share digitally, print for your storefront." },
    { icon: "📱", title: "No app download for customers", desc: "Customers access your app through the DukaDesk scanner — no App Store needed. One scan and they're in." },
    { icon: "🔌", title: "Modular integrations",      desc: "Pick only what you need. Paystack, cart, booking calendar, loyalty points, WhatsApp — add one click at a time." },
    { icon: "📊", title: "Real-time analytics",       desc: "See how many times your QR was scanned, track orders, monitor revenue, and understand your customers." },
    { icon: "💬", title: "Built-in messaging",        desc: "Customers message you directly from your app. Respond from your dashboard. No WhatsApp juggling." },
    { icon: "🛡️", title: "Trust & safety built in",  desc: "Every app is reviewed before going live. Consumers can report bad actors. We keep the platform clean." },
  ];

  return (
    <section style={{ padding: "100px 80px", background: WHITE }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <FadeIn>
          <div>
            <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Everything included</span>
            </div>
            <h2 style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: NAVY, marginBottom: 20, lineHeight: 1.1 }}>The features your business actually needs</h2>
            <p style={{ fontSize: 17, color: LGREY, lineHeight: 1.7, marginBottom: 36 }}>We didn't strip features to make a "simple" product. We built everything a Nigerian SME needs to run a mobile business, then made it easy.</p>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ background: "#F0FDF4", borderRadius: 12, padding: "10px 16px", fontSize: 13, color: "#065F46", fontWeight: 600 }}>✓ 0% commission on sales</div>
              <div style={{ background: "#FFF8ED", borderRadius: 12, padding: "10px 16px", fontSize: 13, color: "#92400E", fontWeight: 600 }}>✓ Your brand, not ours</div>
            </div>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div style={{ background: CREAM, borderRadius: 16, padding: "22px", border: `1px solid ${BORDER}`, transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = AMBER; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 14, color: NAVY, marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: LGREY, lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

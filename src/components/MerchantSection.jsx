import { NAVY, AMBER, GREEN, LGREY, WHITE, INK, ISLAND, ISLAND_INK, ISLAND_MUTE, ISLAND_SOFT, ISLAND_BORDER, CREAM, sora, mix } from "../constants";

const MERCHANT_CATEGORIES = [
  { emoji: "🍽️", label: "Restaurant" },
  { emoji: "🛒", label: "Ecommerce" },
  { emoji: "⛪", label: "Church" },
  { emoji: "🏫", label: "School" },
  { emoji: "📅", label: "Booking" },
  { emoji: "🛍️", label: "Grocery" },
];

const HOW_IT_WORKS = [
  { step: "1", title: "Sign up free", desc: "Create your account in 60 seconds. No card needed." },
  { step: "2", title: "Pick a template", desc: "Choose from designs built for your business type." },
  { step: "3", title: "Add your products", desc: "Upload your menu, products, or services in minutes." },
  { step: "4", title: "Publish and scan", desc: "Get your QR code. Share it. Customers start ordering." },
];

const MERCHANT_FEATURES = [
  { title: "Orders & inventory", desc: "Track every order. Know your stock in real time." },
  { title: "Customer messages", desc: "Chat directly with customers inside your app." },
  { title: "Analytics dashboard", desc: "See what sells, who buys, and when they order." },
  { title: "Paystack payments", desc: "Card, bank transfer, and USSD — all supported." },
];

const STATS = [
  { value: "5 min", label: "Average setup time" },
  { value: "2,400+", label: "Active merchants" },
  { value: "₦0", label: "To get started" },
];

export function MerchantSection({ active, onWaitlist }) {
  return (
    <section
      id="section-merchant"
      style={{
        display: active ? "block" : "none",
        background: CREAM,
        padding: "96px clamp(20px, 5vw, 80px)",
        borderTop: `3px solid ${AMBER}`,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        {/* Eyebrow + Headline */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600, fontFamily: sora }}>For Business Owners</span>
          </div>
          <h2
            data-type="h2"
            style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", color: INK, marginBottom: 16, lineHeight: 1.1 }}
          >
            Your business deserves a real app.
            <br />
            Not just a WhatsApp number.
          </h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Everything you need to take orders, manage customers, and grow your business — delivered through one QR code your customers scan.
          </p>
        </div>

        {/* Business category grid */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ textAlign: "center", fontFamily: sora, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: LGREY, marginBottom: 24 }}>
            Works for your business type
          </div>
          <div
            data-grid="6col"
            style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}
            className="merchant-cat-grid"
          >
            {MERCHANT_CATEGORIES.map((cat, i) => (
              <div
                key={i}
                style={{
                  background: ISLAND_SOFT,
                  border: `1.5px solid ${ISLAND_BORDER}`,
                  borderRadius: 14,
                  padding: "20px 12px",
                  textAlign: "center",
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = AMBER; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = ISLAND_BORDER; }}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>{cat.emoji}</div>
                <div style={{ fontFamily: sora, fontWeight: 600, fontSize: 13, color: ISLAND_INK }}>{cat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works — 4 steps */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ textAlign: "center", fontFamily: sora, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: LGREY, marginBottom: 32 }}>
            How it works
          </div>
          <div
            className="merchant-steps-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
          >
            {HOW_IT_WORKS.map((step, i) => (
              <div
                key={i}
                style={{
                  background: ISLAND_SOFT,
                  border: `1.5px solid ${ISLAND_BORDER}`,
                  borderRadius: 16,
                  padding: "28px 22px",
                  position: "relative",
                }}
              >
                <div style={{
                  width: 36, height: 36, background: AMBER, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: sora, fontWeight: 800, fontSize: 15, color: NAVY,
                  marginBottom: 14,
                }}>
                  {step.step}
                </div>
                <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 15, color: ISLAND_INK, marginBottom: 8 }}>{step.title}</div>
                <div style={{ fontSize: 13, color: ISLAND_MUTE, lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features 2x2 grid */}
        <div style={{ marginBottom: 72 }}>
          <div
            className="merchant-features-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}
          >
            {MERCHANT_FEATURES.map((f, i) => (
              <div
                key={i}
                style={{
                  background: ISLAND_SOFT,
                  border: `1.5px solid ${ISLAND_BORDER}`,
                  borderRadius: 16,
                  padding: "28px 26px",
                  transition: "border-color 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = AMBER; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = ISLAND_BORDER; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: ISLAND_INK, marginBottom: 8 }}>{f.title}</div>
                <div style={{ fontSize: 14, color: ISLAND_MUTE, lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div style={{ marginBottom: 72 }}>
          <div
            className="merchant-stats-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  background: ISLAND,
                  border: `1.5px solid ${ISLAND_BORDER}`,
                  borderRadius: 16,
                  padding: "32px 28px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 36, color: AMBER, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 14, color: ISLAND_MUTE }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA block */}
        <div style={{
          background: `linear-gradient(135deg, ${mix("amber", 18)}, ${mix("amber", 8)})`,
          border: `1px solid ${mix("amber", 33)}`,
          borderRadius: 24,
          padding: "56px 40px",
          textAlign: "center",
        }}>
          <h3 style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: ISLAND_INK, marginBottom: 12 }}>
            Ready to build your app?
          </h3>
          <p style={{ fontSize: 16, color: ISLAND_MUTE, marginBottom: 28, maxWidth: 440, margin: "0 auto 28px" }}>
            Free plan includes everything you need to launch. Upgrade when you grow.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={onWaitlist}
              className="btn-waitlist"
              style={{ border: "none", borderRadius: 999, padding: "16px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: sora }}
            >
              Start free — no card needed
            </button>
            <a
              href="/pricing"
              style={{
                background: "transparent",
                color: ISLAND_INK,
                border: `1.5px solid ${ISLAND_BORDER}`,
                borderRadius: 999,
                padding: "16px 28px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: sora,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              See pricing
            </a>
          </div>
        </div>
      </div>

      {/* Responsive styles for this section */}
      <style>{`
        @media (max-width: 767px) {
          .merchant-cat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .merchant-steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .merchant-features-grid { grid-template-columns: 1fr !important; }
          .merchant-stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

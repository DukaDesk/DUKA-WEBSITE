import { NAVY, AMBER, LGREY, WHITE, INK, ISLAND, ISLAND_INK, ISLAND_MUTE, ISLAND_SOFT, ISLAND_BORDER, sora, mix } from "../constants";

const CUSTOMER_CATEGORIES = [
  { emoji: "🍔", label: "Restaurants" },
  { emoji: "🛍️", label: "Online shops" },
  { emoji: "⛪", label: "Churches" },
  { emoji: "🏫", label: "Schools" },
  { emoji: "💇", label: "Salons & spas" },
  { emoji: "🥦", label: "Grocery stores" },
];

const CUSTOMER_FEATURES = [
  { title: "Scan any QR code", desc: "Any DukaDesk QR opens the business app instantly." },
  { title: "Order and pay", desc: "Add to cart, pay with card, transfer or USSD." },
  { title: "Book appointments", desc: "Schedule with salons, clinics and consultants." },
  { title: "Message the business", desc: "Chat directly — no phone calls or WhatsApp needed." },
];

const FEATURE_PILLS = [
  "No download required",
  "Works on any phone",
  "Pay with Paystack",
];

// Inline mini phone mockup
function MiniPhoneMockup() {
  const menuItems = [
    { emoji: "🍲", name: "Jollof Rice", price: "₦2,500" },
    { emoji: "🍗", name: "Peppered Gizzard", price: "₦1,800" },
    { emoji: "🐟", name: "Grilled Tilapia", price: "₦4,500" },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{
        width: 240,
        background: "#0D0D1A",
        borderRadius: 36,
        padding: 8,
        boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)",
        animation: "float 4s ease-in-out infinite",
      }}>
        <div style={{ background: NAVY, borderRadius: 30, overflow: "hidden", minHeight: 420 }}>
          {/* Merchant header */}
          <div style={{ background: "#1B4332", padding: "36px 14px 14px" }}>
            <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: WHITE }}>Mama's Kitchen</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>Nigerian Cuisine · Lekki</div>
            <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
              <span style={{ background: AMBER, color: NAVY, borderRadius: 12, padding: "4px 10px", fontSize: 10, fontWeight: 700 }}>Delivery</span>
              <span style={{ background: "rgba(255,255,255,0.1)", color: WHITE, borderRadius: 12, padding: "4px 10px", fontSize: 10 }}>Pickup</span>
            </div>
          </div>
          {/* Product list */}
          <div style={{ background: WHITE, padding: "10px 12px", flex: 1 }}>
            {menuItems.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", borderBottom: i < 2 ? "1px solid #F3F4F6" : "none" }}>
                <span style={{ fontSize: 22 }}>{item.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: NAVY }}>{item.name}</div>
                  <div style={{ fontSize: 10, color: "#1B4332", fontWeight: 700 }}>{item.price}</div>
                </div>
                <div style={{ width: 20, height: 20, background: "#1B4332", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontSize: 14, lineHeight: 1, cursor: "pointer" }}>+</div>
              </div>
            ))}
          </div>
          {/* Cart summary bar */}
          <div style={{ background: NAVY, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontSize: 11, color: LGREY }}>Your cart</div>
            <div style={{ background: AMBER, color: NAVY, borderRadius: 12, padding: "4px 12px", fontSize: 11, fontWeight: 700 }}>View · ₦8,800</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CustomerSection({ active }) {
  return (
    <section
      id="section-customer"
      style={{
        display: active ? "block" : "none",
        background: ISLAND_SOFT,
        padding: "96px clamp(20px, 5vw, 80px)",
        borderTop: `3px solid ${AMBER}`,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        {/* Eyebrow + Headline */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600, fontFamily: sora }}>For Customers</span>
          </div>
          <h2
            data-type="h2"
            style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", color: ISLAND_INK, marginBottom: 16, lineHeight: 1.1 }}
          >
            Every business you love,
            <br />
            in one app on your phone.
          </h2>
          <p style={{ fontSize: 17, color: ISLAND_MUTE, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Scan any DukaDesk QR code to instantly open that business's app. Order food, book appointments, shop online — all without downloading a different app for each business.
          </p>
        </div>

        {/* App preview — two columns */}
        <div
          className="customer-preview-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", marginBottom: 80 }}
        >
          {/* Left: phone mockup */}
          <MiniPhoneMockup />

          {/* Right: text */}
          <div>
            <h3 style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(22px, 3vw, 32px)", color: ISLAND_INK, marginBottom: 16, lineHeight: 1.15 }}>
              Scan once. Shop instantly.
            </h3>
            <p style={{ fontSize: 16, color: ISLAND_MUTE, lineHeight: 1.75, marginBottom: 24 }}>
              No app download needed. When you scan a DukaDesk QR code, the business's full app opens directly in your phone browser — menus, products, booking, payments and all.
            </p>
            {/* Feature pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
              {FEATURE_PILLS.map((pill, i) => (
                <span
                  key={i}
                  style={{
                    background: mix("amber", 12),
                    border: `1px solid ${mix("amber", 28)}`,
                    color: ISLAND_INK,
                    borderRadius: 999,
                    padding: "7px 16px",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: sora,
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
            {/* App store buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: ISLAND,
                  color: ISLAND_INK,
                  border: `1.5px solid ${ISLAND_BORDER}`,
                  borderRadius: 12,
                  padding: "12px 20px",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: sora,
                  transition: "border-color 0.2s",
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = AMBER; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = ISLAND_BORDER; }}
              >
                🍎 App Store
              </a>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: ISLAND,
                  color: ISLAND_INK,
                  border: `1.5px solid ${ISLAND_BORDER}`,
                  borderRadius: 12,
                  padding: "12px 20px",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: sora,
                  transition: "border-color 0.2s",
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = AMBER; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = ISLAND_BORDER; }}
              >
                ▶ Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Business discovery grid */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ textAlign: "center", fontFamily: sora, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: ISLAND_MUTE, marginBottom: 24 }}>
            Discover all kinds of businesses
          </div>
          <div
            className="customer-cat-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}
          >
            {CUSTOMER_CATEGORIES.map((cat, i) => (
              <div
                key={i}
                style={{
                  background: ISLAND,
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
                <div style={{ fontFamily: sora, fontWeight: 600, fontSize: 12, color: ISLAND_INK }}>{cat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer features 2x2 */}
        <div style={{ marginBottom: 72 }}>
          <div
            className="customer-features-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}
          >
            {CUSTOMER_FEATURES.map((f, i) => (
              <div
                key={i}
                style={{
                  background: ISLAND,
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

        {/* Customer CTA block */}
        <div style={{
          background: `linear-gradient(135deg, ${mix("amber", 18)}, ${mix("amber", 8)})`,
          border: `1px solid ${mix("amber", 33)}`,
          borderRadius: 24,
          padding: "56px 40px",
          textAlign: "center",
        }}>
          <h3 style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: ISLAND_INK, marginBottom: 12 }}>
            Download the DukaDesk app
          </h3>
          <p style={{ fontSize: 16, color: ISLAND_MUTE, marginBottom: 28, maxWidth: 400, margin: "0 auto 28px" }}>
            Free forever for customers. Discover businesses near you today.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: ISLAND_INK,
                border: `1.5px solid ${ISLAND_BORDER}`,
                borderRadius: 999,
                padding: "14px 28px",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: sora,
                transition: "border-color 0.2s",
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = AMBER; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = ISLAND_BORDER; }}
            >
              🍎 App Store
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: ISLAND_INK,
                border: `1.5px solid ${ISLAND_BORDER}`,
                borderRadius: 999,
                padding: "14px 28px",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: sora,
                transition: "border-color 0.2s",
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = AMBER; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = ISLAND_BORDER; }}
            >
              ▶ Google Play
            </a>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 767px) {
          .customer-preview-grid { grid-template-columns: 1fr !important; }
          .customer-cat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .customer-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

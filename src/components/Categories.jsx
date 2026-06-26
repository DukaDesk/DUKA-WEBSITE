import { FadeIn } from "./ui/FadeIn";
import { NAVY, AMBER, CREAM, LGREY, sora } from "../constants";

export function Categories() {
  const cats = [
    { icon: "🍽️", name: "Restaurant", desc: "Full menus, ordering & delivery tracking", color: "#FFF8ED", accent: AMBER },
    { icon: "🛍️", name: "Ecommerce",  desc: "Product catalogue, cart & checkout",       color: "#EDE9FE", accent: "#7C3AED" },
    { icon: "🥗",  name: "Food Vendor",desc: "Bukas, home kitchens, caterers",           color: "#F0FDF4", accent: "#2ECC71" },
    { icon: "🛒",  name: "Grocery",    desc: "Supermarkets & local stores",              color: "#FEF2F2", accent: "#E74C3C" },
    { icon: "⛪",  name: "Church",     desc: "Events, giving & community",               color: "#EFF6FF", accent: "#3B82F6" },
    { icon: "🏫",  name: "School",     desc: "Timetables, fees & announcements",         color: "#FDF4FF", accent: "#A21CAF" },
    { icon: "📅",  name: "Booking",    desc: "Salons, clinics & consultants",            color: "#F0FDF4", accent: "#0D9488" },
    { icon: "⚡",  name: "Any Business",desc: "Fully custom — your rules, your brand",   color: `${NAVY}08`, accent: NAVY },
  ];

  return (
    <section id="categories" data-pad="wide" style={{ padding: "100px 80px", background: CREAM }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Built for your industry</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: NAVY, marginBottom: 16 }}>A template for every business type</h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 500, margin: "0 auto" }}>Every category comes with the features, integrations, and layout that business type actually needs.</p>
        </div>
      </FadeIn>
      <div data-grid="4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
        {cats.map((c, i) => (
          <FadeIn key={i} delay={i * 60}>
            <div style={{ background: c.color, borderRadius: 18, padding: "28px 24px", border: `1.5px solid ${c.accent}22`, cursor: "pointer", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 16px 40px ${c.accent}20`; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
              <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 6 }}>{c.name}</div>
              <div style={{ fontSize: 13, color: LGREY, lineHeight: 1.5 }}>{c.desc}</div>
              <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ color: c.accent, fontWeight: 600, fontSize: 13 }}>See templates</span>
                <span style={{ color: c.accent, fontSize: 13 }}>→</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

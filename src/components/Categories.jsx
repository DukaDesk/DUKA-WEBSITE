import { FadeIn } from "./ui/FadeIn";
import { Tilt } from "./ui/Tilt";
import { UtensilsCrossed, ShoppingBag, CalendarCheck2, ArrowRight } from "lucide-react";
import { NAVY, INK, AMBER, CREAM, LGREY, sora, tint, mix } from "../constants";

const ICONS = [ShoppingBag, UtensilsCrossed, CalendarCheck2];

export function Categories() {
  const cats = [
    { id: "commerce", name: "Commerce", desc: "Set up a branded catalogue, manage products and keep track of customer orders.", color: "#EDE9FE", accent: "#7C3AED" },
    { id: "restaurant", name: "Food & hospitality", desc: "Present your food or hospitality business and manage its products and orders.", color: "#FFF8ED", accent: AMBER },
    { id: "services", name: "Services & bookings", desc: "Create a business experience for services and use booking tools where available.", color: "#F0FDF4", accent: "#0D9488" },
  ];

  return (
    <section id="categories" data-pad="wide" style={{ padding: "100px 80px", background: CREAM }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>For commerce, food and services</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: INK, marginBottom: 16 }}>Tools for the way you do business</h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 500, margin: "0 auto" }}>Build a business-branded experience and use DukaDesk tools for commerce, food and hospitality, or services.</p>
        </div>
      </FadeIn>
      <div data-grid="3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 1080, margin: "0 auto" }}>
        {cats.map((c, i) => {
          const CatIcon = ICONS[i];
          return (
          <FadeIn key={i} delay={i * 60}>
            <Tilt max={6}>
              <div id={c.id} className="category-card" style={{ background: c.color, borderRadius: 18, padding: "28px 24px", border: `1.5px solid ${c.accent}22`, cursor: "pointer", transition: "all 0.2s", height: "100%" }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = `0 16px 40px ${c.accent}20`; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: 48, height: 48, background: tint(c.accent, 18), borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <CatIcon size={26} color={c.accent} aria-hidden="true" />
                </div>
                <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: INK, marginBottom: 6 }}>{c.name}</div>
                <div style={{ fontSize: 13, color: LGREY, lineHeight: 1.5 }}>{c.desc}</div>
                <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ color: c.accent, fontWeight: 600, fontSize: 13 }}>Learn more</span>
                  <ArrowRight size={13} color={c.accent} aria-hidden="true" />
                </div>
              </div>
            </Tilt>
          </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

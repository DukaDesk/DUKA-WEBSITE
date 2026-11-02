import { FadeIn } from "./ui/FadeIn";
import { Tilt } from "./ui/Tilt";
import { ShoppingBag, BookOpen, Users } from "lucide-react";
import { NAVY, INK, AMBER, CREAM, LGREY, sora, tint, mix } from "../constants";

export function Categories() {
  const cats = [
    { id: "commerce", name: "Duka Business", desc: "Create a branded business experience, manage your products or services, and connect with customers.", status: "Active", icon: ShoppingBag, color: "#FFF8ED", accent: AMBER },
    { id: "education", name: "Duka Education", desc: "A dedicated DukaDesk experience for schools, educators and learning communities.", status: "Coming soon", icon: BookOpen, color: "#EDE9FE", accent: "#7C3AED" },
    { id: "religion", name: "Duka Religion", desc: "A dedicated DukaDesk experience for churches, mosques and faith communities.", status: "Coming soon", icon: Users, color: "#F0FDF4", accent: "#0D9488" },
  ];

  return (
    <section id="categories" data-pad="wide" style={{ padding: "100px 80px", background: CREAM }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>DukaDesk solutions</span>
          </div>
            <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: INK, marginBottom: 16 }}>One platform, purpose-built solutions</h2>
            <p style={{ fontSize: 17, color: LGREY, maxWidth: 560, margin: "0 auto" }}>Duka Business is available now. Duka Education and Duka Religion are coming soon.</p>
        </div>
      </FadeIn>
      <div data-grid="3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 1080, margin: "0 auto" }}>
        {cats.map((c) => {
          const CatIcon = c.icon;
          return (
          <FadeIn key={i} delay={i * 60}>
            <Tilt max={6}>
              <div id={c.id} className="category-card" style={{ background: c.color, borderRadius: 18, padding: "28px 24px", border: `1.5px solid ${c.accent}22`, cursor: "default", transition: "all 0.2s", height: "100%" }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = `0 16px 40px ${c.accent}20`; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: 48, height: 48, background: tint(c.accent, 18), borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <CatIcon size={26} color={c.accent} aria-hidden="true" />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: INK }}>{c.name}</span>
                  <span style={{ color: c.accent, fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>{c.status}</span>
                </div>
                <div style={{ fontSize: 13, color: LGREY, lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            </Tilt>
          </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

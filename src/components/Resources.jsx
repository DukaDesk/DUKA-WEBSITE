import { FadeIn } from "./ui/FadeIn";
import { Link } from "react-router-dom";
import { PenSquare, BookOpen, Users } from "lucide-react";
import { AMBER, CREAM, SURFACE, BORDER, LGREY, INK, ISLAND, ISLAND_INK, ISLAND_MUTE, sora, mix } from "../constants";

const CARDS = [
  { id: "online-community", icon: Users, title: "Online Community", desc: "Meet other businesses and DukaDesk users. Our online community is coming soon.", status: "Coming soon" },
  { id: "blog", icon: PenSquare, title: "Blog", desc: "Product updates, practical desk tips, and stories from businesses using DukaDesk.", status: "Coming soon" },
  { id: "guides-and-tutorials", icon: BookOpen, title: "Guides and Tutorials", desc: "Read step-by-step guides for merchants and app users. Video tutorials are planned.", status: "Video tutorials planned", href: "/guides" },
];

export function Resources() {
  return (
    <>
      <section style={{ background: ISLAND, padding: "150px 80px 110px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
          <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Resource Centre</span>
        </div>
        <h1 style={{ fontFamily: sora, fontWeight: 800, fontSize: 52, color: ISLAND_INK, marginBottom: 16 }}>Everything you need to grow</h1>
        <p style={{ fontSize: 17, color: ISLAND_MUTE, maxWidth: 520, margin: "0 auto" }}>Join the community, read our blog, or follow a guide to get more from DukaDesk.</p>
      </section>

      <section data-pad="wide" style={{ padding: "100px 80px", background: CREAM }}>
        <div data-grid="3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {CARDS.map((c, i) => {
            const CardIcon = c.icon;
            const card = (
              <div id={c.id} style={{ background: SURFACE, borderRadius: 18, padding: "32px 28px", border: `1px solid ${BORDER}`, boxShadow: "0 8px 32px rgba(26,26,46,0.05)", height: "100%", transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = "0 20px 48px rgba(26,26,46,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,26,46,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ width: 52, height: 52, background: mix("amber", 18), borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}><CardIcon size={26} color={AMBER} aria-hidden="true" /></div>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontFamily: sora, fontWeight: 700, fontSize: 17, color: INK }}>{c.title}</span>
                  <span style={{ background: mix("amber", 18), color: AMBER, fontSize: 10.5, fontWeight: 700, padding: "3px 10px", borderRadius: 12, whiteSpace: "nowrap" }}>{c.status}</span>
                </div>
                <div style={{ fontSize: 13.5, color: LGREY, lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            );
            return (
            <FadeIn key={c.id} delay={i * 60}>
              c.href
                ? <Link to={c.href} style={{ display: "block", color: "inherit", textDecoration: "none", height: "100%" }}>{card}</Link>
                : card
            </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Resources;

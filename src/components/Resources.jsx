import { FadeIn } from "./ui/FadeIn";
import { PenSquare, LifeBuoy, BookOpen, Map, Rocket, CheckCircle2 } from "lucide-react";
import { NAVY, AMBER, CREAM, LGREY, WHITE, sora } from "../constants";

const ICONS = [PenSquare, LifeBuoy, BookOpen, Map, Rocket, CheckCircle2];

const CARDS = [
  { id: "blog", icon: 0, title: "Blog", desc: "Product updates, business tips and growth stories from African merchants.", },
  { id: "help-centre", icon: 1, title: "Help Centre", desc: "Guides and answers to common questions about running your business on DukaDesk.", },
  { id: "documentation", icon: 2, title: "Documentation", desc: "Developer docs and API reference for building and integrating with DukaDesk.", },
  { id: "roadmap", icon: 3, title: "Roadmap", desc: "See what we're building next and vote on the features you want most.", },
  { id: "changelog", icon: 4, title: "Changelog", desc: "Every release, bug fix and improvement — in one place.", },
  { id: "status", icon: 5, title: "Status", desc: "Live uptime and incident updates for all DukaDesk services.", },
];

export function Resources() {
  return (
    <>
      <section style={{ background: NAVY, padding: "150px 80px 110px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
          <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Resource Centre</span>
        </div>
        <h1 style={{ fontFamily: sora, fontWeight: 800, fontSize: 52, color: WHITE, marginBottom: 16 }}>Everything you need to grow</h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto" }}>Guides, docs, updates and more — all the resources to help you get the most out of DukaDesk.</p>
      </section>

      <section data-pad="wide" style={{ padding: "100px 80px", background: CREAM }}>
        <div data-grid="3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {CARDS.map((c, i) => {
            const CardIcon = ICONS[c.icon];
            return (
            <FadeIn key={c.id} delay={i * 60}>
              <div id={c.id} style={{ background: WHITE, borderRadius: 18, padding: "32px 28px", border: "1px solid rgba(26,26,46,0.06)", boxShadow: "0 8px 32px rgba(26,26,46,0.05)", height: "100%", transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = "0 20px 48px rgba(26,26,46,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,26,46,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ width: 52, height: 52, background: `${AMBER}18`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}><CardIcon size={26} color={AMBER} aria-hidden="true" /></div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontFamily: sora, fontWeight: 700, fontSize: 17, color: NAVY }}>{c.title}</span>
                  <span style={{ background: `${AMBER}18`, color: AMBER, fontSize: 10.5, fontWeight: 700, padding: "3px 10px", borderRadius: 12 }}>Coming soon</span>
                </div>
                <div style={{ fontSize: 13.5, color: LGREY, lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Resources;

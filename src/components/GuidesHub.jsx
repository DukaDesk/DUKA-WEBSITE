import { ArrowRight, LayoutDashboard, Smartphone } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { AMBER, BORDER, CREAM, DOCS_URL, INK, ISLAND, ISLAND_INK, ISLAND_MUTE, SURFACE, sora, mix } from "../constants";

const GUIDES = [
  {
    icon: LayoutDashboard,
    title: "Merchant guide",
    desc: "Set up your account, build your branded app, publish it, and run your business.",
    href: `${DOCS_URL}/guides/merchant`,
  },
  {
    icon: Smartphone,
    title: "Explorer guide",
    desc: "Install the app, find businesses, scan QR codes, order, book, and get support.",
    href: `${DOCS_URL}/guides/explorer`,
  },
];

export function GuidesHub() {
  return (
    <>
      <section style={{ background: ISLAND, padding: "150px 80px 90px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
          <span style={{ color: AMBER, fontSize: 13, fontWeight: 600, fontFamily: sora }}>Guides</span>
        </div>
        <h1 style={{ fontFamily: sora, fontWeight: 800, fontSize: 52, color: ISLAND_INK, marginBottom: 14 }}>Pick your guide.</h1>
        <p style={{ fontSize: 17, color: ISLAND_MUTE, maxWidth: 520, margin: "0 auto" }}>
          Detailed step-by-step instructions live in DukaDesk Docs.
        </p>
      </section>

      <section data-pad="wide" style={{ padding: "80px 80px 100px", background: CREAM }}>
        <div data-grid="3" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {GUIDES.map(({ icon: Icon, title, desc, href }, i) => (
            <FadeIn key={title} delay={i * 80}>
              <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "block", height: "100%", textDecoration: "none", background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 18, padding: "30px 28px", transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = "0 20px 48px rgba(26,26,46,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ width: 52, height: 52, background: mix("amber", 18), borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon size={26} color={AMBER} aria-hidden="true" />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontFamily: sora, fontWeight: 700, fontSize: 19, color: INK }}>{title}</span>
                  <ArrowRight size={18} color={AMBER} aria-hidden="true" />
                </div>
                <div style={{ fontSize: 14, color: ISLAND_MUTE, lineHeight: 1.6 }}>{desc}</div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

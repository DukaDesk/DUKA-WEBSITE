import { useScrollY } from "../hooks/useScrollY";
import { NAVY, AMBER, WHITE, sora } from "../constants";

export function Navbar({ onSignIn }) {
  const y = useScrollY();
  const scrolled = y > 40;

  const links = [
    { label: "How it works", href: "#how" },
    { label: "Templates",    href: "#categories" },
    { label: "Pricing",      href: "#pricing" },
    { label: "Team",         href: "#team" },
    { label: "Careers",      href: "#careers" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
      background: scrolled ? "rgba(26,26,46,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.35s ease",
      padding: "0 40px", height: 68,
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <div style={{ width: 36, height: 36, background: AMBER, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: sora, fontWeight: 800, fontSize: 20, color: NAVY }}>D</span>
        </div>
        <span style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: WHITE }}>DukaDesk</span>
      </a>

      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
            onMouseOver={e => e.target.style.color = WHITE}
            onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.75)"}
          >{l.label}</a>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button onClick={onSignIn} style={{ background: "none", border: "1px solid rgba(255,255,255,0.25)", color: WHITE, borderRadius: 24, padding: "9px 20px", fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all 0.2s" }}
          onMouseOver={e => { e.target.style.background = "rgba(255,255,255,0.1)"; }}
          onMouseOut={e => { e.target.style.background = "none"; }}
        >Sign In</button>
        <button onClick={onSignIn} style={{ background: AMBER, border: "none", color: NAVY, borderRadius: 24, padding: "9px 22px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: sora, transition: "all 0.2s" }}
          onMouseOver={e => e.target.style.transform = "scale(1.03)"}
          onMouseOut={e => e.target.style.transform = "scale(1)"}
        >Get Started Free →</button>
      </div>
    </nav>
  );
}

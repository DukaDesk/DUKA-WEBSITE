import { useState } from "react";
import { useScrollY } from "../hooks/useScrollY";
import { NAVY, AMBER, WHITE, sora } from "../constants";

export function Navbar({ onSignIn }) {
  const [mobileOpen, setMobileOpen] = useState(false);
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

      <div className="nav-links" style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
            onMouseOver={e => e.target.style.color = WHITE}
            onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.75)"}
          >{l.label}</a>
        ))}
      </div>

      <div className="nav-cta" style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button onClick={onSignIn} style={{ background: "none", border: "1px solid rgba(255,255,255,0.25)", color: WHITE, borderRadius: 24, padding: "9px 20px", fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all 0.2s" }}
          onMouseOver={e => { e.target.style.background = "rgba(255,255,255,0.1)"; }}
          onMouseOut={e => { e.target.style.background = "none"; }}
        >Sign In</button>
        <button onClick={onSignIn} style={{ background: AMBER, border: "none", color: NAVY, borderRadius: 24, padding: "9px 22px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: sora, transition: "all 0.2s" }}
          onMouseOver={e => e.target.style.transform = "scale(1.03)"}
          onMouseOut={e => e.target.style.transform = "scale(1)"}
        >Get Started Free →</button>
      </div>

      <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}
        style={{ display: "none", background: "none", border: "none", color: WHITE, fontSize: 28, cursor: "pointer", padding: 4 }}>
        {mobileOpen ? "✕" : "☰"}
      </button>

      {mobileOpen && (
        <div style={{ position: "fixed", top: 68, left: 0, right: 0, background: NAVY, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16, borderBottom: "1px solid rgba(255,255,255,0.06)", zIndex: 499 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "8px 0" }}>{l.label}</a>
          ))}
          <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "4px 0" }} />
          <button onClick={() => { setMobileOpen(false); onSignIn(); }} style={{ background: AMBER, border: "none", color: NAVY, borderRadius: 24, padding: "12px 22px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: sora, width: "100%" }}>Get Started Free →</button>
        </div>
      )}
    </nav>
  );
}

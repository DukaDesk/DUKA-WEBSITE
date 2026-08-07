import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useScrollY } from "../hooks/useScrollY";
import { NAVY, AMBER, WHITE, sora } from "../constants";

export function Navbar({ onSignIn, onWaitlist, alwaysSolid }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const y = useScrollY();
  const scrolled = y > 40 || alwaysSolid;

  const solutions = [
    { label: "Restaurants", href: "/solutions#restaurant" },
    { label: "Retail", href: "/solutions#retail" },
    { label: "Food Vendor", href: "/solutions#food-vendor" },
    { label: "Grocery", href: "/solutions#grocery" },
    { label: "Churches", href: "/solutions#church" },
  ];

  const resources = [
    { label: "Blog", href: "/resources#blog" },
    { label: "Help Centre", href: "/resources#help-centre" },
    { label: "Documentation", href: "/resources#documentation" },
    { label: "Roadmap", href: "/resources#roadmap" },
  ];

  const links = [
    { label: "Solutions", dropdown: solutions, openState: solutionsOpen, setOpenState: setSolutionsOpen },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", dropdown: resources, openState: resourcesOpen, setOpenState: setResourcesOpen },
    { label: "Company", href: "/company" },
  ];

  const closeMobile = useCallback(() => { setMobileOpen(false); setMobileSolutionsOpen(false); setMobileResourcesOpen(false); }, []);

  const handleKeyDown = useCallback((e, action) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); action(); }
    if (e.key === "Escape") { setSolutionsOpen(false); setResourcesOpen(false); setMobileOpen(false); }
  }, []);

  return (
    <nav aria-label="Main navigation" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
      background: scrolled ? "rgba(26,26,46,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.35s ease",
      padding: "0 40px", height: 68,
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <Link to="/" aria-label="DukaDesk home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <img src="/assets/Dukalogo-main-removebg-preview.png" alt="DukaDesk logo" width={36} height={36} style={{ objectFit: "contain" }} />
        <span style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: WHITE }}>DukaDesk</span>
      </Link>

      <div className="nav-links" role="menubar" style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {links.map(l => (
          <div key={l.label} role="none" style={{ position: "relative" }}
            onMouseEnter={() => { if (l.dropdown) l.setOpenState(true); }}
            onMouseLeave={() => { if (l.dropdown) l.setOpenState(false); }}
          >
            {l.dropdown ? (
              <>
                <span role="menuitem" aria-haspopup="true" aria-expanded={l.openState}
                  tabIndex={0}
                  onKeyDown={e => handleKeyDown(e, () => l.setOpenState(!l.openState))}
                  style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s" }}
                  onMouseOver={e => e.target.style.color = WHITE}
                  onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.75)"}
                >{l.label}<ChevronDown aria-hidden="true" size={14} style={{ transition: "transform 0.2s", transform: l.openState ? "rotate(180deg)" : "none" }} /></span>
                {l.openState && (
                  <div role="menu" aria-label={`${l.label} submenu`} style={{ position: "absolute", top: 28, left: -16, background: NAVY, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "12px 0", minWidth: 170, boxShadow: "0 16px 48px rgba(0,0,0,0.4)", zIndex: 600 }}>
                    {l.dropdown.map(d => (
                      <Link key={d.label} role="menuitem" to={d.href} style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: 13, padding: "8px 20px", textDecoration: "none", transition: "all 0.15s" }}
                        onMouseOver={e => { e.target.style.color = AMBER; e.target.style.background = `${AMBER}12`; }}
                        onMouseOut={e => { e.target.style.color = "rgba(255,255,255,0.7)"; e.target.style.background = "transparent"; }}
                      >{d.label}</Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link role="menuitem" to={l.href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                onMouseOver={e => e.target.style.color = WHITE}
                onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.75)"}
              >{l.label}</Link>
            )}
          </div>
        ))}
      </div>

      <div className="nav-cta" style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button aria-label="Sign in to your account" onClick={onSignIn} style={{ background: "none", border: "1px solid rgba(255,255,255,0.25)", color: WHITE, borderRadius: 24, padding: "9px 20px", fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all 0.2s" }}
          onMouseOver={e => { e.target.style.background = "rgba(255,255,255,0.1)"; }}
          onMouseOut={e => { e.target.style.background = "none"; }}
        >Sign In</button>
        <button aria-label="Join the DukaDesk waitlist" onClick={onWaitlist} style={{ background: AMBER, border: "none", color: NAVY, borderRadius: 24, padding: "9px 22px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: sora, transition: "all 0.2s" }}
          onMouseOver={e => e.target.style.transform = "scale(1.03)"}
          onMouseOut={e => e.target.style.transform = "scale(1)"}
        >Join Waitlist</button>
      </div>

      <button className="hamburger" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(!mobileOpen)}
        onKeyDown={e => handleKeyDown(e, () => setMobileOpen(!mobileOpen))}
        style={{ display: "none", background: "none", border: "none", color: WHITE, cursor: "pointer", padding: 4 }}>
        {mobileOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
      </button>

      {mobileOpen && (
        <div role="dialog" aria-label="Mobile navigation" style={{ position: "fixed", top: 68, left: 0, right: 0, bottom: 0, background: NAVY, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 4, borderBottom: "1px solid rgba(255,255,255,0.06)", zIndex: 499, overflowY: "auto" }}>
          <div>
            <button onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} aria-expanded={mobileSolutionsOpen}
              style={{ background: "none", border: "none", color: "rgba(255,255,255,0.75)", fontSize: 16, fontWeight: 500, cursor: "pointer", padding: "12px 0", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "left", fontFamily: sora }}>
              Solutions <ChevronDown size={16} aria-hidden="true" style={{ transform: mobileSolutionsOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>
            {mobileSolutionsOpen && (
              <div style={{ display: "flex", flexDirection: "column", gap: 2, paddingLeft: 12 }}>
                {solutions.map(s => (
                  <Link key={s.label} to={s.href} onClick={closeMobile} style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", padding: "8px 8px", borderRadius: 8 }}>{s.label}</Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/features" onClick={closeMobile} style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "12px 0" }}>Features</Link>
          <Link to="/pricing" onClick={closeMobile} style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "12px 0" }}>Pricing</Link>
          <div>
            <button onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)} aria-expanded={mobileResourcesOpen}
              style={{ background: "none", border: "none", color: "rgba(255,255,255,0.75)", fontSize: 16, fontWeight: 500, cursor: "pointer", padding: "12px 0", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "left", fontFamily: sora }}>
              Resources <ChevronDown size={16} aria-hidden="true" style={{ transform: mobileResourcesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>
            {mobileResourcesOpen && (
              <div style={{ display: "flex", flexDirection: "column", gap: 2, paddingLeft: 12 }}>
                {resources.map(r => (
                  <Link key={r.label} to={r.href} onClick={closeMobile} style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", padding: "8px 8px", borderRadius: 8 }}>{r.label}</Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/company" onClick={closeMobile} style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "12px 0" }}>Company</Link>
          <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "8px 0" }} />
          <button onClick={() => { closeMobile(); onWaitlist(); }} style={{ background: AMBER, border: "none", color: NAVY, borderRadius: 24, padding: "12px 22px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: sora, width: "100%" }}>Join Waitlist</button>
        </div>
      )}
    </nav>
  );
}
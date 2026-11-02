import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useScrollY } from "../hooks/useScrollY";
import { AMBER, ISLAND, ISLAND_INK, ISLAND_MUTE, ISLAND_SOFT, ISLAND_BORDER, sora, mix } from "../constants";

const NAV_GROUPS = [
  {
    label: "Product",
    items: [
      { label: "How DukaDesk Works", href: "/#how" },
      { label: "Features", href: "/features" },
      { label: "App Builder", href: "/#app-builder" },
      { label: "App Templates", href: "/#how" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "Duka Business", href: "/solutions" },
      { label: "Duka Education", status: "Coming soon" },
      { label: "Duka Religion", status: "Coming soon" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Online Community", href: "/resources#online-community", status: "Coming soon" },
      { label: "Blog", href: "/resources#blog", status: "Coming soon" },
      { label: "Guides and Tutorials", href: "/guides", status: "Video tutorials planned" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/company" },
      { label: "Contact Us", href: "/contact" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
];

function MenuStatus({ children, mobile = false }) {
  return (
    <span style={{
      color: AMBER,
      fontSize: mobile ? 11 : 10,
      fontWeight: 600,
      whiteSpace: "nowrap",
      marginLeft: mobile ? 8 : 12,
    }}>
      {children}
    </span>
  );
}

export function Navbar({ onSignIn, onWaitlist, alwaysSolid }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const y = useScrollY();
  const scrolled = y > 40 || alwaysSolid;

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setOpenDropdown(null);
      setMobileOpen(false);
      setMobileDropdown(null);
    }
  }, []);

  const toggleMobileGroup = (label) => {
    setMobileDropdown((current) => current === label ? null : label);
  };

  return (
    <>
      <nav aria-label="Main navigation" onKeyDown={handleKeyDown} style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        background: scrolled ? mix("island", 97) : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${ISLAND_BORDER}` : "none",
        transition: "all 0.35s ease",
        padding: "0 40px", height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link to="/" aria-label="DukaDesk home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="/assets/Dukalogo-main-removebg-preview.png" alt="DukaDesk logo" width={36} height={36} loading="lazy" decoding="async" style={{ objectFit: "contain" }} />
          <span style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: ISLAND_INK }}>DukaDesk</span>
        </Link>

        <div className="nav-links" role="menubar" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link role="menuitem" to="/" style={{ color: ISLAND_MUTE, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            Homepage
          </Link>
          {NAV_GROUPS.map(({ label, items }) => {
            const isOpen = openDropdown === label;
            return (
              <div key={label} role="none" style={{ position: "relative" }}
                onMouseEnter={() => setOpenDropdown(label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button type="button" role="menuitem" aria-haspopup="true" aria-expanded={isOpen}
                  onClick={() => setOpenDropdown(isOpen ? null : label)}
                  style={{ background: "none", border: "none", padding: 0, color: ISLAND_MUTE, fontFamily: sora, fontSize: 13, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                  {label}
                  <ChevronDown aria-hidden="true" size={14} style={{ transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "none" }} />
                </button>
                {isOpen && (
                  <div role="menu" aria-label={`${label} submenu`} style={{ position: "absolute", top: 28, left: -16, background: ISLAND, border: `1px solid ${ISLAND_BORDER}`, borderRadius: 14, padding: "8px 0", minWidth: 230, boxShadow: "0 16px 48px rgba(0,0,0,0.4)", zIndex: 600 }}>
                    {items.map(({ label: itemLabel, href, status }) => (
                      href ? (
                        <Link key={itemLabel} role="menuitem" to={href} onClick={() => setOpenDropdown(null)}
                          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: ISLAND_MUTE, fontSize: 13, padding: "9px 16px", textDecoration: "none", transition: "all 0.15s" }}
                          onMouseOver={e => { e.currentTarget.style.color = AMBER; e.currentTarget.style.background = mix("amber", 12); }}
                          onMouseOut={e => { e.currentTarget.style.color = ISLAND_MUTE; e.currentTarget.style.background = "transparent"; }}
                        >
                          {itemLabel}{status && <MenuStatus>{status}</MenuStatus>}
                        </Link>
                      ) : (
                        <span key={itemLabel} role="menuitem" aria-disabled="true"
                          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: ISLAND_MUTE, fontSize: 13, padding: "9px 16px", opacity: 0.8 }}>
                          {itemLabel}<MenuStatus>{status}</MenuStatus>
                        </span>
                      )
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="nav-cta" style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button aria-label="Sign in to your account" onClick={onSignIn} style={{ background: "none", border: `1px solid ${ISLAND_BORDER}`, color: ISLAND_INK, borderRadius: 24, padding: "9px 20px", fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all 0.2s" }}
            onMouseOver={e => { e.currentTarget.style.background = ISLAND_SOFT; }}
            onMouseOut={e => { e.currentTarget.style.background = "none"; }}
          >Sign In</button>
          <button aria-label="Join the DukaDesk waitlist" onClick={onWaitlist} className="btn-waitlist" style={{ border: "none", borderRadius: 24, padding: "9px 22px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: sora }}
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
          >Join Waitlist</button>
        </div>

        <button className="hamburger" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", color: ISLAND_INK, cursor: "pointer", padding: 4 }}>
          {mobileOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </nav>

      {mobileOpen && (
        <div role="dialog" aria-label="Mobile navigation" style={{ position: "fixed", top: 68, left: 0, right: 0, bottom: 0, background: ISLAND, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 4, borderBottom: `1px solid ${ISLAND_BORDER}`, zIndex: 499, overflowY: "auto" }}>
          <Link to="/" onClick={closeMobile} style={{ color: ISLAND_MUTE, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "12px 0" }}>Homepage</Link>
          {NAV_GROUPS.map(({ label, items }) => {
            const isOpen = mobileDropdown === label;
            return (
              <div key={label}>
                <button type="button" onClick={() => toggleMobileGroup(label)} aria-expanded={isOpen}
                  style={{ background: "none", border: "none", color: ISLAND_MUTE, fontSize: 16, fontWeight: 600, cursor: "pointer", padding: "12px 0", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "left", fontFamily: sora }}>
                  {label}
                  <ChevronDown size={16} aria-hidden="true" style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
                {isOpen && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 2, paddingLeft: 12 }}>
                    {items.map(({ label: itemLabel, href, status }) => (
                      href ? (
                        <Link key={itemLabel} to={href} onClick={closeMobile}
                          style={{ color: ISLAND_MUTE, fontSize: 14, textDecoration: "none", padding: "9px 8px", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                          {itemLabel}{status && <MenuStatus mobile>{status}</MenuStatus>}
                        </Link>
                      ) : (
                        <span key={itemLabel} aria-disabled="true"
                          style={{ color: ISLAND_MUTE, fontSize: 14, padding: "9px 8px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, opacity: 0.8 }}>
                          {itemLabel}<MenuStatus mobile>{status}</MenuStatus>
                        </span>
                      )
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <hr style={{ border: "none", borderTop: `1px solid ${ISLAND_BORDER}`, margin: "8px 0" }} />
          <button onClick={() => { closeMobile(); onSignIn(); }} style={{ background: "none", border: `1px solid ${ISLAND_BORDER}`, color: ISLAND_INK, borderRadius: 24, padding: "12px 22px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: sora, width: "100%" }}>Sign In</button>
          <button onClick={() => { closeMobile(); onWaitlist(); }} className="btn-waitlist" style={{ border: "none", borderRadius: 24, padding: "12px 22px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: sora, width: "100%" }}>Join Waitlist</button>
        </div>
      )}
    </>
  );
}

import { Link } from "react-router-dom";
import { ShieldCheck, EyeOff, Globe, Headset, ArrowRight } from "lucide-react";
import { NAVY, AMBER, GREEN, WHITE, sora } from "../constants";

const ROUTES = {
  "How it works": "/features",
  Integrations: "/features",
  Pricing: "/pricing",
  "About Us": "/company",
  Team: "/company",
  Blog: "/resources",
  "Help Centre": "/resources",
  Documentation: "/resources",
  Changelog: "/resources",
  "Privacy Policy": "/privacy",
  "Terms of Service": "/terms",
};

export function Footer({ onSignIn, onWaitlist }) {
  return (
    <footer style={{ background: NAVY, padding: "80px 80px 40px" }}>
      <div className="footer-cta" style={{ background: `linear-gradient(135deg, ${AMBER}18, ${AMBER}08)`, border: `1px solid ${AMBER}33`, borderRadius: 24, padding: "56px 64px", textAlign: "center", marginBottom: 48 }}>
        <h2 data-type="h3" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: "white", marginBottom: 16 }}>Ready to grow your business with DukaDesk?</h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", marginBottom: 32 }}>Join thousands of businesses preparing for a smarter way to sell, manage and grow.</p>
        <button onClick={onWaitlist} style={{ background: AMBER, color: NAVY, border: "none", borderRadius: 28, padding: "16px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: sora, transition: "transform 0.2s" }}
          onMouseOver={e => e.target.style.transform = "scale(1.04)"}
          onMouseOut={e => e.target.style.transform = "scale(1)"}
        >Join Waitlist Free <ArrowRight size={16} color={NAVY} style={{ display: "inline", verticalAlign: "middle" }} aria-hidden="true" /></button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
        {[
          { icon: ShieldCheck, label: "Secure Payments", desc: "All transactions encrypted" },
          { icon: EyeOff, label: "Privacy First", desc: "Your data stays yours" },
          { icon: Globe, label: "Built for Africa", desc: "Designed for local businesses" },
          { icon: Headset, label: "24/7 Support", desc: "We're here to help" },
        ].map((t, i) => {
          const BadgeIcon = t.icon;
          return (
          <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "16px 24px", textAlign: "center", minWidth: 160 }}>
            <BadgeIcon size={18} color={AMBER} style={{ marginBottom: 6 }} aria-hidden="true" />
            <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 14, color: WHITE, marginBottom: 4 }}>{t.label}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{t.desc}</div>
          </div>
          );
        })}
      </div>

      <div data-grid="footer" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <img src="/assets/Dukalogo-main-removebg-preview.png" alt="DukaDesk logo" width={36} height={36} style={{ objectFit: "contain" }} />
            <span style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: "white" }}>DukaDesk</span>
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 240 }}>The all-in-one business platform built for independent businesses. Made in Lagos.</p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 12 }}>Follow us for product updates, business tips and launch announcements.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            {["𝕏", "in", "ig", "wa"].map((s, i) => (
              <div key={i} style={{ width: 34, height: 34, background: "rgba(255,255,255,0.06)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", cursor: "pointer", transition: "all 0.2s" }}
                onMouseOver={e => { e.target.style.background = `${AMBER}22`; e.target.style.color = AMBER; }}
                onMouseOut={e => { e.target.style.background = "rgba(255,255,255,0.06)"; e.target.style.color = "rgba(255,255,255,0.5)"; }}
              >{s}</div>
            ))}
          </div>
        </div>
        {[
          { title: "Product", links: ["How it works", "Templates", "Integrations", "Pricing", "Changelog"] },
          { title: "Company",  links: ["About Us", "Team", "Blog", "Press Kit", "Contact Us"] },
          { title: "Support",  links: ["Help Centre", "Documentation", "Status Page", "Report an Issue", "careers@dukadesk.com"] },
          { title: "Legal",    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
        ].map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: sora, fontWeight: 600, fontSize: 13, color: "white", marginBottom: 16, letterSpacing: 0.5 }}>{col.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(l => {
                const to = ROUTES[l] || "#";
                return to !== "#" ? (
                  <Link key={l} to={to} style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseOver={e => e.target.style.color = "white"}
                    onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.45)"}
                  >{l}</Link>
                ) : (
                  <a key={l} href={to} style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseOver={e => e.target.style.color = "white"}
                    onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.45)"}
                  >{l}</a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>© 2025 DukaDesk Technologies Ltd. RC 123456. Lagos, Nigeria.</span>
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ background: `${GREEN}18`, color: GREEN, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 12 }}><span style={{ display: "inline-block", width: 7, height: 7, background: GREEN, borderRadius: "50%", marginRight: 6, verticalAlign: "middle" }} />All systems operational</span>
          <button onClick={onSignIn} style={{ background: AMBER, color: NAVY, border: "none", borderRadius: 20, padding: "7px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign In <ArrowRight size={13} color={NAVY} style={{ display: "inline", verticalAlign: "middle" }} aria-hidden="true" /></button>
        </div>
      </div>
    </footer>
  );
}

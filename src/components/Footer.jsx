import { Link } from "react-router-dom";
import { ShieldCheck, EyeOff, Globe, Headset, ArrowRight } from "lucide-react";
import { NAVY, AMBER, GREEN, ISLAND, ISLAND_INK, ISLAND_MUTE, ISLAND_SOFT, ISLAND_BORDER, sora, mix } from "../constants";

const ROUTES = {
  "How it works": "/features",
  Integrations: "/features",
  Blog: "/resources",
  "Help Centre": "/resources",
  Documentation: "/resources",
  Changelog: "/resources",
  "Contact Us": "/contact",
  "Privacy Policy": "/privacy",
  "Terms of Service": "/terms",
};

export function Footer({ onSignIn, onWaitlist }) {
  return (
    <footer style={{ background: ISLAND, padding: "100px 80px 40px" }}>
      <div className="footer-cta" style={{ background: `linear-gradient(135deg, ${mix("amber", 18)}, ${mix("amber", 8)})`, border: `1px solid ${mix("amber", 33)}`, borderRadius: 24, padding: "56px 64px", textAlign: "center", marginBottom: 48 }}>
        <h2 data-type="h3" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: ISLAND_INK, marginBottom: 16 }}>Ready to grow your desk with DukaDesk?</h2>
        <p style={{ fontSize: 18, color: ISLAND_MUTE, marginBottom: 32 }}>Join thousands of desks preparing for a smarter way to sell, manage and grow.</p>
        <button onClick={onWaitlist} className="btn-waitlist" style={{ border: "none", borderRadius: 28, padding: "16px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: sora }}>Join Waitlist Free <ArrowRight size={16} style={{ display: "inline", verticalAlign: "middle" }} aria-hidden="true" /></button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
        {[
          { icon: ShieldCheck, label: "Secure Payments", desc: "All transactions encrypted" },
          { icon: EyeOff, label: "Privacy First", desc: "Your data stays yours" },
          { icon: Globe, label: "Built for Africa", desc: "Designed for local desks" },
          { icon: Headset, label: "24/7 Support", desc: "We're here to help" },
        ].map((t, i) => {
          const BadgeIcon = t.icon;
          return (
          <div key={i} style={{ background: ISLAND_SOFT, border: `1px solid ${ISLAND_BORDER}`, borderRadius: 16, padding: "16px 24px", textAlign: "center", minWidth: 160 }}>
            <BadgeIcon size={18} color={AMBER} style={{ marginBottom: 6 }} aria-hidden="true" />
            <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 14, color: ISLAND_INK, marginBottom: 4 }}>{t.label}</div>
            <div style={{ fontSize: 12, color: ISLAND_MUTE }}>{t.desc}</div>
          </div>
          );
        })}
      </div>

      <div data-grid="footer" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <img src="/assets/Dukalogo-main-removebg-preview.png" alt="DukaDesk logo" width={36} height={36} style={{ objectFit: "contain" }} />
            <span style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: ISLAND_INK }}>DukaDesk</span>
          </div>
          <p style={{ fontSize: 14, color: ISLAND_MUTE, lineHeight: 1.7, maxWidth: 240 }}>The all-in-one platform for independent desks.</p>
          <p style={{ fontSize: 12, color: ISLAND_MUTE, marginTop: 12 }}>Follow us for product updates, desk tips and launch announcements.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            {[
              { label: "ig", href: "https://www.instagram.com/getdukadesk", aria: "DukaDesk on Instagram" },
              { label: "fb", href: "https://www.facebook.com/share/17wTfvgC7W/", aria: "DukaDesk on Facebook" },
              { label: "tt", href: "https://www.tiktok.com/@get.dukadesk", aria: "DukaDesk on TikTok" },
              { label: "𝕏", href: "https://x.com/getdukadesk", aria: "DukaDesk on X" },
              { label: "in", href: "https://www.linkedin.com/company/137513985/", aria: "DukaDesk on LinkedIn" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.aria} style={{ width: 34, height: 34, background: ISLAND_SOFT, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: ISLAND_MUTE, cursor: "pointer", transition: "all 0.2s", textDecoration: "none" }}
                onMouseOver={e => { e.currentTarget.style.background = mix("amber", 22); e.currentTarget.style.color = AMBER; }}
                onMouseOut={e => { e.currentTarget.style.background = ISLAND_SOFT; e.currentTarget.style.color = ISLAND_MUTE; }}
              >{s.label}</a>
            ))}
          </div>
        </div>
        {[
          { title: "Product", links: ["How it works", "Templates", "Integrations", "Changelog"] },
          { title: "Company",  links: ["Blog", "Press Kit", "Contact Us"] },
          { title: "Support",  links: ["Help Centre", "Documentation", "Status Page", "Report an Issue", "getdukadesk@gmail.com"] },
          { title: "Legal",    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
        ].map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: sora, fontWeight: 600, fontSize: 13, color: ISLAND_INK, marginBottom: 16, letterSpacing: 0.5 }}>{col.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(l => {
                const to = ROUTES[l] || "#";
                return to !== "#" ? (
                  <Link key={l} to={to} style={{ fontSize: 14, color: ISLAND_MUTE, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseOver={e => e.target.style.color = ISLAND_INK}
                    onMouseOut={e => e.target.style.color = ISLAND_MUTE}
                  >{l}</Link>
                ) : (
                  <a key={l} href={to} style={{ fontSize: 14, color: ISLAND_MUTE, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseOver={e => e.target.style.color = ISLAND_INK}
                    onMouseOut={e => e.target.style.color = ISLAND_MUTE}
                  >{l}</a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="footer-bar" style={{ borderTop: `1px solid ${ISLAND_BORDER}`, paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, color: ISLAND_MUTE }}>© 2025 DukaDesk Technologies Ltd. RC 123456. Lagos, Nigeria.</span>
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ background: mix("green", 18), color: GREEN, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 12 }}><span style={{ display: "inline-block", width: 7, height: 7, background: GREEN, borderRadius: "50%", marginRight: 6, verticalAlign: "middle" }} />All systems operational</span>
          <button onClick={onSignIn} style={{ background: AMBER, color: NAVY, border: "none", borderRadius: 20, padding: "7px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign In <ArrowRight size={13} color={NAVY} style={{ display: "inline", verticalAlign: "middle" }} aria-hidden="true" /></button>
        </div>
      </div>
    </footer>
  );
}

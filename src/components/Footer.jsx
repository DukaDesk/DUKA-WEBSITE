import { NAVY, AMBER, GREEN, sora } from "../constants";

export function Footer({ onSignIn }) {
  return (
    <footer style={{ background: NAVY, padding: "80px 80px 40px" }}>
      <div style={{ background: `linear-gradient(135deg, ${AMBER}18, ${AMBER}08)`, border: `1px solid ${AMBER}33`, borderRadius: 24, padding: "56px 64px", textAlign: "center", marginBottom: 72 }}>
        <h2 style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: "white", marginBottom: 16 }}>Your app is 10 minutes away.</h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", marginBottom: 32 }}>Free to start. No developers. Your QR code ready on day one.</p>
        <button onClick={onSignIn} style={{ background: AMBER, color: NAVY, border: "none", borderRadius: 28, padding: "16px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: sora, transition: "transform 0.2s" }}
          onMouseOver={e => e.target.style.transform = "scale(1.04)"}
          onMouseOut={e => e.target.style.transform = "scale(1)"}
        >🚀 Launch Your App Free</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 36, height: 36, background: AMBER, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: sora, fontWeight: 800, fontSize: 18, color: NAVY }}>D</span>
            </div>
            <span style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: "white" }}>DukaDesk</span>
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 240 }}>The Shopify for mobile apps. Built for African businesses. Made in Lagos.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
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
          { title: "Company",  links: ["About Us", "Team", "Blog", "Press Kit", "Contact"] },
          { title: "Support",  links: ["Help Centre", "Documentation", "Status Page", "Report an Issue", "Community"] },
          { title: "Legal",    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"] },
        ].map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: sora, fontWeight: 600, fontSize: 13, color: "white", marginBottom: 16, letterSpacing: 0.5 }}>{col.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map(l => (
                <a key={l} href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseOver={e => e.target.style.color = "white"}
                  onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.45)"}
                >{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>© 2025 DukaDesk Technologies Ltd. RC 123456. Lagos, Nigeria.</span>
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ background: `${GREEN}18`, color: GREEN, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 12 }}>● All systems operational</span>
          <button onClick={onSignIn} style={{ background: AMBER, color: NAVY, border: "none", borderRadius: 20, padding: "7px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Sign In →</button>
        </div>
      </div>
    </footer>
  );
}

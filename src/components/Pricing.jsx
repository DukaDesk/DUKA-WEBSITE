import { useState } from "react";
import { FadeIn } from "./ui/FadeIn";
import { NAVY, AMBER, WHITE, CREAM, BORDER, CHAR, LGREY, GREEN, sora } from "../constants";

export function Pricing({ onSignIn }) {
  const [annual, setAnnual] = useState(false);

  const plans = [
    { name: "Starter", price: "₦0", period: "Free forever", color: LGREY, desc: "For businesses just getting started with mobile.", features: ["1 App", "20 Products", "Unlimited QR scans", "500 Customers", "Basic integrations", "Community support"], cta: "Start Free", highlight: false },
    { name: "Growth",  price: annual ? "₦7,999" : "₦9,999", period: "/month", color: AMBER, desc: "For businesses ready to scale their app.", features: ["3 Apps", "Unlimited Products", "Unlimited Customers", "All integrations", "Advanced analytics", "3 Team members", "Priority support"], cta: "Start Growth", highlight: true },
    { name: "Business",price: annual ? "₦19,999" : "₦24,999", period: "/month", color: NAVY, desc: "For serious operations with multiple apps.", features: ["10 Apps", "Everything in Growth", "All Premium integrations", "Analytics export", "10 Team members", "Custom domain", "Dedicated support"], cta: "Start Business", highlight: false },
  ];

  return (
    <section id="pricing" style={{ padding: "100px 80px", background: CREAM }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Simple pricing</span>
          </div>
          <h2 style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: NAVY, marginBottom: 12 }}>No surprises. No commissions.</h2>
          <p style={{ fontSize: 17, color: LGREY, marginBottom: 28 }}>You keep 100% of what you earn. We make money on subscriptions, not your sales.</p>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: WHITE, borderRadius: 32, padding: "6px 20px", border: `1px solid ${BORDER}` }}>
            <span style={{ fontSize: 14, color: !annual ? NAVY : LGREY, fontWeight: !annual ? 600 : 400 }}>Monthly</span>
            <div onClick={() => setAnnual(!annual)} style={{ width: 48, height: 26, background: annual ? AMBER : "#D1D5DB", borderRadius: 13, cursor: "pointer", position: "relative", transition: "background 0.2s" }}>
              <div style={{ width: 22, height: 22, background: WHITE, borderRadius: "50%", position: "absolute", top: 2, left: annual ? 24 : 2, transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }} />
            </div>
            <span style={{ fontSize: 14, color: annual ? NAVY : LGREY, fontWeight: annual ? 600 : 400 }}>Annual <span style={{ color: GREEN, fontWeight: 600, fontSize: 12 }}>Save 20%</span></span>
          </div>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
        {plans.map((plan, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div style={{ background: plan.highlight ? NAVY : WHITE, borderRadius: 24, padding: "36px 32px", border: plan.highlight ? "none" : `1.5px solid ${BORDER}`, position: "relative", transform: plan.highlight ? "scale(1.04)" : "none", boxShadow: plan.highlight ? "0 24px 64px rgba(26,26,46,0.35)" : "none" }}>
              {plan.highlight && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: AMBER, color: NAVY, fontSize: 12, fontWeight: 700, padding: "4px 16px", borderRadius: 24 }}>MOST POPULAR</div>}
              <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: plan.highlight ? WHITE : NAVY, marginBottom: 6 }}>{plan.name}</div>
              <div style={{ fontSize: 13, color: plan.highlight ? "rgba(255,255,255,0.55)" : LGREY, marginBottom: 20 }}>{plan.desc}</div>
              <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 36, color: plan.highlight ? AMBER : NAVY, marginBottom: 4 }}>{plan.price}</div>
              <div style={{ fontSize: 13, color: plan.highlight ? "rgba(255,255,255,0.5)" : LGREY, marginBottom: 28 }}>{plan.period}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {plan.features.map((f, fi) => (
                  <div key={fi} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: plan.highlight ? AMBER : GREEN, fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.75)" : CHAR }}>{f}</span>
                  </div>
                ))}
              </div>
              <button onClick={onSignIn} style={{ width: "100%", height: 48, background: plan.highlight ? AMBER : "transparent", color: plan.highlight ? NAVY : NAVY, border: plan.highlight ? "none" : `2px solid ${NAVY}`, borderRadius: 24, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: sora, transition: "all 0.2s" }}
                onMouseOver={e => { if (!plan.highlight) { e.target.style.background = NAVY; e.target.style.color = WHITE; }}}
                onMouseOut={e => { if (!plan.highlight) { e.target.style.background = "transparent"; e.target.style.color = NAVY; }}}
              >{plan.cta}</button>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={300}>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ fontSize: 14, color: LGREY }}>All plans include unlimited QR scans. No contract. Cancel anytime. <span style={{ color: AMBER, fontWeight: 600 }}>Need enterprise pricing? Let's talk →</span></p>
        </div>
      </FadeIn>
    </section>
  );
}

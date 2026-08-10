import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { Tilt } from "./ui/Tilt";
import { NAVY, AMBER, WHITE, CREAM, BORDER, CHAR, LGREY, GREEN, sora } from "../constants";

export function Pricing({ onSignIn, onWaitlist }) {
  const [annual, setAnnual] = useState(false);

  const plans = [
    { name: "Starter", price: "₦0", period: "Free forever", color: LGREY, desc: "Perfect for small desks just getting started.", features: ["Smart insights", "Accept payments", "Manage up to 20 products", "Unlimited QR scans", "Basic customer management", "Community support"], cta: "Join Waitlist", highlight: false, value: "Get started with essential tools at zero cost" },
    { name: "Growth",  price: annual ? "₦7,999" : "₦9,999", period: "/month", color: AMBER, desc: "For desks ready to scale and grow.", features: ["Advanced insights", "Unlimited products & customers", "Advanced analytics dashboard", "Built-in customer messaging", "3 team members", "All integrations included", "Priority support"], cta: "Join Waitlist", highlight: true, value: "Save 10+ hours every week with built-in automation" },
    { name: "Business",price: annual ? "₦19,999" : "₦24,999", period: "/month", color: NAVY, desc: "For serious operations with multiple locations.", features: ["Everything in Growth", "Up to 10 apps/locations", "Custom domain", "Analytics export & reports", "10 team members", "All premium integrations", "Dedicated account manager"], cta: "Join Waitlist", highlight: false, value: "Run your entire ecosystem on one platform" },
  ];

  const compareFeatures = [
    { name: "Monthly price", starter: "Free", growth: "₦9,999", business: "₦24,999" },
    { name: "Annual price (save 20%)", starter: "Free", growth: "₦7,999", business: "₦19,999" },
    { name: "Apps / Locations", starter: "1", growth: "3", business: "10" },
    { name: "Products", starter: "20", growth: "Unlimited", business: "Unlimited" },
    { name: "Customer Messaging", starter: "—", growth: "yes", business: "yes" },
    { name: "Advanced Analytics", starter: "—", growth: "yes", business: "yes" },
    { name: "Team Members", starter: "—", growth: "3", business: "10" },
    { name: "Dedicated Support", starter: "—", growth: "—", business: "yes" },
    { name: "Custom Domain", starter: "—", growth: "—", business: "yes" },
  ];

  return (
    <section id="pricing" data-pad="wide" style={{ padding: "100px 80px", background: CREAM }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Simple pricing</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: NAVY, marginBottom: 12 }}>No surprises. No commissions.</h2>
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

      <div data-grid="pricing" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
        {plans.map((plan, i) => (
          <FadeIn key={i} delay={i * 100}>
            <Tilt max={plan.highlight ? 4 : 6} style={{ height: "100%" }}>
              <div style={{ background: plan.highlight ? NAVY : WHITE, borderRadius: 24, padding: "36px 32px", border: plan.highlight ? "none" : `1.5px solid ${BORDER}`, position: "relative", transform: plan.highlight ? "scale(1.04)" : "none", boxShadow: plan.highlight ? "0 24px 64px rgba(26,26,46,0.35)" : "none", height: "100%" }}>
              {plan.highlight && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: AMBER, color: NAVY, fontSize: 12, fontWeight: 700, padding: "4px 16px", borderRadius: 24 }}>MOST POPULAR</div>}
              <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: plan.highlight ? WHITE : NAVY, marginBottom: 6 }}>{plan.name}</div>
              <div style={{ fontSize: 13, color: plan.highlight ? "rgba(255,255,255,0.55)" : LGREY, marginBottom: 4 }}>{plan.desc}</div>
              <div style={{ fontSize: 12, color: plan.highlight ? `${AMBER}88` : LGREY, marginBottom: 20, fontStyle: "italic" }}>{plan.value}</div>
              <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 36, color: plan.highlight ? AMBER : NAVY, marginBottom: 4 }}>{plan.price}</div>
              <div style={{ fontSize: 13, color: plan.highlight ? "rgba(255,255,255,0.5)" : LGREY, marginBottom: 28 }}>{plan.period}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {plan.features.map((f, fi) => (
                  <div key={fi} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <Check size={15} color={plan.highlight ? AMBER : GREEN} style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.75)" : CHAR }}>{f}</span>
                  </div>
                ))}
              </div>
              <button onClick={onWaitlist} className="btn-waitlist" style={{ width: "100%", height: 48, border: "none", borderRadius: 24, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: sora, transition: "all 0.2s" }}>{plan.cta}</button>
            </div>
            </Tilt>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={300}>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ fontSize: 14, color: LGREY, marginBottom: 32 }}>All plans include unlimited QR scans. No contract. Cancel anytime. <span style={{ color: AMBER, fontWeight: 600 }}>Need enterprise pricing? Let's talk <ArrowRight size={13} color={AMBER} style={{ display: "inline", verticalAlign: "middle" }} aria-hidden="true" /></span></p>
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto", background: WHITE, borderRadius: 24, padding: "32px 36px", border: `1px solid ${BORDER}` }}>
          <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: NAVY, marginBottom: 20, textAlign: "center" }}>Compare plans side by side</div>
          <div data-grid="compare" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: LGREY, padding: "8px 8px" }}>Feature</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: LGREY, textAlign: "center", padding: "8px 8px" }}>Starter</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: AMBER, textAlign: "center", padding: "8px 8px" }}>Growth</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: LGREY, textAlign: "center", padding: "8px 8px" }}>Business</div>
            {compareFeatures.map((row, i) => {
              const cell = (v) => v === "yes" ? <Check size={14} color={GREEN} style={{ display: "inline", verticalAlign: "middle" }} aria-hidden="true" /> : v;
              return (
              <div key={i} style={{ display: "contents" }}>
                <div style={{ fontSize: 13, color: NAVY, padding: "10px 8px", borderTop: `1px solid ${BORDER}`, fontWeight: 500 }}>{row.name}</div>
                <div style={{ fontSize: 13, color: LGREY, textAlign: "center", padding: "10px 8px", borderTop: `1px solid ${BORDER}` }}>{cell(row.starter)}</div>
                <div style={{ fontSize: 13, color: NAVY, textAlign: "center", padding: "10px 8px", borderTop: `1px solid ${BORDER}`, fontWeight: 600 }}>{cell(row.growth)}</div>
                <div style={{ fontSize: 13, color: LGREY, textAlign: "center", padding: "10px 8px", borderTop: `1px solid ${BORDER}` }}>{cell(row.business)}</div>
              </div>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

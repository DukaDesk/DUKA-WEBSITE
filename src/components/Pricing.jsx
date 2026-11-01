import { Check } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { Tilt } from "./ui/Tilt";
import { NAVY, AMBER, CREAM, SURFACE, BORDER, CHAR, LGREY, INK, ISLAND, ISLAND_INK, ISLAND_MUTE, GREEN, sora, mix } from "../constants";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    features: ["Online commerce", "Forms", "Notifications", "20 products", "5 pages", "2 team members"],
  },
  {
    name: "Business",
    price: "₦29.99",
    features: ["Online commerce", "Forms", "Notifications", "Bookings", "Analytics", "Integrations", "200 products", "20 pages", "10 team members"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "₦99.99",
    features: ["Everything in Business", "Custom domain", "Single sign-on", "Multiple workspaces", "Unlimited products", "Unlimited pages", "Unlimited team members"],
  },
];

export function Pricing({ onWaitlist }) {
  return (
    <section id="pricing" data-pad="wide" style={{ padding: "100px 80px", background: CREAM }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Plans & pricing</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: INK, marginBottom: 12 }}>Choose the tools your business needs</h2>
          <p style={{ fontSize: 17, color: LGREY, marginBottom: 0 }}>Plan names, prices and included features reflect DukaDesk's current active plans.</p>
        </div>
      </FadeIn>

      <div data-grid="pricing" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, maxWidth: 1000, margin: "0 auto" }}>
        {PLANS.map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 100}>
            <Tilt max={plan.highlight ? 4 : 6} style={{ height: "100%" }}>
              <div className="pricing-card" style={{ background: plan.highlight ? ISLAND : SURFACE, borderRadius: 24, padding: "36px 32px", border: plan.highlight ? "none" : `1.5px solid ${BORDER}`, position: "relative", transform: plan.highlight ? "scale(1.04)" : "none", boxShadow: plan.highlight ? "0 24px 64px rgba(26,26,46,0.35)" : "none", height: "100%" }}>
                {plan.highlight && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: AMBER, color: NAVY, fontSize: 12, fontWeight: 700, padding: "4px 16px", borderRadius: 24 }}>POPULAR</div>}
                <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: plan.highlight ? ISLAND_INK : INK, marginBottom: 6 }}>{plan.name}</div>
                <div style={{ fontSize: 13, color: plan.highlight ? ISLAND_MUTE : LGREY, marginBottom: 20 }}>Plan features and limits are listed below.</div>
                <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 36, color: plan.highlight ? AMBER : INK, marginBottom: 24 }}>{plan.price}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  {plan.features.map((feature) => (
                    <div key={feature} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <Check size={15} color={plan.highlight ? AMBER : GREEN} style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                      <span style={{ fontSize: 14, color: plan.highlight ? mix("island-ink", 75) : CHAR }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <button onClick={onWaitlist} className="btn-waitlist" style={{ width: "100%", height: 48, border: "none", borderRadius: 24, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: sora, transition: "all 0.2s" }}>Join the waitlist</button>
              </div>
            </Tilt>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={300}>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ fontSize: 14, color: LGREY, marginBottom: 0 }}>
            Prices are shown in Nigerian naira. Plan features and limits may change; confirm the latest details when setting up your account.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

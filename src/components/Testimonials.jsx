import { useState } from "react";
import { Check } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { MonogramAvatar } from "./ui/MonogramAvatar";
import { NAVY, AMBER, SURFACE, CREAM, BORDER, LGREY, INK, sora, tint } from "../constants";

const testimonials = [
  {
    name: "Commerce business",
    business: "Products & orders",
    role: "Merchant workflow",
    color: "#2ECC71",
    text: "Add products to a business catalogue, keep track of inventory and follow customer orders from the merchant dashboard.",
    result: "Products · orders · inventory",
    industry: "Commerce",
  },
  {
    name: "Food business",
    business: "Branded app experience",
    role: "Merchant workflow",
    color: AMBER,
    text: "Use the visual editor to configure business pages and branding. After approval, customers can open the experience in DukaDesk and use the configured ordering options.",
    result: "Brand · catalogue · QR",
    industry: "Food & hospitality",
  },
  {
    name: "Services business",
    business: "Bookings & forms",
    role: "Merchant workflow",
    color: "#7C3AED",
    text: "Set up service pages and use booking and form tools where they are enabled for your business. Manage customer activity from the dashboard.",
    result: "Services · bookings · forms",
    industry: "Services",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section data-pad="wide" style={{ padding: "100px 80px", background: SURFACE }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: tint(AMBER, 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Illustrative product workflows</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: INK, marginBottom: 16 }}>See how DukaDesk fits your workflow</h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 520, margin: "0 auto" }}>Examples based on documented DukaDesk features, not customer testimonials.</p>
        </div>
      </FadeIn>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn delay={100}>
          <div style={{ background: CREAM, borderRadius: 24, padding: "48px 56px", border: `1px solid ${BORDER}`, position: "relative" }}>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0 }}>
                <MonogramAvatar name={testimonials[active].name} size={72} color={testimonials[active].color} radius={20} fontSize={28} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 18, color: INK, lineHeight: 1.8, marginBottom: 24 }}>{testimonials[active].text}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: INK }}>{testimonials[active].name}</div>
                    <div style={{ fontSize: 14, color: LGREY }}>{testimonials[active].business} — {testimonials[active].role}</div>
                  </div>
                  <div style={{ background: tint(testimonials[active].color, 18), borderRadius: 20, padding: "6px 16px" }}>
                    <span style={{ fontSize: 13, color: testimonials[active].color, fontWeight: 700 }}><Check size={13} color={testimonials[active].color} style={{ display: "inline", verticalAlign: "middle" }} aria-hidden="true" /> {testimonials[active].result}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Show ${testimonials[i].industry} workflow`} aria-pressed={active === i} style={{ width: active === i ? 28 : 10, height: 10, background: active === i ? AMBER : BORDER, borderRadius: 5, border: "none", cursor: "pointer", transition: "all 0.3s" }} />
          ))}
        </div>

        <div data-grid="testimonials" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 48 }}>
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div onClick={() => setActive(i)} style={{ background: active === i ? tint(AMBER, 10) : CREAM, borderRadius: 16, padding: "20px", border: active === i ? `1.5px solid ${tint(AMBER, 44)}` : `1px solid ${BORDER}`, cursor: "pointer", transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <MonogramAvatar name={t.name} size={36} color={t.color} radius={10} fontSize={15} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: INK }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: LGREY }}>{t.industry}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: LGREY, lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>"{t.text}"</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
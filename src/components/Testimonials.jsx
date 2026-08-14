import { useState } from "react";
import { Check } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { MonogramAvatar } from "./ui/MonogramAvatar";
import { NAVY, AMBER, SURFACE, CREAM, BORDER, LGREY, INK, sora, tint } from "../constants";

const testimonials = [
  {
    name: "Mary O.",
    business: "FreshMart Supermarket",
    role: "Owner",
    color: "#2ECC71",
    text: "DukaDesk helped us launch our online store in less than a day. We've increased online orders by 38% and now manage inventory, payments and customer communication from one dashboard.",
    result: "38% more online orders",
    industry: "Retail",
  },
  {
    name: "Tunde A.",
    business: "Tunde's Kitchen",
    role: "Chef & Owner",
    color: AMBER,
    text: "I used to juggle WhatsApp, a payment link, and a notebook just to run my food business. Now everything is in one place. My customers love scanning the QR code to order.",
    result: "15+ hours saved per week",
    industry: "Restaurant",
  },
  {
    name: "Chioma E.",
    business: "Chi's Beauty Studio",
    role: "Founder",
    color: "#7C3AED",
    text: "My booking no-show rate dropped from 30% to under 5% after I started using DukaDesk. Clients book themselves, I get paid upfront, and everyone shows up on time.",
    result: "90% fewer no-shows",
    industry: "Beauty",
  },
  {
    name: "Pastor John K.",
    business: "Victory House Church",
    role: "Senior Pastor",
    color: "#3B82F6",
    text: "We needed a simple way for our members to give offerings and register for events. DukaDesk made it possible in one afternoon. Our congregation loves the app.",
    result: "Launched in 1 day",
    industry: "Church",
  },
  {
    name: "Fatima B.",
    business: "Bello Fashion House",
    role: "Creative Director",
    color: "#E74C3C",
    text: "I sell on Instagram and WhatsApp, but tracking orders was a nightmare. Now customers browse my catalogue and pay directly through my DukaDesk app. My sales have doubled.",
    result: "2x sales in 3 months",
    industry: "Fashion",
  },
  {
    name: "Emeka N.",
    business: "QuickPick Pharmacy",
    role: "Pharmacist",
    color: "#0D9488",
    text: "Customers can now order prescriptions and health products from my app. It's reduced queue times and increased my repeat customer rate significantly.",
    result: "42% repeat customer rate",
    industry: "Health",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section data-pad="wide" style={{ padding: "100px 80px", background: SURFACE }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: tint(AMBER, 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Trusted by business owners</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: INK, marginBottom: 16 }}>Real businesses. Real results.</h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 520, margin: "0 auto" }}>See how Nigerian businesses are using DukaDesk to sell more, save time, and grow faster.</p>
        </div>
      </FadeIn>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn delay={100}>
          <div style={{ background: CREAM, borderRadius: 24, padding: "48px 56px", border: `1px solid ${BORDER}`, position: "relative" }}>
            <div style={{ fontSize: 48, color: tint(AMBER, 22), position: "absolute", top: 20, left: 24, fontFamily: "serif", lineHeight: 1 }}>""</div>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0 }}>
                <MonogramAvatar name={testimonials[active].name} size={72} color={testimonials[active].color} radius={20} fontSize={28} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 18, color: INK, lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>"{testimonials[active].text}"</p>
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
            <button key={i} onClick={() => setActive(i)} style={{ width: active === i ? 28 : 10, height: 10, background: active === i ? AMBER : BORDER, borderRadius: 5, border: "none", cursor: "pointer", transition: "all 0.3s" }} />
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
import { FadeIn } from "./ui/FadeIn";
import { SectionHeader } from "./ui/SectionHeader";
import { PenTool, QrCode, TrendingUp } from "lucide-react";
import { NAVY, AMBER, WHITE, CREAM, BORDER, LGREY, sora } from "../constants";

export function HowItWorks() {
  const steps = [
    { num: "01", icon: PenTool, title: "Build your app", desc: "Open the Builder Studio, pick your business type, upload your logo and products, and customise your colours. No tech skills needed." },
    { num: "02", icon: QrCode, title: "Share your QR code", desc: "Your unique QR code is auto-generated. Print it on receipts, share it on WhatsApp, stick it on your counter." },
    { num: "03", icon: TrendingUp, title: "Start selling & growing", desc: "Accept payments, manage orders, track analytics, and engage customers — all from one dashboard." },
  ];

  return (
    <section id="how" data-pad="wide" style={{ padding: "100px 80px", background: WHITE }}>
      <SectionHeader
        badge="How it works"
        title="From builder to business in minutes"
        subtitle="Design your app, share it with customers, and start selling. No complicated setup, no technical expertise required."
      />

      <div data-grid="3-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 960, margin: "0 auto" }}>
        {steps.map((step, i) => {
          const StepIcon = step.icon;
          return (
            <FadeIn key={i} delay={i * 120}>
              <div style={{ textAlign: "center", padding: "40px 24px", background: CREAM, borderRadius: 20, border: `1px solid ${BORDER}`, transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.06)"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: `${AMBER}22`, lineHeight: 1, marginBottom: 16 }}>{step.num}</div>
                <div style={{ width: 64, height: 64, background: `${AMBER}18`, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <StepIcon size={30} color={AMBER} aria-hidden="true" />
                </div>
                <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: NAVY, marginBottom: 10 }}>{step.title}</div>
                <div style={{ fontSize: 14, color: LGREY, lineHeight: 1.7, maxWidth: 260, margin: "0 auto" }}>{step.desc}</div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
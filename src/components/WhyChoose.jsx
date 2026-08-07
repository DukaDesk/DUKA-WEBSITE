import { FadeIn } from "./ui/FadeIn";
import { SectionHeader } from "./ui/SectionHeader";
import { PenTool, Combine, Globe, Wallet } from "lucide-react";
import { NAVY, AMBER, WHITE, CREAM, BORDER, LGREY, sora } from "../constants";

export function WhyChoose() {
  const reasons = [
    {
      icon: PenTool,
      title: "Configured, not coded",
      desc: "Design your own business app with the Builder Studio — choose your pages, workflows, and look. Your business gets software shaped around it, without a team of engineers.",
      color: "#7C3AED",
    },
    {
      icon: Combine,
      title: "Replace five tools with one platform",
      desc: "Stop juggling between POS, inventory software, messaging apps, and spreadsheets. DukaDesk brings everything together so you can sell, manage, and grow from one dashboard.",
      color: AMBER,
    },
    {
      icon: Globe,
      title: "Built for African businesses, by Africans",
      desc: "Every product decision starts with: 'Does this work for a merchant in Lagos?' We understand the market because we live in it.",
      color: "#2ECC71",
    },
    {
      icon: Wallet,
      title: "Zero commission on your sales",
      desc: "You keep 100% of what you earn. We don't take a cut of your transactions. Our only revenue is your subscription — so your success is our success.",
      color: "#E74C3C",
    },
  ];

  return (
    <section id="why" data-pad="wide" style={{ padding: "100px 80px", background: WHITE }}>
      <SectionHeader
        badge="Why DukaDesk"
        title="Build your own app. Run it like a pro."
        subtitle="Design the app your business needs with the Builder Studio, then sell, manage and grow — all from one platform built for African businesses."
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 900, margin: "0 auto" }}>
        {reasons.map((r, i) => {
          const RIcon = r.icon;
          return (
            <FadeIn key={i} delay={i * 80}>
              <div style={{ background: CREAM, borderRadius: 20, padding: "32px 28px", border: `1px solid ${BORDER}`, transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = r.color; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${r.color}15`; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: 48, height: 48, background: `${r.color}18`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <RIcon size={24} color={r.color} aria-hidden="true" />
                </div>
                <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 17, color: NAVY, marginBottom: 10 }}>{r.title}</div>
                <div style={{ fontSize: 14, color: LGREY, lineHeight: 1.7 }}>{r.desc}</div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
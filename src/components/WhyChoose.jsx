import { Reveal } from "./ui/Reveal";
import { PenTool, Combine, Wallet, MapPin } from "lucide-react";
import { NAVY, AMBER, WHITE, CREAM, CHAR, LGREY, sora, inter } from "../constants";

const ROWS = [
  {
    icon: Combine,
    t: "One platform, not five",
    d: "POS, inventory, orders, payments and customer messaging live in the same place. Nothing to stitch together.",
  },
  {
    icon: Wallet,
    t: "Zero commission, ever",
    d: "We never take a cut of a sale. A flat subscription is our entire business model.",
  },
  {
    icon: MapPin,
    t: "Built where you trade",
    d: "Naira-first pricing, local payment rails, offline-tolerant browsing, and support on WhatsApp.",
  },
  {
    icon: PenTool,
    t: "Configured, not coded",
    d: "Design your own app in the Builder Studio — choose your pages, workflows and look. No engineers needed.",
  },
];

export function WhyChoose() {
  return (
    <section id="why" style={{ background: CREAM, padding: "104px 56px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(280px, 380px) 1fr", gap: 64, maxWidth: 1080, margin: "0 auto", alignItems: "start" }}>
        <div style={{ position: "sticky", top: 96 }}>
          <span style={{ fontFamily: sora, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: LGREY }}>
            Why DukaDesk
          </span>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(32px,3.6vw,52px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: NAVY, margin: "18px 0 0" }}>
            Four reasons
            <br />
            merchants stay.
          </h2>
          <div style={{ width: 64, height: 3, background: AMBER, marginTop: 26 }} />
        </div>

        <div>
          {ROWS.map((r, i) => {
            const RIcon = r.icon;
            return (
              <Reveal key={r.t} delay={i * 0.09}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: 24,
                    padding: "34px 0",
                    borderTop: i === 0 ? `1px solid rgba(26,26,46,0.14)` : "none",
                    borderBottom: `1px solid rgba(26,26,46,0.14)`,
                    transition: "padding-left 0.2s",
                  }}
                  onMouseOver={e => { e.currentTarget.style.paddingLeft = "12px"; }}
                  onMouseOut={e => { e.currentTarget.style.paddingLeft = "0"; }}
                >
                  <div style={{ width: 44, height: 44, background: `${AMBER}18`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <RIcon size={20} color={AMBER} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: sora, fontWeight: 700, fontSize: "clamp(20px,2vw,26px)", letterSpacing: "-0.02em", color: NAVY, margin: 0 }}>{r.t}</h3>
                    <p style={{ fontFamily: inter, fontSize: 15.5, lineHeight: 1.75, color: CHAR, margin: "10px 0 0", maxWidth: 560 }}>{r.d}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
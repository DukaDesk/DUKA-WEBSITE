import { Reveal } from "./ui/Reveal";
import { PenTool, LayoutDashboard, QrCode } from "lucide-react";
import { AMBER, CREAM, BORDER, CHAR, LGREY, INK, sora, inter, mix } from "../constants";

const ROWS = [
  {
    icon: LayoutDashboard,
    t: "One dashboard for the day-to-day",
    d: "Products, orders, customers and payments in one place.",
  },
  {
    icon: PenTool,
    t: "Your brand, not a template",
    d: "Your logo, colours and pages make the experience yours.",
  },
  {
    icon: QrCode,
    t: "Customers find you in one tap",
    d: "Share a QR code or let them discover you in the DukaDesk app.",
  },
];

export function WhyChoose() {
  return (
    <section id="why" data-pad="wide" style={{ background: CREAM, padding: "104px 56px" }}>
      <div data-grid="why" style={{ display: "grid", gridTemplateColumns: "minmax(280px, 380px) 1fr", gap: 64, maxWidth: 1080, margin: "0 auto", alignItems: "start" }}>
        <div style={{ position: "sticky", top: 96 }}>
          <span style={{ fontFamily: sora, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: LGREY }}>
            Why DukaDesk
          </span>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(32px,3.6vw,52px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: INK, margin: "18px 0 0" }}>
            Three reasons
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
                    borderTop: i === 0 ? `1px solid ${BORDER}` : "none",
                    borderBottom: `1px solid ${BORDER}`,
                    transition: "padding-left 0.2s",
                  }}
                  onMouseOver={e => { e.currentTarget.style.paddingLeft = "12px"; }}
                  onMouseOut={e => { e.currentTarget.style.paddingLeft = "0"; }}
                >
                  <div style={{ width: 44, height: 44, background: mix("amber", 18), borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <RIcon size={20} color={AMBER} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: sora, fontWeight: 700, fontSize: "clamp(20px,2vw,26px)", letterSpacing: "-0.02em", color: INK, margin: 0 }}>{r.t}</h3>
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
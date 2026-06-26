import { FadeIn } from "./ui/FadeIn";
import { NAVY, AMBER, WHITE, CREAM, BORDER, LGREY, sora } from "../constants";

export function HowItWorks() {
  const merchantSteps = [
    { icon: "🏪", title: "Pick your category", desc: "Restaurant, store, school, church, booking — choose the template built for your business." },
    { icon: "🎨", title: "Brand your app", desc: "Upload your logo, pick your colors, add your menu or products. Takes under 10 minutes." },
    { icon: "🔌", title: "Add integrations", desc: "Connect Paystack, enable a cart, set up bookings, add loyalty points — all in one click each." },
    { icon: "▣",  title: "Get your QR code", desc: "Publish and your unique QR code is auto-generated. Print it, share it, stick it anywhere." },
  ];
  const consumerSteps = [
    { icon: "📱", title: "Download DukaDesk", desc: "One free app that gives you access to every business on the platform." },
    { icon: "▣",  title: "Scan the QR code", desc: "Point at any DukaDesk QR — at a restaurant, salon, church, or store." },
    { icon: "🛒",  title: "Order, book, or browse", desc: "Use the full merchant app right inside DukaDesk. No separate download needed." },
    { icon: "🔄",  title: "Resume anytime", desc: "DukaDesk remembers where you left off. Reopen the app and continue instantly." },
  ];

  return (
    <section id="how" data-pad="wide" style={{ padding: "100px 80px", background: WHITE }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>How it works</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: NAVY, marginBottom: 16 }}>One platform. Two journeys.</h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 540, margin: "0 auto" }}>Whether you're a business owner or a customer — DukaDesk makes the mobile experience effortless.</p>
        </div>
      </FadeIn>

      <div data-grid="how" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        <FadeIn delay={100}>
          <div style={{ background: NAVY, borderRadius: 24, padding: "40px 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
              <div style={{ background: `${AMBER}22`, borderRadius: 10, padding: "6px 14px" }}>
                <span style={{ color: AMBER, fontWeight: 700, fontSize: 13 }}>🏪 For Merchants</span>
              </div>
            </div>
            {merchantSteps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 18, marginBottom: i < merchantSteps.length - 1 ? 32 : 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 44, height: 44, background: AMBER, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, fontFamily: sora, fontWeight: 800, color: NAVY }}>{step.icon}</div>
                  {i < merchantSteps.length - 1 && <div style={{ width: 2, flex: 1, background: `${AMBER}30`, marginTop: 8, minHeight: 28 }} />}
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: WHITE, marginBottom: 6 }}>{step.title}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div style={{ background: CREAM, borderRadius: 24, padding: "40px 36px", border: `1px solid ${BORDER}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
              <div style={{ background: `${NAVY}11`, borderRadius: 10, padding: "6px 14px" }}>
                <span style={{ color: NAVY, fontWeight: 700, fontSize: 13 }}>📱 For Consumers</span>
              </div>
            </div>
            {consumerSteps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 18, marginBottom: i < consumerSteps.length - 1 ? 32 : 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 44, height: 44, background: NAVY, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{step.icon}</div>
                  {i < consumerSteps.length - 1 && <div style={{ width: 2, flex: 1, background: `${NAVY}20`, marginTop: 8, minHeight: 28 }} />}
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 6 }}>{step.title}</div>
                  <div style={{ fontSize: 14, color: LGREY, lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

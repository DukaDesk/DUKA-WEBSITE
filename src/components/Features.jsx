import { FadeIn } from "./ui/FadeIn";
import { QrCode, Smartphone, Package, CalendarCheck, BarChart3, Check } from "lucide-react";
import { NAVY, AMBER, SURFACE, CREAM, BORDER, LGREY, INK, sora, mix } from "../constants";

const ICONS = [Smartphone, Package, CalendarCheck, QrCode, BarChart3];

export function Features() {
  const features = [
    { title: "Create a branded business experience", desc: "Use the visual builder to shape your pages, branding and business content inside the DukaDesk app.", badge: null },
    { title: "Manage products and orders", desc: "Add products, keep track of inventory and follow orders from the merchant dashboard.", badge: null },
    { title: "Support bookings and forms", desc: "Set up service and customer workflows with the tools available for your business.", badge: null },
    { title: "Share your business with a QR code", desc: "Once your app is approved, share its QR code so customers can open your business in DukaDesk.", badge: null },
    { title: "See how your business is doing", desc: "Use the dashboard to review sales, customers and activity, with analytics depending on your plan.", badge: null },
  ];

  return (
    <section id="features" data-pad="wide" style={{ padding: "100px 80px", background: SURFACE }}>
      <div data-grid="features" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <FadeIn>
          <div>
            <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Everything included</span>
            </div>
            <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: INK, marginBottom: 20, lineHeight: 1.1 }}>Build your business experience and run it from one dashboard</h2>
            <p style={{ fontSize: 17, color: LGREY, lineHeight: 1.7, marginBottom: 36 }}>Configure a branded experience in DukaDesk, then manage your products, orders, customers and available business tools from the merchant dashboard.</p>
            <div className="features-badges" style={{ display: "flex", gap: 12 }}>
              <div style={{ background: "#F0FDF4", borderRadius: 12, padding: "10px 16px", fontSize: 13, color: "#065F46", fontWeight: 600 }}><Check size={13} color="#065F46" style={{ display: "inline", verticalAlign: "middle" }} aria-hidden="true" /> One DukaDesk account for customers</div>
              <div style={{ background: "#FFF8ED", borderRadius: 12, padding: "10px 16px", fontSize: 13, color: "#92400E", fontWeight: 600 }}><Check size={13} color="#92400E" style={{ display: "inline", verticalAlign: "middle" }} aria-hidden="true" /> Your business branding</div>
            </div>
          </div>
        </FadeIn>
        <div data-grid="features-copy" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="feature-card" style={{ background: CREAM, borderRadius: 16, padding: "22px", border: `1px solid ${BORDER}`, position: "relative", transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = AMBER; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "none"; }}
              >
                {f.badge && (
                  <div style={{ position: "absolute", top: -8, right: 12, background: AMBER, color: NAVY, fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 12 }}>{f.badge}</div>
                )}
                {(() => { const Icon = ICONS[i]; return (
                <div style={{ width: 44, height: 44, background: mix("amber", 18), borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <Icon size={22} color={AMBER} aria-hidden="true" />
                </div>
                ); })()}
                <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 14, color: INK, marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: LGREY, lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from "./ui/FadeIn";
import { NAVY, AMBER, LGREY, sora } from "../constants";

export function Integrations() {
  const integrations = [
    { icon: "💳", name: "Paystack",    cat: "Payments" },
    { icon: "💳", name: "Flutterwave", cat: "Payments" },
    { icon: "🛒", name: "Product Cart",cat: "Commerce" },
    { icon: "📅", name: "Booking Calendar", cat: "Scheduling" },
    { icon: "⭐", name: "Loyalty Points",   cat: "Engagement" },
    { icon: "💬", name: "Messaging",   cat: "Communication" },
    { icon: "🔔", name: "Push Notifications", cat: "Engagement" },
    { icon: "📱", name: "WhatsApp",    cat: "Communication" },
    { icon: "📧", name: "Email Capture", cat: "Marketing" },
    { icon: "🏷️", name: "Discount Codes", cat: "Commerce" },
    { icon: "🚚", name: "Delivery Zones", cat: "Logistics" },
    { icon: "🎫", name: "Event Tickets", cat: "Events" },
  ];

  return (
    <section data-pad="wide" style={{ padding: "100px 80px", background: NAVY, overflow: "hidden" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Integration marketplace</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: "white", marginBottom: 16 }}>Add what you need.<br /><span style={{ color: AMBER }}>Leave out what you don't.</span></h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 480, margin: "0 auto" }}>Every integration is one click. No developer needed, no API keys to manage.</p>
        </div>
      </FadeIn>
      <div data-grid="integrations" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, maxWidth: 900, margin: "0 auto" }}>
        {integrations.map((int, i) => (
          <FadeIn key={i} delay={i * 50}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "18px 16px", transition: "all 0.2s", cursor: "default" }}
              onMouseOver={e => { e.currentTarget.style.background = "rgba(244,160,38,0.1)"; e.currentTarget.style.borderColor = `${AMBER}44`; }}
              onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{int.icon}</span>
              <div style={{ fontWeight: 600, fontSize: 13, color: "white", marginBottom: 2 }}>{int.name}</div>
              <div style={{ fontSize: 11, color: LGREY }}>{int.cat}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

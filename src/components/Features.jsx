import { FadeIn } from "./ui/FadeIn";
import { QrCode, Smartphone, Plug, BarChart3, MessageCircle, Check } from "lucide-react";
import { NAVY, AMBER, SURFACE, CREAM, BORDER, LGREY, INK, sora, mix } from "../constants";

const ICONS = [QrCode, Smartphone, Plug, BarChart3, MessageCircle];

export function Features() {
  const features = [
    { title: "Get discovered with a unique QR code",     desc: "Every desk gets a custom QR code on launch. Share it on social media, print it on receipts, stick it on your counter.", badge: null },
    { title: "Customers access you with one scan",        desc: "No app store download needed. Customers scan your QR and instantly see your menu, products, or services.", badge: null },
    { title: "Connect the tools you actually use",        desc: "Paystack, WhatsApp, booking calendar, loyalty points — add the integrations that matter to your desk.", badge: "Popular" },
    { title: "See what's working with real-time insights",desc: "Track sales, monitor traffic, understand customer behaviour — and make smarter decisions.", badge: null },
    { title: "Manage customer conversations from one inbox", desc: "Customers message you directly from your app. Respond from your dashboard. No more switching between tools.", badge: null },
  ];

  return (
    <section id="features" data-pad="wide" style={{ padding: "100px 80px", background: SURFACE }}>
      <div data-grid="features" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <FadeIn>
          <div>
            <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Everything included</span>
            </div>
            <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: INK, marginBottom: 20, lineHeight: 1.1 }}>Sell more, save time, and grow faster</h2>
            <p style={{ fontSize: 17, color: LGREY, lineHeight: 1.7, marginBottom: 36 }}>DukaDesk gives you everything you need to run a successful desk — payments, messaging, analytics — all in one place. No juggling multiple apps.</p>
            <div className="features-badges" style={{ display: "flex", gap: 12 }}>
              <div style={{ background: "#F0FDF4", borderRadius: 12, padding: "10px 16px", fontSize: 13, color: "#065F46", fontWeight: 600 }}><Check size={13} color="#065F46" style={{ display: "inline", verticalAlign: "middle" }} aria-hidden="true" /> 0% commission on sales</div>
              <div style={{ background: "#FFF8ED", borderRadius: 12, padding: "10px 16px", fontSize: 13, color: "#92400E", fontWeight: 600 }}><Check size={13} color="#92400E" style={{ display: "inline", verticalAlign: "middle" }} aria-hidden="true" /> Your brand, not ours</div>
            </div>
          </div>
        </FadeIn>
        <div data-grid="features-copy" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div style={{ background: CREAM, borderRadius: 16, padding: "22px", border: `1px solid ${BORDER}`, position: "relative", transition: "all 0.2s" }}
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

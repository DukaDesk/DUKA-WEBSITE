import { Smartphone, LayoutDashboard, PenTool, QrCode } from "lucide-react";
import { INK, CREAM, BORDER, LGREY, AMBER, SURFACE, ISLAND, ISLAND_MUTE, sora } from "../constants";

const WORKFLOWS = [
  { icon: Smartphone, label: "Customer app", desc: "Customers explore businesses and open them in DukaDesk." },
  { icon: LayoutDashboard, label: "Merchant dashboard", desc: "Manage products, orders, customers and inventory." },
  { icon: PenTool, label: "Visual builder", desc: "Configure your business branding and app pages." },
  { icon: QrCode, label: "Review & QR sharing", desc: "Submit for review, then share your QR code after approval." },
];

const CAPABILITIES = ["Product catalogues", "Orders", "Inventory", "Bookings", "Forms", "Analytics", "Messaging", "Payment options"];

export function TrustBar() {
  return (
    <>
      <div data-pad="narrow" style={{ background: ISLAND, padding: "40px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>One platform for merchant and customer journeys</span>
        </div>
        <p style={{ color: ISLAND_MUTE, fontSize: 14, textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          Businesses configure a branded experience in DukaDesk's shared mobile app. Customers explore businesses there, while merchants manage their setup from the web dashboard.
        </p>
      </div>
      <div data-pad="narrow" style={{ background: SURFACE, padding: "36px 80px", borderBottom: `1px solid ${BORDER}` }}>
        <div data-grid="4" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 24 }}>
          {WORKFLOWS.map(({ icon: Icon, label, desc }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <Icon size={24} color={AMBER} aria-hidden="true" />
              <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 14, color: INK, marginTop: 8 }}>{label}</div>
              <div style={{ fontSize: 12, color: LGREY, marginTop: 4, lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div data-pad="narrow" style={{ background: CREAM, borderBottom: `1px solid ${BORDER}`, padding: "28px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span style={{ fontSize: 12, color: LGREY }}>Available business tools depend on plan and setup</span>
        </div>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
          {CAPABILITIES.map((capability) => (
            <span key={capability} style={{ border: `1px solid ${BORDER}`, borderRadius: 18, padding: "7px 14px", fontSize: 12, color: INK, background: SURFACE }}>
              {capability}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

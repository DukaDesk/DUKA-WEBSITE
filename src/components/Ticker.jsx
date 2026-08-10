import { NAVY, AMBER, sora } from "../constants";

const ITEMS = [
  "Zero commission",
  "QR desks",
  "Paystack & Flutterwave",
  "Offline-friendly",
  "NDPR compliant",
  "Live within 24 hours",
];

export function Ticker() {
  return (
    <div style={{ background: AMBER, color: NAVY, padding: "14px 0", overflow: "hidden", borderBottom: `1px solid ${NAVY}` }}>
      <div className="marquee-track" style={{ display: "flex", width: "max-content", animation: "marquee 34s linear infinite" }}>
        {[...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} style={{ fontFamily: sora, fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", paddingRight: 48, display: "flex", alignItems: "center", gap: 48 }}>
            {t}<span style={{ opacity: 0.45 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
import { useCountUp } from "../hooks/useCountUp";
import { Lock, ShieldCheck, CloudCheck, CheckCircle2 } from "lucide-react";
import { MerchantWordmark } from "./ui/MerchantWordmark";
import { NAVY, INK, CHAR, CREAM, BORDER, LGREY, AMBER, SURFACE, ISLAND, ISLAND_MUTE, GREEN, sora } from "../constants";

function Stat({ value, label }) {
  const [ref, count] = useCountUp(value);
  const prefix = String(value).startsWith("₦") ? "₦" : "";
  const suffix = String(value).endsWith("+") ? "+" : String(value).endsWith("%") ? "%" : "";
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 28, color: INK }}>{prefix}{count}{suffix}</div>
      <div style={{ fontSize: 13, color: LGREY, marginTop: 2 }}>{label}</div>
    </div>
  );
}

const SECURITY_BADGES = [
  { icon: Lock, label: "256-bit SSL", desc: "All data encrypted in transit" },
  { icon: ShieldCheck, label: "NDPR Compliant", desc: "Nigeria data protection" },
  { icon: CloudCheck, label: "99.9% Uptime", desc: "Always available" },
  { icon: CheckCircle2, label: "Privacy First", desc: "Your data, your control" },
];

const MERCHANTS = [
  "Mama's Kitchen",
  "FreshMart",
  "Tunde's Kitchen",
  "Bello Fashion",
  "QuickPick Pharmacy",
  "Chi's Beauty",
  "Victory House",
  "Amina Foods",
  "Obi Logistics",
  "Wazobia Books",
];

export function TrustBar() {
  const stats = [
    { value: "2,000+", label: "Merchants live" },
    { value: "10,000+", label: "Consumers" },
    { value: "500+", label: "Apps published" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "₦0", label: "Transaction cut" },
  ];
  return (
    <>
      <div data-pad="narrow" style={{ background: ISLAND, padding: "40px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Replace multiple desk tools with one platform</span>
        </div>
        <p style={{ color: ISLAND_MUTE, fontSize: 14, textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          DukaDesk is the all-in-one platform built specifically for independent desks. Sell more, save time, and grow faster — without switching between multiple tools.
        </p>
      </div>
      <div data-pad="narrow" style={{ background: SURFACE, padding: "36px 80px", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 12, color: LGREY }}>Trusted by 2,000+ merchants across Nigeria</span>
        </div>
        <div className="marquee-track" style={{ display: "flex", width: "max-content", animation: "marquee 34s linear infinite" }}>
          {[...MERCHANTS, ...MERCHANTS].map((m, i) => (
            <MerchantWordmark key={i} name={m} size={15} color="#9CA3AF" style={{ paddingRight: 64, opacity: 0.85 }} />
          ))}
        </div>
      </div>
      <div data-pad="narrow" style={{ background: CREAM, borderBottom: `1px solid ${BORDER}`, padding: "28px 80px" }}>
        <div data-grid="trust" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          {stats.map((s, i) => (
            <Stat key={i} value={s.value} label={s.label} />
          ))}
          <div style={{ borderLeft: `1px solid ${BORDER}`, paddingLeft: 40 }}>
            <div style={{ fontSize: 12, color: LGREY, marginBottom: 6 }}>As featured in</div>
            <div style={{ display: "flex", gap: 20, opacity: 0.5 }}>
              {["TechCabal", "BusinessDay", "Nairametrics"].map(b => (
                <span key={b} style={{ fontFamily: sora, fontWeight: 700, fontSize: 13, color: CHAR }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div data-pad="narrow" style={{ background: SURFACE, padding: "32px 80px", borderBottom: `1px solid ${BORDER}`, overflow: "hidden" }}>
        <div className="marquee-track" style={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite" }}>
          {[...SECURITY_BADGES, ...SECURITY_BADGES].map((b, i) => {
            const BIcon = b.icon;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, paddingRight: 72 }}>
                <BIcon size={22} color={AMBER} aria-hidden="true" />
                <div>
                  <div style={{ fontFamily: sora, fontWeight: 600, fontSize: 13, color: INK }}>{b.label}</div>
                  <div style={{ fontSize: 11, color: LGREY }}>{b.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
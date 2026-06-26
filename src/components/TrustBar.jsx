import { NAVY, CHAR, CREAM, BORDER, LGREY, sora } from "../constants";

export function TrustBar() {
  const stats = [
    { value: "2,000+", label: "Merchants live" },
    { value: "10,000+", label: "Consumers" },
    { value: "500+", label: "Apps published" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "₦0", label: "Transaction cut" },
  ];
  return (
    <div data-pad="narrow" style={{ background: CREAM, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "28px 80px" }}>
      <div data-grid="trust" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 28, color: NAVY }}>{s.value}</div>
            <div style={{ fontSize: 13, color: LGREY, marginTop: 2 }}>{s.label}</div>
          </div>
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
  );
}

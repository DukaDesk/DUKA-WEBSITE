import { useState } from "react";
import { NAVY, AMBER, GREEN, LGREY, WHITE, sora } from "../constants";

export function Hero({ onSignIn }) {
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = useState(false);

  const doScan = () => {
    setScanning(true);
    setTimeout(() => { setScanning(false); setScanned(true); }, 1800);
  };

  return (
    <section style={{
      minHeight: "100vh", background: NAVY,
      display: "flex", alignItems: "center",
      padding: "120px 80px 80px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "10%", right: "8%", width: 480, height: 480, background: `${AMBER}12`, borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "5%", width: 360, height: 360, background: `${AMBER}08`, borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`, backgroundSize: "48px 48px", pointerEvents: "none" }} />

      <div style={{ flex: 1, maxWidth: 600, position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${AMBER}18`, border: `1px solid ${AMBER}44`, borderRadius: 24, padding: "7px 16px", marginBottom: 28 }}>
          <div style={{ width: 7, height: 7, background: GREEN, borderRadius: "50%", animation: "pulse 2s infinite" }} />
          <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Now live in Nigeria</span>
        </div>

        <h1 style={{ fontFamily: sora, fontWeight: 800, fontSize: 68, color: WHITE, lineHeight: 1.05, marginBottom: 24, letterSpacing: "-1px" }}>
          Your business.<br />
          <span style={{ color: AMBER }}>One QR code.</span><br />
          A full mobile app.
        </h1>

        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
          DukaDesk is the Shopify for mobile apps. Build a fully branded app for your restaurant, store, school, or church — no code, no developers. Customers scan your QR code and you're live.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button onClick={onSignIn} style={{ background: AMBER, color: NAVY, border: "none", borderRadius: 28, padding: "16px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: sora, display: "flex", alignItems: "center", gap: 8, transition: "transform 0.2s" }}
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
          >Launch Your App Free</button>
          <a href="#how" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 28, padding: "16px 28px", fontSize: 16, fontWeight: 500, cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            ▶ Watch how it works
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 48 }}>
          <div style={{ display: "flex" }}>
            {["A","I","G","F","T"].map((l, i) => (
              <div key={i} style={{ width: 34, height: 34, borderRadius: "50%", background: [AMBER, "#2ECC71", "#7C3AED", "#E74C3C", "#0D9488"][i], border: `2px solid ${NAVY}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: WHITE, marginLeft: i > 0 ? -10 : 0 }}>{l}</div>
            ))}
          </div>
          <div>
            <div style={{ color: WHITE, fontWeight: 600, fontSize: 14 }}>2,000+ merchants live</div>
            <div style={{ color: AMBER, fontSize: 13 }}>⭐⭐⭐⭐⭐ across Lagos, Abuja & PH</div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div style={{ animation: "float 4s ease-in-out infinite", position: "relative" }}>
          <div style={{ width: 280, background: "#0D0D1A", borderRadius: 44, padding: 10, boxShadow: "0 48px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07)" }}>
            <div style={{ background: NAVY, borderRadius: 36, overflow: "hidden", minHeight: 520, position: "relative" }}>

              {!scanned ? (
                <div style={{ padding: "52px 20px 24px", display: "flex", flexDirection: "column", alignItems: "center", minHeight: 520 }}>
                  <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 17, color: WHITE, marginBottom: 4 }}>DukaDesk</div>
                  <div style={{ fontSize: 12, color: LGREY, marginBottom: 28 }}>Point at any QR code</div>

                  <div onClick={doScan} style={{ width: 180, height: 180, position: "relative", cursor: "pointer", marginBottom: 20 }}>
                    {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v, h], i) => (
                      <div key={i} style={{ position: "absolute", [v]: 0, [h]: 0, width: 28, height: 28, borderTop: v === "top" ? `3px solid ${AMBER}` : "none", borderBottom: v === "bottom" ? `3px solid ${AMBER}` : "none", borderLeft: h === "left" ? `3px solid ${AMBER}` : "none", borderRight: h === "right" ? `3px solid ${AMBER}` : "none", borderRadius: v === "top" && h === "left" ? "8px 0 0 0" : v === "top" && h === "right" ? "0 8px 0 0" : v === "bottom" && h === "left" ? "0 0 0 8px" : "0 0 8px 0" }} />
                    ))}
                    <div style={{ position: "absolute", inset: 12, backgroundImage: `radial-gradient(circle, rgba(244,160,38,0.08) 1px, transparent 1px)`, backgroundSize: "14px 14px" }} />

                    {scanning && (
                      <div style={{ position: "absolute", left: 8, right: 8, height: 2, background: `linear-gradient(90deg, transparent, ${AMBER}, transparent)`, animation: "scanLine 1s linear infinite", boxShadow: `0 0 8px ${AMBER}` }} />
                    )}

                    {!scanning && (
                      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
                        <div style={{ fontSize: 32, opacity: 0.4 }}>▣</div>
                        <div style={{ fontSize: 10, color: LGREY, textAlign: "center" }}>Tap to scan</div>
                      </div>
                    )}
                    {scanning && (
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 24, height: 24, border: `3px solid ${AMBER}`, borderTop: "3px solid transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                      </div>
                    )}
                  </div>

                  <div style={{ fontSize: 12, color: LGREY, marginBottom: 16, textAlign: "center" }}>OR</div>
                  <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "10px 20px", fontSize: 12, color: LGREY, textAlign: "center", cursor: "pointer" }} onClick={doScan}>Browse Businesses →</div>

                  {!scanning && <div style={{ marginTop: 24, fontSize: 11, color: `${AMBER}99`, fontWeight: 500 }}>👆 Tap scanner to demo</div>}
                </div>
              ) : (
                <div style={{ minHeight: 520, display: "flex", flexDirection: "column" }}>
                  <div style={{ background: "#1B4332", padding: "44px 16px 16px" }}>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginBottom: 2 }}>Open Now · 4.8 ⭐</div>
                    <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: WHITE }}>Mama's Kitchen</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>Nigerian Cuisine · Lekki</div>
                    <div style={{ display: "flex", gap: 6 }}>
                      {["Delivery","Pickup"].map((o,i) => <button key={o} style={{ background:i===0?"#F4A026":"rgba(255,255,255,0.1)", color:i===0?"#1A1A2E":WHITE, border: "none", borderRadius: 16, padding: "5px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>{o}</button>)}
                    </div>
                  </div>
                  <div style={{ flex: 1, background: WHITE, padding: "12px 14px" }}>
                    {[{e:"🍛",n:"Jollof Rice",p:"₦2,500"},{e:"🍗",n:"Peppered Gizzard",p:"₦1,800"},{e:"🐟",n:"Grilled Tilapia",p:"₦4,500"}].map((item,i) => (
                      <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom: i<2?"1px solid #F3F4F6":"none" }}>
                        <div style={{ width:44, height:44, background:"#F3F4F6", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{item.e}</div>
                        <div style={{ flex:1 }}>
                          <div style={{ fontSize:12, fontWeight:600, color:NAVY }}>{item.n}</div>
                          <div style={{ fontSize:11, color:"#1B4332", fontWeight:700 }}>{item.p}</div>
                        </div>
                        <div style={{ width:24, height:24, background:"#1B4332", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:WHITE, fontSize:14, fontWeight:700, cursor:"pointer" }}>+</div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setScanned(false)} style={{ background: "none", border: "none", color: LGREY, fontSize: 11, cursor: "pointer", padding: "8px" }}>← Scan again</button>
                </div>
              )}

              <div style={{ position: "absolute", top: 12, right: 14, width: 32, height: 32, background: AMBER, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: sora, fontWeight: 800, fontSize: 14, color: NAVY, boxShadow: "0 4px 12px rgba(0,0,0,0.3)", cursor: "pointer", zIndex: 10 }}>D</div>
            </div>
          </div>

          <div style={{ position: "absolute", left: -80, top: "20%", background: WHITE, borderRadius: 14, padding: "12px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", minWidth: 140, animation: "float 3.5s ease-in-out infinite 0.5s" }}>
            <div style={{ fontSize: 11, color: LGREY, marginBottom: 2 }}>New order 🛒</div>
            <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: NAVY }}>₦3,500</div>
            <div style={{ fontSize: 10, color: GREEN, fontWeight: 600 }}>Tunde — 2 min ago</div>
          </div>
          <div style={{ position: "absolute", right: -90, bottom: "28%", background: WHITE, borderRadius: 14, padding: "12px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", minWidth: 150, animation: "float 4s ease-in-out infinite 1s" }}>
            <div style={{ fontSize: 11, color: LGREY, marginBottom: 2 }}>QR scanned ▣</div>
            <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 14, color: NAVY }}>Mama's Kitchen</div>
            <div style={{ fontSize: 10, color: AMBER, fontWeight: 600 }}>43 scans today</div>
          </div>
        </div>
      </div>
    </section>
  );
}

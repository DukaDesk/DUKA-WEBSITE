import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ScanLine, Bell, Play, Utensils, Drumstick, Fish, CreditCard, BarChart3, CheckCircle2, Plus, ArrowLeft, QrCode, Users, PenTool } from "lucide-react";
import { NAVY, AMBER, GREEN, LGREY, WHITE, sora } from "../constants";

const WORDS = ["In your own app", "Your way", "From anywhere", "Your brand"];
const FLOAT_DUR = 4000;
const HERO_VIDEO = "/videos/hero-bg.mp4";

const MENU = [
  { icon: Utensils, name: "Jollof Rice", price: 2500, display: "₦2,500" },
  { icon: Drumstick, name: "Peppered Gizzard", price: 1800, display: "₦1,800" },
  { icon: Fish, name: "Grilled Tilapia", price: 4500, display: "₦4,500" },
];

const NOTIFS = [
  { amt: "₦3,500", sub: "Tunde — 2 min ago" },
  { amt: "₦12,000", sub: "Amina — 1 min ago" },
  { amt: "₦5,200", sub: "Obi — 30s ago" },
];

const PARTICLES = [
  { left: 12, top: 30, size: 5, dur: 11, delay: 0 },
  { left: 22, top: 62, size: 4, dur: 14, delay: 2 },
  { left: 30, top: 18, size: 6, dur: 12, delay: 5 },
  { left: 40, top: 70, size: 3, dur: 16, delay: 1 },
  { left: 55, top: 25, size: 5, dur: 13, delay: 7 },
  { left: 62, top: 80, size: 4, dur: 15, delay: 3 },
  { left: 70, top: 12, size: 6, dur: 12, delay: 9 },
  { left: 78, top: 55, size: 3, dur: 17, delay: 4 },
  { left: 86, top: 35, size: 5, dur: 13, delay: 6 },
  { left: 90, top: 75, size: 4, dur: 14, delay: 8 },
  { left: 15, top: 85, size: 5, dur: 12, delay: 10 },
  { left: 48, top: 8, size: 3, dur: 15, delay: 12 },
  { left: 94, top: 20, size: 5, dur: 11, delay: 14 },
  { left: 33, top: 42, size: 4, dur: 16, delay: 11 },
];

const Hero3D = lazy(() => import("./Hero3D").then(m => ({ default: m.Hero3D })));

export function Hero({ onWaitlist }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [glow, setGlow] = useState(false);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(false);
  const [notifIdx, setNotifIdx] = useState(0);
  const lastManual = useRef(0);
  const { scrollY } = useScroll();
  const yPhone = useTransform(scrollY, [0, 700], [0, -70]);
  const yBlob = useTransform(scrollY, [0, 700], [0, 60]);

  const autoOk = () => Date.now() - lastManual.current > 9000;

  const doScan = () => {
    lastManual.current = Date.now();
    setScanning(true);
    setGlow(false);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
      setGlow(true);
      setTimeout(() => setGlow(false), 900);
    }, 1800);
  };

  const addItem = (item) => {
    setCart(c => [...c, item]);
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), FLOAT_DUR);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setNotifIdx(i => (i + 1) % NOTIFS.length), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (scanning) return;
    let t;
    if (!scanned) {
      t = setTimeout(() => { if (autoOk()) doScan(); }, 4000);
    } else {
      t = setTimeout(() => setScanned(false), 4200);
    }
    return () => clearTimeout(t);
  }, [scanned, scanning]);

  const cartTotal = cart.reduce((s, i) => s + i.price, 0);

  return (
    <section className="hero-wrap" data-pad="wide" style={{
      minHeight: "100vh", background: NAVY,
      display: "flex", alignItems: "center",
      padding: "120px 80px 80px",
      position: "relative", overflow: "hidden",
    }}>
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5, zIndex: 0, pointerEvents: "none" }}>
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="hero-video-overlay" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        background: `linear-gradient(180deg, ${NAVY}F2 0%, ${NAVY}B3 45%, ${NAVY}E6 100%)` }} />

      {PARTICLES.map((p, i) => (
        <span key={i} aria-hidden="true" style={{
          position: "absolute", left: `${p.left}%`, top: `${p.top}%`,
          width: p.size, height: p.size, background: AMBER, borderRadius: "50%",
          opacity: 0, filter: "blur(1px)", pointerEvents: "none",
          animation: `driftUp ${p.dur}s linear ${p.delay}s infinite`,
        }} />
      ))}

      <div style={{ flex: 1, maxWidth: 600, position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${AMBER}18`, border: `1px solid ${AMBER}44`, borderRadius: 24, padding: "7px 16px", marginBottom: 28 }}>
          <div style={{ width: 7, height: 7, background: GREEN, borderRadius: "50%", animation: "pulse 2s infinite" }} />
          <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Now live in Nigeria</span>
        </div>

        <h1 style={{ fontFamily: sora, fontWeight: 800, fontSize: 64, color: WHITE, lineHeight: 1.05, marginBottom: 8, letterSpacing: "-1px" }}>
          Run your business.{' '}
          <span style={{ color: AMBER, display: "inline-flex", flexDirection: "column", height: "1.05em", overflow: "hidden", verticalAlign: "bottom" }}>
            <span style={{
              transform: `translateY(${-wordIdx * 100}%)`,
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
              {WORDS.map((w, i) => (
                <span key={i} style={{ display: "block", height: "1.05em", textAlign: "left" }}>{w}</span>
              ))}
            </span>
          </span>
        </h1>

        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
          Design your own business app with the Builder Studio, then run payments, customer management and commerce from one platform — no engineers needed. Stop juggling tools. Start growing.
        </p>

        <div className="hero-ctas" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button onClick={onWaitlist} style={{ background: AMBER, color: NAVY, border: "none", borderRadius: 28, padding: "16px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: sora, display: "flex", alignItems: "center", gap: 8, transition: "transform 0.2s" }}
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
          >Join Waitlist — 2-minute setup</button>
          <a href="#how" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 28, padding: "16px 28px", fontSize: 16, fontWeight: 500, cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <Play size={16} aria-hidden="true" /> See how it works
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
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
              <div style={{ display: "flex", gap: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill={AMBER} color={AMBER} aria-hidden="true" />
                ))}
              </div>
              <span style={{ color: AMBER, fontSize: 13 }}>across Lagos, Abuja & PH</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-3d" style={{ flex: "0 0 clamp(220px, 22vw, 400px)", height: 540, zIndex: 1, pointerEvents: "none", alignSelf: "center" }}>
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </div>

      <motion.div style={{ position: "absolute", top: "10%", right: "8%", width: 480, height: 480, background: `${AMBER}12`, borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", y: yBlob }} />
      <div style={{ position: "absolute", bottom: "5%", left: "5%", width: 360, height: 360, background: `${AMBER}08`, borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`, backgroundSize: "48px 48px", pointerEvents: "none" }} />

      <motion.div className="hero-phone" style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 1, flexDirection: "column", y: yPhone }}>
        <div style={{ animation: "float 4s ease-in-out infinite", position: "relative" }}>
          <div style={{ width: 280, background: "#0D0D1A", borderRadius: 44, padding: 10, boxShadow: "0 48px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07)" }}>
            <div style={{ background: NAVY, borderRadius: 36, overflow: "hidden", minHeight: 520, position: "relative" }}>

              {glow && (
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 9, pointerEvents: "none", background: `radial-gradient(circle at 50% 40%, ${AMBER}55, transparent 60%)`, animation: "glowBurst 0.9s ease-out forwards" }} />
              )}

              {!scanned ? (
                <div style={{ padding: "52px 20px 24px", display: "flex", flexDirection: "column", alignItems: "center", minHeight: 520 }}>
                  <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 17, color: WHITE, marginBottom: 4 }}>DukaDesk</div>
                  <div style={{ fontSize: 12, color: LGREY, marginBottom: 28 }}>Point at any QR code</div>

                  <button onClick={doScan} aria-label="Scan a QR code — demo" style={{ width: 180, height: 180, position: "relative", cursor: "pointer", marginBottom: 20, background: "none", border: "none", padding: 0 }}>
                    {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v, h], i) => (
                      <div key={i} style={{ position: "absolute", [v]: 0, [h]: 0, width: 28, height: 28, borderTop: v === "top" ? `3px solid ${AMBER}` : "none", borderBottom: v === "bottom" ? `3px solid ${AMBER}` : "none", borderLeft: h === "left" ? `3px solid ${AMBER}` : "none", borderRight: h === "right" ? `3px solid ${AMBER}` : "none", borderRadius: v === "top" && h === "left" ? "8px 0 0 0" : v === "top" && h === "right" ? "0 8px 0 0" : v === "bottom" && h === "left" ? "0 0 0 8px" : "0 0 8px 0" }} />
                    ))}
                    <div style={{ position: "absolute", inset: 12, backgroundImage: `radial-gradient(circle, rgba(244,160,38,0.08) 1px, transparent 1px)`, backgroundSize: "14px 14px" }} />

                    {scanning && (
                      <div style={{ position: "absolute", left: 8, right: 8, height: 2, background: `linear-gradient(90deg, transparent, ${AMBER}, transparent)`, animation: "scanLine 1s linear infinite", boxShadow: `0 0 8px ${AMBER}` }} />
                    )}

                    {!scanning && (
                      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
                        <ScanLine size={28} color={LGREY} opacity={0.7} aria-hidden="true" />
                        <div style={{ fontSize: 10, color: LGREY, textAlign: "center" }}>Tap to scan</div>
                      </div>
                    )}
                    {scanning && (
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 24, height: 24, border: `3px solid ${AMBER}`, borderTop: "3px solid transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                      </div>
                    )}
                  </button>

                  <div style={{ fontSize: 12, color: LGREY, marginBottom: 16, textAlign: "center" }}>OR</div>
                  <button onClick={doScan} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "10px 20px", fontSize: 12, color: LGREY, textAlign: "center", cursor: "pointer", border: "none" }}>Browse Businesses</button>

                  {!scanning && <div style={{ marginTop: 24, fontSize: 11, color: `${AMBER}99`, fontWeight: 500 }}>Tap the scanner to demo</div>}
                </div>
              ) : (
                <div style={{ minHeight: 520, display: "flex", flexDirection: "column" }}>
                  <div style={{ background: "#1B4332", padding: "44px 16px 16px" }}>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginBottom: 2 }}>Open Now · 4.8 · <Star size={10} fill={AMBER} color={AMBER} style={{ display: "inline", verticalAlign: "-1px" }} aria-hidden="true" /></div>
                    <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: WHITE }}>Mama's Kitchen</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>Nigerian Cuisine · Lekki</div>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      {["Delivery","Pickup"].map((o,i) => <button key={o} style={{ background:i===0?"#F4A026":"rgba(255,255,255,0.1)", color:i===0?"#1A1A2E":WHITE, border: "none", borderRadius: 16, padding: "5px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>{o}</button>)}
                      {cart.length > 0 && (
                        <span key={cart.length} style={{ marginLeft: "auto", background: AMBER, color: NAVY, borderRadius: 16, padding: "5px 12px", fontSize: 11, fontWeight: 800, animation: "pop 0.3s ease" }}>
                          Cart · {cart.length} · ₦{cartTotal.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ flex: 1, background: WHITE, padding: "12px 14px", position: "relative" }}>
                    {MENU.map((item, i) => {
                      const ItemIcon = item.icon;
                      return (
                        <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom: i<2?"1px solid #F3F4F6":"none", animation: `fadeSlide 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${120 + i * 130}ms both` }}>
                          <div style={{ width:44, height:44, background:"#F3F4F6", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", color: "#1B4332" }}><ItemIcon size={22} aria-hidden="true" /></div>
                          <div style={{ flex:1 }}>
                            <div style={{ fontSize:12, fontWeight:600, color:NAVY }}>{item.name}</div>
                            <div style={{ fontSize:11, color:"#1B4332", fontWeight:700 }}>{item.display}</div>
                          </div>
                          <button onClick={() => addItem(item)} aria-label={`Add ${item.name} to cart`} style={{ width:24, height:24, background:"#1B4332", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:WHITE, border:"none", cursor:"pointer" }}><Plus size={14} aria-hidden="true" /></button>
                        </div>
                      );
                    })}

                    {toast && (
                      <div role="status" aria-live="polite" style={{ position:"absolute", bottom:12, left:14, right:14, background:NAVY, color:WHITE, borderRadius:12, padding:"10px 14px", display:"flex", alignItems:"center", gap:8, fontSize:12, fontWeight:600, boxShadow:"0 8px 24px rgba(0,0,0,0.3)", animation:"fadeSlide 0.3s ease both" }}>
                        <CheckCircle2 size={16} color={GREEN} aria-hidden="true" /> Order added · ₦{cartTotal.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <button onClick={() => setScanned(false)} style={{ background: "none", border: "none", color: LGREY, fontSize: 11, cursor: "pointer", padding: "8px", display:"flex", alignItems:"center", justifyContent:"center", gap:4 }}>
                    <ArrowLeft size={12} aria-hidden="true" /> Scan again
                  </button>
                </div>
              )}

              <div style={{ position: "absolute", top: 12, right: 14, width: 32, height: 32, background: AMBER, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: sora, fontWeight: 800, fontSize: 14, color: NAVY, boxShadow: "0 4px 12px rgba(0,0,0,0.3)", cursor: "pointer", zIndex: 10 }}>D</div>
            </div>
          </div>

          <div key={notifIdx} style={{ position: "absolute", left: -80, top: "20%", background: WHITE, borderRadius: 14, padding: "12px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", minWidth: 140, animation: "fadeSlide 0.4s ease both" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: LGREY, marginBottom: 2 }}>
              <Bell size={12} color={AMBER} aria-hidden="true" /> New order
            </div>
            <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: NAVY }}>{NOTIFS[notifIdx].amt}</div>
            <div style={{ fontSize: 10, color: GREEN, fontWeight: 600 }}>{NOTIFS[notifIdx].sub}</div>
          </div>
          <div style={{ position: "absolute", right: -90, bottom: "28%", background: WHITE, borderRadius: 14, padding: "12px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", minWidth: 150, animation: "float 4s ease-in-out infinite 1s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: LGREY, marginBottom: 2 }}>
              <QrCode size={12} color={AMBER} aria-hidden="true" /> QR scanned
            </div>
            <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 14, color: NAVY }}>Mama's Kitchen</div>
            <div style={{ fontSize: 10, color: AMBER, fontWeight: 600 }}>43 scans today</div>
          </div>
        </div>

        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { icon: PenTool, label: "Design your app" },
            { icon: CreditCard, label: "Accept payments" },
            { icon: BarChart3, label: "Customer management" },
          ].map((c, i) => {
            const ChipIcon = c.icon;
            return (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <ChipIcon size={16} color={AMBER} aria-hidden="true" />
                <span style={{ fontSize: 12, color: WHITE, fontWeight: 500 }}>{c.label}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

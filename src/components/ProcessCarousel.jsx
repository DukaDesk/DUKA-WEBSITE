import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { NAVY, AMBER, WHITE, CREAM, CHAR, LGREY, BORDER, sora, inter } from "../constants";

const SLIDES = [
  {
    n: "01",
    t: "Pick a template",
    d: "Twelve industry layouts — a food kitchen, fashion rack, grocery stall and more. Preview each one before you commit.",
    img: "/assets/images/app_editor_merchant.jpeg",
    alt: "DukaDesk editor for building a template",
  },
  {
    n: "02",
    t: "Make it yours",
    d: "Logo, colours, products, prices, opening hours. Everything editable straight from your browser.",
    img: "/assets/images/Screenshot%202026-08-10%20155647.png",
    alt: "DukaDesk merchant dashboard",
  },
  {
    n: "03",
    t: "Print the code",
    d: "Publish and get a scannable code for your shop front, flyers and WhatsApp status.",
    img: "/assets/images/dukamob1.jpeg",
    alt: "DukaDesk mobile app storefront",
  },
  {
    n: "04",
    t: "Sell and track",
    d: "Orders, payments and analytics land in one dashboard the minute the first scan happens.",
    img: "/assets/images/dukamob2.jpeg",
    alt: "DukaDesk mobile app orders screen",
  },
];

const DUR = 5000;

export function ProcessCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState(1);
  const timer = useRef(null);

  const go = (next, d) => {
    setDir(d);
    setIdx((next + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => go(idx + 1, 1), DUR);
    return () => clearInterval(timer.current);
  }, [paused, idx]);

  const slide = SLIDES[idx];

  return (
    <section
      id="how"
      style={{ background: WHITE, padding: "104px 56px", overflow: "hidden" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(280px, 480px) minmax(320px, 460px)", gap: 72, maxWidth: 1040, margin: "0 auto", alignItems: "center" }}>
        <Reveal>
          <div style={{ position: "relative" }}>
            <span style={{ fontFamily: sora, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: LGREY }}>
              How it works
            </span>
            <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(32px,3.8vw,52px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: NAVY, margin: "18px 0 28px" }}>
              From nothing
              <br />
              to open for business.
            </h2>

            <div style={{ position: "relative", minHeight: 190 }}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: dir * 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -32 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(64px,7vw,96px)", lineHeight: 1, letterSpacing: "-0.05em", color: `${AMBER}20`, userSelect: "none" }}>
                    {slide.n}
                  </div>
                  <h3 style={{ fontFamily: sora, fontWeight: 700, fontSize: "clamp(22px,2.2vw,30px)", letterSpacing: "-0.02em", color: NAVY, margin: "10px 0 12px" }}>
                    {slide.t}
                  </h3>
                  <p style={{ fontFamily: inter, fontSize: 16, lineHeight: 1.75, color: CHAR, margin: 0, maxWidth: 400 }}>{slide.d}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 28, borderTop: `1px solid ${BORDER}`, paddingTop: 20, flexWrap: "wrap", gap: 12 }}>
              <div style={{ display: "flex", gap: 6 }}>
                {SLIDES.map((s, i) => (
                  <button
                    key={s.n}
                    onClick={() => go(i, i > idx ? 1 : -1)}
                    aria-label={`Go to step ${s.n}: ${s.t}`}
                    style={{
                      width: i === idx ? 26 : 10,
                      height: 10,
                      borderRadius: 999,
                      border: "none",
                      background: i === idx ? AMBER : BORDER,
                      cursor: "pointer",
                      transition: "width 0.25s",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => go(idx - 1, -1)}
                  aria-label="Previous step"
                  style={{ width: 42, height: 42, borderRadius: "50%", border: `1px solid ${BORDER}`, background: CREAM, color: NAVY, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = AMBER; e.currentTarget.style.color = AMBER; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = NAVY; }}
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button
                  onClick={() => go(idx + 1, 1)}
                  aria-label="Next step"
                  style={{ width: 42, height: 42, borderRadius: "50%", border: "none", background: NAVY, color: WHITE, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.background = "#232340"; }}
                  onMouseOut={e => { e.currentTarget.style.background = NAVY; }}
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div style={{ position: "relative" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: -40, right: -20, width: 260, height: 260, background: `${AMBER}14`, borderRadius: "50%", filter: "blur(70px)" }} />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: dir * 60, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: dir * -40, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              >
                <div
                  style={{
                    borderRadius: 30,
                    border: `1px solid ${BORDER}`,
                    background: "#0D0D1A",
                    padding: 10,
                    boxShadow: "0 32px 80px rgba(26,26,46,0.18)",
                  }}
                >
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    width={720}
                    height={1280}
                    loading="lazy"
                    style={{ width: "100%", height: 500, objectFit: "cover", objectPosition: "top", display: "block", borderRadius: 22 }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
            <div
              style={{
                position: "absolute",
                bottom: -24,
                left: -24,
                background: AMBER,
                color: NAVY,
                borderRadius: 16,
                padding: "10px 18px",
                fontFamily: sora,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.06em",
                boxShadow: "0 12px 32px rgba(244,160,38,0.35)",
              }}
            >
              STEP {slide.n} / {SLIDES.length}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
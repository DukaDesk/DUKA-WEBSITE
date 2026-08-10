import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, Layers } from "lucide-react";
import { NAVY, AMBER, WHITE, LGREY, CHAR, BORDER, sora, inter } from "../constants";
import editorImg from "../assets/app_editor_merchant.jpeg";
import dashboardImg from "../assets/Screenshot 2026-08-10 155647.png";
import mob1Img from "../assets/dukamob1.jpeg";
import mob2Img from "../assets/dukamob2.jpeg";
import mob3Img from "../assets/dukamob3.jpeg";

const DECK = [
  { src: editorImg, label: "Design", sub: "Build your template in the editor", alt: "DukaDesk editor for building a template" },
  { src: dashboardImg, label: "Manage", sub: "Your merchant dashboard", alt: "DukaDesk merchant dashboard" },
  { src: mob1Img, label: "Shop", sub: "Customer's mobile storefront", alt: "DukaDesk mobile app storefront" },
  { src: mob2Img, label: "Order", sub: "Browse and add to cart", alt: "DukaDesk mobile app ordering screen" },
  { src: mob3Img, label: "Track", sub: "Follow orders in real time", alt: "DukaDesk mobile app tracking screen" },
];

const CARD_W = 252;
const IMG_H = 420;
const LABEL_H = 62;
const CARD_H = IMG_H + LABEL_H;
const LIFT = 30;
const ROT = 5;

const spring = { type: "spring", stiffness: 260, damping: 24 };

export function ProductShowcase() {
  const [deck, setDeck] = useState(DECK);
  const [hovered, setHovered] = useState(null);

  const bringToFront = (idx) => {
    setDeck((prev) => {
      const card = prev[idx];
      return [...prev.filter((_, i) => i !== idx), card];
    });
  };

  return (
    <section id="showcase" data-pad="wide" style={{ padding: "104px 56px", background: WHITE, overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(280px, 380px) 1fr", gap: 64, maxWidth: 1080, margin: "0 auto", alignItems: "start" }}>
        <div style={{ position: "sticky", top: 96 }}>
          <Reveal>
            <span style={{ fontFamily: sora, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: LGREY }}>
              Inside the app
            </span>
            <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(32px,3.6vw,52px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: NAVY, margin: "18px 0 0" }}>
              Your shop,
              <br />
              in a pocket.
            </h2>
            <div style={{ width: 64, height: 3, background: AMBER, margin: "24px 0 0" }} />
            <p style={{ fontFamily: inter, fontSize: 15.5, lineHeight: 1.75, color: CHAR, marginTop: 20, maxWidth: 340 }}>
              The same storefront your customers scan is the dashboard you run the business from.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div style={{ position: "relative", height: CARD_H + (deck.length - 1) * LIFT + 20, maxWidth: 540, margin: "0 auto" }}>
            {deck.map((card, i) => {
              const depth = deck.length - 1 - i;
              const isFront = depth === 0;
              const isHovered = hovered === i;
              const shuffle = (i % 2 === 0 ? -1 : 1) * (ROT + depth * 2);

              return (
                <motion.button
                  key={`${card.src}-${i}`}
                  type="button"
                  aria-label={`Bring ${card.label} forward`}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  onClick={() => bringToFront(i)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: isHovered ? -12 : -depth * LIFT }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={spring}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    width: CARD_W,
                    zIndex: isHovered ? 99 : i + 1,
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    padding: 0,
                    transformOrigin: "50% 50%",
                    rotate: isHovered ? 0 : shuffle,
                    scale: isHovered ? 1.06 : 1,
                  }}
                >
                  <div
                    style={{
                      borderRadius: 24,
                      border: `1px solid ${BORDER}`,
                      background: WHITE,
                      boxShadow: isFront ? "0 24px 64px rgba(0,0,0,0.14)" : `0 16px 40px rgba(0,0,0,${0.05 + depth * 0.015})`,
                      overflow: "hidden",
                      transition: "box-shadow 0.25s",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        src={card.src}
                        alt={card.alt}
                        width={720}
                        height={1280}
                        loading={isFront ? "eager" : "lazy"}
                        decoding="async"
                        style={{ width: "100%", height: IMG_H, objectFit: "cover", objectPosition: "top", display: "block" }}
                      />
                      {!isFront && (
                        <div
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(180deg, rgba(250,248,245,0.4), rgba(250,248,245,0.15) 30%)",
                          }}
                        />
                      )}
                      {isFront && (
                        <div
                          style={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            background: NAVY,
                            color: WHITE,
                            borderRadius: 16,
                            padding: "5px 12px",
                            fontSize: 11,
                            fontWeight: 700,
                            fontFamily: sora,
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <Layers size={12} color={AMBER} aria-hidden="true" /> {card.label}
                        </div>
                      )}
                    </div>
                    <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 15, color: NAVY }}>{card.label}</div>
                        <div style={{ fontSize: 12, color: LGREY }}>{card.sub}</div>
                      </div>
                      <ArrowRight size={16} color={AMBER} aria-hidden="true" />
                    </div>
                  </div>
                </motion.button>
              );
            })}

            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, textAlign: "center" }}>
              <span style={{ fontSize: 13, color: LGREY }}>Tap a card to bring it forward</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
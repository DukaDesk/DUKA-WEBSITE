import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, Layers } from "lucide-react";
import { NAVY, AMBER, WHITE, LGREY, BORDER, sora } from "../constants";

const DECK = [
  { src: "/assets/1.png", label: "Manage", alt: "DukaDesk management screen" },
  { src: "/assets/3.png", label: "Sell", alt: "DukaDesk selling screen" },
  { src: "/assets/4.png", label: "Grow", alt: "DukaDesk growth screen" },
];

const CARD_W = 268;
const IMG_H = 420;
const LABEL_H = 62;
const CARD_H = IMG_H + LABEL_H;
const LIFT = 34;
const ROT = 6;

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
    <section id="showcase" data-pad="wide" style={{ padding: "100px 80px", background: WHITE, overflow: "hidden" }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Product tour</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: NAVY, marginBottom: 16 }}>
            One app, every tool you need
          </h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 520, margin: "0 auto" }}>
            Build it in the Builder Studio — then manage, sell, and grow from one app.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div
          style={{
            position: "relative",
            height: CARD_H + (deck.length - 1) * LIFT + 20,
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          {deck.map((card, i) => {
            const depth = deck.length - 1 - i;
            const isFront = depth === 0;
            const isHovered = hovered === i;
            const shuffle = (i % 2 === 0 ? -1 : 1) * (ROT + depth * 2.2);

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
                  scale: isHovered ? 1.05 : 1,
                }}
              >
                <div
                  style={{
                    borderRadius: 24,
                    border: `1px solid ${BORDER}`,
                    background: WHITE,
                    boxShadow: isFront
                      ? "0 24px 64px rgba(0,0,0,0.12)"
                      : `0 16px 40px rgba(0,0,0,${0.05 + depth * 0.015})`,
                    overflow: "hidden",
                    transition: "box-shadow 0.25s",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={card.src}
                      alt={card.alt}
                      width={500}
                      height={1024}
                      loading="lazy"
                      style={{ width: "100%", height: IMG_H, objectFit: "cover", objectPosition: "top", display: "block" }}
                    />
                    {!isFront && (
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, rgba(250,248,245,0.35), rgba(250,248,245,0.1) 30%)",
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
                  <div
                    style={{
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 15, color: NAVY }}>{card.label}</div>
                      <div style={{ fontSize: 12, color: LGREY }}>Built with the Builder Studio</div>
                    </div>
                    <ArrowRight size={16} color={AMBER} aria-hidden="true" />
                  </div>
                </div>
              </motion.button>
            );
          })}

          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, textAlign: "center" }}>
            <span style={{ fontSize: 13, color: LGREY }}>
              Tap a card to bring it forward
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

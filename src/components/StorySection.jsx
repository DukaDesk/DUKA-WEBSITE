import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { AMBER, BORDER, CREAM, INK, LGREY, NAVY, SURFACE, sora, inter, mix } from "../constants";

const primaryBtn = {
  border: "none",
  borderRadius: 999,
  padding: "14px 26px",
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: sora,
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
};

const secondaryBtn = {
  border: `1.5px solid ${BORDER}`,
  borderRadius: 999,
  padding: "14px 24px",
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
  fontFamily: sora,
  color: INK,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: "transparent",
};

export function StorySection({
  id,
  active = true,
  background = SURFACE,
  eyebrow,
  title,
  story,
  points,
  primary,
  secondary,
  visual,
  flip = false,
}) {
  return (
    <section
      id={id}
      data-pad="wide"
      style={{
        display: active ? "block" : "none",
        background,
        padding: "96px 56px",
        borderTop: `1px solid ${BORDER}`,
      }}
    >
      <div className={`story-grid${flip ? " story-flip" : ""}`}>
        <Reveal className="story-copy">
          <span style={{ fontFamily: sora, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: AMBER, fontWeight: 700 }}>
            {eyebrow}
          </span>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(32px,3.8vw,52px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: INK, margin: "16px 0 18px" }}>
            {title}
          </h2>
          <p style={{ fontFamily: inter, fontSize: 17, lineHeight: 1.7, color: LGREY, margin: 0, maxWidth: 500 }}>
            {story}
          </p>

          <div style={{ display: "grid", gap: 10, marginTop: 32 }}>
            {points.map(({ icon: Icon, title: pointTitle, desc }) => (
              <div key={pointTitle} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: background === CREAM ? SURFACE : CREAM, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "14px 16px" }}>
                <span style={{ flex: "none", width: 38, height: 38, borderRadius: 11, background: mix("amber", 18), display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={18} color={AMBER} aria-hidden="true" />
                </span>
                <div>
                  <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 15, color: INK, marginBottom: 2 }}>{pointTitle}</div>
                  <div style={{ fontFamily: inter, fontSize: 13.5, lineHeight: 1.55, color: LGREY }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            {primary && (
              primary.href ? (
                <a href={primary.href} target="_blank" rel="noopener noreferrer" className="btn-waitlist" style={{ ...primaryBtn, color: NAVY, textDecoration: "none" }}>
                  {primary.label} <ArrowRight size={15} aria-hidden="true" />
                </a>
              ) : (
                <button type="button" onClick={primary.onClick} className="btn-waitlist" style={primaryBtn}>
                  {primary.label} <ArrowRight size={15} aria-hidden="true" />
                </button>
              )
            )}
            {secondary && (
              <a href={secondary.href} target="_blank" rel="noopener noreferrer" style={secondaryBtn}>
                {secondary.label} <ArrowRight size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="story-visual">
          {visual}
        </Reveal>
      </div>
    </section>
  );
}

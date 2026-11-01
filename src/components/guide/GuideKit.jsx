import {
  AMBER, GREEN, INK, LGREY, NAVY,
  ISLAND_INK, ISLAND_MUTE, ISLAND_SOFT, ISLAND_BORDER,
  sora, mix,
} from "../../constants";
import { Reveal } from "../ui/Reveal";

/* ───────────────────────── shared CSS ───────────────────────── */
export function GuideStyles() {
  return (
    <style>{`
      .gd-step{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(28px,5vw,72px);align-items:center;padding:60px 0;border-top:1px solid ${ISLAND_BORDER};scroll-margin-top:96px}
      .gd-step.first{border-top:none;padding-top:24px}
      .gd-step.flip .gd-text{order:2}
      .gd-step.wide{grid-template-columns:1fr;gap:36px}
      .gd-step.wide .gd-visual{align-items:stretch}
      .gd-visual{display:flex;flex-direction:column;align-items:center;gap:14px;min-width:0}
      .gd-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
      .gd-chip{display:inline-flex;align-items:center;gap:8px;padding:9px 16px;border-radius:999px;background:${ISLAND_SOFT};border:1.5px solid ${ISLAND_BORDER};color:${ISLAND_INK};font-family:${sora};font-weight:600;font-size:13px;text-decoration:none;cursor:pointer;transition:border-color .2s,transform .2s}
      .gd-chip:hover{border-color:${AMBER};transform:translateY(-1px)}
      .gd-chip b{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:${AMBER};color:${NAVY};font-size:11px}
      .gd-cards{display:grid;gap:14px}
      .gd-2{grid-template-columns:repeat(2,minmax(0,1fr))}
      .gd-3{grid-template-columns:repeat(3,minmax(0,1fr))}
      .gd-4{grid-template-columns:repeat(4,minmax(0,1fr))}
      .gd-faq{border:1.5px solid ${ISLAND_BORDER};border-radius:14px;background:${ISLAND_SOFT};overflow:hidden}
      .gd-faq summary{list-style:none;cursor:pointer;padding:18px 20px;font-family:${sora};font-weight:600;font-size:15px;color:${ISLAND_INK};display:flex;justify-content:space-between;gap:16px;align-items:center}
      .gd-faq summary::-webkit-details-marker{display:none}
      .gd-faq summary::after{content:"+";font-size:22px;line-height:1;color:${AMBER};transition:transform .2s}
      .gd-faq[open] summary::after{transform:rotate(45deg)}
      .gd-faq[open]{border-color:${mix("amber", 60)}}
      .gd-faq .gd-ans{padding:0 20px 18px;font-size:14.5px;line-height:1.7;color:${LGREY}}
      .gd-scan{position:absolute;left:10%;right:10%;height:3px;border-radius:3px;background:${AMBER};box-shadow:0 0 14px ${AMBER};animation:scanLine 2.2s ease-in-out infinite alternate}
      .gd-hint{display:none;font-size:12.5px;color:${LGREY};text-align:center;font-family:${sora};font-weight:600}
      @media (max-width:900px){.gd-4{grid-template-columns:repeat(2,minmax(0,1fr))}.gd-3{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media (max-width:767px){
        .gd-pan{overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:14px;padding-bottom:6px}
        .gd-pan>*{min-width:760px}
        .gd-hint{display:block}
        .gd-legend-cols{grid-template-columns:1fr !important}
        .gd-chip{padding:8px 12px;font-size:12.5px}
        .gd-step{grid-template-columns:1fr;padding:44px 0}
        .gd-step.flip .gd-text{order:0}
        .gd-2,.gd-3,.gd-4{grid-template-columns:1fr}
      }
    `}</style>
  );
}

/* ───────────────────────── header + jump nav ───────────────────────── */
export function GuideHeader({ badge, title, sub }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 40 }}>
      <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
        <span style={{ color: AMBER, fontSize: 13, fontWeight: 600, fontFamily: sora }}>{badge}</span>
      </div>
      <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", color: INK, marginBottom: 16, lineHeight: 1.1 }}>
        {title}
      </h2>
      <p style={{ fontSize: 17, color: LGREY, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>{sub}</p>
    </div>
  );
}

export function Label({ children, mb = 20 }) {
  return (
    <div style={{ textAlign: "center", fontFamily: sora, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: LGREY, marginBottom: mb }}>
      {children}
    </div>
  );
}

export function JumpNav({ items }) {
  const go = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav aria-label="In this guide">
      <Label mb={14}>In this guide</Label>
      <div className="gd-chips">
        {items.map((it, i) => (
          <a key={it.id} href={`#${it.id}`} onClick={go(it.id)} className="gd-chip">
            <b>{i + 1}</b>{it.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ───────────────────────── a guide step ───────────────────────── */
export function Step({ id, n, kicker, title, intro, children, visual, flip = false, first = false, wide = false }) {
  return (
    <div id={id} className={`gd-step${flip ? " flip" : ""}${first ? " first" : ""}${wide ? " wide" : ""}`}>
      <Reveal className="gd-text">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <span style={{ width: 36, height: 36, borderRadius: "50%", background: AMBER, color: NAVY, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: sora, fontWeight: 800, fontSize: 15, flex: "none" }}>{n}</span>
          <span style={{ fontFamily: sora, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: LGREY, fontWeight: 600 }}>{kicker}</span>
        </div>
        <h3 style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(22px,2.6vw,30px)", color: INK, lineHeight: 1.15, marginBottom: 12 }}>{title}</h3>
        <p style={{ fontSize: 16, color: LGREY, lineHeight: 1.7 }}>{intro}</p>
        {children}
      </Reveal>
      <Reveal className="gd-visual" delay={0.1}>{visual}</Reveal>
    </div>
  );
}

/** numbered micro-steps: "do this, then this" */
export function Do({ items }) {
  return (
    <ol style={{ listStyle: "none", padding: 0, margin: "22px 0 0", display: "grid", gap: 12 }}>
      {items.map((t, i) => (
        <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, lineHeight: 1.6, color: ISLAND_INK }}>
          <span style={{ flex: "none", width: 24, height: 24, borderRadius: 8, background: mix("amber", 30), color: INK, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: sora, fontWeight: 700, fontSize: 12, marginTop: 1 }}>{i + 1}</span>
          <span>{t}</span>
        </li>
      ))}
    </ol>
  );
}

export function Tip({ label = "Tip", tone = "amber", children }) {
  const c = tone === "green" ? GREEN : AMBER;
  return (
    <div style={{ marginTop: 20, padding: "14px 16px", borderRadius: 12, background: mix(tone === "green" ? "green" : "amber", 12), borderLeft: `3px solid ${c}` }}>
      <div style={{ fontFamily: sora, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: INK, fontWeight: 700, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 14, lineHeight: 1.65, color: ISLAND_INK }}>{children}</div>
    </div>
  );
}

/** numbered legend that pairs with <ImageWithSpots/> */
export function Legend({ items, cols = 1 }) {
  return (
    <ol className={cols > 1 ? "gd-legend-cols" : undefined} style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`, gap: "12px 24px" }}>
      {items.map((it) => (
        <li key={it.n} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ flex: "none", width: 24, height: 24, borderRadius: "50%", background: AMBER, color: NAVY, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: sora, fontWeight: 800, fontSize: 12 }}>{it.n}</span>
          <span style={{ fontSize: 14.5, lineHeight: 1.55, color: LGREY }}>
            <b style={{ color: INK, fontFamily: sora, fontWeight: 700 }}>{it.title}</b> — {it.desc}
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ───────────────────────── imagery ───────────────────────── */
/** A real screenshot with numbered markers positioned in % of the image. */
export function ImageWithSpots({ src, alt, spots = [], marker = 26, style = {} }) {
  return (
    <div style={{ position: "relative", lineHeight: 0, ...style }}>
      <img src={src} alt={alt} loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
      {spots.map((s) => (
        <span
          key={s.n}
          aria-hidden="true"
          style={{
            position: "absolute", left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%,-50%)",
            width: marker, height: marker, borderRadius: "50%", background: AMBER, color: NAVY,
            border: "2px solid #fff", boxShadow: "0 2px 10px rgba(0,0,0,.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: sora, fontWeight: 800, fontSize: marker * 0.46, lineHeight: 1,
          }}
        >{s.n}</span>
      ))}
    </div>
  );
}

export function PhoneFrame({ children, width = 250, label }) {
  return (
    <figure style={{ margin: 0, width: "100%", maxWidth: width, textAlign: "center" }}>
      <div style={{ background: "#0B0B14", borderRadius: 38, padding: 8, boxShadow: "0 24px 60px rgba(26,26,46,.28), 0 0 0 1px rgba(255,255,255,.06) inset" }}>
        <div style={{ borderRadius: 30, overflow: "hidden", background: "#fff", position: "relative" }}>{children}</div>
      </div>
      {label && <figcaption style={{ marginTop: 12, fontSize: 12.5, color: LGREY, fontFamily: sora, fontWeight: 600 }}>{label}</figcaption>}
    </figure>
  );
}

export function BrowserFrame({ children, label = "Merchant dashboard", maxWidth = 520 }) {
  return (
    <div style={{ width: "100%", maxWidth, borderRadius: 14, overflow: "hidden", border: `1.5px solid ${ISLAND_BORDER}`, boxShadow: "0 18px 50px rgba(26,26,46,.16)", background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "10px 14px", background: "#F1F2F5", borderBottom: `1px solid ${ISLAND_BORDER}` }}>
        {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => <i key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "block" }} />)}
        <span style={{ marginLeft: 10, flex: 1, textAlign: "center", fontSize: 11.5, color: "#6B7280", fontFamily: sora, fontWeight: 600 }}>{label}</span>
        <span style={{ width: 40 }} />
      </div>
      {children}
    </div>
  );
}

/* ───────────────────────── status tracker (vertical timeline) ───────────────────────── */
export function StatusTrack({ items }) {
  const halo = { green: mix("green", 22), red: "rgba(231,76,60,.22)", amber: mix("amber", 28) };
  return (
    <div role="list" style={{ width: "100%", maxWidth: 380, textAlign: "left", background: "#fff", border: `1.5px solid ${ISLAND_BORDER}`, borderRadius: 18, padding: "22px 24px", boxShadow: "0 18px 50px rgba(26,26,46,.12)" }}>
      {items.map((it, i) => {
        const tone = it.tone === "green" ? "green" : it.tone === "red" ? "red" : "amber";
        const c = tone === "green" ? GREEN : tone === "red" ? "#E74C3C" : AMBER;
        const last = i === items.length - 1;
        return (
          <div key={it.label} role="listitem" style={{ display: "flex", gap: 14 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ width: 14, height: 14, borderRadius: "50%", background: c, boxShadow: `0 0 0 4px ${halo[tone]}`, marginTop: 4, flex: "none" }} />
              {!last && <span style={{ flex: 1, width: 2, background: ISLAND_BORDER, margin: "6px 0" }} />}
            </div>
            <div style={{ paddingBottom: last ? 0 : 20 }}>
              <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 15, color: INK }}>{it.label}</div>
              <div style={{ fontSize: 13.5, color: LGREY, lineHeight: 1.5, marginTop: 2 }}>{it.sub}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ───────────────────────── checklist card ───────────────────────── */
export function ChecklistCard({ title, items, icon: Icon }) {
  return (
    <div style={{ background: ISLAND_SOFT, border: `1.5px solid ${ISLAND_BORDER}`, borderRadius: 18, padding: "24px 26px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, fontFamily: sora, fontWeight: 700, fontSize: 16, color: INK }}>
        {Icon && <Icon size={20} color={AMBER} aria-hidden="true" />}{title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
        {items.map((t, i) => (
          <li key={i} style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.55, color: ISLAND_INK }}>
            <span style={{ flex: "none", width: 18, height: 18, borderRadius: 6, border: `2px solid ${AMBER}`, marginTop: 2 }} aria-hidden="true" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────────────────── FAQ + CTA ───────────────────────── */
export function Faq({ items }) {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 820, margin: "0 auto" }}>
      {items.map((it) => (
        <details key={it.q} className="gd-faq">
          <summary>{it.q}</summary>
          <div className="gd-ans">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

export function GuideCta({ title, sub, children, switchLabel, onSwitch }) {
  return (
    <div style={{ background: `linear-gradient(135deg, ${mix("amber", 22)}, ${mix("amber", 8)})`, border: `1.5px solid ${mix("amber", 40)}`, borderRadius: 24, padding: "clamp(32px,5vw,56px) clamp(20px,4vw,40px)", textAlign: "center", marginTop: 72 }}>
      <h3 style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(24px,3vw,34px)", color: INK, marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 16, color: LGREY, maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.7 }}>{sub}</p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>{children}</div>
      {onSwitch && (
        <button onClick={onSwitch} style={{ marginTop: 26, background: "none", border: "none", cursor: "pointer", fontFamily: sora, fontWeight: 600, fontSize: 14, color: INK, textDecoration: "underline", textUnderlineOffset: 4 }}>
          {switchLabel}
        </button>
      )}
    </div>
  );
}

export const ghostBtn = {
  background: "transparent", color: ISLAND_INK, border: `1.5px solid ${ISLAND_BORDER}`, borderRadius: 999,
  padding: "16px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer", textDecoration: "none",
  fontFamily: sora, display: "inline-flex", alignItems: "center", gap: 8,
};
export const primaryBtn = { border: "none", borderRadius: 999, padding: "16px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: sora };

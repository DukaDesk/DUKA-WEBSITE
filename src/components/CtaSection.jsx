import { Reveal } from "./ui/Reveal";
import { NAVY, AMBER, sora, inter } from "../constants";

export function CtaSection({ onWaitlist }) {
  return (
    <section data-pad="wide" style={{ background: AMBER, color: NAVY, padding: "96px 56px" }}>
      <Reveal>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", maxWidth: 1080, margin: "0 auto" }}>
          <div>
            <span style={{ fontFamily: sora, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.7 }}>
              Free to start
            </span>
            <h2 style={{ fontFamily: sora, fontWeight: 800, fontSize: "clamp(34px,4.6vw,64px)", lineHeight: 0.98, letterSpacing: "-0.03em", margin: "16px 0 0" }}>
              Your desk
              <br />
              live within 24 hours.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
            <p style={{ fontFamily: inter, fontSize: 16, lineHeight: 1.7, margin: 0, maxWidth: 340, opacity: 0.82 }}>
              No card, no commission, no developer. Just your products and a code your customers can scan.
            </p>
            <button
              onClick={onWaitlist}
              className="btn-waitlist"
              style={{ fontFamily: sora, border: "none", borderRadius: 999, padding: "18px 30px", fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}
            >
              Create my app
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
import { Heart, ShoppingCart, Smartphone, UserRound } from "lucide-react";
import { StorySection } from "./StorySection";
import { AMBER, BORDER, DOCS_URL, INK, LGREY, NAVY, SURFACE, WHITE, sora, mix } from "../constants";

const APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL;
const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL;
const STORE_URL = PLAY_STORE_URL || APP_STORE_URL;

const POINTS = [
  { icon: Smartphone, title: "Save your storage", desc: "One app instead of dozens. No more app clutter." },
  { icon: UserRound, title: "One account, everywhere", desc: "Sign in once and open any business on DukaDesk." },
  { icon: ShoppingCart, title: "All in one place", desc: "Discover, scan, order, book, message and pay without switching apps." },
];

const BUSINESSES = [
  ["Mama's Kitchen", "Food · 0.3 km"],
  ["Grace Pharmacy", "Health · 0.5 km"],
  ["Glow Beauty Studio", "Beauty & Salon"],
];

function ExplorerVisual() {
  return (
    <div style={{ position: "relative", maxWidth: 400, margin: "0 auto" }}>
      <div style={{ width: 264, margin: "0 auto", background: "#0D0D1A", borderRadius: 40, padding: 10, boxShadow: "0 30px 70px rgba(26,26,46,.22)" }}>
        <div style={{ background: WHITE, borderRadius: 32, overflow: "hidden", minHeight: 430 }}>
          <div style={{ background: NAVY, padding: "30px 18px 18px", color: WHITE }}>
            <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 19 }}>Your businesses</div>
            <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.65)", marginTop: 3 }}>One account · all in one app</div>
          </div>
          <div style={{ padding: "6px 16px" }}>
            {BUSINESSES.map(([name, meta], i) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: 11, padding: "13px 0", borderBottom: i < BUSINESSES.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                <span style={{ width: 40, height: 40, borderRadius: 12, background: NAVY, color: AMBER, fontFamily: sora, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  {name[0]}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 13, color: INK }}>{name}</div>
                  <div style={{ fontSize: 11.5, color: LGREY }}>{meta}</div>
                </div>
                <Heart size={16} fill={AMBER} color={AMBER} aria-hidden="true" />
              </div>
            ))}
          </div>
          <div style={{ margin: "12px 16px 18px", background: mix("amber", 18), borderRadius: 14, padding: "12px 14px", textAlign: "center", fontFamily: sora, fontWeight: 700, fontSize: 12, color: INK }}>
            One app. Every business.
          </div>
        </div>
      </div>
      <div className="story-float" style={{ position: "absolute", right: -6, top: 58, background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "12px 15px", boxShadow: "0 18px 40px rgba(26,26,46,.14)" }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: LGREY }}>Storage saved</div>
        <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 15, color: INK, marginTop: 2 }}>1 app, not 12</div>
      </div>
    </div>
  );
}

export function CustomerSection({ active, onWaitlist }) {
  return (
    <StorySection
      id="section-customer"
      active={active}
      background={SURFACE}
      eyebrow="For explorers"
      title="Every business you love. One app."
      story="Stop installing an app for every shop. DukaDesk keeps every business in one place, with one account and one home screen."
      points={POINTS}
      primary={STORE_URL ? { label: "Get the app", href: STORE_URL } : { label: "Get the app", onClick: onWaitlist }}
      secondary={{ label: "Read the explorer guide", href: `${DOCS_URL}/guides/explorer` }}
      visual={<ExplorerVisual />}
      flip
    />
  );
}

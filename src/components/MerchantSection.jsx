import { CheckCircle2, LayoutDashboard, PenTool, Smartphone } from "lucide-react";
import { StorySection } from "./StorySection";
import { AMBER, BORDER, CREAM, DOCS_URL, GREEN, INK, NAVY, SURFACE, sora } from "../constants";
import editorShot from "../assets/app_editor_merchant.jpeg";

const POINTS = [
  { icon: PenTool, title: "Launch without code", desc: "Design your app visually, then publish when it is ready." },
  { icon: Smartphone, title: "Looks like you", desc: "Your logo, colours, products and pages, not a generic template." },
  { icon: LayoutDashboard, title: "One place to run it", desc: "Orders, customers, products and payments in one dashboard." },
];

function BuilderVisual() {
  return (
    <div style={{ position: "relative", maxWidth: 480, margin: "0 auto" }}>
      <div style={{ background: "#0D0D1A", borderRadius: 26, padding: 10, boxShadow: "0 30px 70px rgba(26,26,46,.18)" }}>
        <img
          src={editorShot}
          alt="The DukaDesk app editor with a live phone preview"
          loading="lazy"
          style={{ display: "block", width: "100%", borderRadius: 18, objectFit: "cover", aspectRatio: "4 / 3" }}
        />
      </div>
      <div className="story-float" style={{ position: "absolute", left: -18, bottom: 26, background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "12px 16px", boxShadow: "0 18px 40px rgba(26,26,46,.14)", display: "flex", alignItems: "center", gap: 10 }}>
        <CheckCircle2 size={20} color={GREEN} aria-hidden="true" />
        <div>
          <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 13, color: INK }}>Published</div>
          <div style={{ fontSize: 11.5, color: GREEN, fontWeight: 600 }}>Your app is live</div>
        </div>
      </div>
      <div className="story-float" style={{ position: "absolute", right: -14, top: 22, background: AMBER, color: NAVY, borderRadius: 12, padding: "9px 14px", fontFamily: sora, fontWeight: 800, fontSize: 11, letterSpacing: "0.08em" }}>
        YOUR BRAND
      </div>
    </div>
  );
}

export function MerchantSection({ active, onWaitlist }) {
  return (
    <StorySection
      id="section-merchant"
      active={active}
      background={CREAM}
      eyebrow="For business owners"
      title="Your business, in your customers' pocket."
      story="You have built the business. Now give it a home customers can open in one tap. DukaDesk gives you a branded app experience, without the cost of building one."
      points={POINTS}
      primary={{ label: "Start building free", onClick: onWaitlist }}
      secondary={{ label: "Read the builder guide", href: `${DOCS_URL}/guides/merchant` }}
      visual={<BuilderVisual />}
    />
  );
}

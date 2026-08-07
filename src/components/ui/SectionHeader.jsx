import { FadeIn } from "./FadeIn";
import { Badge } from "./Badge";
import { NAVY, sora, LGREY } from "../../constants";

export function SectionHeader({ badge, title, subtitle, light = false, badgeVariant = "amber" }) {
  const color = light ? "#FFFFFF" : NAVY;
  const subColor = light ? "rgba(255,255,255,0.55)" : LGREY;
  return (
    <FadeIn>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ marginBottom: 16 }}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
        <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color, marginBottom: 16 }}>{title}</h2>
        <p style={{ fontSize: 17, color: subColor, maxWidth: 520, margin: "0 auto" }}>{subtitle}</p>
      </div>
    </FadeIn>
  );
}
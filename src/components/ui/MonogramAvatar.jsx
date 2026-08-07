import { NAVY, AMBER, sora } from "../../constants";

const PALETTE = ["#2ECC71", AMBER, "#7C3AED", "#E74C3C", "#0D9488", "#3B82F6", "#D97706"];

function hashName(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h;
}

export function MonogramAvatar({ name, size = 40, color, radius = "50%", fontSize }) {
  const c = color || PALETTE[hashName(name) % PALETTE.length];
  const initials = name
    .split(" ")
    .map(w => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div aria-hidden="true" style={{
      width: size, height: size,
      background: `linear-gradient(135deg, ${c}, ${c}BB)`,
      borderRadius: radius,
      display: "flex", alignItems: "center", justifyContent: "center",
      color: NAVY, fontFamily: sora, fontWeight: 800,
      fontSize: fontSize || size * 0.36,
      boxShadow: `inset 0 0 0 1px rgba(26,26,46,0.08)`,
    }}>
      {initials}
    </div>
  );
}
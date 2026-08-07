import { AMBER, GREEN } from "../../constants";

const variants = {
  amber: { bg: `${AMBER}18`, color: AMBER },
  green: { bg: `${GREEN}18`, color: GREEN },
  outline: { bg: "transparent", color: AMBER, border: `1px solid ${AMBER}44` },
  dark: { bg: "rgba(255,255,255,0.1)", color: "#FFFFFF" },
};

export function Badge({ variant = "amber", style = {}, children }) {
  return (
    <div style={{
      display: "inline-block",
      borderRadius: 999,
      padding: "6px 16px",
      fontSize: 13,
      fontWeight: 600,
      ...variants[variant],
      ...style,
    }}>
      {children}
    </div>
  );
}
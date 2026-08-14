import { AMBER, GREEN, ISLAND_SOFT, ISLAND_INK, mix } from "../../constants";

const variants = {
  amber: { bg: mix("amber", 18), color: AMBER },
  green: { bg: mix("green", 18), color: GREEN },
  outline: { bg: "transparent", color: AMBER, border: `1px solid ${mix("amber", 44)}` },
  dark: { bg: ISLAND_SOFT, color: ISLAND_INK },
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
import { NAVY, AMBER, ISLAND_INK, ISLAND_BORDER, ISLAND_SOFT, EASE } from "../../constants";

const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  border: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  fontWeight: 700,
  whiteSpace: "nowrap",
  transition: `transform ${EASE} 0.2s, background ${EASE} 0.2s, border-color ${EASE} 0.2s`,
};

const sizes = {
  sm: { padding: "8px 18px", fontSize: 13, borderRadius: 20 },
  md: { padding: "14px 32px", fontSize: 16, borderRadius: 28 },
  lg: { padding: "16px 36px", fontSize: 16, borderRadius: 28 },
};

const variants = {
  primary: { background: AMBER, color: NAVY },
  ghost: { background: "none", color: ISLAND_INK, border: `1px solid ${ISLAND_BORDER}` },
  outline: { background: ISLAND_SOFT, color: ISLAND_INK, border: `1px solid ${ISLAND_BORDER}` },
};

export function Button({ variant = "primary", size = "md", href, onClick, style = {}, children, ...rest }) {
  const Tag = href ? "a" : "button";
  const el = (
    <Tag
      href={href}
      onClick={onClick}
      onMouseOver={e => { e.currentTarget.style.transform = "scale(1.03)"; }}
      onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseDown={e => { e.currentTarget.style.transform = "scale(0.98)"; }}
      onMouseUp={e => { e.currentTarget.style.transform = "scale(1.03)"; }}
      style={{ ...base, ...sizes[size], ...variants[variant], textDecoration: href ? "none" : "inherit", ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
  return el;
}
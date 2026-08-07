import { CHAR, sora } from "../../constants";

export function MerchantWordmark({ name, size = 14, color = CHAR, style = {} }) {
  return (
    <span style={{ fontFamily: sora, fontWeight: 700, fontSize: size, color, letterSpacing: "0.5px", ...style }}>
      {name}
    </span>
  );
}
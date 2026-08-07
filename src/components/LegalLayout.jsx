import { Link } from "react-router-dom";
import { NAVY, AMBER, WHITE, CHAR, LGREY, BORDER, sora, inter } from "../constants";

export function LegalLayout({ children }) {
  return (
    <div style={{ paddingTop: 100, background: WHITE, minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 80px" }}>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: AMBER, fontSize: 14, fontWeight: 600, textDecoration: "none", marginBottom: 32 }}>
          ← Back to Home
        </Link>
        {children}
      </div>
      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "24px", textAlign: "center", fontSize: 13, color: LGREY }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 8 }}>
          <Link to="/" style={{ color: LGREY, textDecoration: "none" }}>Home</Link>
          <Link to="/privacy" style={{ color: LGREY, textDecoration: "none" }}>Privacy</Link>
          <Link to="/terms" style={{ color: LGREY, textDecoration: "none" }}>Terms</Link>
        </div>
        <span>© 2025 DukaDesk Technologies Ltd. Lagos, Nigeria.</span>
      </footer>
    </div>
  );
}
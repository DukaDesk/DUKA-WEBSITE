import { Phone, Mail, Clock } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { NAVY, AMBER, CREAM, BORDER, LGREY, WHITE, sora, inter } from "../constants";

const SOCIALS = [
  { label: "ig", href: "https://www.instagram.com/getdukadesk", aria: "DukaDesk on Instagram" },
  { label: "fb", href: "https://www.facebook.com/share/17wTfvgC7W/", aria: "DukaDesk on Facebook" },
  { label: "tt", href: "https://www.tiktok.com/@getdukadesk6", aria: "DukaDesk on TikTok" },
  { label: "𝕏", href: "https://x.com/getdukadesk", aria: "DukaDesk on X" },
  { label: "in", href: "https://www.linkedin.com/company/137513985/", aria: "DukaDesk on LinkedIn" },
];

export function Contact() {
  return (
    <section id="contact" data-pad="wide" style={{ padding: "100px 80px 80px", background: "white", minHeight: "100vh" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Contact DukaDesk</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: NAVY, marginBottom: 16 }}>
            We're here to help.
          </h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 520, margin: "0 auto" }}>
            Questions about DukaDesk, your desk, or anything else — reach us directly on our official channels below.
          </p>
        </div>
      </FadeIn>

      <div data-grid="3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, maxWidth: 960, margin: "0 auto" }}>
        {[
          {
            icon: Phone,
            label: "Call or WhatsApp",
            value: "+234 805 889 9248",
            href: "tel:+2348058899248",
            hint: "Tap to call us directly",
          },
          {
            icon: Mail,
            label: "Email us",
            value: "getdukadesk@gmail.com",
            href: "mailto:getdukadesk@gmail.com",
            hint: "We reply to every message",
          },
          {
            icon: Clock,
            label: "Support hours",
            value: "Mon – Sat, 9am – 6pm WAT",
            href: null,
            hint: "After hours? Send a message and we'll get back to you",
          },
        ].map((c, i) => {
          const Icon = c.icon;
          const inner = (
            <>
              <div style={{ width: 52, height: 52, background: `${AMBER}18`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon size={24} color={AMBER} aria-hidden="true" />
              </div>
              <div style={{ fontFamily: sora, fontWeight: 600, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: LGREY, marginBottom: 8 }}>{c.label}</div>
              <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 17, color: NAVY, marginBottom: 6, wordBreak: "break-word" }}>{c.value}</div>
              <div style={{ fontSize: 13.5, color: LGREY, lineHeight: 1.6 }}>{c.hint}</div>
            </>
          );
          return (
            <FadeIn key={i} delay={i * 80}>
              {c.href ? (
                <a href={c.href} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ background: CREAM, borderRadius: 20, padding: "32px 28px", border: `1px solid ${BORDER}`, height: "100%", transition: "all 0.2s" }}
                    onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = `${AMBER}44`; }}
                    onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = BORDER; }}
                  >{inner}</div>
                </a>
              ) : (
                <div style={{ background: CREAM, borderRadius: 20, padding: "32px 28px", border: `1px solid ${BORDER}`, height: "100%" }}>{inner}</div>
              )}
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={250}>
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <div style={{ fontFamily: sora, fontWeight: 600, fontSize: 14, color: NAVY, marginBottom: 14 }}>Or find us on social</div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            {SOCIALS.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.aria} style={{ width: 38, height: 38, background: NAVY, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: WHITE, cursor: "pointer", transition: "all 0.2s", textDecoration: "none" }}
                onMouseOver={e => { e.currentTarget.style.background = AMBER; e.currentTarget.style.color = NAVY; }}
                onMouseOut={e => { e.currentTarget.style.background = NAVY; e.currentTarget.style.color = WHITE; }}
              >{s.label}</a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: LGREY, marginTop: 20, fontFamily: inter, maxWidth: 420, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            For partnership and media enquiries, email <strong style={{ color: AMBER }}>getdukadesk@gmail.com</strong>.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

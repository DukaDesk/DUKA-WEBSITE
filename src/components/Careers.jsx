import { useState } from "react";
import { FadeIn } from "./ui/FadeIn";
import { NAVY, AMBER, WHITE, CREAM, BORDER, CHAR, LGREY, GREEN, sora, inter } from "../constants";

export function Careers() {
  const roles = [
    { title: "Customer Care Specialist",    dept: "Support",    location: "Lagos · Remote", type: "Full-time", desc: "Be the first voice merchants and consumers hear when something goes wrong — and the reason they stay on DukaDesk.", skills: ["Excellent written & verbal communication", "Empathy and patience", "Problem-solving under pressure", "Experience with support tools (Freshdesk, Intercom)"] },
    { title: "Senior Mobile Engineer (Flutter)", dept: "Engineering", location: "Lagos · Remote", type: "Full-time", desc: "Build and maintain the consumer DukaDesk app — the QR scanner, mini-app renderer, and session experience.", skills: ["3+ years Flutter / Dart", "Strong state management experience", "Experience with camera/QR APIs", "Understanding of mobile performance"] },
    { title: "Product Designer",            dept: "Design",     location: "Lagos · Hybrid",  type: "Full-time", desc: "Own the end-to-end design of merchant-facing features — from the app builder wizard to analytics dashboards.", skills: ["Strong Figma skills", "Mobile-first design thinking", "Experience with B2B SaaS products", "User research background"] },
    { title: "Growth & Community Manager",  dept: "Growth",     location: "Lagos",           type: "Full-time", desc: "Grow the DukaDesk merchant community, run acquisition campaigns, and turn happy merchants into our best evangelists.", skills: ["Digital marketing experience", "Community building skills", "Experience in Nigerian SME market", "Data-driven mindset"] },
    { title: "Backend Engineer (Node.js)",  dept: "Engineering", location: "Remote",         type: "Full-time", desc: "Build the services that power merchant apps, QR systems, integrations, and the analytics pipeline.", skills: ["3+ years Node.js / TypeScript", "PostgreSQL & Redis experience", "REST API design", "Familiarity with microservices"] },
    { title: "Merchant Onboarding Specialist", dept: "Operations", location: "Lagos",       type: "Full-time", desc: "Guide new merchants through setup, help them launch their first app, and make sure they see value in the first 7 days.", skills: ["Consultative communication", "Patience with non-technical users", "Experience with SaaS onboarding", "Knowledge of Nigerian business landscape"] },
  ];

  const deptColors = { Support: "#2ECC71", Engineering: "#7C3AED", Design: AMBER, Growth: "#E74C3C", Operations: "#0D9488" };
  const [openRole, setOpenRole] = useState(null);
  const [applied, setApplied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", linkedin: "", why: "" });

  const apply = () => {
    if (!form.name || !form.email) return;
    setApplied(true);
    setTimeout(() => { setApplied(false); setOpenRole(null); setForm({ name: "", email: "", linkedin: "", why: "" }); }, 2500);
  };

  return (
    <section id="careers" style={{ padding: "100px 80px", background: CREAM }}>
      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
              <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>We're hiring</span>
            </div>
            <h2 style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: NAVY, marginBottom: 16, lineHeight: 1.1 }}>Help us put African businesses on mobile.</h2>
            <p style={{ fontSize: 17, color: LGREY, lineHeight: 1.7, marginBottom: 24 }}>We're a small team moving fast. If you care about making real tools for real Nigerian businesses — not hypothetical users — this is the right place.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Competitive naira salary", "Remote-friendly for most roles", "Health insurance", "Equity in an early-stage company", "Annual retreat"].map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: CHAR }}>
                  <span style={{ color: GREEN, fontWeight: 700 }}>✓</span>{b}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: NAVY, borderRadius: 24, padding: "36px 32px" }}>
            <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 20, color: WHITE, marginBottom: 8 }}>Don't see the right role?</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 20 }}>We always want to hear from people who care about what we're building. Send us your story.</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[["📧", "careers@dukadesk.com"], ["💬", "WhatsApp: +234 800 DukaDesk"], ["🌍", "dukadesk.com/careers"]].map(([icon, val]) => (
                <div key={val} style={{ display: "flex", alignItems: "center", gap: 10, color: WHITE, fontSize: 14 }}>
                  <span>{icon}</span><span style={{ color: AMBER }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
        {roles.map((role, i) => {
          const color = deptColors[role.dept] || NAVY;
          return (
            <FadeIn key={i} delay={i * 60}>
              <div style={{ background: WHITE, borderRadius: 18, padding: "28px 28px", border: `1.5px solid ${BORDER}`, transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <span style={{ background: `${color}18`, color, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 12, marginBottom: 10, display: "inline-block" }}>{role.dept}</span>
                    <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 17, color: NAVY }}>{role.title}</div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 12 }}>
                    <div style={{ fontSize: 12, color: LGREY }}>{role.location}</div>
                    <div style={{ background: "#F0FDF4", color: "#065F46", fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10, marginTop: 4 }}>{role.type}</div>
                  </div>
                </div>
                <div style={{ fontSize: 14, color: LGREY, lineHeight: 1.65, marginBottom: 16 }}>{role.desc}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {role.skills.slice(0, 3).map((s, si) => (
                    <span key={si} style={{ background: CREAM, color: CHAR, fontSize: 11, padding: "3px 10px", borderRadius: 10, border: `1px solid ${BORDER}` }}>{s}</span>
                  ))}
                </div>
                <button onClick={() => setOpenRole(role)} style={{ background: color, color: WHITE, border: "none", borderRadius: 20, padding: "9px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: sora }}>Apply Now →</button>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {openRole && (
        <>
          <div onClick={() => setOpenRole(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 600 }} />
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: WHITE, borderRadius: 24, padding: 40, width: 520, zIndex: 601, boxShadow: "0 32px 80px rgba(0,0,0,0.25)", maxHeight: "90vh", overflowY: "auto" }}>
            {applied ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 24, color: NAVY, marginBottom: 8 }}>Application sent!</div>
                <div style={{ fontSize: 15, color: LGREY }}>We'll be in touch within 3 business days.</div>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 22, color: NAVY, marginBottom: 4 }}>Apply: {openRole.title}</div>
                  <div style={{ fontSize: 14, color: LGREY }}>{openRole.location} · {openRole.type}</div>
                </div>
                {[["Full Name *", "name", "Ada Okafor"], ["Email Address *", "email", "ada@email.com"], ["LinkedIn Profile", "linkedin", "linkedin.com/in/adaokafor"]].map(([label, key, ph]) => (
                  <div key={key} style={{ marginBottom: 14 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: NAVY, marginBottom: 6 }}>{label}</label>
                    <input value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} placeholder={ph} style={{ width: "100%", height: 48, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0 14px", fontSize: 14, fontFamily: inter, outline: "none", boxSizing: "border-box" }} onFocus={e => e.target.style.borderColor = AMBER} onBlur={e => e.target.style.borderColor = BORDER} />
                  </div>
                ))}
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: NAVY, marginBottom: 6 }}>Why DukaDesk? *</label>
                  <textarea value={form.why} onChange={e => setForm(f => ({ ...f, why: e.target.value }))} placeholder="Tell us why this role and why now..." style={{ width: "100%", height: 100, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "12px 14px", fontSize: 14, fontFamily: inter, outline: "none", resize: "none", boxSizing: "border-box" }} onFocus={e => e.target.style.borderColor = AMBER} onBlur={e => e.target.style.borderColor = BORDER} />
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button onClick={apply} style={{ flex: 1, background: AMBER, color: NAVY, border: "none", borderRadius: 24, height: 50, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: sora }}>Submit Application →</button>
                  <button onClick={() => setOpenRole(null)} style={{ background: "none", border: `1px solid ${BORDER}`, borderRadius: 24, height: 50, padding: "0 20px", fontSize: 14, cursor: "pointer", color: LGREY }}>Cancel</button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
}

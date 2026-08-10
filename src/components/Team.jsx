import { FadeIn } from "./ui/FadeIn";
import { MonogramAvatar } from "./ui/MonogramAvatar";
import { NAVY, AMBER, CREAM, BORDER, LGREY, sora } from "../constants";

export function Team() {
  const team = [
    { name: "Adaeze Nwachukwu", role: "Co-Founder & CEO", bio: "Former fintech product lead at Flutterwave. 8 years building products for African markets.", color: "#7C3AED" },
    { name: "Emeka Eze",        role: "Co-Founder & CTO", bio: "Ex-senior engineer at Andela. Built scalable infrastructure for 3 funded Nigerian startups.", color: NAVY },
    { name: "Fatima Bello",     role: "Head of Design",   bio: "UX designer with 6 years crafting mobile experiences for SMEs across West Africa.", color: AMBER },
    { name: "Chukwuemeka Obi",  role: "Head of Growth",   bio: "Grew two Lagos-based SaaS products from zero to 50,000 users. Obsessed with Nigerian SME distribution.", color: "#2ECC71" },
    { name: "Ngozi Aliyu",    role: "Head of Operations", bio: "Ran operations across 3 African markets for a global logistics company. Keeps DukaDesk running at 99.9%.", color: "#E74C3C" },
    { name: "Ibrahim Sani",     role: "Head of Customer Success", bio: "Former community manager who turned 1,000 unhappy merchants into DukaDesk's loudest ambassadors.", color: "#0D9488" },
  ];

  return (
    <section id="team" data-pad="wide" style={{ padding: "100px 80px", background: "white" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: `${AMBER}18`, borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>The people behind DukaDesk</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: NAVY, marginBottom: 16 }}>Built by Nigerians,<br />for independent desks.</h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 520, margin: "0 auto" }}>We're not a Silicon Valley company parachuting into Africa. We grew up with these desks. We know the problems firsthand.</p>
        </div>
      </FadeIn>
      <div data-grid="3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {team.map((person, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div style={{ background: CREAM, borderRadius: 20, padding: "32px 28px", border: `1px solid ${BORDER}`, transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <MonogramAvatar name={person.name} size={64} color={person.color} radius={18} fontSize={24} />
              <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: NAVY, marginBottom: 4, marginTop: 16 }}>{person.name}</div>
              <div style={{ display: "inline-block", background: `${person.color}18`, borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600, color: person.color, marginBottom: 12 }}>{person.role}</div>
              <div style={{ fontSize: 14, color: LGREY, lineHeight: 1.7 }}>{person.bio}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={200}>
        <div data-grid="values" style={{ marginTop: 72, background: NAVY, borderRadius: 28, padding: "52px 60px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48 }}>
          {[
            { title: "Built in Nigeria", body: "Our HQ is in Lagos. Every product decision starts with 'does this work for a merchant in Balogun market?'" },
            { title: "Merchant-first", body: "We don't take a cut of your sales. We don't run ads on your app. Your success is our only business model." },
            { title: "Trust & safety", body: "Every app gets reviewed before going live. Every report gets investigated. DukaDesk stays safe because we care." },
          ].map((v, i) => (
            <div key={i}>
              <div style={{ width: 8, height: 8, background: AMBER, borderRadius: "50%", marginBottom: 16 }} />
              <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: "white", marginBottom: 10 }}>{v.title}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{v.body}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

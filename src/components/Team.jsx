import { FadeIn } from "./ui/FadeIn";
import { MonogramAvatar } from "./ui/MonogramAvatar";
import { NAVY, AMBER, CREAM, SURFACE, BORDER, LGREY, INK, ISLAND, ISLAND_INK, ISLAND_MUTE, sora, tint, mix } from "../constants";

export function Team() {
  const areas = [
    { name: "Customer app", role: "Shared mobile experience", bio: "Customers create one DukaDesk account to explore businesses and open approved business experiences.", color: "#7C3AED" },
    { name: "Merchant portal", role: "Dashboard & visual editor", bio: "Merchants configure branding and pages, then manage business activity from the web dashboard.", color: NAVY },
    { name: "Commerce", role: "Products & orders", bio: "Add product catalogues, manage stock and follow customer orders.", color: AMBER },
    { name: "Services", role: "Bookings & forms", bio: "Use service workflows such as bookings and forms when enabled for the business.", color: "#2ECC71" },
    { name: "Publishing", role: "Review & discovery", bio: "Submit a configured business experience for review before it becomes available to customers.", color: "#E74C3C" },
    { name: "Plans", role: "Features & limits", bio: "Starter, Business and Enterprise plans define the features and limits available to each account.", color: "#0D9488" },
  ];

  return (
    <section id="team" data-pad="wide" style={{ padding: "100px 80px", background: SURFACE }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Inside the platform</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: INK, marginBottom: 16 }}>One app for customers.<br />Tools for merchants.</h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 520, margin: "0 auto" }}>DukaDesk combines a shared customer app with a merchant portal for setup, publishing and day-to-day business management.</p>
        </div>
      </FadeIn>
      <div data-grid="3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {areas.map((person, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div className="platform-card" style={{ background: CREAM, borderRadius: 20, padding: "32px 28px", border: `1px solid ${BORDER}`, transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <MonogramAvatar name={person.name} size={64} color={person.color} radius={18} fontSize={24} />
              <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: INK, marginBottom: 4, marginTop: 16 }}>{person.name}</div>
              <div style={{ display: "inline-block", background: tint(person.color, 18), borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600, color: person.color, marginBottom: 12 }}>{person.role}</div>
              <div style={{ fontSize: 14, color: LGREY, lineHeight: 1.7 }}>{person.bio}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={200}>
        <div data-grid="values" style={{ marginTop: 72, background: ISLAND, borderRadius: 28, padding: "52px 60px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48 }}>
          {[
            { title: "Configured by merchants", body: "Use the merchant portal to add business branding, pages and catalogue content." },
            { title: "Reviewed before publishing", body: "Submit your configured business experience for review before it is made available to customers." },
            { title: "Plan-based tools", body: "Features and limits vary by plan. Check the current plan details when setting up your account." },
          ].map((v, i) => (
            <div key={i}>
              <div style={{ width: 8, height: 8, background: AMBER, borderRadius: "50%", marginBottom: 16 }} />
              <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 18, color: ISLAND_INK, marginBottom: 10 }}>{v.title}</div>
              <div style={{ fontSize: 14, color: ISLAND_MUTE, lineHeight: 1.7 }}>{v.body}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

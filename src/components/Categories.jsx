import { FadeIn } from "./ui/FadeIn";
import { Tilt } from "./ui/Tilt";
import { UtensilsCrossed, ShoppingBag, Soup, ShoppingCart, Church, School, Dumbbell, CalendarCheck2, Briefcase, Zap, ArrowRight } from "lucide-react";
import { NAVY, INK, AMBER, CREAM, LGREY, sora, tint, mix } from "../constants";

const ICONS = [UtensilsCrossed, ShoppingBag, Soup, ShoppingCart, Church, School, Dumbbell, CalendarCheck2, Briefcase, Zap];

export function Categories() {
  const cats = [
    { id: "restaurant", name: "Restaurant", desc: "Accept orders online, manage tables, and track sales from one dashboard.", color: "#FFF8ED", accent: AMBER },
    { id: "retail", name: "Retail",  desc: "Manage inventory, payments, and customers without switching between apps.",       color: "#EDE9FE", accent: "#7C3AED" },
    { id: "food-vendor", name: "Food Vendor",desc: "Take orders, manage deliveries, and grow your catering desk.",           color: "#F0FDF4", accent: "#2ECC71" },
    { id: "grocery", name: "Grocery",    desc: "Track stock, manage online orders, and serve your community better.",              color: "#FEF2F2", accent: "#E74C3C" },
    { id: "church", name: "Church",     desc: "Manage events, receive tithes and offerings, and connect with your congregation.",               color: "#EFF6FF", accent: "#3B82F6" },
    { id: "school", name: "School",     desc: "Share timetables, collect fees, and send announcements to parents.",         color: "#FDF4FF", accent: "#A21CAF" },
    { id: "fitness", name: "Fitness",     desc: "Manage memberships, class schedules, and client check-ins in one place.",  color: "#F0FDF4", accent: "#2ECC71" },
    { id: "booking", name: "Booking",    desc: "Salons, clinics, and consultants — accept bookings and reduce no-shows.",            color: "#F0FDF4", accent: "#0D9488" },
    { id: "professional", name: "Professional",desc: "Lawyers, accountants, consultants — manage clients, billing and appointments.", color: "#FEF3C7", accent: "#D97706" },
    { id: "any-business", name: "Any Desk",desc: "Fully custom — your rules, your brand, your way of running a desk.",   color: tint(INK, 8), accent: INK },
  ];

  return (
    <section id="categories" data-pad="wide" style={{ padding: "100px 80px", background: CREAM }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Built for your industry</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: INK, marginBottom: 16 }}>Solutions for every desk</h2>
          <p style={{ fontSize: 17, color: LGREY, maxWidth: 500, margin: "0 auto" }}>Whether you run a restaurant, salon, church — or any kind of desk — DukaDesk is built the way you work.</p>
        </div>
      </FadeIn>
      <div data-grid="4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
        {cats.map((c, i) => {
          const CatIcon = ICONS[i];
          return (
          <FadeIn key={i} delay={i * 60}>
            <Tilt max={6}>
              <div id={c.id} style={{ background: c.color, borderRadius: 18, padding: "28px 24px", border: `1.5px solid ${c.accent}22`, cursor: "pointer", transition: "all 0.2s", height: "100%" }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = `0 16px 40px ${c.accent}20`; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: 48, height: 48, background: tint(c.accent, 18), borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <CatIcon size={26} color={c.accent} aria-hidden="true" />
                </div>
                <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: INK, marginBottom: 6 }}>{c.name}</div>
                <div style={{ fontSize: 13, color: LGREY, lineHeight: 1.5 }}>{c.desc}</div>
                <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ color: c.accent, fontWeight: 600, fontSize: 13 }}>Learn more</span>
                  <ArrowRight size={13} color={c.accent} aria-hidden="true" />
                </div>
              </div>
            </Tilt>
          </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

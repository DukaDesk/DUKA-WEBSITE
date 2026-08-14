import { FadeIn } from "./ui/FadeIn";
import {
  CreditCard, Landmark, MonitorSmartphone, ShoppingCart, Tags, CalendarCheck,
  Star, Bell, MessageCircle, MessageSquare, Mail, Smartphone, Camera,
  CalendarDays, Truck, Ticket,
} from "lucide-react";
import { ISLAND, ISLAND_INK, ISLAND_MUTE, ISLAND_SOFT, ISLAND_BORDER, AMBER, LGREY, sora, mix } from "../constants";

const ICONS = [
  CreditCard, CreditCard, Landmark, MonitorSmartphone,
  ShoppingCart, Tags, CalendarCheck, Star,
  Bell, MessageCircle, MessageSquare, Mail,
  Smartphone, Camera, CalendarDays, Truck,
  Ticket,
];

export function Integrations() {
  const integrations = [
    { icon: 0, name: "Paystack",    cat: "Payments" },
    { icon: 1, name: "Flutterwave", cat: "Payments" },
    { icon: 2, name: "Bank Transfer", cat: "Payments" },
    { icon: 3, name: "POS Terminal", cat: "Payments" },
    { icon: 4, name: "Product Cart",cat: "Commerce" },
    { icon: 5, name: "Discount Codes", cat: "Commerce" },
    { icon: 6, name: "Booking Calendar", cat: "Scheduling" },
    { icon: 7, name: "Loyalty Points",   cat: "Engagement" },
    { icon: 8, name: "Push Notifications", cat: "Engagement" },
    { icon: 9, name: "Messaging",   cat: "Communication" },
    { icon: 10, name: "WhatsApp",    cat: "Communication" },
    { icon: 11, name: "Email Campaigns", cat: "Marketing" },
    { icon: 12, name: "SMS Marketing", cat: "Marketing" },
    { icon: 13, name: "Instagram",   cat: "Marketing" },
    { icon: 14, name: "Google Calendar", cat: "Scheduling" },
    { icon: 15, name: "Delivery Zones", cat: "Logistics" },
    { icon: 16, name: "Event Tickets", cat: "Events" },
  ];

  return (
    <section data-pad="wide" style={{ padding: "100px 80px", background: ISLAND, overflow: "hidden" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: mix("amber", 18), borderRadius: 24, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: AMBER, fontSize: 13, fontWeight: 600 }}>Integration marketplace</span>
          </div>
          <h2 data-type="h2" style={{ fontFamily: sora, fontWeight: 800, fontSize: 48, color: ISLAND_INK, marginBottom: 16 }}>Add what you need.<br /><span style={{ color: AMBER }}>Leave out what you don't.</span></h2>
          <p style={{ fontSize: 17, color: ISLAND_MUTE, maxWidth: 480, margin: "0 auto" }}>Every integration is one click. No developer needed, no API keys to manage.</p>
        </div>
      </FadeIn>
      <div data-grid="integrations" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, maxWidth: 900, margin: "0 auto" }}>
        {integrations.map((int, i) => {
          const IntIcon = ICONS[int.icon];
          return (
          <FadeIn key={i} delay={i * 50}>
            <div style={{ background: ISLAND_SOFT, border: `1px solid ${ISLAND_BORDER}`, borderRadius: 14, padding: "18px 16px", transition: "all 0.2s", cursor: "default" }}
              onMouseOver={e => { e.currentTarget.style.background = "rgba(244,160,38,0.1)"; e.currentTarget.style.borderColor = mix("amber", 44); }}
              onMouseOut={e => { e.currentTarget.style.background = ISLAND_SOFT; e.currentTarget.style.borderColor = ISLAND_BORDER; }}
            >
              <IntIcon size={24} color={AMBER} style={{ display: "block", marginBottom: 8 }} aria-hidden="true" />
              <div style={{ fontWeight: 600, fontSize: 13, color: ISLAND_INK, marginBottom: 2 }}>{int.name}</div>
              <div style={{ fontSize: 11, color: LGREY }}>{int.cat}</div>
            </div>
          </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

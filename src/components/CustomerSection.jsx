import {
  Download, UserRound, ScanLine, ShoppingCart, UtensilsCrossed, Soup, GlassWater, ChevronLeft,
  Flag, ImagePlus, SendHorizontal, Heart, LifeBuoy, ShieldCheck, Star, QrCode,
} from "lucide-react";
import { AMBER, INK, LGREY, NAVY, ISLAND_SOFT, ISLAND_BORDER, sora, mix } from "../constants";
import {
  GuideStyles, GuideHeader, JumpNav, Label, Step, Do, Tip, Legend, ImageWithSpots, PhoneFrame,
  StatusTrack, Faq, GuideCta,
} from "./guide/GuideKit";

import exploreShot from "../assets/guide/app-explore.jpg";
import categoriesShot from "../assets/guide/app-categories-grid.jpg";

const APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL;
const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL;

/* ─────────────── content ─────────────── */

const STEPS = [
  { id: "a-get",      label: "Install and sign up" },
  { id: "a-explore",  label: "Find a business" },
  { id: "a-scan",     label: "Scan, order or book" },
  { id: "a-chat",     label: "Connect and get support" },
];

const QUICK = [
  { icon: Download,     title: "Get the app",        desc: "Install DukaDesk from the App Store or Google Play." },
  { icon: UserRound,    title: "Register once",      desc: "One account opens every business on DukaDesk." },
  { icon: ScanLine,     title: "Find or scan",       desc: "Browse businesses, or scan a QR code to open one." },
  { icon: ShoppingCart, title: "Order or book",      desc: "Add to cart, pay, book, message and review." },
];

const EXPLORE_SPOTS = [
  { n: 1, x: 70, y: 17.5 }, { n: 2, x: 93, y: 13.5 }, { n: 3, x: 93, y: 23.5 },
  { n: 4, x: 50.5, y: 61.5 }, { n: 5, x: 50, y: 91 },   { n: 6, x: 88, y: 9.5 },
];
const EXPLORE_LEGEND = [
  { n: 1, title: "Search", desc: "find a business by name or keyword." },
  { n: 2, title: "Scan", desc: "opens the QR scanner (see step 5)." },
  { n: 3, title: "Offers", desc: "featured promotions from businesses." },
  { n: 4, title: "Desks Nearby", desc: "businesses close to you, with their rating and distance. Tap View all to see more." },
  { n: 5, title: "Tabs", desc: "switch between Explore, Categories and Profile." },
  { n: 6, title: "Notifications", desc: "the bell shows your latest updates." },
];

const CAT_SPOTS = [
  { n: 1, x: 57, y: 14.5 }, { n: 2, x: 80, y: 12 }, { n: 3, x: 95.5, y: 12 },
  { n: 4, x: 33, y: 22.5 }, { n: 5, x: 50, y: 91 },
];
const CAT_LEGEND = [
  { n: 1, title: "Search", desc: "filter the categories by name." },
  { n: 2, title: "Scan", desc: "the same QR scanner, one tap away." },
  { n: 3, title: "View toggle", desc: "switch between a grid and a list." },
  { n: 4, title: "Category tiles", desc: "each shows how many businesses it has. Tap one to see them." },
  { n: 5, title: "Tabs", desc: "jump back to Explore, or open your Profile." },
];

const FAQS = [
  { q: "Do I need a new account for every business?", a: "No. You register once. The same account opens any business on DukaDesk." },
  { q: "Do I need to install the app?", a: "Yes. The DukaDesk app is how you scan QR codes and open businesses." },
  { q: "What if a QR code won't scan?", a: "Make sure the code is well lit and fills the frame, and that DukaDesk is allowed to use your camera. You can also search for the business by name from Explore." },
  { q: "How do I pay?", a: "Each business chooses the payment options it accepts. You'll see them when you check out." },
  { q: "How do I report a problem?", a: "Open the chat with the business and use the Report button, then choose a reason. For help with the app itself, use the Help Center or create a support ticket." },
  { q: "How is my data handled?", a: <>Read how we collect and use your information in our <a href="/privacy" style={{ color: INK, fontWeight: 600 }}>Privacy Policy</a>.</> },
];

/* ─────────────── store buttons ─────────────── */

function StoreButtons({ onWaitlist, dark = false }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 10, borderRadius: 14, padding: "13px 22px", fontFamily: sora,
    fontWeight: 700, fontSize: 14, textDecoration: "none", cursor: "pointer", border: dark ? "none" : `1.5px solid ${ISLAND_BORDER}`,
    background: dark ? NAVY : "#fff", color: dark ? "#fff" : INK,
  };
  const items = [["App Store", APP_STORE_URL], ["Google Play", PLAY_STORE_URL]];
  return items.map(([label, url]) =>
    url
      ? <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={base}><Download size={16} aria-hidden="true" />{label}</a>
      : <button key={label} onClick={onWaitlist} style={{ ...base, fontFamily: sora }}><Download size={16} aria-hidden="true" />{label}</button>
  );
}

const storesLive = Boolean(APP_STORE_URL && PLAY_STORE_URL);

/* ─────────────── coded phone screens (illustrations of a typical business app) ─────────────── */

const screen = { aspectRatio: "9 / 17", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", textAlign: "left" };

function ScannerScreen() {
  const corner = (pos) => ({ position: "absolute", width: 28, height: 28, borderColor: AMBER, borderStyle: "solid", borderWidth: 0, ...pos });
  return (
    <div style={{ ...screen, background: "#0E0E1A", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", top: 20, color: "#fff", fontFamily: sora, fontWeight: 700, fontSize: 13 }}>Scan a QR code</div>
      <div style={{ position: "relative", width: "66%", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={corner({ top: 0, left: 0, borderTopWidth: 4, borderLeftWidth: 4, borderTopLeftRadius: 12 })} />
        <span style={corner({ top: 0, right: 0, borderTopWidth: 4, borderRightWidth: 4, borderTopRightRadius: 12 })} />
        <span style={corner({ bottom: 0, left: 0, borderBottomWidth: 4, borderLeftWidth: 4, borderBottomLeftRadius: 12 })} />
        <span style={corner({ bottom: 0, right: 0, borderBottomWidth: 4, borderRightWidth: 4, borderBottomRightRadius: 12 })} />
        <QrCode size="58%" color="rgba(255,255,255,.4)" strokeWidth={1.4} aria-hidden="true" />
        <div className="gd-scan" />
      </div>
      <div style={{ position: "absolute", bottom: 26, left: 18, right: 18, textAlign: "center", color: "rgba(255,255,255,.7)", fontSize: 12, lineHeight: 1.5 }}>Point your camera at the business's QR code</div>
    </div>
  );
}

function StoreScreen() {
  const items = [[UtensilsCrossed, "Jollof Rice & Chicken", "₦2,500"], [Soup, "Egusi Soup + Eba", "₦1,800"], [UtensilsCrossed, "Grilled Tilapia", "₦4,500"], [Soup, "Peppered Gizzard", "₦1,200"], [GlassWater, "Zobo Drink 500ml", "₦500"]];
  return (
    <div style={{ ...screen, background: "#fff" }}>
      <div style={{ background: NAVY, padding: "16px 14px 12px", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ChevronLeft size={16} aria-hidden="true" />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 13 }}>Mama's Kitchen</div>
            <div style={{ fontSize: 10, opacity: .7, display: "flex", alignItems: "center", gap: 3 }}><Star size={9} fill={AMBER} color={AMBER} aria-hidden="true" /> 4.8 · Open now</div>
          </div>
          <ShoppingCart size={16} aria-hidden="true" />
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
          {["All", "Mains", "Soups", "Drinks"].map((c, i) => (
            <span key={c} style={{ fontSize: 10, fontWeight: 600, padding: "4px 10px", borderRadius: 99, background: i === 0 ? AMBER : "rgba(255,255,255,.12)", color: i === 0 ? NAVY : "#fff" }}>{c}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: "12px 12px 0", flex: 1 }}>
        <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 12, color: INK, marginBottom: 8 }}>Popular</div>
        {items.map(([Icon, name, price]) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid #F1F2F5" }}>
            <span style={{ width: 38, height: 38, borderRadius: 10, background: mix("amber", 22), display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}><Icon size={17} color={INK} aria-hidden="true" /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: INK }}>{name}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#B7791F" }}>{price}</div>
            </div>
            <span style={{ width: 22, height: 22, borderRadius: "50%", background: AMBER, color: NAVY, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14 }}>+</span>
          </div>
        ))}
      </div>
      <div style={{ margin: 10, background: AMBER, color: NAVY, borderRadius: 12, padding: "10px 14px", display: "flex", justifyContent: "space-between", fontFamily: sora, fontWeight: 700, fontSize: 12 }}>
        <span>2 items · ₦4,300</span><span>View cart →</span>
      </div>
    </div>
  );
}

function ChatScreen() {
  const bubble = (mine) => ({ alignSelf: mine ? "flex-end" : "flex-start", maxWidth: "78%", padding: "8px 11px", borderRadius: 14, fontSize: 11.5, lineHeight: 1.45, background: mine ? AMBER : "#F1F2F5", color: mine ? NAVY : INK, borderBottomRightRadius: mine ? 4 : 14, borderBottomLeftRadius: mine ? 14 : 4 });
  return (
    <div style={{ ...screen, background: "#fff" }}>
      <div style={{ padding: "16px 14px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #F1F2F5" }}>
        <ChevronLeft size={16} color={INK} aria-hidden="true" />
        <div style={{ flex: 1, fontFamily: sora, fontWeight: 700, fontSize: 13, color: INK }}>Mama's Kitchen</div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, fontWeight: 700, color: "#C0392B", background: "rgba(231,76,60,.1)", borderRadius: 99, padding: "4px 8px" }}><Flag size={10} aria-hidden="true" />Report</span>
      </div>
      <div style={{ flex: 1, padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={bubble(true)}>Is the jollof ready for pickup at 6?</div>
        <div style={bubble(false)}>Yes! We'll have it hot for you.</div>
        <div style={bubble(true)}>Perfect, thank you!</div>
        <div style={{ marginTop: "auto", background: ISLAND_SOFT, borderRadius: 12, padding: "10px 12px", textAlign: "center" }}>
          <div style={{ fontSize: 10.5, color: LGREY, marginBottom: 5 }}>How was your order?</div>
          <div style={{ display: "flex", gap: 4, justifyContent: "center" }}>
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={17} fill={i <= 4 ? AMBER : "none"} color={AMBER} aria-hidden="true" />)}
          </div>
        </div>
      </div>
      <div style={{ margin: 10, display: "flex", alignItems: "center", gap: 8, border: "1.5px solid #E5E7EB", borderRadius: 99, padding: "7px 10px" }}>
        <ImagePlus size={16} color={LGREY} aria-hidden="true" />
        <span style={{ flex: 1, fontSize: 11, color: "#9CA3AF" }}>Type a message…</span>
        <SendHorizontal size={16} color={AMBER} aria-hidden="true" />
      </div>
    </div>
  );
}

function SavedCard() {
  const rows = [["Mama's Kitchen", "Food · 0.3 km"], ["Grace Pharmacy", "Health · 0.5 km"], ["Glow Beauty Studio", "Beauty & Salon"]];
  return (
    <div style={{ width: "100%", maxWidth: 340, background: "#fff", border: `1.5px solid ${ISLAND_BORDER}`, borderRadius: 20, padding: 20, boxShadow: "0 24px 60px rgba(26,26,46,.16)", textAlign: "left" }}>
      <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 17, color: INK, marginBottom: 14 }}>Your saved businesses</div>
      {rows.map(([n, s], i) => (
        <div key={n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderTop: i ? "1px solid #F1F2F5" : "none" }}>
          <span style={{ width: 40, height: 40, borderRadius: 12, background: NAVY, color: AMBER, fontFamily: sora, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{n[0]}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 14, color: INK }}>{n}</div>
            <div style={{ fontSize: 12, color: LGREY }}>{s}</div>
          </div>
          <Heart size={18} fill={AMBER} color={AMBER} aria-hidden="true" />
        </div>
      ))}
      <div style={{ marginTop: 10, fontSize: 11, color: "#9CA3AF", textAlign: "center" }}>Example</div>
    </div>
  );
}

function InstallCard({ onWaitlist }) {
  return (
    <div style={{ width: "100%", maxWidth: 360, background: "#fff", border: `1.5px solid ${ISLAND_BORDER}`, borderRadius: 24, padding: "30px 24px", textAlign: "center", boxShadow: "0 24px 60px rgba(26,26,46,.16)" }}>
      <img src="/assets/Dukalogo-main-removebg-preview.png" alt="DukaDesk app icon" width={72} height={72} style={{ objectFit: "contain", margin: "0 auto 12px", display: "block" }} />
      <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 22, color: INK }}>DukaDesk</div>
      <div style={{ fontSize: 13.5, color: LGREY, margin: "6px 0 20px", lineHeight: 1.5 }}>Discover, order from and book businesses near you.</div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}><StoreButtons onWaitlist={onWaitlist} dark /></div>
      {!storesLive && <div style={{ marginTop: 14, fontSize: 12, color: LGREY, lineHeight: 1.5 }}>Store links go live at launch. Tap a button to join the waitlist and we'll let you know.</div>}
    </div>
  );
}

/* ─────────────── section ─────────────── */

export function CustomerSection({ active, onWaitlist, onSwitch }) {
  return (
    <section
      id="section-customer"
      style={{ display: active ? "block" : "none", background: "#FFFFFF", padding: "96px clamp(20px, 5vw, 80px)", borderTop: `3px solid ${AMBER}` }}
    >
      <GuideStyles />
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        <GuideHeader
          badge="App user guide"
          title={<>Every business you love,<br />in one app on your phone.</>}
          sub="Here's how to get started with the DukaDesk app, from installing it to placing your first order."
        />

        {/* At a glance */}
        <Label mb={16}>At a glance</Label>
        <div className="gd-cards gd-4" style={{ marginBottom: 44 }}>
          {QUICK.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} style={{ background: ISLAND_SOFT, border: `1.5px solid ${ISLAND_BORDER}`, borderRadius: 18, padding: "22px 20px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 40, height: 40, borderRadius: 12, background: mix("amber", 22), display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon size={20} color={INK} aria-hidden="true" /></span>
                <span style={{ fontFamily: sora, fontWeight: 800, fontSize: 12, color: LGREY }}>0{i + 1}</span>
              </div>
              <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 16, color: INK, marginBottom: 4 }}>{title}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.6, color: LGREY }}>{desc}</div>
            </div>
          ))}
        </div>

        <JumpNav items={STEPS} />

        {/* 1 — get */}
        <Step
          first id="a-get" n={1} kicker="Install" title="Get the DukaDesk app"
          intro="The DukaDesk app is your way into every business on the platform: browsing, scanning, ordering and chatting all happen inside it."
          visual={<InstallCard onWaitlist={onWaitlist} />}
        >
          <Do items={[
            <>Open the <b>App Store</b> on iPhone, or <b>Google Play</b> on Android.</>,
            <>Search for <b>DukaDesk</b> and tap <b>Get</b> or <b>Install</b>.</>,
            <>Open the app when it finishes installing.</>,
          ]} />
          <Tip>Standing in front of a business's QR code? Install the app first, then scan the code from inside it.</Tip>
        </Step>

        {/* 2 — register */}
        <Step
          flip id="a-register" n={2} kicker="Account" title="Create your account"
          intro="You'll set up your account once. After that, every business on DukaDesk is open to you."
          visual={
            <StatusTrack items={[
              { label: "Register", sub: "Create your account" },
              { label: "Verify", sub: "Confirm it's you" },
              { label: "Accept consent", sub: "Before using a business" },
              { label: "You're in", sub: "Explore and order", tone: "green" },
            ]} />
          }
        >
          <Do items={[
            <>Open the app and <b>register</b>. You only do this once.</>,
            <><b>Verify</b> your account when the app asks you to.</>,
            <>Read and accept the <b>consent</b> prompt. You need to accept it before you can use a business.</>,
          ]} />
          <Tip tone="green" label="One account">You don't sign up again for each business you visit. One account works everywhere on DukaDesk.</Tip>
        </Step>

        {/* 3 — explore */}
        <Step
          id="a-explore" n={3} kicker="Explore tab" title="Find businesses near you"
          intro="Explore is your home screen and the quickest way to see what's around you."
          visual={
            <PhoneFrame width={270} label="The Explore tab">
              <ImageWithSpots src={exploreShot} alt="The DukaDesk Explore screen with a search bar, QR scan button, offers banner and nearby businesses" spots={EXPLORE_SPOTS} marker={24} />
            </PhoneFrame>
          }
        >
          <Legend items={EXPLORE_LEGEND} />
        </Step>

        {/* 4 — categories */}
        <Step
          flip id="a-categories" n={4} kicker="Categories tab" title="Browse by category"
          intro="Know what you're after but not who sells it? Categories groups businesses by type."
          visual={
            <PhoneFrame width={270} label="The Categories tab">
              <ImageWithSpots src={categoriesShot} alt="The DukaDesk Categories screen showing Food, Ecommerce, Booking, Church, Fitness, Education, Health, Beauty and Salon, Fashion, Electronics, Automotive and Real Estate" spots={CAT_SPOTS} marker={24} />
            </PhoneFrame>
          }
        >
          <Legend items={CAT_LEGEND} />
          <Do items={[<>Tap a category to see the businesses in it.</>, <>Tap a business to open it.</>]} />
        </Step>

        {/* 5 — scan */}
        <Step
          id="a-scan" n={5} kicker="QR codes" title="Scan a QR code"
          intro="Every business on DukaDesk has its own QR code, often on the counter, window, menu or social posts. Scanning it opens that business straight away."
          visual={<PhoneFrame width={250} label="The QR scanner (illustration)"><ScannerScreen /></PhoneFrame>}
        >
          <Do items={[
            <>Tap the <b>scan icon</b> at the top right of Explore or Categories.</>,
            <>Allow camera access when your phone asks.</>,
            <>Point your camera at the QR code and hold steady.</>,
            <>The business opens in the app.</>,
          ]} />
          <Tip>Can't scan it? Search for the business by name from Explore instead.</Tip>
        </Step>

        {/* 6 — order */}
        <Step
          flip id="a-order" n={6} kicker="Inside a business" title="Order, book and pay"
          intro="Once you're inside a business, it works like that business's own app."
          visual={<PhoneFrame width={250} label="Inside a business (example)"><StoreScreen /></PhoneFrame>}
        >
          <Do items={[
            <>Browse the menu or products. Tap <b>+</b> to add items to your cart.</>,
            <>Does the business take bookings? Choose a service and a time instead.</>,
            <>Open your cart, check your order, then pay with the options the business accepts.</>,
            <>The business receives your order straight away.</>,
          ]} />
          <Tip>Each business chooses its own payment options, so what you see at checkout can vary.</Tip>
        </Step>

        {/* 7 — chat */}
        <Step
          id="a-chat" n={7} kicker="Messages & reviews" title="Message a business and leave a review"
          intro="Questions about an order or an item? Ask the business directly, without a phone call."
          visual={<PhoneFrame width={250} label="Chatting with a business (example)"><ChatScreen /></PhoneFrame>}
        >
          <Do items={[
            <>Open the business's chat and send a message. You can send text and images.</>,
            <>After you've used a business, you'll be asked for feedback. Rate it from <b>1 to 5 stars</b> and add a short review.</>,
            <>Something not right? Tap <b>Report</b> in the chat and choose a reason.</>,
          ]} />
          <Tip>Honest, specific reviews help other customers choose well.</Tip>
        </Step>

        {/* 8 — save */}
        <Step
          flip id="a-save" n={8} kicker="Favourites" title="Save the businesses you love"
          intro="Found somewhere you'll come back to? Save it so it's easy to find again."
          visual={<SavedCard />}
        >
          <Do items={[
            <>On a business you like, tap <b>Save</b>.</>,
            <>Your saved businesses stay on your account, so they're there on any device you sign in on.</>,
            <>Remove one any time when you no longer need it.</>,
          ]} />
        </Step>

        {/* 9 — help */}
        <Step
          id="a-help" n={9} kicker="Support" title="Help and staying safe"
          intro="We want every order to go well. Here's what's built in to look after you."
          visual={
            <div style={{ display: "grid", gap: 12, width: "100%", maxWidth: 400 }}>
              {[
                [ShieldCheck, "Verified businesses", "Businesses are verified and their apps reviewed by our team before they go live."],
                [Flag, "Report anything wrong", "Choose from Fraud, Scam, Abuse, Harassment, Spam, Fake Business or Other."],
                [LifeBuoy, "Help Center", "Browse FAQs and guides, create a support ticket, or contact support."],
              ].map(([Icon, t, d]) => (
                <div key={t} style={{ display: "flex", gap: 14, background: ISLAND_SOFT, border: `1.5px solid ${ISLAND_BORDER}`, borderRadius: 16, padding: "16px 18px", textAlign: "left" }}>
                  <span style={{ flex: "none", width: 40, height: 40, borderRadius: 12, background: mix("amber", 22), display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon size={19} color={INK} aria-hidden="true" /></span>
                  <div><div style={{ fontFamily: sora, fontWeight: 700, fontSize: 14.5, color: INK, marginBottom: 2 }}>{t}</div><div style={{ fontSize: 13.5, lineHeight: 1.55, color: LGREY }}>{d}</div></div>
                </div>
              ))}
            </div>
          }
        >
          <Do items={[
            <>Open the <b>Help Center</b> for answers to common questions.</>,
            <>Still stuck? Create a <b>support ticket</b> or contact support.</>,
            <>Spotted something suspicious? <b>Report</b> it from the chat so our team can look into it.</>,
          ]} />
        </Step>

        {/* FAQ */}
        <div style={{ marginTop: 40 }}>
          <Label>Common questions</Label>
          <Faq items={FAQS} />
        </div>

        <GuideCta
          title="Get the DukaDesk app"
          sub="Discover, order from and book businesses near you, all from one app."
          switchLabel="Own a business? Read the merchant guide →"
          onSwitch={onSwitch}
        >
          <StoreButtons onWaitlist={onWaitlist} dark />
        </GuideCta>
      </div>
    </section>
  );
}

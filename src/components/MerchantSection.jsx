import {
  LayoutDashboard, ShieldCheck, Package, ClipboardList, Users, Boxes, BarChart3, MessageSquare,
  Megaphone, Plug, CreditCard, ClipboardCheck, QrCode, Search, Printer, Share2, Smartphone,
} from "lucide-react";
import { AMBER, INK, LGREY, NAVY, CREAM, ISLAND_INK, ISLAND_SOFT, ISLAND_BORDER, sora, mix } from "../constants";
import {
  GuideStyles, GuideHeader, JumpNav, Label, Step, Do, Tip, Legend, ImageWithSpots, PhoneFrame,
  BrowserFrame, StatusTrack, ChecklistCard, Faq, GuideCta, ghostBtn, primaryBtn,
} from "./guide/GuideKit";

import loginForm from "../assets/guide/login-form.jpg";
import editorShot from "../assets/app_editor_merchant.jpeg";
import tplShop from "../assets/guide/tpl-shop.jpg";
import tplSalon from "../assets/guide/tpl-salon.jpg";
import tplChurch from "../assets/guide/tpl-church.jpg";
import tplSchool from "../assets/guide/tpl-school.jpg";

/* ─────────────── content ─────────────── */

const STEPS = [
  { id: "g-account",  label: "Create account" },
  { id: "g-verify",   label: "Get verified" },
  { id: "g-template", label: "Choose a template" },
  { id: "g-brand",    label: "Brand your app" },
  { id: "g-editor",   label: "Design in the editor" },
  { id: "g-products", label: "Add products" },
  { id: "g-publish",  label: "Preview & publish" },
  { id: "g-qr",       label: "Share your QR code" },
  { id: "g-run",      label: "Run your business" },
];

// Mirrors the live dashboard's left-hand menu.
const NAV = [
  { key: "Dashboard",    icon: LayoutDashboard, desc: "Your business at a glance: customers, revenue, unread messages and ratings, plus recent activity and quick actions like Add Product." },
  { key: "Compliance",   icon: ShieldCheck,     desc: "Send your verification details and track your status." },
  { key: "Products",     icon: Package,         desc: "Add and edit the items or services customers see in your app." },
  { key: "Orders",       icon: ClipboardList,   desc: "See every order as it arrives and move it through each status. A badge shows what's new." },
  { key: "Customers",    icon: Users,           desc: "See who is buying from you." },
  { key: "Inventory",    icon: Boxes,           desc: "Keep an eye on your stock levels." },
  { key: "Analytics",    icon: BarChart3,       desc: "See what sells, when customers order and how many people scan your QR code." },
  { key: "Messages",     icon: MessageSquare,   desc: "Chat with customers who message your business." },
  { key: "Marketing",    icon: Megaphone,       desc: "Promote your business and reach your customers." },
  { key: "Integrations", icon: Plug,            desc: "Connect payments such as Paystack, and other tools." },
  { key: "Billing",      icon: CreditCard,      desc: "Your DukaDesk plan, upgrades and payment history." },
  { key: "Top bar",      icon: Search,          desc: "Search orders and products from anywhere, check the bell for new activity, and use Preview App to see your app as customers do." },
];

const EDITOR_SPOTS = [
  { n: 1, x: 12.5, y: 7.5 },  { n: 2, x: 12.5, y: 20 },  { n: 3, x: 12.5, y: 40 },
  { n: 4, x: 60.5, y: 9 },    { n: 5, x: 97.4, y: 10.5 }, { n: 6, x: 86.2, y: 2.6 },
  { n: 7, x: 97.2, y: 2.6 },  { n: 8, x: 28.5, y: 96 },
];
const EDITOR_LEGEND = [
  { n: 1, title: "Section library", desc: "building blocks such as Hero Banner, Menu List, About / Info, Image Gallery and Contact Info." },
  { n: 2, title: "Bottom navigation", desc: "the tabs along the bottom of your app, so customers can jump between screens." },
  { n: 3, title: "Sections & layers", desc: "everything on the current screen, in order. Click one to select it." },
  { n: 4, title: "Live preview", desc: "your app as customers will see it. It updates as you edit." },
  { n: 5, title: "Properties", desc: "the settings for whatever you've selected: text, colours, visibility, spacing." },
  { n: 6, title: "Templates & history", desc: "browse templates, undo and redo, and see when your work was last saved." },
  { n: 7, title: "Publish", desc: "check your app and send it for review." },
  { n: 8, title: "Pages", desc: "every screen in your app. Use + Add to create another." },
];

const FAQS = [
  { q: "Do I have to be verified before my app can go live?", a: "Yes. Verification comes first. Once you're verified, any app you submit is reviewed by our team before it goes live." },
  { q: "Can I stop halfway and finish later?", a: "Yes. Your progress is saved as you go, so you can leave and pick up where you stopped." },
  { q: "Do I need to connect payments before I publish?", a: "No, but you'll get a reminder if no payment method is connected. You can add Paystack and other tools from Integrations whenever you're ready." },
  { q: "What if my app isn't approved?", a: "We'll tell you what needs fixing. Make the changes in the editor and submit again." },
  { q: "Can I run more than one app?", a: <>That depends on your plan. <a href="/pricing" style={{ color: INK, fontWeight: 600 }}>See what each plan includes</a>.</> },
  { q: "Do my customers need to download anything?", a: "Yes. Customers use the DukaDesk app to scan your QR code and open your business. They register once, then can open any business on DukaDesk." },
];

/* ─────────────── small coded visuals ─────────────── */

function DashboardMap({ highlight }) {
  return (
    <div style={{ width: "100%", maxWidth: 250, background: "#14142A", borderRadius: 16, padding: 14, boxShadow: "0 18px 50px rgba(26,26,46,.25)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 6px 14px" }}>
        <span style={{ width: 30, height: 30, borderRadius: 8, background: AMBER, color: NAVY, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: sora, fontWeight: 800 }}>D</span>
        <span style={{ fontFamily: sora, fontWeight: 700, color: "#fff", fontSize: 14 }}>DukaDesk</span>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".08em", color: AMBER, border: `1px solid ${AMBER}`, borderRadius: 6, padding: "2px 5px" }}>MERCHANT</span>
      </div>
      {NAV.filter((n) => n.key !== "Top bar").map(({ key, icon: Icon }) => {
        const on = key === highlight;
        return (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 9, marginBottom: 2, background: on ? "rgba(244,160,38,.16)" : "transparent", color: on ? AMBER : "rgba(255,255,255,.62)", fontSize: 13, fontWeight: on ? 700 : 500, boxShadow: on ? `inset 3px 0 0 ${AMBER}` : "none" }}>
            <Icon size={16} aria-hidden="true" />{key}
          </div>
        );
      })}
    </div>
  );
}

function MiniForm({ title, fields, cta }) {
  return (
    <div style={{ width: "100%", maxWidth: 400, background: "#fff", border: `1.5px solid ${ISLAND_BORDER}`, borderRadius: 18, padding: 22, boxShadow: "0 18px 50px rgba(26,26,46,.14)" }}>
      <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 17, color: INK, marginBottom: 16 }}>{title}</div>
      <div style={{ display: "grid", gap: 14 }}>
        {fields.map((f) => (
          <div key={f.label}>
            <div style={{ fontSize: 12, fontWeight: 600, color: ISLAND_INK, marginBottom: 6 }}>{f.label}{f.req && <span style={{ color: "#E74C3C" }}> *</span>}</div>
            {f.swatches ? (
              <div style={{ display: "flex", gap: 8 }}>
                {["#F4A026", "#1A1A2E", "#2ECC71", "#3B82F6", "#E74C3C"].map((c, i) => (
                  <span key={c} style={{ width: 26, height: 26, borderRadius: "50%", background: c, boxShadow: i === 0 ? `0 0 0 3px #fff, 0 0 0 5px ${AMBER}` : "none" }} />
                ))}
              </div>
            ) : (
              <div style={{ border: `1.5px solid ${ISLAND_BORDER}`, borderRadius: 10, padding: "10px 12px", fontSize: 13.5, color: f.value ? INK : "#9CA3AF", background: "#FAFAFB" }}>{f.value || f.ph}</div>
            )}
          </div>
        ))}
      </div>
      {cta && <div style={{ marginTop: 18, background: AMBER, color: NAVY, borderRadius: 10, padding: "11px 0", textAlign: "center", fontFamily: sora, fontWeight: 700, fontSize: 14 }}>{cta}</div>}
    </div>
  );
}

function QrPoster() {
  return (
    <div style={{ width: "100%", maxWidth: 300, background: "#fff", borderRadius: 20, padding: "28px 24px", textAlign: "center", border: `1.5px solid ${ISLAND_BORDER}`, boxShadow: "0 24px 60px rgba(26,26,46,.2)" }}>
      <div style={{ fontFamily: sora, fontWeight: 800, fontSize: 20, color: INK }}>Mama's Kitchen</div>
      <div style={{ fontSize: 13, color: LGREY, margin: "4px 0 18px" }}>Scan with the DukaDesk app to order</div>
      <div style={{ width: 170, height: 170, margin: "0 auto", borderRadius: 14, background: NAVY, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <QrCode size={118} color="#fff" strokeWidth={1.6} aria-hidden="true" />
      </div>
      <div style={{ marginTop: 18, fontSize: 11, color: LGREY, fontFamily: sora, letterSpacing: ".14em", textTransform: "uppercase" }}>Powered by DukaDesk</div>
      <div style={{ marginTop: 6, fontSize: 11, color: "#9CA3AF" }}>Example poster</div>
    </div>
  );
}

/* ─────────────── section ─────────────── */

export function MerchantSection({ active, onWaitlist, onSignIn, onSwitch }) {
  return (
    <section
      id="section-merchant"
      style={{ display: active ? "block" : "none", background: CREAM, padding: "96px clamp(20px, 5vw, 80px)", borderTop: `3px solid ${AMBER}` }}
    >
      <GuideStyles />
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        <GuideHeader
          badge="Merchant guide"
          title={<>Your business deserves a real app.<br />Here's how to build yours.</>}
          sub="A step-by-step walkthrough of the DukaDesk dashboard, from creating your account to taking your first order."
        />

        <JumpNav items={STEPS} />

        {/* Before you start */}
        <div style={{ maxWidth: 640, margin: "48px auto 8px" }}>
          <ChecklistCard
            icon={ClipboardCheck}
            title="Have these ready before you start"
            items={[
              "Your business logo (optional, but your app looks better with one)",
              "Your brand colour, or pick one as you go",
              "A business phone number, so customers can reach you",
              "Your address, opening hours and a short description of what you do",
              "Your products or services, with prices (and photos if you have them)",
              "Your payment account details, if you want to take payments in the app",
            ]}
          />
        </div>

        {/* 1 — account */}
        <Step
          first id="g-account" n={1} kicker="Account" title="Create your merchant account"
          intro="Everything starts in the merchant dashboard, the web app where you build and run your business."
          visual={<BrowserFrame label="Log in to your dashboard" maxWidth={440}><img src={loginForm} alt="The DukaDesk merchant log-in screen with email, password and Continue with Google options" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} /></BrowserFrame>}
        >
          <Do items={[
            <>Open the merchant dashboard and choose <b>Sign up</b>.</>,
            <>Enter your email and a password, or tap <b>Continue with Google</b>.</>,
            <>Already registered? Use <b>Log in</b>. Forgot your password? Choose <b>Forgot password?</b> under the password box.</>,
          ]} />
          <Tip>Use an email you check often. It's how you'll sign in, and how we'll reach you about your account.</Tip>
        </Step>

        {/* 2 — verify */}
        <Step
          flip id="g-verify" n={2} kicker="Verification" title="Get your business verified"
          intro="Before an app can go live on DukaDesk, our team confirms who you are and that your business is real. It protects you, and the customers who buy from you."
          visual={
            <>
              <DashboardMap highlight="Compliance" />
              <StatusTrack items={[
                { label: "Pending", sub: "Documents not sent yet" },
                { label: "Under review", sub: "Our team is checking them" },
                { label: "Verified", sub: "You can submit your app", tone: "green" },
              ]} />
            </>
          }
        >
          <Do items={[
            <>Open <b>Compliance</b> in the left-hand menu.</>,
            <>Fill in your business details and upload the documents we ask for.</>,
            <>Submit them. Your status updates on this page while our team reviews.</>,
            <>If something is missing or unclear, we'll tell you what to fix, and you can send it again.</>,
          ]} />
          <Tip label="Good to know">Some regulated sectors need extra checks, so the documents we ask for can differ by business type.</Tip>
        </Step>

        {/* 3 — template */}
        <Step
          id="g-template" n={3} kicker="Setup wizard" title="Choose a template"
          intro="Templates are ready-made app designs for different kinds of business. Pick the one closest to what you do. You can still change almost everything afterwards."
          visual={
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 22, width: "100%", maxWidth: 440 }}>
              {[[tplShop, "Online shop"], [tplSalon, "Salon & booking"], [tplChurch, "Church"], [tplSchool, "School"]].map(([src, label]) => (
                <PhoneFrame key={label} width={200} label={label}>
                  <img src={src} alt={`Example ${label} app design`} loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "9 / 17", objectFit: "cover", objectPosition: "top" }} />
                </PhoneFrame>
              ))}
              <div style={{ gridColumn: "1 / -1", textAlign: "center", fontSize: 12.5, color: LGREY, marginTop: -6 }}>Example app designs. Yours will carry your own name, colours and content.</div>
            </div>
          }
        >
          <Do items={[
            <>Pick your business type, then browse the templates made for it.</>,
            <>Preview a few to see how your customers' screens will look, then choose one.</>,
            <>Want full control? Choose <b>Create your own</b> to start with a blank canvas and build from scratch.</>,
          ]} />
        </Step>

        {/* 4 — brand */}
        <Step
          flip id="g-brand" n={4} kicker="Setup wizard" title="Brand your app and add your details"
          intro="Next, the wizard asks for the basics that make the app yours. It takes a few minutes."
          visual={
            <MiniForm
              title="Brand your app"
              cta="Continue"
              fields={[
                { label: "App name", req: true, value: "Mama's Kitchen" },
                { label: "Tagline", ph: "e.g. Authentic home cooking" },
                { label: "Brand colour", swatches: true },
                { label: "Business phone", req: true, value: "0803 000 0000" },
              ]}
            />
          }
        >
          <Do items={[
            <><b>Brand your app:</b> your app name (required), a tagline, your logo and your brand colour.</>,
            <><b>Business info:</b> your phone number (required, so customers can contact you), address, opening hours and a short description.</>,
            <><b>Integrations:</b> choose the payment and other tools you want. You can connect or change them later from <b>Integrations</b> in the dashboard.</>,
            <>Select <b>Enter editor</b> to start designing.</>,
          ]} />
        </Step>

        {/* 5 — editor */}
        <Step
          wide id="g-editor" n={5} kicker="App editor" title="Design your app in the editor"
          intro="This is where your app comes to life. Everything you change shows up instantly in the phone preview in the middle."
          visual={
            <>
              <div style={{ maxWidth: 1080, width: "100%", margin: "0 auto" }}>
                <div className="gd-pan">
                  <BrowserFrame label="App editor" maxWidth={1080}>
                    <ImageWithSpots src={editorShot} alt="The DukaDesk app editor showing the section library, phone preview, properties panel and pages bar" spots={EDITOR_SPOTS} marker={24} />
                  </BrowserFrame>
                </div>
                <div className="gd-hint" style={{ marginTop: 8 }}>Swipe sideways to explore the editor →</div>
              </div>
              <div style={{ maxWidth: 1080, width: "100%", margin: "0 auto" }}><Legend items={EDITOR_LEGEND} cols={2} /></div>
            </>
          }
        >
          <div style={{ maxWidth: 760 }}>
            <Do items={[
              <>Add a section from the <b>Section library</b>: a Hero Banner, Menu List, About / Info, Image Gallery or Contact Info.</>,
              <>Click anything in the preview, or in the layers list, and change it in <b>Properties</b>.</>,
              <>Need another screen? Choose <b>+ Add</b> in the pages bar, then link it to a bottom-navigation tab.</>,
            ]} />
            <Tip>Your work saves as you go. Look for <b>Saved</b> next to your app name at the top of the editor.</Tip>
          </div>
        </Step>

        {/* 6 — products */}
        <Step
          id="g-products" n={6} kicker="Products" title="Add your products or services"
          intro="These are what customers actually browse and order. Add them from Products in the dashboard."
          visual={
            <MiniForm
              title="Add product"
              cta="Save product"
              fields={[
                { label: "Product name", req: true, value: "Jollof Rice & Chicken" },
                { label: "Category", value: "Main meals" },
                { label: "Price (₦)", req: true, value: "2,500" },
                { label: "Stock quantity", value: "40" },
                { label: "Status", value: "Active" },
              ]}
            />
          }
        >
          <Do items={[
            <>Open <b>Products</b> in the left-hand menu and choose <b>Add Product</b>.</>,
            <>Enter the <b>name</b> and <b>price (₦)</b>, both required. Then choose a category, set your stock quantity and status.</>,
            <>Save it, then repeat for the rest of your range. You can edit items or select several at once later.</>,
          ]} />
          <Tip>Selling services instead of goods? Add each service as a product. Keep an eye on stock levels in <b>Inventory</b>.</Tip>
        </Step>

        {/* 7 — publish */}
        <Step
          flip id="g-publish" n={7} kicker="Go live" title="Preview, publish and get approved"
          intro="When you're happy, preview your app, then publish it. Publishing sends it to our team for a review before it goes live."
          visual={
            <>
              <StatusTrack items={[
                { label: "Draft", sub: "You're building it" },
                { label: "Under review", sub: "Our team checks it" },
                { label: "Live", sub: "Customers can open it", tone: "green" },
              ]} />
              <div style={{ maxWidth: 440, width: "100%", textAlign: "left", background: "rgba(231,76,60,.08)", border: "1.5px solid #F5C2BD", borderRadius: 14, padding: "12px 16px", fontSize: 13.5, lineHeight: 1.6, color: ISLAND_INK }}>
                <b style={{ color: "#C0392B", fontFamily: sora }}>Changes needed?</b> We'll tell you why. Fix it in the editor and submit again.
              </div>
            </>
          }
        >
          <Do items={[
            <>Use <b>Preview App</b> at the top of your dashboard, or the editor preview, to try your app exactly as customers will see it.</>,
            <>Press <b>Publish</b> in the editor. DukaDesk first checks for problems: your app needs a name and a home screen, and every bottom-navigation tab needs a label and a screen to open.</>,
            <>Fix anything flagged. Reminders, like an empty screen or no payment method connected, are worth sorting out before you submit.</>,
            <>Your app is now <b>Under review</b>. Our team looks at what customers will see, then approves it.</>,
          ]} />
          <Tip tone="green" label="Remember">You need to be verified first (step 2). Not verified yet? Do that before you publish.</Tip>
        </Step>

        {/* 8 — QR */}
        <Step
          id="g-qr" n={8} kicker="Share" title="Share your QR code"
          intro="Once your app is approved it gets its own QR code. That code is how customers open your business."
          visual={<QrPoster />}
        >
          <Do items={[
            <>Get your QR code from your dashboard once your app is live.</>,
            <><Printer size={15} style={{ verticalAlign: "-2px", marginRight: 6 }} aria-hidden="true" /><b>Print it</b> and put it where customers are: your counter, windows, menus, packaging and receipts.</>,
            <><Share2 size={15} style={{ verticalAlign: "-2px", marginRight: 6 }} aria-hidden="true" /><b>Share it online</b> on your WhatsApp status, Instagram stories and Facebook page.</>,
            <>Customers scan it with the DukaDesk app, and your business opens.</>,
          ]} />
          <Tip><Smartphone size={14} style={{ verticalAlign: "-2px", marginRight: 6 }} aria-hidden="true" />Customers scan with the <b>DukaDesk app</b>, so point first-timers to it.{" "}
            {onSwitch && <button onClick={onSwitch} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: INK, fontWeight: 700, textDecoration: "underline", fontSize: "inherit", fontFamily: "inherit" }}>Our app user guide shows them how.</button>}
          </Tip>
        </Step>

        {/* 9 — run */}
        <Step
          wide id="g-run" n={9} kicker="Dashboard" title="Run your business from the dashboard"
          intro="Your dashboard is your control room. Here's what each part of the left-hand menu does."
          visual={
            <div className="gd-cards gd-3">
              {NAV.map(({ key, icon: Icon, desc }) => (
                <div key={key} style={{ background: ISLAND_SOFT, border: `1.5px solid ${ISLAND_BORDER}`, borderRadius: 16, padding: "20px 20px 22px", textAlign: "left" }}>
                  <span style={{ width: 38, height: 38, borderRadius: 11, background: mix("amber", 20), display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}><Icon size={19} color={INK} aria-hidden="true" /></span>
                  <div style={{ fontFamily: sora, fontWeight: 700, fontSize: 15.5, color: INK, marginBottom: 4 }}>{key}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.6, color: LGREY }}>{desc}</div>
                </div>
              ))}
            </div>
          }
        />

        {/* FAQ */}
        <div style={{ marginTop: 40 }}>
          <Label>Common questions</Label>
          <Faq items={FAQS} />
        </div>

        <GuideCta
          title="Ready to build your app?"
          sub="Free plan includes everything you need to launch. Upgrade when you grow."
          switchLabel="Looking for the customer side? Read the app user guide →"
          onSwitch={onSwitch}
        >
          <button onClick={onWaitlist} className="btn-waitlist" style={primaryBtn}>Start free — no card needed</button>
          <a href="/pricing" style={ghostBtn}>See pricing</a>
          {onSignIn && <button onClick={onSignIn} style={ghostBtn}>Sign in to dashboard</button>}
        </GuideCta>
      </div>
    </section>
  );
}

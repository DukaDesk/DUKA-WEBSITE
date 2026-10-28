import { useState, lazy, Suspense, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { WhyChoose } from "./components/WhyChoose";
import { ProcessCarousel } from "./components/ProcessCarousel";
import { ProductShowcase } from "./components/ProductShowcase";
import { Categories } from "./components/Categories";
import { Features } from "./components/Features";
import { Privacy } from "./components/Privacy";
import { Terms } from "./components/Terms";
import { LegalLayout } from "./components/LegalLayout";
import { FAQ } from "./components/FAQ";
import { ScrollToTop } from "./components/ScrollToTop";
import { MerchantSection } from "./components/MerchantSection";
import { CustomerSection } from "./components/CustomerSection";
import { CHAR, SURFACE, inter } from "./constants";

const Integrations = lazy(() => import("./components/Integrations").then(m => ({ default: m.Integrations })));
const Pricing = lazy(() => import("./components/Pricing").then(m => ({ default: m.Pricing })));
const Team = lazy(() => import("./components/Team").then(m => ({ default: m.Team })));
const Careers = lazy(() => import("./components/Careers").then(m => ({ default: m.Careers })));
const Resources = lazy(() => import("./components/Resources").then(m => ({ default: m.Resources })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const CtaSection = lazy(() => import("./components/CtaSection").then(m => ({ default: m.CtaSection })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

const SIGN_IN_URL = import.meta.env.VITE_MERCHANT_URL || "https://app.dukadesk.com";
const WAITLIST_URL = import.meta.env.VITE_WAITLIST_URL || "https://forms.gle/vsQydWxXmiQAAFyV9";

function SectionFallback() {
  return <div style={{ height: 200, background: SURFACE }} />;
}

function PageFooter({ onSignIn, onWaitlist }) {
  return (
    <Suspense fallback={null}>
      <Footer onSignIn={onSignIn} onWaitlist={onWaitlist} />
    </Suspense>
  );
}

function HomePage({ onSignIn, onWaitlist }) {
  const [activeSection, setActiveSection] = useState(null);
  const merchantRef = useRef(null);
  const customerRef = useRef(null);

  const showSection = (type) => {
    setActiveSection(type);
    // Smooth scroll to the revealed section on the next paint
    setTimeout(() => {
      const el = document.getElementById(type === "merchant" ? "section-merchant" : "section-customer");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <>
      <Hero onSignIn={onSignIn} onWaitlist={onWaitlist} onShowSection={showSection} activeSection={activeSection} />

      {/* Audience-specific sections — hidden until a card is clicked */}
      <MerchantSection active={activeSection === "merchant"} onWaitlist={onWaitlist} />
      <CustomerSection active={activeSection === "customer"} />

      <Ticker />
      <ProcessCarousel />
      <WhyChoose onWaitlist={onWaitlist} />
      <ProductShowcase onWaitlist={onWaitlist} />
      <FAQ onWaitlist={onWaitlist} />
      <Suspense fallback={<SectionFallback />}>
        <CtaSection onWaitlist={onWaitlist} />
      </Suspense>
      <PageFooter onSignIn={onSignIn} onWaitlist={onWaitlist} />
    </>
  );
}

function FeaturesPage({ onSignIn, onWaitlist }) {
  return (
    <>
      <Features />
      <Suspense fallback={<SectionFallback />}>
        <Integrations />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CtaSection onWaitlist={onWaitlist} />
      </Suspense>
      <PageFooter onSignIn={onSignIn} onWaitlist={onWaitlist} />
    </>
  );
}

function PricingPage({ onSignIn, onWaitlist }) {
  return (
    <>
      <Suspense fallback={<SectionFallback />}>
        <Pricing onSignIn={onSignIn} onWaitlist={onWaitlist} />
      </Suspense>
      <PageFooter onSignIn={onSignIn} onWaitlist={onWaitlist} />
    </>
  );
}

function SolutionsPage({ onSignIn, onWaitlist }) {
  return (
    <>
      <Categories />
      <Suspense fallback={<SectionFallback />}>
        <CtaSection onWaitlist={onWaitlist} />
      </Suspense>
      <PageFooter onSignIn={onSignIn} onWaitlist={onWaitlist} />
    </>
  );
}

function CompanyPage({ onSignIn, onWaitlist }) {
  return (
    <>
      <Suspense fallback={<SectionFallback />}>
        <Team />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Careers />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CtaSection onWaitlist={onWaitlist} />
      </Suspense>
      <PageFooter onSignIn={onSignIn} onWaitlist={onWaitlist} />
    </>
  );
}

function ResourcesPage({ onSignIn, onWaitlist }) {
  return (
    <>
      <Suspense fallback={<SectionFallback />}>
        <Resources />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CtaSection onWaitlist={onWaitlist} />
      </Suspense>
      <PageFooter onSignIn={onSignIn} onWaitlist={onWaitlist} />
    </>
  );
}

function ContactPage({ onSignIn, onWaitlist }) {
  return (
    <>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CtaSection onWaitlist={onWaitlist} />
      </Suspense>
      <PageFooter onSignIn={onSignIn} onWaitlist={onWaitlist} />
    </>
  );
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleSignIn = () => {
    window.location.href = SIGN_IN_URL;
  };

  const handleWaitlist = () => {
    window.location.href = WAITLIST_URL;
  };

  return (
    <div style={{ fontFamily: inter, color: CHAR, background: SURFACE, overflowX: "hidden" }}>
      <ScrollToTop />
      <Navbar onSignIn={handleSignIn} onWaitlist={handleWaitlist} alwaysSolid={!isHome} />
      <Routes>
        <Route path="/" element={<HomePage onSignIn={handleSignIn} onWaitlist={handleWaitlist} />} />
        <Route path="/features" element={<FeaturesPage onSignIn={handleSignIn} onWaitlist={handleWaitlist} />} />
        <Route path="/pricing" element={<PricingPage onSignIn={handleSignIn} onWaitlist={handleWaitlist} />} />
        <Route path="/solutions" element={<SolutionsPage onSignIn={handleSignIn} onWaitlist={handleWaitlist} />} />
        <Route path="/company" element={<CompanyPage onSignIn={handleSignIn} onWaitlist={handleWaitlist} />} />
        <Route path="/resources" element={<ResourcesPage onSignIn={handleSignIn} onWaitlist={handleWaitlist} />} />
        <Route path="/contact" element={<ContactPage onSignIn={handleSignIn} onWaitlist={handleWaitlist} />} />
        <Route path="/privacy" element={<LegalLayout><Privacy /></LegalLayout>} />
        <Route path="/terms" element={<LegalLayout><Terms /></LegalLayout>} />
      </Routes>
    </div>
  );
}

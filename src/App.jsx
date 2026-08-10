import { useState, lazy, Suspense } from "react";
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
import { CHAR, WHITE, inter } from "./constants";

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
  return <div style={{ height: 200, background: WHITE }} />;
}

function PageFooter({ onSignIn, onWaitlist }) {
  return (
    <Suspense fallback={null}>
      <Footer onSignIn={onSignIn} onWaitlist={onWaitlist} />
    </Suspense>
  );
}

function HomePage({ onSignIn, onWaitlist }) {
  return (
    <>
      <Hero onSignIn={onSignIn} onWaitlist={onWaitlist} />
      <Ticker />
      <ProcessCarousel />
      <WhyChoose onWaitlist={onWaitlist} />
      <ProductShowcase onWaitlist={onWaitlist} />
      <FAQ onWaitlist={onWaitlist} />
      <CtaSection onWaitlist={onWaitlist} />
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
      <CtaSection onWaitlist={onWaitlist} />
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
      <CtaSection onWaitlist={onWaitlist} />
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
      <CtaSection onWaitlist={onWaitlist} />
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
      <CtaSection onWaitlist={onWaitlist} />
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
      <CtaSection onWaitlist={onWaitlist} />
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
    <div style={{ fontFamily: inter, color: CHAR, background: WHITE, overflowX: "hidden" }}>
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

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { HowItWorks } from "./components/HowItWorks";
import { Categories } from "./components/Categories";
import { Features } from "./components/Features";
import { Integrations } from "./components/Integrations";
import { Pricing } from "./components/Pricing";
import { Team } from "./components/Team";
import { Careers } from "./components/Careers";
import { Footer } from "./components/Footer";
import { CHAR, WHITE, inter } from "./constants";

const SIGN_IN_URL = import.meta.env.VITE_MERCHANT_URL || "https://app.dukadesk.com";

export default function App() {
  const handleSignIn = () => {
    window.location.href = SIGN_IN_URL;
  };

  return (
    <div style={{ fontFamily: inter, color: CHAR, background: WHITE, overflowX: "hidden" }}>
      <Navbar onSignIn={handleSignIn} />
      <Hero onSignIn={handleSignIn} />
      <TrustBar />
      <HowItWorks />
      <Categories />
      <Features />
      <Integrations />
      <Pricing onSignIn={handleSignIn} />
      <Team />
      <Careers />
      <Footer onSignIn={handleSignIn} />
    </div>
  );
}

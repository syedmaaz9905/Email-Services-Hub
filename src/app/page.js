
// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Why from "./components/Why";
import EmailExtractor from "./components/EmailExtractor";
import HTMLEditor from "./components/HTMLEditor";
import Base64Encode from "./components/Base64Encode";
import EmailAddressValidator from "./components/EmailAddressValidator";
import RandomNameAddressGenerator from "./components/RandomNameAddressGenerator";
import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <Why />
      <EmailExtractor />
      <HTMLEditor />
      <Base64Encode />
      <EmailAddressValidator />
      <RandomNameAddressGenerator />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
    </main>
  );
}

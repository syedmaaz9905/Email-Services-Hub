
// Components
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import BackToTopBtn from "./components/BackToTopBtn";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Hero />
      <Services />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <BackToTopBtn />
    </main>
  );
}

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Signature } from "./components/Signature";
import { Menu } from "./components/Menu";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { Reservation } from "./components/Reservation";
import { Visit } from "./components/Visit";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { CartDrawer } from "./components/CartDrawer";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-fg">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Signature />
        <Menu />
        <Gallery />
        <Reviews />
        <Reservation />
        <Visit />
      </main>
      <Footer />
      <FloatingActions />
      <CartDrawer />
    </div>
  );
}

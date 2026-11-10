import { MotionConfig } from "framer-motion";
import { Contattaci } from "./components/Contattaci";
import { Crescita } from "./components/Crescita";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { HeroVisione } from "./components/HeroVisione";
import { Navbar } from "./components/Navbar";
import { Visione } from "./components/Visione";

function App() {
  return (
    // Rispetta "riduci movimento" del sistema operativo.
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <HeroVisione />
        <Visione />
        <Features />
        <Crescita />
        <Contattaci />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;

import { Contattaci } from "./components/Contattaci";
import { Crescita } from "./components/Crescita";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { HeroVisione } from "./components/HeroVisione";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroVisione />
        <Features />
        <Crescita />
        <Contattaci />
      </main>
      <Footer />
    </>
  );
}

export default App;

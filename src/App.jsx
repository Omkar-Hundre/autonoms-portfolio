import { useEffect } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Numbers from "./components/Numbers";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Dismiss the native HTML loader after 1.6s
    const timer = setTimeout(() => {
      const loader = document.getElementById("native-loader");
      if (loader) loader.classList.add("done");
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Numbers />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

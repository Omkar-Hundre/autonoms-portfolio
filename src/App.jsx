import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Numbers from "./components/Numbers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Cursor />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Numbers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

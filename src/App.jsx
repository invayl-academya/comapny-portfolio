import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />

      {/* <h1 className="text-red-500 text-7xl">Company Website</h1> */}
    </div>
  );
}

export default App;

import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="bg-[#04152d] w-full h-full">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
    </div>

  );
}

export default App;

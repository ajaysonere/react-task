import "./App.css";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Onlythebest from "./components/Onlythebest";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Story />
      <Onlythebest />
      <Gallery />
      <Testimonials />
    </div>
  );
}

export default App;

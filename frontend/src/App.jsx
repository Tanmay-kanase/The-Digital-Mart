import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hello from "./components/Hello";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
// src/main.jsx or src/App.jsx (where you set up global imports)
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons"; // For fa-home, fa-phone
import { far } from "@fortawesome/free-regular-svg-icons"; // For fa-envelope

library.add(fab, fas, far);
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Contact />
      {/* <Footer /> */}
      {/* <Hello /> */}
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import Hero from "./components/pages/Hero";
import Tranding from "./components/pages/Tranding";
import HappingNow from "./components/pages/HappingNow";
import Footer from "./components/pages/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Tranding />
      <HappingNow />
      <Footer />
    </>
  );
}

export default App;

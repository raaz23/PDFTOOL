import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Tool from "./components/Tools";
import LoadingSpinner from './loadingSpinner';
import Workflow from "./components/Workflow"
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? <LoadingSpinner /> : (
        <>
          <Navbar />
          <HeroSection />
          <FeatureSection />
          <Tool />
          <Pricing />
          <Testimonials />
          <Workflow/>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

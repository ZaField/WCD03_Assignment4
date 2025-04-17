import React from "react";
import Hero from "../../layout/hero";
import About from "../../layout/about";
import RecentWork from "../../layout/recentworks";
import Certificate from "../../layout/certificate";
import Testimonials from "../../layout/testimonial";
import Footer from "../../layout/footer";
import Navbar from "../../navbar/navbar";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Navbar />
      <About />
      <RecentWork />
      <Certificate />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App

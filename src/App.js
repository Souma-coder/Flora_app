import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Products from "./components/products/Products";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Slider />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

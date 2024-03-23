import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (

    <div className="container">
      <div className="header">
        <Header/>
      </div>
      <div className="hero">
        <Hero/>
      </div>
      <div className="specials">
        <Specials/>
      </div>
      <div className="testimonials">
        <Testimonials/>
      </div>
      <div className="about">
        <About/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;

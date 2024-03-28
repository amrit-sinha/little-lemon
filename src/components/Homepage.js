import Header from "./Header";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";
const Homepage = () => {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="specials">
        <Specials />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default Homepage;

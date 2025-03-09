import AboutSection from "./components/AboutSection/Index";
import CallSection from "./components/CallSection/Index";
import FeaturedSection from "./components/FeaturedSection/Index";
import Footer from "./components/Footer/Index";
import Hero from "./components/Hero/Index";
import HeroCard from "./components/HeroCard/Index";
import NavBar from "./components/NavBar/Index";
import Services from "./components/Services/Index";
import TeamSection from "./components/TeamSection/Index";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HeroCard/>
      <FeaturedSection/>
      <Services/>
      <AboutSection/>
      <TeamSection/>
      <CallSection/>
      <Footer/>
    </>
  );
};

export default App;

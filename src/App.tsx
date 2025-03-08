import FeaturedSection from "./components/FeaturedSection/Index";
import Hero from "./components/Hero/Index";
import HeroCard from "./components/HeroCard/Index";
import NavBar from "./components/NavBar/Index";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HeroCard/>
      <FeaturedSection/>
    </>
  );
};

export default App;

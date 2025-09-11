import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import WelcomeSection from "./sections/WelcomeSection";
import RecipesSection from "./sections/RecipesSection";
import GastronomySection from "./sections/GastronomySection";
import Footer from "./components/Footer/Footer";
import Lightbox from "./components/Lightbox/Lightbox";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <WelcomeSection />
        <RecipesSection />
        <GastronomySection />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PeriodTracker from "./pages/PeriodTracker";
import MoodTracker from "./pages/MoodTracker";
import WaterTracker from "./pages/WaterTracker";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <PeriodTracker />

      <MoodTracker />

      <WaterTracker />

      <Footer />
    </>
  );
}

export default App;
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PeriodTracker from "./pages/PeriodTracker";
import MoodTracker from "./pages/MoodTracker";
import WaterTracker from "./pages/WaterTracker";
import Journal from "./pages/Journal";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <Dashboard />

      <PeriodTracker />

      <MoodTracker />

      <WaterTracker />

      <Journal />

      <Footer />
    </>
  );
}

export default App;
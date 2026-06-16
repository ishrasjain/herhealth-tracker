import FeatureCard from "../components/FeatureCard";
import "../styles/home.css";

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Track Your Wellness Journey</h1>

        <p>
          Take control of your health with period tracking,
          mood insights, hydration monitoring and wellness analytics.
        </p>

        <button>Get Started</button>
      </section>

      <section className="features">
        <FeatureCard title="Period Tracker" icon="📅" />
        <FeatureCard title="Mood Tracker" icon="😊" />
        <FeatureCard title="Water Tracker" icon="💧" />
        <FeatureCard title="Health Journal" icon="📖" />
      </section>
    </>
  );
}

export default Home;
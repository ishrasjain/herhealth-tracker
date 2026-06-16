function FeatureCard({ title, icon }) {
  return (
    <div className="card">
      <h2>{icon}</h2>
      <h3>{title}</h3>
    </div>
  );
}

export default FeatureCard;
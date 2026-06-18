function FeatureCard({ title, icon }) {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}

export default FeatureCard;
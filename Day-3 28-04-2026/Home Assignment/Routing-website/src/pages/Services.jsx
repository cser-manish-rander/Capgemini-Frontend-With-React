import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <section className="section">
      <h2>Services</h2>

      <div className="grid">
        <ServiceCard
          icon="💻"
          title="Web Development"
          desc="Responsive websites using React, HTML, CSS and JavaScript."
        />

        <ServiceCard
          icon="🎨"
          title="UI Design"
          desc="Beautiful and user-friendly interface design."
        />

        <ServiceCard
          icon="🔗"
          title="API Integration"
          desc="Connect frontend applications with backend REST APIs."
        />
      </div>
    </section>
  );
}

export default Services;
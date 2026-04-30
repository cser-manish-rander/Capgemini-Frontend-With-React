import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <h2>Our Services</h2>

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

      <section className="section light">
        <h2>Latest Projects</h2>

        <div className="grid">
          <ProjectCard
            image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            title="Restaurant Booking"
            desc="Online table reservation system with clean UI."
          />

          <ProjectCard
            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            title="Meal Delivery Tracker"
            desc="Track meal delivery turnaround time."
          />

          <ProjectCard
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            title="Women Safety Analytics"
            desc="Safety analytics dashboard system."
          />
        </div>
      </section>
    </>
  );
}

export default Home;
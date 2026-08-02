import { PageHeader } from "./PageHeader";
import "./InfoView.css";

const experiences = [
  { company: "ACB Bank", date: "(11/2026 - Present)", title: "Product designer" },
  { company: "Enosta", date: "(11/2024 - 05/2026)", title: "Product designer" },
  { company: "Freelancer", date: "(05/2024 - 10/2024)", title: "Product designer" },
  { company: "Leonis", date: "(09/2022 - 03/2024)", title: "UX/UI Designer" },
];

export function InfoView() {
  return (
    <main className="info-view">
      <PageHeader title="Info" />
      <section className="info-view__surface" aria-label="Info">
        <div className="info-view__content">
          <section className="info-section">
            <h2>About me</h2>
            <div className="info-section__body">
              <p>
                I like turning ideas into real products and working with teams to solve problems step by step. I focus
                on making products easy to use and clear for users. Outside of work, I enjoy photography and exploring
                different cultures.
              </p>
              <p>I want to dive deep into my origin 🇻🇳 and share my country with my friends.</p>
            </div>
          </section>
          <section className="info-section">
            <h2>Experience</h2>
            <div className="experience-list">
              {experiences.map((item) => (
                <article className="experience-item" key={item.company}>
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.date}</p>
                  </div>
                  <strong>{item.title}</strong>
                </article>
              ))}
            </div>
          </section>
          <section className="info-section">
            <h2>Photos</h2>
            <img className="info-section__photo" src="/assets/content/info-photo.png" alt="A group having lunch outdoors" />
          </section>
        </div>
      </section>
    </main>
  );
}

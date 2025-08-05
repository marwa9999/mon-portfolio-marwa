import React from "react";
import profilePhoto from "./assets/profile.jpg"; // Assure-toi que ce fichier existe bien

export default function App() {
  return (
    <div className="min-h-screen bg-white text-center p-6">
      {/* Image arrondie */}
      <img
        src={profilePhoto}
        alt="Marwa Ben Mansour"
        className="w-48 h-48 rounded-full mx-auto border-4 border-black object-cover"
      />

      {/* Nom et Titre */}
      <h1 className="text-4xl font-bold mt-6">Marwa Ben Mansour</h1>
      <p className="text-lg mt-2">Administratrice Systèmes DevOps – CI/CD et Cloud</p>

      {/* Liens */}
      <div className="flex justify-center gap-4 mt-4 text-blue-700 underline">
        <a href="https://github.com/marwa9999" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/benmansour-marwa/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Mon CV</a>
      </div>

      {/* Compétences */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold mb-4">Compétences</h2>
        <div className="text-lg leading-relaxed">
          <p><strong>CI/CD – DevOps :</strong> Jenkins, Docker, Kubernetes, Maven, Nexus</p>
          <p><strong>Cloud & IaC :</strong> AWS, Terraform, Ansible</p>
          <p><strong>Tests & Qualité :</strong> CANoe, Python, Postman, Selenium, JIRA</p>
          <p><strong>Langages & Scripts :</strong> Java, Python, Bash, PowerShell</p>
          <p><strong>Monitoring :</strong> Prometheus, Grafana, Node Exporter</p>
          <p><strong>OS & Réseaux :</strong> Linux, Windows</p>
          <p><strong>Méthodes :</strong> Scrum, GitHub, GitLab, Trello</p>
        </div>
      </section>

      {/* Atouts centrés */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Atouts</h2>
        <ul className="list-disc inline-block text-left text-lg">
          <li>Autonomie</li>
          <li>Culture de l’automatisation</li>
          <li>Résolution de problèmes</li>
          <li>Collaboration inter-équipe</li>
          <li>Gestion du temps</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500">
        © 2025 Marwa Ben Mansour. Tous droits réservés.
      </footer>
    </div>
  );
}

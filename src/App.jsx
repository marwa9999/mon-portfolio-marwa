import React from "react";
import profilePhoto from "./assets/profile.jpg"; // remplace par ta photo de profil si besoin

export default function App() {
  return (
    <div className="min-h-screen bg-white text-center p-6">
      {/* Photo */}
      <img
        src={profilePhoto}
        alt="Marwa Ben Mansour"
        className="w-48 h-48 rounded-full mx-auto border-4 border-black object-cover"
      />

      {/* Nom et Titre */}
      <h1 className="text-4xl font-bold mt-6">Marwa Ben Mansour</h1>
      <p className="text-lg mt-2">Ingénieure QA – Tests Fonctionnels & Automatisés</p>

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
          <p><strong>Tests & Automatisation :</strong> CANoe, Postman, Selenium, Python, Pytest, Pycharm, Testlink, PCAN View, JIRA</p>
          <p><strong>CI/CD & DevOps :</strong> Jenkins, Docker, Git, SonarQube</p>
          <p><strong>Méthodes & Gestion :</strong> Scrum, Cycle en V, GitHub, GitLab, Trello</p>
          <p><strong>Langages & Scripts :</strong> Python, Java, Bash</p>
          <p><strong>Systèmes & Réseaux :</strong> Linux, Windows</p>
        </div>
      </section>

      {/* Atouts */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Atouts</h2>
        <ul className="list-disc inline-block text-left text-lg">
          <li>Esprit d’analyse</li>
          <li>Rigueur et précision</li>
          <li>Communication inter-équipe</li>
          <li>Amélioration continue</li>
          <li>Curiosité fonctionnelle</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500">
        © 2025 Marwa Ben Mansour. Tous droits réservés.
      </footer>
    </div>
  );
}

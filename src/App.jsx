import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import marwaPhoto from "./assets/marwa.jpg";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <header className="bg-white shadow fixed w-full z-10 top-0">
          <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src={marwaPhoto}
                alt="Marwa Ben Mansour"
                className="w-12 h-12 rounded-full border border-gray-300 shadow-sm"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Marwa Ben Mansour</h1>
                <p className="text-sm text-gray-600">
                  Administratrice Systèmes DevOps – CI/CD et Cloud
                </p>
              </div>
            </div>
            <nav className="space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">À propos</Link>
              <Link to="/skills" className="text-gray-700 hover:text-blue-600">Compétences</Link>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projets</Link>
              <Link to="/certifications" className="text-gray-700 hover:text-blue-600">Certifications</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="pt-32 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <footer className="text-center text-sm text-gray-500 py-4">
          © 2025 Marwa Ben Mansour. Tous droits réservés.
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Bienvenue sur mon portfolio</h2>
      <p className="text-lg mb-6">
        Je suis spécialisée en DevOps, CI/CD, cloud, tests automatisés et supervision.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="https://cvdesignr.com/fr/cv-editor/cv_EPvDjePBlmA4xV" className="text-blue-600 hover:underline" target="_blank">📄 CV</a>
        <a href="https://github.com/marwa9999" className="text-blue-600 hover:underline" target="_blank">💻 GitHub</a>
        <a href="https://www.linkedin.com/in/benmansour-marwa/" className="text-blue-600 hover:underline" target="_blank">🔗 LinkedIn</a>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="flex flex-col items-center text-center">
      <img
        src={marwaPhoto}
        alt="Marwa Ben Mansour"
        className="w-40 h-40 rounded-full border-4 border-blue-200 mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">À propos</h2>
      <p className="max-w-xl text-gray-700">
        Diplômée RNCP en DevOps, certifiée ISTQB, et passionnée par l’automatisation et la fiabilité des systèmes, je conçois des pipelines CI/CD, déploie dans le cloud et mets en place des outils de supervision.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>CI/CD : Jenkins, GitLab CI, Maven, Nexus</li>
        <li>Conteneurisation : Docker, Kubernetes</li>
        <li>Infrastructure : AWS, Terraform, Ansible</li>
        <li>Tests & QA : Selenium, Postman, CANoe, Python</li>
        <li>Supervision : Prometheus, Grafana, Node Exporter</li>
        <li>Systèmes : Linux, Windows</li>
        <li>Scripting : Bash, PowerShell</li>
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projets</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>CI/CD & Docker :</strong> Pipeline complet avec Jenkins, Docker, Nexus, SonarQube pour un projet Java</li>
        <li><strong>Kubernetes :</strong> Déploiement d'une application sur MicroK8s avec monitoring Prometheus/Grafana</li>
        <li><strong>Infrastructure cloud :</strong> Provisioning d’un environnement sur AWS avec Terraform + Ansible</li>
        <li><strong>Tests automatisés :</strong> Tests fonctionnels avec Selenium intégrés dans une pipeline GitLab</li>
      </ul>
    </section>
  );
}

function Certifications() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>ISTQB® – Foundation Level</li>
        <li>RNCP Niveau 6 – Administrateur Systèmes DevOps</li>
        <li>Développement Web – HTML, CSS, JavaScript, PHP</li>
        <li>Anglais des affaires – Amideast</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-700">Email : benmansourmarwa4@gmail.com</p>
      <p className="text-gray-700">Téléphone : 07 79 49 82 85</p>
      <p className="text-gray-700">Localisation : Antony (92160)</p>
    </section>
  );
}

export default App;
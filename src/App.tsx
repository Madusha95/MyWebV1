import React from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillSection from './components/SkillSection';
import DownloadSection from './components/DownloadSection';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80"
                alt="Madusha Suraweera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-500">Madusha Suraweera</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            <span className="text-blue-500">Electronic Engineer</span> •{' '}
            <span className="text-blue-400">Embedded Engineer</span> •{' '}
            <span className="text-blue-300">AI Engineer</span>
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="https://github.com/Madusha95"
              className="p-2 text-gray-300 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/madusha-suraweera-918010167"
              className="p-2 text-gray-300 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:madushasuraweera@yahoo.com"
              className="p-2 text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-900" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="PCB Design"
              description="Custom PCB designs for various electronic projects including schematics and board layouts"
              image="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80"
              projects={[
                {
                  name: 'Project 1: Motor Controller',
                  link: 'https://github.com/Madusha95/motor-controller',
                  type: 'github',
                },
                {
                  name: 'Project 2: Sensor Board',
                  link: '/path-to-your-pdf.pdf',
                  type: 'pdf',
                },
                {
                  name: 'Project 3: Power Supply',
                  link: 'https://github.com/Madusha95/power-supply',
                  type: 'github',
                },
              ]}
            />
            <ProjectCard
              title="FPGA Projects"
              description="Digital design implementations using VHDL and Verilog for various applications"
              image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
              projects={[
                {
                  name: 'UART Implementation',
                  link: 'https://github.com/Madusha95/uart-fpga',
                  type: 'github',
                },
                {
                  name: 'Digital Filter Design',
                  link: '/path-to-filter-doc.pdf',
                  type: 'pdf',
                },
              ]}
            />
            <ProjectCard
              title="IoT Solutions"
              description="Smart device implementations using Arduino, Raspberry Pi, and cloud integration"
              image="https://images.unsplash.com/photo-1557324232-b8917d8c3908?auto=format&fit=crop&w=800&q=80"
              projects={[
                {
                  name: 'Smart Home System',
                  link: 'https://github.com/Madusha95/smart-home',
                  type: 'github',
                },
                {
                  name: 'Weather Station',
                  link: '/path-to-weather-doc.pdf',
                  type: 'pdf',
                },
              ]}
            />
            <ProjectCard
              title="Robotics Projects"
              description="Autonomous robotics systems and control implementations"
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
              projects={[
                {
                  name: 'Line Following Robot',
                  link: 'https://github.com/Madusha95/line-follower',
                  type: 'github',
                },
                {
                  name: 'Robotic Arm Control',
                  link: '/robotics/arm-control.pdf',
                  type: 'pdf',
                },
                {
                  name: 'Autonomous Navigation',
                  link: 'https://github.com/Madusha95/autonomous-nav',
                  type: 'github',
                },
              ]}
            />
            <ProjectCard
              title="AI/ML Applications"
              description="Machine learning and computer vision projects for embedded systems"
              image="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80"
              projects={[
                {
                  name: 'Object Detection System',
                  link: 'https://github.com/Madusha95/object-detection',
                  type: 'github',
                },
                {
                  name: 'Edge AI Implementation',
                  link: '/ai-projects/edge-ai.pdf',
                  type: 'pdf',
                },
                {
                  name: 'Predictive Maintenance',
                  link: 'https://github.com/Madusha95/predictive-maintenance',
                  type: 'github',
                },
              ]}
            />
            <ProjectCard
              title="Communication Systems"
              description="RF and wireless communication system implementations"
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              projects={[
                {
                  name: 'LoRa Network Implementation',
                  link: 'https://github.com/Madusha95/lora-network',
                  type: 'github',
                },
                {
                  name: 'RF Module Design',
                  link: '/communications/rf-module.pdf',
                  type: 'pdf',
                },
                {
                  name: 'Wireless Sensor Network',
                  link: 'https://github.com/Madusha95/wsn-project',
                  type: 'github',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillSection />

      {/* CV Section */}
      <DownloadSection
        id="cv"
        title="Curriculum Vitae"
        description="Download my detailed CV to learn more about my professional experience, education, and achievements."
        downloadLink="/Share/Madusha_Suraweera_CV.pdf"
        buttonText="Download CV"
        openInNewTab={true}
      />

      {/* Resume Section */}
      <DownloadSection
        id="resume"
        title="Resume"
        description="Get a concise overview of my skills and experience with my one-page resume."
        downloadLink="/Share/Madusha_Suraweera_Resume.pdf"
        buttonText="Download Resume"
        openInNewTab={true}
      />

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href="mailto:madushasuraweera@yahoo.com"
              className="flex items-center gap-3 text-lg text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>madushasuraweera@yahoo.com</span>
            </a>
            <a
              href="tel:+94779408269"
              className="flex items-center gap-3 text-lg text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>+94 77 940 8269</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Madusha Suraweera. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
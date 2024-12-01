import React from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';

import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';
import SkillSection from './components/SkillSection';
import DownloadSection from './components/DownloadSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import CoursesSection from './components/CoursesSection';

// Importing images from the assets folder
import madushaImage from './assets/Madusha.jpg';
import mscImage from './assets/MSC.jpg';
import mengImage from './assets/MENG.jpg';
import fpgaImage from './assets/FPGA.jpg';
import rtosImage from './assets/RTOS.jpg';
import iotImage from './assets/IoT.jpg';
import roboticImage from './assets/Robotic.jpg';
import aiImage from './assets/AI.jpg';
import csImage from './assets/CS.jpg';
import pcbImage from './assets/PCB.jpg';
import webImage from './assets/Web.jpg';

// Importing PDFs from the assets folder
import cvPdf from './assets/Madusha_Suraweera_CV.pdf';
import resumePdf from './assets/Madusha_Resume.pdf';

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
                src={madushaImage}
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
       {/* About Section */}
       <AboutSection />

       {/* Experience Section */}
       <ExperienceSection />

       {/* Education Section */}
       <EducationSection />

       {/* Courses Section */}
      <CoursesSection />
      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-900" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="MSc Project"
              description="Attention-Based CNN for Embedded ECG Signals Classification"
              image={mscImage}
              projects={[
                {
                  name: 'Attention-Based CNN for Embedded ECG Signals Classification',
                  link: 'https://drive.google.com/file/d/1890iElypqFqaa5rdztucgBCeWWqgdueR/view?usp=sharing',
                  type: 'drive',
                },
              ]}
            />
            <ProjectCard
              title="MEng Project"
              description="Automated Home using IoT and Neural Networks"
              image={mengImage}
              projects={[
                {
                  name: 'Automated Home using IoT and Neural Networks',
                  link: 'https://github.com/Madusha95/Smart-Home-',
                  type: 'github',
                },
                {
                  name: 'Automated Home using IoT and Neural Networks',
                  link: 'https://drive.google.com/file/d/18kMM1u0V96bQ8GSUHwiO6RVVVsJYP-Gf/view?usp=sharing',
                  type: 'drive',
                },
              ]}
            />
            <ProjectCard
              title="FPGA Projects"
              description="Digital design implementations using VHDL and Verilog for various applications"
              image={fpgaImage}
              projects={[
                {
                  name: 'CPU(VHDL)',
                  link: 'https://github.com/Madusha95/FPGA/tree/main/CPU(VHDL)',
                  type: 'github',
                },
                {
                  name: 'Counters(Verilog)',
                  link: 'https://github.com/Madusha95/FPGA/tree/main/Counters(Verilog)',
                  type: 'github',
                },
                {
                  name: 'Tail Light Controller Circuit(Verilog)',
                  link: 'https://github.com/Madusha95/FPGA/tree/main/Tail%20Light%20Controller%20Circuit(Verilog)',
                  type: 'github',
                },
              ]}
            />
            <ProjectCard
              title="RTOS Projects"
              description="Smart devices with real-time operating systems, leveraging Arduino, Raspberry Pi,NodeMCU(ESP32/ESP8266) and seamless cloud integration"
              image={rtosImage}
              projects={[
                {
                  name: 'FreeRTOS Projects',
                  link: 'https://github.com/Madusha95/RTOS',
                  type: 'github',
                },
              ]}
            />
            <ProjectCard
              title="IoT Solutions"
              description="Smart device implementations using Arduino, Raspberry Pi, and cloud integration"
              image={iotImage}
              projects={[
                {
                  name: 'GSM and IoT Based Weather Monitoring System',
                  link: '',
                  type: 'pdf',
                },
                {
                  name: 'Sensors Data Acquisition systems using Node-Red and APIs',
                  link: '',
                  type: 'pdf',
                },
              ]}
            />
            <ProjectCard
              title="Embedded Projects"
              description="Autonomous robotics systems and control implementations"
              image={roboticImage}
              projects={[
                {
                  name: 'Cold End Coating Machine',
                  link: 'https://drive.google.com/file/d/1s-F19a1plmIHHw8zf7VwM4dbharo_5NH/view?usp=sharing',
                  type: 'drive',
                },
                {
                  name: 'Obstacle Avoiding Robot Using AI',
                  link: 'https://drive.google.com/file/d/1glIpEFi3FiHmYAz5NUYZFB8qyEAULn_X/view?usp=sharing',
                  type: 'drive',
                },
                {
                  name: 'Liquid Color Measurement Using PIC Microcontroller',
                  link: 'https://drive.google.com/file/d/1EgdJgReEUmcM6wKmrOY8siluxLm6pvK1/view?usp=sharing',
                  type: 'drive',
                },
              ]}
            />
            <ProjectCard
              title="AI/ML Applications"
              description="Machine learning and computer vision projects for embedded systems"
              image={aiImage}
              projects={[
                {
                  name: 'Chat bot using Graph Database(Neo4j)',
                  link: 'https://github.com/Madusha95/neo4jChatbot',
                  type: 'github',
                },
                {
                  name: 'Attention-Based CNN for Embedded ECG Signals Classification',
                  link: 'https://github.com/Madusha95/',
                  type: 'github',
                },
                {
                  name: 'Automated Home using IoT and Neural Networks',
                  link: 'https://github.com/Madusha95/Smart-Home-',
                  type: 'github',
                },
              ]}
            />
            <ProjectCard
              title="Communication Systems"
              description="RF and wireless communication system implementations"
              image={csImage}
              projects={[
                {
                  name: 'Mesh Network using NodeMCUs',
                  link: 'https://drive.google.com/file/d/1YFJ4xKCt5tiA6JPk2cB2A-L3763cECdg/view?usp=sharing',
                  type: 'drive',
                },
                {
                  name: 'MIMO System using MATLAB',
                  link: 'https://drive.google.com/file/d/1z3K1jxMBbtNelE56qeK2t1D-suwA8DhQ/view?usp=sharing',
                  type: 'drive',
                },
                {
                  name: 'PLL System using MATLAB',
                  link: 'https://drive.google.com/file/d/1LOWVFG8nYx1OnUEijC9m2MjX2kKLnXom/view?usp=sharing',
                  type: 'drive',
                },
              ]}
            />
            <ProjectCard
              title="PCB Design"
              description="Expertise in designing PCB for Embedded Systems"
              image={pcbImage}
              projects={[
                {
                  name: 'PCB Designs for Vending Machines',
                  link: 'https://drive.google.com/file/d/10USjkVylxSnDXytf9d6TYuApZ6CoKTdK/view?usp=sharing',
                  type: 'drive',
                },
                {
                  name: '3-Digit Decimal Up/Down Counter Circuit',
                  link: 'https://drive.google.com/file/d/1hPKfzQl5nJvdxHeKznQ55M0o2kz5FD0g/view?usp=sharing',
                  type: 'drive',
                },
              ]}
            />
            <ProjectCard
              title="Web Applications"
              description="Web Applications using React JS and Angular JS"
              image={webImage}
              projects={[
                {
                  name: 'Technical Web Applications for IPDgroup(React JS/Angular JS)',
                  link: '',
                  type: 'pdf',
                },
                {
                  name: 'MyWebsite(React)',
                  link: 'https://github.com/Madusha95/myWebV1',
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
        downloadLink={cvPdf}
        buttonText="Download CV"
        openInNewTab={true}
      />

      {/* Resume Section */}
      <DownloadSection
        id="resume"
        title="Resume"
        description="Get a concise overview of my skills and experience with my one-page resume."
        downloadLink={resumePdf}
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

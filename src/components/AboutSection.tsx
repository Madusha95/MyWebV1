import React from 'react';
import { User, Cpu, CircuitBoard, Brain, Bot } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-black" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        
        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-blue-500 transition-duration-300">
          <div className="flex items-start gap-6">
            <div className="hidden md:block">
              <div className="bg-blue-500 p-4 rounded-full">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Experienced and self-motivated engineer with over 4 years of expertise in Electronics and Embedded Engineering,
                complemented by an MEng in Electronic and Electrical Engineering from the University of the West of England.
                Currently pursuing an MSc in Embedded Systems and IC Design to further refine skills in embedded systems and
                integrated circuits.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Passionate about leveraging new technologies, fostering innovative problem-solving, and delivering impactful
                solutions, with particular interest in:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Bot className="w-5 h-5 text-blue-500" />
                  <span>Embedded Systems</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CircuitBoard className="w-5 h-5 text-blue-500" />
                  <span>IC Design</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Cpu className="w-5 h-5 text-blue-500" />
                  <span>PCB Design</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Brain className="w-5 h-5 text-blue-500" />
                  <span>Artificial Intelligence</span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Proven ability to excel in team environments and under pressure, consistently demonstrating a commitment to
                pushing the boundaries in the engineering field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
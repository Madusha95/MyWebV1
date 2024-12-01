import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4 text-blue-500">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-gray-300 border border-gray-800 hover:border-blue-500"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillSection = () => {
  const skillCategories = [
    {
      title: "EDA Tools",
      skills: ["Xilinx Vivado", "ModelSim", "Quartus"]
    },
    {
      title: "Embedded Systems",
      skills: ["Arduino", "Raspberry Pi", "NodeMCU", "FPGA Programming (VHDL, Verilog)", "RTOS", "IoT"]
    },
    {
      title: "Protocols and Interfaces",
      skills: ["I2C", "SPI", "UART (RS232)", "CAN", "USB"]
    },
    {
      title: "Debugging Tools",
      skills: ["JTAG", "Logic Analyzers", "Oscilloscopes"]
    },
    {
      title: "Hardware Design",
      skills: ["PCB Design (Proteus, Altium)", "LTspice", "SOLIDWORKS"]
    },
    {
      title: "AI and Machine Learning",
      skills: ["TensorFlow", "PyTorch","Langchain"]
    },
    {
      title: "Software Development",
      skills: ["Python", "C/C++", "JavaScript", "Angular", "React", "Node-RED", "MATLAB"]
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub", "Azure DevOps"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-black" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
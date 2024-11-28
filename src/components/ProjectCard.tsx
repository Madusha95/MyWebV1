import React from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  projects: {
    name: string;
    link: string;
    type: 'github' | 'pdf' |' drive';
  }[];
}

const ProjectCard = ({ title, description, image, projects }: ProjectCardProps) => {
  return (
    <div className="bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <ExternalLink size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-col gap-2">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-4 py-2 bg-blue-900 hover:bg-blue-800 text-blue-100 rounded-lg transition-colors duration-300"
            >
              <span>{project.name}</span>
              {project.type === 'github' ? (
                <Github size={20} />
              ) : (
                <FileText size={20} />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
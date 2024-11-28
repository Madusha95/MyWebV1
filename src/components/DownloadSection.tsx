import React from 'react';
import { FileDown } from 'lucide-react';

interface DownloadButtonProps {
  href: string;
  text: string;
  isNewTab?: boolean;
}

const DownloadButton = ({ href, text, isNewTab }: DownloadButtonProps) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
    target={isNewTab ? "_blank" : undefined}
    rel={isNewTab ? "noopener noreferrer" : undefined}
  >
    <FileDown size={20} />
    <span>{text}</span>
  </a>
);

interface DownloadSectionProps {
  id: string;
  title: string;
  description: string;
  downloadLink: string;
  buttonText: string;
  openInNewTab?: boolean;
}

const DownloadSection = ({ 
  id, 
  title, 
  description, 
  downloadLink, 
  buttonText,
  openInNewTab = false 
}: DownloadSectionProps) => {
  return (
    <section id={id} className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h2>
        <p className="text-xl text-gray-300 mb-8">
          {description}
        </p>
        <DownloadButton 
          href={downloadLink} 
          text={buttonText} 
          isNewTab={openInNewTab}
        />
      </div>
    </section>
  );
};

export default DownloadSection;
import React from 'react';
import { GraduationCap, Building, Calendar } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  university: string;
  location: string;
  period: string;
  details?: string[];
}

const EducationItem = ({ degree, university, location, period, details }: EducationItemProps) => (
  <div className="mb-8 bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="bg-blue-500 p-3 rounded-full">
        <GraduationCap className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{degree}</h3>
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <Building className="w-4 h-4" />
          <span>{university}, {location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 mb-3">
          <Calendar className="w-4 h-4" />
          <span>{period}</span>
        </div>
        {details && details.length > 0 && (
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

const EducationSection = () => {
  return (
    <section className="py-20 px-4 bg-black" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Education
        </h2>
        <div className="space-y-6">
          <EducationItem
            degree="Master of Science (MSc) in Embedded Systems and IC Design"
            university="Liverpool John Moores University"
            location="UK"
            period="2023 - 2025"
          />
          
          <EducationItem
            degree="Master of Engineering (MEng) in Electronic and Electrical Engineering"
            university="University of West of England"
            location="UK"
            period="2017 - 2021"
            details={[
              "Completed with Merit (Second Class, Division 1)",
              "Completed 60 ECTS credits and 120 university credits (BEng Level) with Distinction"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
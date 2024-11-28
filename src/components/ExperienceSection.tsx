import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: Array<string | { main: string; sub: string[] }>;
}

const ExperienceItem = ({ title, company, location, period, responsibilities }: ExperienceItemProps) => (
  <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="bg-blue-500 p-3 rounded-full">
        <Briefcase className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="flex items-center gap-2 text-gray-400 mt-2">
          <MapPin className="w-4 h-4" />
          <span>{company} | {location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 mt-1 mb-4">
          <Calendar className="w-4 h-4" />
          <span>{period}</span>
        </div>
        <ul className="list-disc ml-6 text-gray-300 space-y-3">
          {responsibilities.map((item, index) => (
            typeof item === 'string' ? (
              <li key={index}>{item}</li>
            ) : (
              <li key={index}>
                {item.main}
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  {item.sub.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Professional Experience
        </h2>
        <div className="space-y-8">
          <ExperienceItem
            title="Embedded Engineer - AI"
            company="IPD Colombo (Pvt) Ltd"
            location="Colombo 05, Sri Lanka"
            period="01/2023 - Present"
            responsibilities={[
              "Working on AI and IoT Projects (Building Management Systems and Chat Bots).",
              "Engaging in RnD Projects (Arduino and Raspberry Pi).",
              "Performing CI/CD Operations."
            ]}
          />

          <ExperienceItem
            title="Electronic Engineer"
            company="East Link Engineering Company (Pvt) Ltd"
            location="Colombo 05, Sri Lanka"
            period="09/2021 - 12/2022"
            responsibilities={[
              {
                main: "Participated in RnD Projects including:",
                sub: [
                  "CPM (Cinnamon Processing Machine)",
                  "RMB (Recycle Material Buying) Vending Machine",
                  "LVM (Liquid Volume Measuring) Vending Machine",
                  "SWS (Self Weighing Station) Machine",
                  "Solar Experience Center, EV Charging Station"
                ]
              },
              "Led the RnD Division as a Tech Lead.",
              "Performed PCB Designing and Troubleshooting."
            ]}
          />

          <ExperienceItem
            title="Trainee Engineer"
            company="SriLankan Airlines"
            location="Katunayake, Sri Lanka"
            period="10/2019 - 01/2020"
            responsibilities={[
              "Gained experience in the Engineering Department including Technical Servicers and Avionics Workshops."
            ]}
          />

          <ExperienceItem
            title="Trainee Engineer"
            company="Piramal Glass PLC"
            location="Katunayake, Sri Lanka"
            period="10/2019 - 01/2020"
            responsibilities={[
              "Worked in the Electronics Section including Instrument workshops and Electrical Workshops.",
              "Completed a project to reduce wastage in Coating Machines."
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
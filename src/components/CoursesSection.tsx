import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';

interface CourseItemProps {
  platform: string;
  title: string;
  date: string;
}

const CourseItem = ({ platform, title, date }: CourseItemProps) => (
  <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="bg-blue-500 p-3 rounded-full">
        <BookOpen className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-gray-400 mt-1">{platform}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CoursesSection = () => {
  const courses = [
    {
      platform: 'Linkedin',
      title: 'Embedded C',
      date: 'January 2025'
    },
    {
      platform: 'Linkedin',
      title: 'Learning Altium',
      date: 'January 2025'
    },
    {
      platform: 'Linkedin',
      title: 'LLaMa for Developers',
      date: 'January 2025'
    },
    {
      platform: 'Neo4J',
      title: 'Introduction to Vector Indexes and Unstructured Data',
      date: 'October 2024'
    },
    {
      platform: 'Neo4J',
      title: 'Build a Neo4j-backed Chatbot using Python',
      date: 'October 2024'
    },
    {
      platform: 'Neo4J',
      title: 'Neo4j and LLM Fundamentals',
      date: 'October 2024'
    },
    {
      platform: 'Altium',
      title: 'Altium PCB Design Course',
      date: 'June 2024'
    },
    {
      platform: 'eduonix',
      title: 'IoT E-degree - The Novice to Expert Program in IoT',
      date: 'Oct 2022'
    },
    {
      platform: 'Google',
      title: 'Project Initiation: Starting a Successful Project',
      date: 'Sep 2022'
    },
    {
      platform: 'Udemy',
      title: 'Electric Vehicle Technology',
      date: 'Aug 2022'
    },
    {
      platform: 'Google',
      title: 'Foundation of Project Management',
      date: 'Jul 2022'
    },
    {
      platform: 'University of Moratuwa (CODL)',
      title: 'Python Programming',
      date: 'Aug 2022'
    },
    {
      platform: 'University of Moratuwa (CODL)',
      title: 'Python for Beginners',
      date: 'Jun 2022'
    },
    {
      platform: 'Udemy',
      title: 'CMOS Digital Integrated Circuit Design',
      date: 'Jun 2022'
    },
    {
      platform: 'eduonix',
      title: 'Machine Learning For Absolute Beginners',
      date: 'Jun 2022'
    },
    {
      platform: 'Udemy',
      title: 'I2C, SPI, UART (RS232), VGA in VHDL for FPGA interfacing',
      date: 'May 2022'
    },
    {
      platform: 'Udemy',
      title: 'PCB Design + PCB For Microcontroller Circuit+ MultiLayer PCB',
      date: 'May 2022'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900" id="courses">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Professional Courses
        </h2>
        <div className="grid gap-6">
          {courses.map((course, index) => (
            <CourseItem
              key={index}
              platform={course.platform}
              title={course.title}
              date={course.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
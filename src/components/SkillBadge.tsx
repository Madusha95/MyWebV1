import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <div className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <span className="text-gray-800 font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;
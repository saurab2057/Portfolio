import { Code2, PenTool, Database, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-8 h-8 text-red-600" />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-8 h-8 text-red-600" />,
      skills: ['Python', 'Django', 'PostgreSQL', 'RESTful APIs']
    },
    {
      title: 'Programming',
      icon: <Code2 className="w-8 h-8 text-red-600" />,
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Design',
      icon: <PenTool className="w-8 h-8 text-red-600" />,
      skills: ['Figma', 'Photoshop', 'UI/UX Design', 'Wireframing']
    }
  ];

  const Myskills = [
    { name: 'Python', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Django', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Photoshop', level: 70 },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

          {/* Skill Bars */}
        <div className="mt-12 bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {Myskills.map((skill, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-red-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>  
    </section>
  );
};

export default Skills;
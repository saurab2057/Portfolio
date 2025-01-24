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
      skills: ['Python Master', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Design',
      icon: <PenTool className="w-8 h-8 text-red-600" />,
      skills: ['Figma', 'Photoshop', 'UI/UX Design', 'Wireframing']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
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
      </div>
    </section>
  );
};

export default Skills;
import { useEffect, useState } from 'react';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const contents = [
    {
      title: 'Personal Info',
      content: `I'm a passionate Full Stack Developer with expertise in Python, React, and Django. 
                I love creating beautiful and functional web applications that solve real-world problems.`,
    },
    {
      title: 'Education',
      content: `• Bachelor's in Computer Science
                • Multiple certifications in Web Development and Python
                • Continuous learner and technology enthusiast`,
    },
    {
      title: 'Experience',
      content: `• Python Master
                • Full Stack Development with React and Django
                • UI/UX Design with Figma
                • Graphics Design with Photoshop`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [contents.length]);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <div className="min-h-[200px] transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                {contents[activeIndex].title}
              </h3>
              <p className="text-gray-300 whitespace-pre-line animate-fade-in">
                {contents[activeIndex].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
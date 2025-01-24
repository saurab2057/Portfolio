import  { useState, useEffect } from 'react';

const Hero = () => {
  const titles = [
    "Full Stack Developer",
    "Python Expert",
    "Machine Learning Engineer"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <div id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative md:translate-x-16">
              Hi, I'm <span className="text-red-600">Saurab</span> Khatiwoda
            </h1>
            <p 
              className={`text-xl md:text-2xl text-gray-400 mb-8 md:translate-x-16 transition-opacity duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {titles[currentTitleIndex]}
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:-ml-16">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mx-auto">
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=500"
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
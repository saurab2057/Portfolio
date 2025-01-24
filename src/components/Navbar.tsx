import  { useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Contact'];

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-red-600">SK</span>
          </div>
          
          <div className="hidden md:flex md:items-center">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="/path-to-your-cv.pdf"
                download
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:text-white border border-red-600 rounded-md hover:bg-red-600 transition-colors ml-4"
              >
                <FileDown className="w-4 h-4 mr-1" />
                CV
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="/path-to-your-cv.pdf"
              download
              className="inline-flex items-center px-3 py-2 text-base font-medium text-red-600 hover:text-white rounded-md w-full"
              onClick={() => setIsOpen(false)}
            >
              <FileDown className="w-5 h-5 mr-2" />
              CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import { Facebook, Instagram, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://www.facebook.com/saurav.khatiwoda.52"  // Replace with your Facebook link
              className="text-gray-400 hover:text-red-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/thesaurab_k01/"  // Replace with your Instagram link
              className="text-gray-400 hover:text-red-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/KhatiwodaSaurab"  // Replace with your X (formerly Twitter) link
              className="text-gray-400 hover:text-red-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <X className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Saurab Khatiwoda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

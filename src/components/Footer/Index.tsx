import { FaLinkedin, FaFacebook, FaTwitter, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#2E333E]">
      <div className="max-w-6xl w-full mx-auto border-t pt-11 border-gray-300 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold">Abdul Sattar</h2>
          <p className="text-gray-600 mt-2">Web Designer & Front-End Developer</p>
          <a 
            href="https://www.linkedin.com/in/abdul-sattar-117478267/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm mt-2 inline-block"
          >
            Visit my LinkedIn
          </a>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="flex items-center justify-center md:justify-start text-gray-600 mt-2">
            <FaEnvelope className="mr-2 text-blue-500" /> abdulsattarghoto321@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start text-gray-600 mt-2">
            <FaPhone className="mr-2 text-blue-500" /> +92 310 3252121
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold">Follow Me</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a 
              href="https://www.linkedin.com/in/abdul-sattar-117478267/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:text-blue-700 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdul-sattar-117478267/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-700 text-2xl"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdul-sattar-117478267/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-600 text-2xl"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdul-sattar-117478267/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800 text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 bg-[#B1040E] text-white text-sm mt-6">
        &copy; {new Date().getFullYear()} Abdul Sattar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

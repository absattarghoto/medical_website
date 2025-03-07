import React, { useState } from "react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="min-h-[92px] flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Container */}
        <div className="w-full max-w-[200px] md:max-w-[250px]">
          <img
            src="Images/Column.png"
            alt="Company logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex flex-wrap gap-x-6 text-gray-700 text-base lg:text-lg">
            <li>
              <div className="flex items-center gap-2 hover:text-[#B1040E] transition">
                <img
                  className="h-4 w-4"
                  src="Images/Vector (3).png"
                  alt="Location icon"
                />
                <a href="https://www.google.com/maps/place/Infirix/@28.0178272,69.2970202,13z/data=!4m6!3m5!1s0x3936ed0027cf432f:0x77795504da1213bd!8m2!3d28.003833!4d69.3040779!16s%2Fg%2F11wqct83_t?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
                  Akhtar Colony Karachi, Sindh
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 hover:text-[#B1040E] transition">
                <img
                  className="h-4 w-4"
                  src="Images/Vector (4).png"
                  alt="Office hours icon"
                />
                <a href="#">Office Hours: 1 pm – 5 pm</a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 hover:text-[#B1040E] transition">
                <img
                  className="h-4 w-4"
                  src="Images/Vector (5).png"
                  alt="Phone icon"
                />
                <a href="tel:+923103252121">+92 3103252121</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#B1040E] focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed md:hidden inset-0 top-[92px] bg-white z-50 overflow-y-auto">
          <ul className="flex flex-col p-6 gap-6">
            <li>
              <div className="flex items-center gap-3 hover:text-[#B1040E] transition">
                <img
                  className="h-5 w-5"
                  src="Images/Vector (3).png"
                  alt="Location icon"
                />
                <a
                  href="https://www.google.com/maps/place/Infirix/@28.0178272,69.2970202,13z/data=!4m6!3m5!1s0x3936ed0027cf432f:0x77795504da1213bd!8m2!3d28.003833!4d69.3040779!16s%2Fg%2F11wqct83_t?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                  onClick={handleLinkClick}
                  className="text-lg"
                >
                  Akhtar Colony Karachi, Sindh
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3 hover:text-[#B1040E] transition">
                <img
                  className="h-5 w-5"
                  src="Images/Vector (4).png"
                  alt="Office hours icon"
                />
                <a href="#" onClick={handleLinkClick} className="text-lg">
                  Office Hours: 1 pm – 5 pm
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3 hover:text-[#B1040E] transition">
                <img
                  className="h-5 w-5"
                  src="Images/Vector (5).png"
                  alt="Phone icon"
                />
                <a href="tel:+923103252121" onClick={handleLinkClick} className="text-lg">
                  +92 3103252121
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

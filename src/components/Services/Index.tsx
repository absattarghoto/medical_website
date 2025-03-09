import { useEffect, useState } from "react";
const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Fade-in delay
  }, []);
  return (
    <section className="bg-[#F9F7F4] justify-center">
      <div className="w-full max-w-[776px] px-4 mx-auto text-center">
        <p className="text-[#B1040E] text-sm sm:text-base font-semibold">
          OUR SERVICES
        </p>
        <p className="text-[#000000] text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
          Quality dental services
        </p>
        <p className="text-[#2E333E] text-base sm:text-lg md:text-xl leading-relaxed">
          Our dentists provide a range of services to all ages and needs to keep
          their teeth and gums healthy for life
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-6 px-4 md:px-0 py-20  ">
      <div
      className={`transition-all duration-500 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } hover:scale-105`}
    >
      {/* Card Header */}
      <div className="bg-[#B1040E] h-[61px] w-[373px] py-2 rounded-t-lg">
        <p className="text-[#FFFFFF] text-[32px] text-center">
          Quality Dental Services
        </p>
      </div>

      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src="Images/Image (4).png"
          alt="Dental Service"
          className="transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Card Body */}
      <div className="h-[328px] w-[373px] bg-white p-4 shadow-lg rounded-b-lg">
        <p className="text-[#2E333E] text-lg text-center">
          Our dentists provide a range of services to all ages and needs to
          keep their teeth and gums healthy for life.
        </p>

        {/* Buttons */}
        <div className="px-3 py-6 flex flex-wrap gap-3 justify-center">
          {["Fillings", "Scale & Clean", "Examination", "Veneers", "Implants", "Mouthguards"].map((service) => (
            <a
              key={service}
              href="#_"
              className="relative inline-flex items-center pr-10 pl-4 py-1 overflow-hidden text-lg font-medium text-[#B1040E] border-2 border-[#B1040E] rounded-full hover:text-white transition-all duration-300 ease-in-out group"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#B1040E] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-300 ease-in-out"></span>
              <span className="relative">{service}</span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
    <div
      className={`transition-all duration-500 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } hover:scale-105`}
    >
      {/* Card Header */}
      <div className="bg-[#B1040E] h-[61px] w-[373px] py-2 rounded-t-lg">
        <p className="text-[#FFFFFF] text-[32px] text-center">
        Dental Cosmetic
        </p>
      </div>

      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src="Images/Image (5).png"
          alt="Dental Service"
          className="transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Card Body */}
      <div className="h-[328px] w-[373px] bg-white p-4 shadow-lg rounded-b-lg">
        <p className="text-[#2E333E] text-lg text-center">
        We know the first thing people notice about you is your smile, We deliver incredible cosmetic results that will have you smiling with confidence. 
        </p>

        {/* Buttons */}
        <div className="px-3 py-6 flex flex-wrap gap-3 justify-center">
          {["Fillings", "Scale & Clean", "Examination", "Veneers", "Implants", "Mouthguards"].map((service) => (
            <a
              key={service}
              href="#_"
              className="relative inline-flex items-center pr-10 pl-4 py-1 overflow-hidden text-lg font-medium text-[#B1040E] border-2 border-[#B1040E] rounded-full hover:text-white transition-all duration-300 ease-in-out group"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#B1040E] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-300 ease-in-out"></span>
              <span className="relative">{service}</span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
    <div
      className={`transition-all duration-500 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } hover:scale-105`}
    >
      {/* Card Header */}
      <div className="bg-[#B1040E] h-[61px] w-[373px] py-2 rounded-t-lg">
        <p className="text-[#FFFFFF] text-[32px] text-center">
        Emergency Care
        </p>
      </div>

      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src="Images/Image (6).png"
          alt="Dental Service"
          className="transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Card Body */}
      <div className="h-[328px] w-[373px] bg-white p-4 shadow-lg rounded-b-lg">
        <p className="text-[#2E333E] text-lg text-center">
        We provides emergency dental services if you have knocked out a tooth or are experiencing a severe toothache, do not delay seeking medical treatment. 
        </p>

        {/* Buttons */}
        <div className="px-3 py-6 flex flex-wrap gap-3 justify-center">
          {["Fillings", "Scale & Clean", "Examination", "Veneers", "Implants", "Mouthguards"].map((service) => (
            <a
              key={service}
              href="#_"
              className="relative inline-flex items-center pr-10 pl-4 py-1 overflow-hidden text-lg font-medium text-[#B1040E] border-2 border-[#B1040E] rounded-full hover:text-white transition-all duration-300 ease-in-out group"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#B1040E] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-300 ease-in-out"></span>
              <span className="relative">{service}</span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Services;

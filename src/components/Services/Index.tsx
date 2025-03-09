import { useEffect, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Fade-in delay
  }, []);

  const cardData = [
    {
      header: "Quality Dental Services",
      image: "Images/Image (4).png",
      body:
        "Our dentists provide a range of services to all ages and needs to keep their teeth and gums healthy for life.",
    },
    {
      header: "Dental Cosmetic",
      image: "Images/Image (5).png",
      body:
        "We know the first thing people notice about you is your smile. We deliver incredible cosmetic results that will have you smiling with confidence.",
    },
    {
      header: "Emergency Care",
      image: "Images/Image (6).png",
      body:
        "We provide emergency dental services if you have knocked out a tooth or are experiencing a severe toothache, do not delay seeking medical treatment.",
    },
  ];

  const servicesList = [
    "Fillings",
    "Scale & Clean",
    "Examination",
    "Veneers",
    "Implants",
    "Mouthguards",
  ];

  return (
    <section className="bg-[#F9F7F4] flex flex-col items-center">
      <div className="w-full max-w-2xl px-4 mx-auto text-center">
        <p className="text-[#B1040E] text-sm sm:text-base font-semibold">
          OUR SERVICES
        </p>
        <p className="text-[#000000] text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
          Quality dental services
        </p>
        <p className="text-[#2E333E] text-base sm:text-lg md:text-xl leading-relaxed">
          Our dentists provide a range of services to all ages and needs to keep
          their teeth and gums healthy for life.
        </p>
      </div>

      <div className="w-full grid gap-6 px-4 py-20 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map(({ header, image, body }, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ease-in-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            } hover:scale-105 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col`}
          >
            {/* Card Header */}
            <div className="bg-[#B1040E] py-2 px-4">
              <p className="text-[#FFFFFF] text-2xl text-center font-medium">
                {header}
              </p>
            </div>

            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={image}
                alt="Dental Service"
                className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-grow p-4">
              <p className="text-[#2E333E] text-lg text-center flex-grow">
                {body}
              </p>

              {/* Buttons */}
              <div className="mt-4 flex flex-wrap gap-3 justify-center">
                {servicesList.map((service) => (
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
        ))}
      </div>
    </section>
  );
};

export default Services;

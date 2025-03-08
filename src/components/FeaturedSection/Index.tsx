import { useState, useEffect } from "react";

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in ms
    const increment = Math.ceil(value / (duration / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [value]);

  return <>{count}</>;
};

const FeaturedSection = () => {
  return (
    <section className="bg-[#F9F7F4] py-32 flex flex-col items-center">
      <div className="w-full max-w-[900px] px-4 mx-auto text-center">
        <p className="text-[#B1040E] text-sm sm:text-base font-semibold">
          WELCOME TO HALIFAX FAMILY DENTAL CARE
        </p>
        <p className="text-[#000000] text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
          WELCOME TO HALIFAX FAMILY DENTAL CARE
        </p>
        <p className="text-[#2E333E] text-base sm:text-lg md:text-xl leading-relaxed">
          We are a family dental practice that has earned the trust of our
          patients through honesty, efficiency, and good communication.
        </p>
      </div>

      <div className="w-full px-4 md:px-8 lg:w-[1180px] my-16 lg:my-28 mx-auto">
        <div
          className="w-full h-auto lg:h-[585px] flex flex-wrap lg:flex-row justify-center lg:justify-between items-center 
               bg-none lg:bg-[url('/Images/Line.png')] lg:bg-cover lg:bg-center transition-all duration-500"
        >
          <div className="hover:scale-105 transition-transform duration-300">
            <img
              src="Images/Image.png"
              className="w-[150px] md:w-[180px] lg:w-auto"
            />
          </div>
          <div className="translate-y-[-20px] lg:translate-y-[-50px] hover:scale-105 transition-transform duration-300">
            <img
              src="Images/Image (1).png"
              className="w-[150px] md:w-[180px] lg:w-auto"
            />
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <img
              src="Images/Image (2).png"
              className="w-[150px] md:w-[180px] lg:w-auto"
            />
          </div>
          <div className="translate-y-[-20px] lg:translate-y-[-50px] hover:scale-105 transition-transform duration-300">
            <img
              src="Images/Image (3).png"
              className="w-[150px] md:w-[180px] lg:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1040px] px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row justify-between gap-6 text-center">
        <div>
          <p className="text-[#2E333E] text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[0.6]">
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center">
                <Counter value={20} />
                <span className="text-[#B1040E] text-3xl sm:text-4xl lg:text-[32px] ml-1">
                  +
                </span>
              </span>
              <span className="text-[#B1040E] text-lg sm:text-xl lg:text-[24px] mt-2">
                Years Of Experience
              </span>
            </div>
          </p>
        </div>
        {/* Repeat similar blocks for the other statistics */}
        <div>
          <p className="text-[#2E333E] text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[0.6]">
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center">
                <Counter value={200} />
                <span className="text-[#B1040E] text-3xl sm:text-4xl lg:text-[32px] ml-1">
                  +
                </span>
              </span>
              <span className="text-[#B1040E] text-lg sm:text-xl lg:text-[24px] mt-2">
                Satisfied Clients
              </span>
            </div>
          </p>
        </div>
        <div>
          <p className="text-[#2E333E] text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[0.6]">
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center">
                <Counter value={20} />
                <span className="text-[#B1040E] text-3xl sm:text-4xl lg:text-[32px] ml-1">
                  +
                </span>
              </span>
              <span className="text-[#B1040E] text-lg sm:text-xl lg:text-[24px] mt-2">
                Certified Dentist
              </span>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

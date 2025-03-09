const TeamSection = () => {
  return (
    <section className="bg-[#F9F7F4] py-28 flex flex-row justify-center">
      <div className="w-[1180px]  ">
      <div className="flex justify-center items-center pb-16 sm:pb-12 md:pb-16 lg:pb-20 w-full px-4 sm:px-6 md:px-8">
  <div className="max-w-[776px] w-full text-center">
    <p className="text-[#B1040E] text-xs sm:text-sm md:text-base font-semibold pb-1">
      NEW PATIENTS
    </p>
    <p className="text-[#2E333E] text-3xl sm:text-4xl md:text-5xl leading-tight">
      We accept new patients
    </p>
    <p className="text-[#2E333E] text-lg sm:text-xl md:text-2xl font-semibold">
      We are excited to be your neighborhood dentist and take care of your family’s dental needs.
    </p>
  </div>
</div>


        <div className="container mx-auto px-6 sm:px-4 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 justify-center">
            {/* Card 1 */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[373px] h-[525px] group transition-transform duration-300 hover:scale-105 mx-auto mt-6 sm:mt-0">
              {/* Image Section */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="Images/Image (9).png"
                  alt="Flora"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="absolute left-1/2 bottom-0 w-[90%] max-w-[340px] h-[225px] transform -translate-x-1/2 translate-y-3 bg-white border-2 border-b-4 border-[#B1040E] rounded-lg shadow-xl p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#92030b]">
                <p className="text-3xl font-bold text-center text-gray-900">
                  Flora
                </p>
                <p className="text-sm font-medium text-center text-[#B1040E] uppercase tracking-wide">
                  BDS (General Dentist)
                </p>
                <p className="text-lg text-center text-gray-700 mt-3 transition-opacity duration-300 group-hover:opacity-80">
                  Quisque sed ex sed risus pellentesque pellentesque id nec
                  purus estibulum
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[373px] h-[525px] group transition-transform duration-300 hover:scale-105 mx-auto mt-6 sm:mt-0">
              {/* Image Section */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="Images/Image (8).png"
                  alt="Darla"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="absolute left-1/2 bottom-0 w-[90%] max-w-[340px] h-[225px] transform -translate-x-1/2 translate-y-3 bg-white border-2 border-b-4 border-[#B1040E] rounded-lg shadow-xl p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#92030b]">
                <p className="text-3xl font-bold text-center text-gray-900">
                  Darla
                </p>
                <p className="text-sm font-medium text-center text-[#B1040E] uppercase tracking-wide">
                  BDS (General Dentist)
                </p>
                <p className="text-lg text-center text-gray-700 mt-3 transition-opacity duration-300 group-hover:opacity-80">
                  Quisque sed ex sed risus pellentesque pellentesque id nec
                  purus estibulum
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[373px] h-[525px] group transition-transform duration-300 hover:scale-105 mx-auto mt-6 sm:mt-0">
              {/* Image Section */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="Images/Image (7).png"
                  alt="Josh"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="absolute left-1/2 bottom-0 w-[90%] max-w-[340px] h-[225px] transform -translate-x-1/2 translate-y-3 bg-white border-2 border-b-4 border-[#B1040E] rounded-lg shadow-xl p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#92030b]">
                <p className="text-3xl font-bold text-center text-gray-900">
                  Josh
                </p>
                <p className="text-sm font-medium text-center text-[#B1040E] uppercase tracking-wide">
                  BDS (General Dentist)
                </p>
                <p className="text-lg text-center text-gray-700 mt-3 transition-opacity duration-300 group-hover:opacity-80">
                  Quisque sed ex sed risus pellentesque pellentesque id nec
                  purus estibulum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

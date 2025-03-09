import Crousel from "../../Layouts/Crousel";

const TeamSection = () => {
  return (
    <section className="bg-[#F9F7F4] py-28 flex justify-center px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[1180px]">
        {/* Header Section */}
        <div className="flex justify-center items-center pb-12 md:pb-16 lg:pb-20 xl:pb-24 w-full">
          <div className="max-w-[700px] w-full text-center">
          <p className="text-[#B1040E] text-sm sm:text-base font-semibold">
          NEW PATIENTS
        </p>
        <p className="text-[#000000] text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
        We accept new patients
        </p>
        <p className="text-[#2E333E] text-base sm:text-lg md:text-xl leading-relaxed">
        We are excited to be your neighborhood dentist and take care of your family’s dental needs.
        </p>
           
           
           
           
          </div>
        </div>

        {/* Team Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 justify-center">
          {[
            { name: "Flora", img: "Images/Image (9).png" },
            { name: "Darla", img: "Images/Image (8).png" },
            { name: "Josh", img: "Images/Image (7).png" },
          ].map((member, index) => (
            <div
              key={index}
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[373px] h-[525px] group transition-transform duration-300 hover:scale-105 mx-auto"
            >
              {/* Image Section */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="absolute left-1/2 bottom-0 w-[90%] max-w-[340px] h-[225px] transform -translate-x-1/2 translate-y-3 bg-white border-2 border-b-4 border-[#B1040E] rounded-lg shadow-xl p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#92030b]">
                <p className="text-3xl font-bold text-center text-gray-900">{member.name}</p>
                <p className="text-sm font-medium text-center text-[#B1040E] uppercase tracking-wide">
                  BDS (General Dentist)
                </p>
                <p className="text-lg text-center text-gray-700 mt-3 transition-opacity duration-300 group-hover:opacity-80">
                  Quisque sed ex sed risus pellentesque pellentesque id nec purus estibulum
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance Section */}
        <div className="pt-20 px-4 flex flex-col items-center">
          <p className="text-sm sm:text-base md:text-lg text-[#2E333E] text-center font-semibold">
            We accept your insurance
          </p>
          <Crousel />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

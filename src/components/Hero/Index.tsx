const Hero = () => {
  return (
    <section className="flex justify-center px-4 md:px-8 lg:px-16">
      <div className="mt-[100px] lg:mt-0 max-w-[1311px] flex flex-col-reverse lg:flex-row justify-between items-center w-full">
        
        {/* Left Content */}
        <div className="text-center lg:text-left my-16 lg:my-24 max-w-lg">
          <p className="text-[#B1040E] text-sm font-semibold leading-6 md:leading-8">
            HALIFAX FAMILY DENTAL CARE
          </p>
          <p className="text-[#2E333E] text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Local dentists who <br /> love to make you <br /> smile.
          </p>
          <p className="text-[#2E333E] text-lg md:text-xl font-light leading-6 mt-4">
            Discover a level of dental care like no other
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
                  font-medium rounded-lg text-sm px-6 py-3 
                  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              Book an Appointment
            </button>

            <button
              type="button"
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 
                  focus:ring-4 focus:outline-none focus:ring-red-300 
                  font-medium rounded-lg text-sm px-6 py-3 
                  dark:border-red-500 dark:text-red-500 dark:hover:text-white 
                  dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Browse our Service
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="h-auto w-full max-w-[700px]">
          <img
            src="Images/Container.png"
            alt="Dental care illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

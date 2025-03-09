const AboutSection = () => {
  return (
    <section className="bg-white flex flex-row justify-center">
      <div className="w-[1180px]">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 md:py-24 px-4 md:px-0">
  {/* Image Section */}
  <div className="w-full md:w-[45%] mb-8 md:mb-0">
    <img src="Images/Columns.png" alt="" className="w-full h-auto" />
  </div>

  {/* Content Section */}
  <div className="w-full md:w-[501px]">
    <p className="text-[#B1040E] text-sm font-semibold pb-1">ABOUT US</p>
    <h2 className="text-[#000000] text-3xl md:text-5xl leading-tight">Your smile is our pride</h2>
    <p className="text-[#000000] text-base md:text-lg pt-2 md:pt-4">
    We know the first thing people notice about you is smile, our expertise and experience, combined with technologies, We will ensure you have healthy, beautiful smiles
    </p>
    <p className="text-[#000000] text-base md:text-lg pt-2 md:pt-4">
    Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et. Curabitur consectetur auctor leo eu posuere. Fusce maximus purus ac enim tempor, eu consequat purus laoreet. Suspendisse elementum ligula vitae gravida aliquet.
    </p>
    <div className="mt-6 md:mt-8">
      <button
        type="button"
        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 
                 focus:ring-4 focus:outline-none focus:ring-red-300 
                 font-medium rounded-lg text-sm px-6 py-3 
                 dark:border-red-500 dark:text-red-500 dark:hover:text-white 
                 dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        Learn More
      </button>
    </div>
  </div>
</div>



<div className="w-full max-w-[1180px] h-[168px] -my-24 flex justify-center">
  <img src="Images/line (1).png" alt="" className=" h-auto max-h-[168px] md:block hidden" />
</div>




<div className="flex flex-col md:flex-row justify-between items-center py-12 md:py-24 px-4 md:px-0">
  {/* Content Section */}
  <div className="w-full md:w-[501px] order-2 md:order-1">
    <p className="text-[#B1040E] text-sm font-semibold pb-1">NEW PATIENTS</p>
    <h2 className="text-[#000000] text-3xl md:text-5xl leading-tight">We accept new patients</h2>
    <p className="text-[#000000] text-base md:text-lg pt-2 md:pt-4">
    We are highly skilled in treating a wide range of dental concerns, and take pride in delivering outstanding patient care and exceptional results every time.
    </p>
    <p className="text-[#000000] text-base md:text-lg pt-2 md:pt-4">
    Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et. Curabitur consectetur auctor leo eu posuere. Fusce maximus purus ac enim tempor, eu consequat purus laoreet. Suspendisse elementum ligula vitae gravida aliquet.
    </p>
    <div className="mt-6 md:mt-8">
      <button
        type="button"
        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 
                 focus:ring-4 focus:outline-none focus:ring-red-300 
                 font-medium rounded-lg text-sm px-6 py-3 
                 dark:border-red-500 dark:text-red-500 dark:hover:text-white 
                 dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        Learn More
      </button>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-[45%] order-1 md:order-2 mb-8 md:mb-0">
    <img src="Images/Columns (1).png" alt="" className="w-full h-auto" />
  </div>
</div>



      </div>
    </section>
  );
};

export default AboutSection;

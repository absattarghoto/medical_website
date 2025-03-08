const FeaturedSection = () => {
  return (
    <section className="bg-[#F9F7F4] py-32 flex flex-col items-center">
      <div className="w-[900px] ">
        <p className="text-[#B1040E] text-sm font-semibold text-center">
          WELCOME TO HALIFAX FAMILY DENTAL CARE
        </p>
        <p className="text-[#000000] text-4xl font-medium text-center leading-11">
          WELCOME TO HALIFAX FAMILY DENTAL CARE
        </p>
        <p className="text-[#2E333E] text-2xl  text-center">
          We are a family dental practice that has earned the trust of our
          patients  through honesty, efficiency, and good communication.{" "}
        </p>
      </div>
      <div className="w-[1180px] my-28 ">
        <div className="bg-[url('/Images/Line.png')] bg-cover bg-center w-full h-[585px] flex flex-row justify-between items-center">
          <div>
            <img src="Images/Image.png" />
          </div>
          <div className="translate-y-[-50px]">
            <img src="Images/Image (1).png" />
          </div>
          <div>
            <img src="Images/Image (2).png" />
          </div>
          <div className="translate-y-[-50px]">
            <img src="Images/Image (3).png" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-[1040px]">
        <div >
            <p className="text-[#2E333E] text-[64px] f text-center leading-7">20 <span className="text-[#B1040E] text-[24px] f text-center"> +<br/> Years Of Experience</span></p>
        </div>
        <div>
            <p className="text-[#2E333E] text-[64px] f text-center leading-7">20 <span className="text-[#B1040E] text-[24px] f text-center"> +<br/> Years Of Experience</span></p>
        </div>
        <div>
            <p className="text-[#2E333E] text-[64px] f text-center leading-7">20 <span className="text-[#B1040E] text-[24px] f text-center"> +<br/> Years Of Experience</span></p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

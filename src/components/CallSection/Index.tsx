import Card from "../../Layouts/Card";

const CallSection = () => {
  return (
    <section className="bg-[#FFFFFF]">
        <div className="py-16">
        <div className="flex items-center justify-center pb-5 ">
  <div className="max-w-[700px] w-full text-center flex flex-col justify-center">
    <p className="text-[#000000] text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
      Book Appointment
    </p>
    <p className="text-[#2E333E] text-base sm:text-lg md:text-xl leading-relaxed">
      Schedule your next dental appointment effortlessly. We will contact
      you to confirm your request or change the time or day if unavailable.
    </p>
  </div>
</div>

      <div className="flex flex-wrap justify-center py-12 items-center gap-6 px-4 md:px-10">
      <Card
        image="Images/Icon (3).png"
        title="Preventive Guidance"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen. facilisis ex non nibh"
      />
      <Card
        image="Images/Radio button container.png"
        title="Preventive Guidance"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen. facilisis ex non nibh"
      />
      <Card
        image="Images/Icon (4).png"
        title="Preventive Guidance"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen. facilisis ex non nibh"
      />
    </div>
        </div>
      
    </section>
  );
};

export default CallSection;

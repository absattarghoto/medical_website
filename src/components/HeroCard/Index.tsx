import Card from "../../Layouts/Card";

const HeroCard = () => {
  return (
    <section>
    <div className="flex flex-wrap justify-center py-12 items-center gap-6 px-4 md:px-10">
      <Card
        image="Images/Icon.png"
        title="Preventive Guidance"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen. facilisis ex non nibh"
      />
      <Card
        image="Images/Icon (1).png"
        title="Preventive Guidance"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen. facilisis ex non nibh"
      />
      <Card
        image="Images/Icon (2).png"
        title="Preventive Guidance"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen. facilisis ex non nibh"
      />
    </div>
    </section>
  );
};

export default HeroCard;

import IconBrandRecognition from "../../assets/icons/IconBrandRecognition";
import IconDetailedRecords from "../../assets/icons/IconDetailedRecords";
import IconFullyCustomizable from "../../assets/icons/IconFullyCustomizable";
import StatisticsCard from "../UI/StatisticsCard";

const svgSize = `${screen.width > 400 ? "2.5rem" : "2rem"}`;

const data = [
  {
    id: 0,
    icon: <IconBrandRecognition size={svgSize} />,
    heading: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 1,
    icon: <IconDetailedRecords size={svgSize} />,
    heading: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },

  {
    id: 2,
    icon: <IconFullyCustomizable size={svgSize} />,
    heading: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export default function StatisticsSection() {
  return (
    <section className="bg-boost container-padding ls:pb-44 xxs:pb-24 flex flex-col items-center pb-18">
      <div className="ls:mb-36 ls:mt-28 xxs:mt-30 xxs:mb-26 mt-20 mb-18 flex flex-col items-center text-center">
        <h2 className="text-grayish-950 font-bolder xxs:text-4xl xxs:mb-6 mb-3.5 text-2xl">
          Advanced Statistics
        </h2>
        <p className="text-grayish-500 xs:w-auto xxs:text-basic w-10/12 text-base">
          Track how your links are performing across the web with
          <br className="hidden sm:block" />
          our advanced statistics dashboard.
        </p>
      </div>
      <div className="ls:flex-row relative flex flex-col items-center">
        <StatisticsCard cardData={data[0]} />
        <div className="bg-bluish-400 ls:-translate-y-10 ls:h-2 ls:w-8 h-18 w-2"></div>
        <StatisticsCard cardData={data[1]} />
        <div className="bg-bluish-400 ls:-translate-y-10 ls:h-2 ls:w-8 h-18 w-2"></div>
        <StatisticsCard cardData={data[2]} />
      </div>
    </section>
  );
}

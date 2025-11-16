import IconBrandRecognition from "../../assets/icons/IconBrandRecognition";
import IconDetailedRecords from "../../assets/icons/IconDetailedRecords";
import IconFullyCustomizable from "../../assets/icons/IconFullyCustomizable";
import StatisticsCard from "../UI/StatisticsCard";

const data = [
  {
    id: 0,
    icon: <IconBrandRecognition size="2.5rem" />,
    heading: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 1,
    icon: <IconDetailedRecords size="2.5rem" />,
    heading: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },

  {
    id: 2,
    icon: <IconFullyCustomizable size="2.5rem" />,
    heading: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export default function StatisticsSection() {
  return (
    <section className="bg-boost container-padding flex flex-col items-center pt-12 pb-44">
      <div className="mt-40 mb-36 flex flex-col text-center">
        <h2 className="text-grayish-950 font-bolder mb-6 text-4xl">
          Advanced Statistics
        </h2>
        <p className="text-grayish-500">
          Track how your links are performing across the web with
          <br />
          our advanced statistics dashboard.
        </p>
      </div>
      <div className="relative flex items-center">
        <StatisticsCard cardData={data[0]} />
        <div className="bg-bluish-400 h-2 w-8 -translate-y-10"></div>
        <StatisticsCard cardData={data[1]} />
        <div className="bg-bluish-400 h-2 w-8 -translate-y-10"></div>
        <StatisticsCard cardData={data[2]} />
      </div>
    </section>
  );
}

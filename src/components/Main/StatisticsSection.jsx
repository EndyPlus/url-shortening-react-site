import StatisticsCard from "../UI/StatisticsCard";

const data = [
  {
    id: 0,
    heading: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 1,
    heading: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },

  {
    id: 2,
    heading: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export default function StatisticsSection() {
  return (
    <section className="bg-boost flex flex-col items-center pt-42 pb-32">
      <div className="flex w-1/4 flex-col">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex justify-center">
        {data.map((cardData) => (
          <StatisticsCard key={cardData.id} cardData={cardData} />
        ))}
        {/* <div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div> */}
      </div>
    </section>
  );
}

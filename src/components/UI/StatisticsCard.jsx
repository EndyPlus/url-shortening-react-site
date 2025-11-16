export default function StatisticsCard({ cardData }) {
  const { id, heading, description, icon } = cardData;

  return (
    <div
      className={`relative flex h-full min-h-72 w-1/3 flex-col rounded-xl bg-white p-8 ${id === 0 ? "-top-12" : id === 2 ? "top-12" : ""}`}
    >
      <div className="bg-purplish-950 absolute left-8 w-min -translate-y-16 rounded-full p-4">
        {icon}
      </div>
      <h2 className="text-grayish-950 font-bolder mt-10 text-2xl">{heading}</h2>
      <p className="text-grayish-500 mt-4 flex grow">{description}</p>
    </div>
  );
}

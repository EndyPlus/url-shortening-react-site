export default function StatisticsCard({ cardData }) {
  const { id, heading, description, icon } = cardData;

  return (
    <div
      className={`ls:w-1/3 ls:relative xs:items-stretch xs:text-start xs:w-100 xs:min-h-72 xxs:p-8 xxs:w-10/12 flex h-full w-11/12 flex-col items-center rounded-xl bg-white px-4 py-8 text-center ${id === 0 ? "-top-12" : id === 2 ? "top-12" : ""}`}
    >
      <div className="bg-purplish-950 ls:left-8 ls:translate-x-0 absolute left-1/2 w-min -translate-x-1/2 -translate-y-16 rounded-full p-4">
        {icon}
      </div>
      <h2 className="text-grayish-950 font-bolder xxs:mt-10 xxs:text-xl xs:text-2xl mt-5 text-lg">
        {heading}
      </h2>
      <p className="text-grayish-500 xxs:text-base xs:text-basic mt-4 flex grow text-sm">
        {description}
      </p>
    </div>
  );
}

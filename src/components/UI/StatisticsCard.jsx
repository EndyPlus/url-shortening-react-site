export default function StatisticsCard({ cardData }) {
  const { heading, description } = cardData;

  return (
    <div className="flex w-1/4 flex-col">
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
}

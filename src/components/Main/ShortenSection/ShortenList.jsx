import ShortenListItem from "./ShortenListItem";

export default function ShortenList({ links }) {
  const generateRandomId = () => Math.floor(Math.random() * 99999999);

  return (
    <ul className="xxs:mt-7 mt-5 w-full">
      {links.map((linkArr) => (
        <ShortenListItem
          key={`item-${generateRandomId()}`}
          linkData={linkArr}
        />
      ))}
    </ul>
  );
}

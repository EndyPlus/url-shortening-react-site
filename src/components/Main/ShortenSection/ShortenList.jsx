import { useState } from "react";
import ShortenListItem from "./ShortenListItem";

export default function ShortenList({ links }) {
  const [copiedItemId, setCopiedItemId] = useState(null);

  return (
    <ul className="xxs:mt-7 mt-5 w-full">
      {links.map((linkObj) => (
        <ShortenListItem
          key={linkObj.id}
          linkData={linkObj}
          copiedItemId={copiedItemId}
          onCopy={setCopiedItemId}
        />
      ))}
    </ul>
  );
}

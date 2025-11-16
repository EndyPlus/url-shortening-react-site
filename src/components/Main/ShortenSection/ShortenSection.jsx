import { useState } from "react";
import ShortenForm from "./ShortenForm";
import ShortenList from "./ShortenList";

export default function ShortenSection() {
  const [links, setLinks] = useState([]);

  function handleUpdateLinks(linkArr) {
    setLinks((prevLinksArr) => [linkArr, ...prevLinksArr]);
  }

  return (
    <section className="container-padding relative mt-32 flex flex-col items-center">
      <div className="bg-boost absolute -z-10 h-full w-full translate-y-18"></div>
      <ShortenForm updateLinks={handleUpdateLinks} />
      <ShortenList links={links} />
    </section>
  );
}

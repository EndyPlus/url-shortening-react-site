import { useState } from "react";
import ShortenForm from "./ShortenForm";
import ShortenList from "./ShortenList";

export default function ShortenSection() {
  const [links, setLinks] = useState([]);

  function handleUpdateLinks(linkArr) {
    setLinks((prevLinksArr) => [linkArr, ...prevLinksArr]);
  }

  return (
    <section className="container-padding ls:mt-16 xs:mt-12 xxs:mt-10 relative mt-8 flex flex-col items-center md:mt-14">
      <div className="bg-boost absolute -z-10 h-full w-full translate-y-18"></div>
      <ShortenForm updateLinks={handleUpdateLinks} />
      <ShortenList links={links} />
    </section>
  );
}

import { useState } from "react";
import ShortenForm from "./ShortenForm";
import ShortenList from "./ShortenList";

export default function ShortenSection() {
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem("linksList")) || [],
  );

  function handleUpdateLinks(linkArr) {
    setLinks((prevLinksArr) => {
      const newLinksArr = [linkArr, ...prevLinksArr];

      localStorage.setItem("linksList", JSON.stringify(newLinksArr));

      return newLinksArr;
    });
  }

  return (
    <section className="container-padding ls:mt-16 xs:mt-12 xxs:mt-10 relative mt-8 flex flex-col items-center md:mt-14">
      <div className="bg-boost absolute -z-10 h-full w-full translate-y-18"></div>
      <ShortenForm updateLinks={handleUpdateLinks} />
      <ShortenList links={links} />
    </section>
  );
}

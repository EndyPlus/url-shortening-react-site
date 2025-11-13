// import { useState } from "react";
// import { useFetchShortenLink } from "../../../hooks/useFetchShortenLink";
import CtaButton from "../../UI/CtaButton";

export default function ShortenForm() {
  // const [link, setLink] = useState(null);

  // const [shortenLink, isLoading, isError, error] = useFetchShortenLink(link);

  // function handleSubmitForm(e) {
  //   e.preventDefault();

  //   const formData = new FormData(document.getElementById("shorten-form"));

  //   const { fullLink } = Object.fromEntries(formData.entries());

  //   setLink(fullLink);
  // }

  return (
    <>
      <form
        // onSubmit={handleSubmitForm}
        id="shorten-form"
        className="bg-purplish-950 flex w-full rounded-lg bg-[url(./src/assets/images/bg-shorten-desktop.svg)] bg-right bg-no-repeat px-14 py-12"
      >
        <input
          type="text"
          name="fullLink"
          placeholder="Shorten a link here..."
          className="grow rounded-xl bg-white py-4 pl-6"
        />
        <CtaButton styles="rounded-md ml-8 py-4 px-8 ">Shorten It!</CtaButton>
      </form>
    </>
  );
}

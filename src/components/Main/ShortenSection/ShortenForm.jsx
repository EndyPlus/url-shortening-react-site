import { useEffect, useRef, useState } from "react";
import { useFetchShortenLink } from "../../../hooks/useFetchShortenLink";
import CtaButton from "../../UI/CtaButton";

export default function ShortenForm({ updateLinks }) {
  const [link, setLink] = useState(null);

  const inputRef = useRef(null);

  const { shortenLink, error, removeError, isLoading } =
    useFetchShortenLink(link);

  function handleSubmitForm(e) {
    e.preventDefault();

    const formData = new FormData(document.getElementById("shorten-form"));

    const { fullLink } = Object.fromEntries(formData.entries());

    setLink(fullLink);

    inputRef.current.value = null;
  }

  useEffect(() => {
    if (shortenLink) {
      updateLinks([link, shortenLink]);
    }

    return () => setLink(null);
    // eslint-disable-next-line
  }, [shortenLink]);

  return (
    <form
      onSubmit={handleSubmitForm}
      id="shorten-form"
      className="bg-purplish-950 xs:px-14 xs:py-12 relative flex w-full flex-col rounded-lg bg-[url(./src/assets/images/bg-shorten-desktop.svg)] bg-right bg-no-repeat p-8 md:flex-row"
    >
      <input
        type="text"
        name="fullLink"
        placeholder="Shorten a link here..."
        className="xs:text-basic xxs:py-4 xxs:pl-6 xxs:text-base grow rounded-md bg-white py-3 pl-4 text-sm"
        ref={inputRef}
        onInput={removeError}
      />
      {error.isError && (
        <i className="text-reddish-400 xxs:text-base xs:text-basic bottom-2.5 text-sm md:absolute">
          {error.errorMsg}
        </i>
      )}
      <CtaButton
        styles={`xs:text-basic xxs:text-base text-sm rounded-md xs:self-center md:mt-0 xxs:mt-8 mt-4 md:ml-8 xxs:py-4 py-3 xxs:px-10 px-8 ${isLoading ? "cursor-not-allowed" : "cursor-pointer"} `}
        disabled={isLoading}
      >
        Shorten It!
      </CtaButton>
    </form>
  );
}

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
      className="bg-purplish-950 relative flex w-full rounded-lg bg-[url(./src/assets/images/bg-shorten-desktop.svg)] bg-right bg-no-repeat px-14 py-12"
    >
      <input
        type="text"
        name="fullLink"
        placeholder="Shorten a link here..."
        className="grow rounded-xl bg-white py-4 pl-6"
        ref={inputRef}
        onInput={removeError}
      />
      <CtaButton
        styles={`rounded-md ml-8 py-4 px-10 ${isLoading ? "cursor-not-allowed" : "cursor-pointer"} `}
        disabled={isLoading}
      >
        Shorten It!
      </CtaButton>

      {error.isError && (
        <i className="text-reddish-400 absolute bottom-2.5">{error.errorMsg}</i>
      )}
    </form>
  );
}

import { useState } from "react";
import { useFetchShortenLink } from "../../hooks/useFetchShortenLink";

export default function ShortenForm() {
  const [link, setLink] = useState(null);

  const [shortenLink, isLoading, isError, error] = useFetchShortenLink(link);

  function handleSubmitForm(e) {
    e.preventDefault();

    const formData = new FormData(document.getElementById("shorten-form"));

    const { fullLink } = Object.fromEntries(formData.entries());

    setLink(fullLink);
  }

  return (
    <>
      {/* <form>Shorten a link here... Shorten It!</form> */}
      <form onSubmit={handleSubmitForm} id="shorten-form">
        <input type="text" name="fullLink" />
        <button>submit</button>
      </form>
      {isLoading && <p>Loading...</p>}

      {shortenLink && <p>{shortenLink}</p>}

      {isError && <p>{error.message}</p>}
    </>
  );
}

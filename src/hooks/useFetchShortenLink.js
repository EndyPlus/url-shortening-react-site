import { useEffect, useState } from "react";

export function useFetchShortenLink(link) {
  const [shortenLink, setShortenLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ errorMsg: null, isError: false });

  function removeError() {
    setError({ errorMsg: null, isError: false });
  }

  useEffect(() => {
    async function fetchFunc() {
      try {
        removeError();
        setIsLoading(true);

        if (link.trim().length === 0) {
          throw new Error("Please add a link");
        }

        const encodedLink = encodeURIComponent(link.trim());

        const res = await fetch(
          "https://corsproxy.io/?https://cleanuri.com/api/v1/shorten",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `url=${encodedLink}`,
          },
        );

        if (!res.ok) {
          if (res.status === 500) {
            throw new Error("Server Error. Please try again later.");
          }

          throw new Error("Invalid URL");
        }

        const data = await res.json();

        setShortenLink(data.result_url);
      } catch (err) {
        setError({ errorMsg: err.message, isError: true });
        setShortenLink(null);
      } finally {
        setIsLoading(false);
      }
    }

    if (link !== null) {
      fetchFunc();
    }
  }, [link]);

  return { shortenLink, isLoading, error, setError, removeError };
}

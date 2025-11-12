import { useEffect, useState } from "react";

export function useFetchShortenLink(link) {
  const [shortenLink, setShortenLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFunc() {
      try {
        setIsError(false);
        setError(null);
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
          throw new Error("REQUEST IS NOT OK!");
        }

        const data = await res.json();

        setShortenLink(data.result_url);
      } catch (err) {
        setIsError(true);
        setError(err);
        setShortenLink(null);
      } finally {
        setIsLoading(false);
      }
    }

    if (link !== null) {
      fetchFunc();
    }
  }, [link]);

  return [shortenLink, isLoading, isError, error];
}

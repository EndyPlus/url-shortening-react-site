import CtaButton from "../../UI/CtaButton";

export default function ShortenListItem({ linkData }) {
  const [link, shortenLink] = linkData;

  function handleCopyLink() {
    navigator.clipboard.writeText(shortenLink);
  }

  return (
    <li className="mb-7 flex w-full items-center justify-between rounded-lg bg-white px-8 py-5 last:mb-0">
      <p className="max-w-fit truncate">{link}</p>
      <div className="ml-8 flex items-center">
        <p className="text-bluish-400">{shortenLink}</p>
        <CtaButton
          styles="rounded-sm py-2.5 px-8 ml-8 text-base"
          onClick={handleCopyLink}
        >
          Copy
        </CtaButton>
      </div>
    </li>
  );
}

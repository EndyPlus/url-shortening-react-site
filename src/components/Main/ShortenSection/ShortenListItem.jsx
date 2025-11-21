import CtaButton from "../../UI/CtaButton";

export default function ShortenListItem({ linkData }) {
  const [link, shortenLink] = linkData;

  function handleCopyLink() {
    navigator.clipboard.writeText(shortenLink);
  }

  return (
    <li className="ls:flex-row ls:py-5 ls:px-8 xxs:mb-7 mb-5 flex w-full flex-col items-center justify-between rounded-lg bg-white last:mb-0">
      <p className="xxs:text-basic ls:max-w-fit ls:pt-0 ls:pb-0 ls:px-0 xxs:px-8 xxs:pt-5 w-full truncate px-4 pt-2.5 pb-2 text-sm">
        {link}
      </p>
      <div className="ls:hidden border-grayish-500 xxs:my-4 my-2 w-full border-b opacity-50"></div>
      <div className="ls:px-0 ls:pb-0 ls:w-auto xs:flex-row ls:ml-4 xs:gap-0 xxs:px-8 xxs:pb-5 flex w-full flex-col items-center justify-between gap-4 px-4 pb-2.5">
        <p className="text-bluish-400 ls:w-auto xxs:text-basic w-full truncate text-sm">
          {shortenLink}
        </p>
        <CtaButton
          styles="cursor-pointer rounded-sm py-1.5 xxs:py-2.5 px-8 ls:ml-8 text-base w-full xxs:w-auto text-base xxs:text-basic"
          onClick={handleCopyLink}
        >
          Copy
        </CtaButton>
      </div>
    </li>
  );
}

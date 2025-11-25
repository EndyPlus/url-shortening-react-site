import handleCopyMobile from "../../../utils/handleCopyMobile";
import CtaButton from "../../UI/CtaButton";

export default function ShortenListItem({ linkData, copiedItemId, onCopy }) {
  const { fullLink, shortenLink, id } = linkData;

  function handleCopyLink() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shortenLink);
    } else {
      handleCopyMobile(shortenLink);
    }
    onCopy(id);
  }

  const isCopied = copiedItemId === id;

  return (
    <li className="ls:flex-row ls:py-5 ls:px-8 xxs:mb-7 mb-5 flex w-full flex-col items-center justify-between rounded-lg bg-white last:mb-0">
      <p className="xxs:text-basic ls:max-w-fit ls:pt-0 ls:pb-0 ls:px-0 xxs:px-8 xxs:pt-5 w-full truncate px-4 pt-2.5 pb-2 text-sm">
        {fullLink}
      </p>
      <div className="ls:hidden border-grayish-500 xxs:my-4 my-2 w-full border-b opacity-50"></div>
      <div className="ls:px-0 ls:pb-0 ls:w-auto xs:flex-row ls:ml-4 xs:gap-0 xxs:px-8 xxs:pb-5 flex w-full flex-col items-center justify-between gap-4 px-4 pb-2.5">
        <p className="text-bluish-400 ls:w-auto xxs:text-basic w-full truncate text-sm">
          {shortenLink}
        </p>
        <CtaButton
          styles={`cursor-pointer rounded-sm py-1.5 xxs:py-2 xxs:w-26 ls:ml-6 w-full text-base xxs:text-basic ${isCopied ? "bg-grayish-900" : ""}`}
          onClick={handleCopyLink}
        >
          {isCopied ? "Copied!" : "Copy"}
        </CtaButton>
      </div>
    </li>
  );
}

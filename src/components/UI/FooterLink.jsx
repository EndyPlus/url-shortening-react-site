import handleScrollTo from "../../utils/handleScrollTo";

export default function FooterLink({ children }) {
  return (
    <li
      onClick={handleScrollTo}
      className="xxs:mb-2 text-grayish-500 hover:text-grayish-400 active:text-bluish-400 default-effects mb-1.5 cursor-pointer text-base text-nowrap last:mb-0"
    >
      {children}
    </li>
  );
}

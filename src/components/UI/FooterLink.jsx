export default function FooterLink({ children }) {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <li className="xxs:mb-2 mb-1.5 last:mb-0">
      <a
        className="text-grayish-500 cursor-pointer text-base text-nowrap"
        onClick={handleClick}
      >
        {children}
      </a>
    </li>
  );
}

export default function FooterLink({ children }) {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <li className="mb-2 last:mb-0">
      <a
        className="text-grayish-500 cursor-pointer text-base"
        onClick={handleClick}
      >
        {children}
      </a>
    </li>
  );
}

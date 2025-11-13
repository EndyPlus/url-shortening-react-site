export default function FooterLink({ children }) {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <li>
      <a className="cursor-pointer" onClick={handleClick}>
        {children}
      </a>
    </li>
  );
}

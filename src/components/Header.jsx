import Logo from "../assets/icons/Logo";
import CtaButton from "./UI/CtaButton";

export default function Header() {
  return (
    <header className="flex px-24 py-12">
      <a href="/">
        <Logo />
      </a>
      <nav className="ml-12">
        <a href="/">Features</a>
        <a href="/" className="ml-5">
          Pricing
        </a>
        <a href="/" className="ml-5">
          Resources
        </a>
      </nav>
      <div className="ml-auto">
        <button className="mr-5">Login</button> <CtaButton>Sign Up</CtaButton>
      </div>
    </header>
  );
}

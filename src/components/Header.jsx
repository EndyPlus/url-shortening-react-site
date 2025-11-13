import Logo from "../assets/icons/Logo";
import CtaButton from "./UI/CtaButton";

export default function Header() {
  return (
    <header className="container-padding flex items-center py-12">
      <a href="/">
        <Logo />
      </a>
      <nav className="text-grayish-500 font-bolder ml-12">
        <a href="/">Features</a>
        <a href="/" className="ml-5">
          Pricing
        </a>
        <a href="/" className="ml-5">
          Resources
        </a>
      </nav>
      <div className="ml-auto">
        <button className="text-grayish-500 font-bolder mr-5">Login</button>
        <CtaButton>Sign Up</CtaButton>
      </div>
    </header>
  );
}

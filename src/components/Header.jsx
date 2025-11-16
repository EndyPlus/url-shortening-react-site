import Logo from "../assets/icons/Logo";
import CtaButton from "./UI/CtaButton";

export default function Header() {
  return (
    <header className="container-padding flex items-center pt-12 pb-16">
      <a href="/">
        <Logo />
      </a>
      <nav className="text-grayish-500 font-bolder ml-10 flex gap-8 text-base">
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Resources</a>
      </nav>
      <div className="ml-auto">
        <button className="text-grayish-500 font-bolder mr-10 text-base">
          Login
        </button>
        <CtaButton styles="px-6 text-base">Sign Up</CtaButton>
      </div>
    </header>
  );
}

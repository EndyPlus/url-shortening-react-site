import Logo from "../assets/icons/Logo";
import CtaButton from "./UI/CtaButton";

export default function Header() {
  return (
    <header className="container-padding flex items-center pt-12 pb-16">
      <a href="/">
        <Logo />
      </a>
      <nav className="text-grayish-500 font-bolder ml-8 hidden gap-6 text-base md:flex">
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Resources</a>
      </nav>
      <div className="ml-auto hidden md:flex">
        <button className="text-grayish-500 font-bolder mr-8 text-base">
          Login
        </button>
        <CtaButton styles="px-6 py-2 rounded-full text-base">Sign Up</CtaButton>
      </div>
      <button className="ml-auto flex w-8 flex-col gap-2 md:hidden">
        <div className="burger-item"></div>
        <div className="burger-item"></div>
        <div className="burger-item"></div>
      </button>
    </header>
  );
}

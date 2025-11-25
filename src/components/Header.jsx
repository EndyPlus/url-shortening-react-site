import Logo from "../assets/icons/Logo";
import CtaButton from "./UI/CtaButton";
import handleScrollTo from "../utils/handleScrollTo";
import { useState } from "react";
import MobileModal from "./UI/MobileModal";

export default function Header() {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  return (
    <>
      {isOpenedMenu && <MobileModal onClose={() => setIsOpenedMenu(false)} />}
      <header className="container-padding flex items-center pt-12 pb-16">
        <a
          onClick={handleScrollTo}
          className="default-effects group/logo cursor-pointer hover:opacity-70 active:opacity-100"
        >
          <Logo styles="fill-grayish-900 group-active/logo:fill-bluish-400" />
        </a>
        <nav className="text-grayish-500 font-bolder ml-8 hidden gap-6 text-base md:flex">
          <a
            onClick={handleScrollTo}
            className="active:text-grayish-950 default-effects cursor-pointer opacity-80 hover:opacity-100"
          >
            Features
          </a>
          <a
            onClick={handleScrollTo}
            className="active:text-grayish-950 default-effects cursor-pointer opacity-80 hover:opacity-100"
          >
            Pricing
          </a>
          <a
            onClick={handleScrollTo}
            className="active:text-grayish-950 default-effects cursor-pointer opacity-80 hover:opacity-100"
          >
            Resources
          </a>
        </nav>
        <div className="ml-auto hidden md:flex">
          <button className="text-grayish-500 font-bolder active:text-grayish-950 default-effects mr-8 cursor-pointer text-base opacity-80 hover:opacity-100">
            Login
          </button>
          <CtaButton styles="px-6 py-2 rounded-full text-base">
            Sign Up
          </CtaButton>
        </div>
        <button
          className={`ml-auto flex w-8 flex-col gap-2 select-none md:hidden ${isOpenedMenu ? "opacity-0" : ""}`}
          onClick={() => setIsOpenedMenu(true)}
        >
          <div className="burger-item"></div>
          <div className="burger-item"></div>
          <div className="burger-item"></div>
        </button>
      </header>
    </>
  );
}

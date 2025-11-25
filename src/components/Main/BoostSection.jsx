import CtaButton from "../UI/CtaButton";
import handleScrollTo from "../../utils/handleScrollTo";

export default function BoostSection() {
  const bgImage =
    window.innerWidth >= 768
      ? "/url-shortening-react-site/bg-boost-desktop.svg"
      : "/url-shortening-react-site/bg-boost-mobile.svg";

  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`container-padding bg-purplish-950 flex flex-col items-center bg-center bg-no-repeat py-16`}
    >
      <h2 className="font-bolder xs:text-4xl xxs:text-3xl xxs:mb-9 mb-5 text-xl text-white">
        Boost your links today
      </h2>
      <CtaButton
        onClick={handleScrollTo}
        styles="xxs:py-3.5 py-2.5 px-6.5 xxs:text-basic text-base xxs:px-11.5 rounded-full"
      >
        Get Started
      </CtaButton>
    </section>
  );
}

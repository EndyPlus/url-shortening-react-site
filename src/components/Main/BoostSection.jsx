import CtaButton from "../UI/CtaButton";

export default function BoostSection() {
  return (
    <section className="container-padding bg-purplish-950 flex flex-col items-center bg-[url(./src/assets/images/bg-boost-desktop.svg)] bg-bottom bg-no-repeat py-16">
      <h2 className="font-bolder xs:text-4xl xxs:text-3xl xxs:mb-9 mb-5 text-xl text-white">
        Boost your links today
      </h2>
      <CtaButton styles="xxs:py-3.5 py-2.5 px-6.5 xxs:text-basic text-base xxs:px-11.5 rounded-full">
        Get Started
      </CtaButton>
    </section>
  );
}

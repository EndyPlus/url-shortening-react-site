import CtaButton from "../UI/CtaButton";

export default function BoostSection() {
  return (
    <section className="container-padding bg-purplish-950 flex flex-col items-center bg-[url(./src/assets/images/bg-boost-desktop.svg)] bg-no-repeat py-16">
      <h2 className="font-bolder mb-9 text-4xl text-white">
        Boost your links today
      </h2>
      <CtaButton styles="py-3.5 px-11.5 rounded-full">Get Started</CtaButton>
    </section>
  );
}

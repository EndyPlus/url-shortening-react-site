import CtaButton from "../UI/CtaButton";

export default function BoostSection() {
  return (
    <section className="container-padding bg-purplish-950 flex flex-col items-center bg-[url(./src/assets/images/bg-boost-desktop.svg)] bg-no-repeat py-14">
      <h2 className="font-bolder mb-8 text-4xl text-white">
        Boost your links today
      </h2>
      <CtaButton styles={"py-4 px-10"}>Get Started</CtaButton>
    </section>
  );
}

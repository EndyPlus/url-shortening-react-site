import IllustrationWorking from "../../assets/images/IllustrationWorking";
import CtaButton from "../UI/CtaButton";

export default function WelcomeSection() {
  return (
    <section className="container-padding relative flex">
      <div className="flex w-2/3 flex-col justify-center py-20">
        <h1 className="text-grayish-900 font-bolder text-[75px]/[5.5rem]">
          More than just shorter links
        </h1>
        <p className="text-grayish-500 mt-1 mb-8 text-xl/[2.5rem]">
          Build your brand’s recognition and get detailed
          <br />
          insights on how your links are performing.
        </p>
        <CtaButton styles="w-50">Get Started</CtaButton>
      </div>
      <IllustrationWorking />
    </section>
  );
}

import IllustrationWorking from "../../assets/images/IllustrationWorking";
import CtaButton from "../UI/CtaButton";

export default function WelcomeSection() {
  return (
    <section className="container-padding ls:flex-row relative flex flex-col-reverse">
      <div className="ls:w-2/3 ls:items-stretch ls:text-start ls:py-20 flex flex-col items-center py-10 text-center">
        <h1 className="text-grayish-900 font-bolder xxs:text-5xl text-3xl sm:text-6xl md:text-[75px]/[5.5rem]">
          More than just <br /> shorter links
        </h1>
        <p className="text-grayish-500 xs:text-xl/[2.25rem] mt-4 mb-6 text-base sm:mt-1 sm:mb-8">
          Build your brand’s recognition and get detailed{" "}
          <br className="xxs:block hidden" />
          insights on how your links are performing.
        </p>
        <CtaButton styles="w-max py-2.5 px-10 rounded-full">
          Get Started
        </CtaButton>
      </div>
      <IllustrationWorking styles="relative select-none ls:absolute w-[400px] xxs:w-[450px] xs:w-[500px] sm:w-[600px] md:w-[800px] ls:w-[500px] lg:w-[650px] xlg:w-[1200px] -right-[5vw] xxs:-right-[20vw]  xs:-right-[30vw] sm:-right-[25vw] ls:-right-50 xlg:-right-100" />
    </section>
  );
}

import ShortenForm from "./ShortenForm";
import ShortenList from "./ShortenList";

export default function ShortenSection() {
  return (
    <section className="container-padding relative mt-8 flex translate-y-1/2 flex-col items-center">
      <ShortenForm />
      {/* <ShortenList /> */}
    </section>
  );
}

export default function CtaButton({ children, styles = "", ...anotherProps }) {
  const dullEffect =
    "active:grayscale-20 active:sepia-40 active:brightness-130 select-none";

  let btnStyles = `default-effects bg-bluish-400 font-bolder text-white cursor-pointer ${dullEffect}`;
  btnStyles += " " + styles;

  return (
    <button className={btnStyles} {...anotherProps}>
      {children}
    </button>
  );
}

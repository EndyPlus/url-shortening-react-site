export default function CtaButton({ children, styles = "", ...anotherProps }) {
  let btnStyles = "bg-bluish-400 font-bolder text-white";
  btnStyles += " " + styles;

  return (
    <button className={btnStyles} {...anotherProps}>
      {children}
    </button>
  );
}

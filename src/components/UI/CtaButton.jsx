export default function CtaButton({ children, styles = "" }) {
  let btnStyles =
    "bg-bluish-400 font-bolder cursor-pointer rounded-full px-4 py-2 text-white";
  btnStyles += " " + styles;

  return <button className={btnStyles}>{children}</button>;
}

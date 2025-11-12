export default function CtaButton({ children }) {
  return (
    <button className="bg-bluish-400 font-bolder cursor-pointer rounded-full px-4 py-2 text-white">
      {children}
    </button>
  );
}

import { createPortal } from "react-dom";
import CtaButton from "./CtaButton";
import { useEffect, useRef } from "react";
import {
  backgroundAppearAnimation,
  backgroundDisappearAnimation,
  modalAppearAnimation,
  modalDisappearAnimation,
} from "../../utils/elementAnimations";

export default function MobileModal({ onClose }) {
  const modalRef = useRef();
  const bgRef = useRef();
  const closeModalDelayRef = useRef();

  function handleCloseModal() {
    modalDisappearAnimation(modalRef.current);
    backgroundDisappearAnimation(bgRef.current);
    closeModalDelayRef.current = setTimeout(() => {
      onClose();
    }, 250);
  }

  useEffect(() => {
    modalAppearAnimation(modalRef.current);
    backgroundAppearAnimation(bgRef.current);

    return () => clearTimeout(closeModalDelayRef.current);
  }, []);

  return (
    <>
      {createPortal(
        <>
          <div
            className="bg-purplish-950 fixed z-70 h-full w-full opacity-40 select-none"
            onClick={handleCloseModal}
            ref={bgRef}
          ></div>
          <div
            ref={modalRef}
            className="bg-purplish-950 fixed top-1/8 left-1/2 z-80 w-10/12 -translate-x-1/2 rounded-lg px-8 py-10"
          >
            <nav className="font-bolder border-grayish-500 text-basic flex flex-col items-center gap-8 border-b-2 pb-8 text-white">
              <a className="active:text-bluish-400 default-effects">Features</a>
              <a className="active:text-bluish-400 default-effects">Pricing</a>
              <a className="active:text-bluish-400 default-effects">
                Resources
              </a>
            </nav>
            <div className="mt-8 flex flex-col items-center gap-8">
              <button className="font-bolder active:text-bluish-400 default-effects text-basic text-white">
                Login
              </button>
              <CtaButton styles="w-full py-3 rounded-full text-basic ">
                Sign Up
              </CtaButton>
            </div>
          </div>
        </>,
        document.getElementById("modal"),
      )}
    </>
  );
}

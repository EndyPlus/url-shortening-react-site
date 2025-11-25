export function modalAppearAnimation(element) {
  const keyframes = [
    { transform: "translateY(-20rem)", opacity: 0 },
    { transform: "translateY(0)", opacity: 1 },
  ];
  const timing = {
    duration: 250,
  };

  element.animate(keyframes, timing);
}

export function modalDisappearAnimation(element) {
  const keyframes = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: "translateY(-20rem)", opacity: 0 },
  ];
  const timing = {
    duration: 250,
    fill: "forwards",
  };

  element.animate(keyframes, timing);
}

export function backgroundAppearAnimation(element) {
  element.animate([{ opacity: 0 }, { opacity: 0.4 }], {
    duration: 250,
  });
}

export function backgroundDisappearAnimation(element) {
  element.animate([{ opacity: 0.4 }, { opacity: 0 }], {
    duration: 250,
    fill: "forwards",
  });
}

export default function handleCopyMobile(shortenLink) {
  const mobileTextarea = document.createElement("textarea");
  mobileTextarea.setAttribute("id", "mobileClipboard");
  mobileTextarea.setAttribute("aria-hidden", true);
  mobileTextarea.setAttribute("tabindex", -1);

  document.body.prepend(mobileTextarea);

  mobileTextarea.value = shortenLink;
  mobileTextarea.focus();
  mobileTextarea.select();
  document.execCommand("copy");
  mobileTextarea.blur();
  mobileTextarea.remove();
}

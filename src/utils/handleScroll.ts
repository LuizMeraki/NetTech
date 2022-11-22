export function handleScroll(action: boolean) {
  if (action) {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}
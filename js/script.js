window.onload = function () {
  const body = document.querySelector("body");
  const nav = document.querySelector(".header__nav");
  const burger = document.querySelector(".icon-menu");

  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;

    if (
      targetElement.classList.contains("icon-menu") || targetElement.closest(".icon-menu") ||
      targetElement.classList.contains("header__button") ||
      targetElement.tagName == "A"
    ) {
      toggleFunction();
    }
  }

  function toggleFunction() {
    burger.classList.toggle("_active");
    nav.classList.toggle("_active");
    body.classList.toggle("lock");
  }
};

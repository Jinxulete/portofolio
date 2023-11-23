document.querySelector(".heart").addEventListener("click", () => {
  document.querySelector(".heart").classList.add("animate");
  setTimeout(() => {
    document.querySelector(".skills").scrollIntoView();
    document.querySelector(".heart").classList.remove("animate");
  }, 1000);
});

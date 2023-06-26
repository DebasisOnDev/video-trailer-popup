const element = document.querySelector(".btn-front");
element.addEventListener("click", () => {
  const cntnr = document.querySelector(".container");
  cntnr.style.display = "none";
  const videoelement = document.querySelector(".videocontainer");
  videoelement.style.display = "flex";
});
const exitbtn = document.querySelector(".btn-video");
exitbtn.addEventListener("click", () => {
  const cntnr = document.querySelector(".container");
  cntnr.style.display = "flex";
  const videoelement = document.querySelector(".videocontainer");
  videoelement.style.display = "none";
});

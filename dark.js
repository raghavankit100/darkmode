let toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  if (document.querySelector("#main").getAttribute("class") == "main1") {
    document.querySelector("#main").setAttribute("class", "main2");
    document.querySelector("body").style.color = "white";
    document.querySelector(".toggle").style.backgroundColor = "grey";
    document.querySelector(".active").style.transform = "translateX(4.25rem)";
  } else {
    document.querySelector("#main").setAttribute("class", "main1");
    document.querySelector("body").style.color = "black";
    document.querySelector(".toggle").style.backgroundColor = "black";
    document.querySelector(".active").style.transform = "";
  }
});
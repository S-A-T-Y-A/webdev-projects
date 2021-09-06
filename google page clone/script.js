const burger = document.querySelector(".rightmenu i");
const appscon = document.querySelector(".googleapps-con");
const user = document.querySelector(".rightmenu img");
const usercon = document.querySelector(".account");
const body=document.querySelector("body");
appscon.style.display='none';
usercon.style.display='none';
burger.addEventListener("click", () => {
  if (appscon.style.display !== "flex") {
    appscon.style.display = "flex";
    if (usercon.style.display !== "none") {
      usercon.style.display = "none";
    }
  } else {
    appscon.style.display = "none";
  }
});

user.addEventListener("click", () => {
  if (usercon.style.display !== "block") {
    usercon.style.display = "block";
    if (appscon.style.display !== "none") {
      appscon.style.display = "none";
    }
  } else {
    usercon.style.display = "none";
  }
});



  

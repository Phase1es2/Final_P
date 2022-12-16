// Burger
const burger = document.querySelector(".burger");
// navMenu
const navMenu = document.querySelector(".nav-menu");

//get navMenu
const navMenuItems = document.querySelectorAll(".nav-menu li");


burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  // Open/Close nav menu
  navMenu.classList.toggle("open");

  //menu animation 
  navMenuItems.forEach((item, index) => {
    // animation check 
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `0.3s ease-in slideIn forwards ${index * 0.1 +
        0.3}s`;
    }
  });
});


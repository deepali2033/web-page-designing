document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".opne-btn");
  const closeBtn = document.querySelector(".close-btn");
  const mainNav = document.querySelector(".main-nav");
  const homeImg = document.querySelector(".home-img");

  openBtn.addEventListener("click", function () {
    mainNav.style.display = "block";
    homeImg.style.mixBlendMode = "normal";
    closeBtn.style.display = "block";
    closeBtn.style.mixBlendMode = "normal";
    openBtn.style.display = "none"; // Hide the navbar toggle button
  });

  closeBtn.addEventListener("click", function () {
    mainNav.style.display = "none";
    openBtn.style.display = "block";
    // Show the navbar toggle button
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const openBtn = document.querySelector(".openBtn");
//   const closeBtn = document.querySelector(".closeBtn");
//   const navbar = document.querySelector(".main-nav");

//   openBtn.addEventListener("click", function () {
//     navbar.style.width = "100%";
//   });

//   closeBtn.addEventListener("click", function () {
//     navbar.style.width = "0";
//   });
// });

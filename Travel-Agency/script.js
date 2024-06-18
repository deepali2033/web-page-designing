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
// document.addEventListener("DOMContentLoaded", function () {
//   const submitBtn = document.getElementById("submit");
//   const nameInput = document.getElementById("full_name");
//   const numberInput = document.getElementById("number");
//   const emailInput = document.getElementById("email_id");
//   const query_text = document.getElementById("query");
//   const newdata = document.getElementById("records"); // Fixed variable name

//   let formArray = [];
//   let objstr = localStorage.getItem("user");
//   if (objstr != null) {
//     formArray = JSON.parse(objstr);
//   }
//   displayInfo(formArray);
//   console.log(formArray);
//   submitBtn.addEventListener("click", myfunction);

//   function myfunction() {
//     const formData = {
//       name: nameInput.value,
//       number: numberInput.value,
//       email: emailInput.value,
//       query: query_text.value,
//     };
//     console.log(formData);
//     formArray.push(formData);
//     saveInfo(formArray);
//     nameInput.value = "";
//     numberInput.value = "";
//     emailInput.value = "";
//     query_text.value = "";
//     displayInfo(formArray);
//   }
// });

// function saveInfo(data) {
//   let str = JSON.stringify(data);
//   localStorage.setItem("user", str);
// }

// function displayInfo(formArray) {
//   let statement = "";
//   formArray.forEach((user) => {
//     statement += `<li class="line-item">
//                 <i class="fa-solid fa-right-to-bracket line-item-icon"></i>${user.query}
//               </li>`;
//   });
//   console.log(statement);
//   newdata.innerHTML = statement; // Corrected variable name and innerHTML usage
// }

document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submit");
  const nameInput = document.getElementById("full_name");
  const numberInput = document.getElementById("number");
  const emailInput = document.getElementById("email_id");
  const query_text = document.getElementById("query");
  const newdata = document.getElementById("records"); // Declare newdata here

  let formArray = [];
  let objstr = localStorage.getItem("user");
  if (objstr != null) {
    formArray = JSON.parse(objstr);
  }
  displayInfo(formArray);
  console.log(formArray);
  submitBtn.addEventListener("click", myfunction);

  function myfunction() {
    const formData = {
      name: nameInput.value,
      number: numberInput.value,
      email: emailInput.value,
      query: query_text.value,
    };
    console.log(formData);
    formArray.unshift(formData);
    formArray.pop(formData);

    saveInfo(formArray);
    nameInput.value = "";
    numberInput.value = "";
    emailInput.value = "";
    query_text.value = "";
    displayInfo(formArray);
  }
});

function saveInfo(data) {
  let str = JSON.stringify(data);
  localStorage.setItem("user", str);
}

function displayInfo(formArray) {
  const newdata = document.getElementById("records"); // Access newdata here
  let statement = "";
  formArray.forEach((user) => {
    statement += `<li class="line-item">
                <i class="fa-solid fa-right-to-bracket line-item-icon"></i>${user.query}
              </li>`;
  });
  console.log(statement);
  newdata.innerHTML = statement; // Update innerHTML of newdata
}

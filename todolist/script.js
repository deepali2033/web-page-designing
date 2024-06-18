const addUserBtn = document.getElementById("addUser");
const usernameTextfield = document.getElementById("userName");
let userArray = [];
let objStr = localStorage.getItem("users");
// console.log(objStr);
if (objStr != null) {
  userArray = JSON.parse(objStr);
}

console.log(userArray);
addUserBtn.onclick = () => {
  const name = usernameTextfield.value;
  userArray.push({ name: name });
  saveInfo(userArray);
  console.log(userArray);
  usernameTextfield.value = "";
};
function saveInfo(userArray) {
  let str = JSON.stringify(userArray);
  localStorage.setItem("user", str);
  console.log(str);
}
function displayInfo() {}
function EditInfo() {}
function deleteInfo() {}

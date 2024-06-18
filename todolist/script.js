const addUserBtn = document.getElementById("addUser");
const usernameTextfield = document.getElementById("userName");
const recordsDisplay = document.getElementById("records");
let userArray = [];
let objStr = localStorage.getItem("users");

if (objStr !== null) {
  userArray = JSON.parse(objStr);
}

displayInfo();
console.log(userArray);

addUserBtn.onclick = () => {
  const name = usernameTextfield.value;
  userArray.unshift({ name: name });
  saveInfo(userArray);
  console.log(userArray);
  usernameTextfield.value = "";
  displayInfo();
  addUserBtn.innerHTML = "add user";
};

function saveInfo(userArray) {
  let str = JSON.stringify(userArray);
  localStorage.setItem("users", str);
  console.log(str);
}

function displayInfo() {
  let statement = "";
  userArray.forEach((users, i) => {
    statement += `<tr>
              <th scope="row">${i + 1}</th>
              <td>${users.name}</td>
              <td>
                <i class="edit-btn btn text-white fa-sharp fa-regular fa-pen-to-square" onclick="EditInfo(${i})"></i>
                <i class="dlt-btn text-white btn fa-solid fa-trash-can" onclick="deleteInfo(${i})"></i>
              </td>
            </tr>`;
  });
  recordsDisplay.innerHTML = statement;
}

function EditInfo(id) {
  usernameTextfield.value = userArray[id].name;
  addUserBtn.innerHTML = "save changes";
}

function deleteInfo(id) {
  userArray.splice(id, 1);
  saveInfo(userArray);
  displayInfo();
}

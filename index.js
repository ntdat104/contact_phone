/*
 * Danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 * https://github.com/ntdat104/contact_phone
 */
var fs = require("fs");
var readline = require("readline-sync");

var contacts = [];

function loadData() {
  var file = fs.readFileSync("./data.json");
  contacts = JSON.parse(file);
}

function inputContact() {
  var name = readline.question("Name: ");
  var phone = readline.question("Phone: ");
  var input = {
    name: name,
    phone: phone,
  };
  contacts.push(input);
}

function editContact() {
  showContact();
  var choose = readline.question("Chọn vị trí muốn sửa: ");
  choose = parseInt(choose) - 1;

  var name = readline.question("Name: ");
  var phone = readline.question("Phone: ");

  contacts[choose].name = name;
  contacts[choose].phone = phone;
}

function showContact() {
  return contacts.map((index) =>
    console.log("Name: " + index.name + " - Phone: " + index.phone)
  );
}

function deleteContact() {
  showContact();
  var choose = readline.question("Chọn vị trí bạn muốn xoá: ");
  choose = parseInt(choose) - 1;

  contacts.splice(choose, 1);
}

function savetoJSON() {
  var saveData = JSON.stringify(contacts);
  fs.writeFileSync("./data.json", saveData, { encoding: "utf8" });
}

function saveAndExit() {
  savetoJSON();
}

function option() {
  console.log("0. Nhập dữ liệu contact");
  console.log("1. Sửa dữ liệu contact");
  console.log("2. Xoá contact");
  console.log("3. Hiển thị contact");
  console.log("4. Lưu và thoát");
  var select = readline.question("> ");

  switch (select) {
    case "0":
      inputContact();
      savetoJSON();
      option();
      break;
    case "1":
      editContact();
      savetoJSON();
      option();
      break;
    case "2":
      deleteContact();
      savetoJSON();
      option();
      break;
    case "3":
      showContact();
      option();
      break;
    case "4":
      saveAndExit();
      break;
    default:
      console.log("Lỗi cú pháp");
      break;
  }
}
function main() {
  loadData();
  option();
}
main();

var readline = require("readline-sync");
var showContact = require("./showContact");

function editContact(contact) {
  showContact(contact);
  var choose = readline.question("Chọn vị trí muốn sửa: ");
  choose = parseInt(choose) - 1;

  var name = readline.question("Name: ");
  var phone = readline.question("Phone: ");

  contact[choose].name = name;
  contact[choose].phone = phone;
}
module.exports = editContact;

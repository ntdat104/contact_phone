var readline = require("readline-sync");

function inputContact(contact) {
  var name = readline.question("Name: ");
  var phone = readline.question("Phone: ");
  var input = {
    name: name,
    phone: phone,
  };
  contact.push(input);
}

module.exports = inputContact;

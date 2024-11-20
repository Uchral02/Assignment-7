const contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" }
];

function displayContacts() {
    console.log("Contact List:");
    contactList.forEach((contact, index) => {
        console.log(`${index + 1}. ${contact.name} | ${contact.phone} | ${contact.email}`);
    });
}

function addContact() {
    const newContact = { 
        name: "Maisie Haley", 
        phone: "0913 531 3030", 
        email: "risus.Quisque@urna.ca" 
    };
    contactList.push(newContact);
    console.log("\nNew contact added:");
    console.log(`${newContact.name} | ${newContact.phone} | ${newContact.email}`);
}

function showFirstAndLast() {
    if (contactList.length > 0) {
        console.log("\nFirst Contact:");
        console.log(`${contactList[0].name} | ${contactList[0].phone} | ${contactList[0].email}`);

        console.log("\nLast Contact:");
        console.log(`${contactList[contactList.length - 1].name} | ${contactList[contactList.length - 1].phone} | ${contactList[contactList.length - 1].email}`);
    } else {
        console.log("No contacts available.");
    }
}
displayContacts();
addContact();
displayContacts();
showFirstAndLast();


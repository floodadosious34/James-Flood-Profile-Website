// Created array, iterate thorugh it to find true value and displays as alert box.
var contacts = [
    {
      "Name":"Denu",
      "Contact":12345671,
      "Home": false
    },
    {
      "Name":"Donny",
      "Contact":12345672,
      "Home": false
    },
    {
      "Name":"Darla",
      "Contact":12345673,
      "Home": false
    },
    {
      "Name":"Damon",
      "Contact":12345674,
      "Home": false
    },
    {
      "Name":"Diaspora",
      "Contact":12345675,
      "Home": false
    },
    {
      "Name":"Digital",
      "Contact":12345676,
      "Home": false
    },
    {
      "Name":"Dramon",
      "Contact":12345677,
      "Home": false
    },
    {
      "Name":"James",
      "Contact":12345678,
      "Home": true
    },
    {
      "Name":"Diamond",
      "Contact":12345679,
      "Home": false
    },
    {
      "Name":"Denzel",
      "Contact":12345670,
      "Home": false
    }
  ];



function onSubmit() {
   display();
};

function display() {
    const home1 = document.getElementById("home");
    if (home1.style.display === 'none') {
        home1.style.display = 'block';
    } else {
        home1.style.display = 'none'
    }
    for(var i = 0; i < contacts.length; i++) {
        if (contacts[i].Home == true) {
        const obj = contacts[i];
        const answer = obj.Name;
        alert(`Thank you ${answer}!`); // alert box call
        home1.innerHTML = `<p>${answer}</p>`; // couldn't figure out how to display in the home id div element.
        }
    }
}
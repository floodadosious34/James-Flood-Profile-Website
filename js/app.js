const username = document.getElementById('name');
const card = document.getElementById('block'); 
const form = document.querySelector('form');
const emailInput = document.getElementById("email");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function getResponse () {
  fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
  .then(response => response.json())
  .then(data => generateGenre(data))
}
// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateGenre(data) {
    const html = `
        <h2>Random Genre</h2>
        <p>You should check out ${data}. It's Great!</p>
    `;
    card.innerHTML = html;
}


// ------------------------------------------
//  Validtors
// ------------------------------------------
function isValidEmail(emailInput) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput);
}




// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
    document.getElementById('responseBlock').innerHTML = xhr.responseText;
    } else {
      alert(xhr.statusText);
    }
  }
};
xhr.open('GET', 'example1.html');
function sendAJAX() {
  xhr.send();
  document.getElementById('submit').style.display = "none";
  getResponse ();
}


function showOrHide(show, element) {
    // show element when show is true, hide when false
    if (show) {
      element.style.display = "inherit";
    } else {
      element.style.display = "none";
    }
  }
  
  function listener(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      showOrHide(showTip, tooltip);
    };
  }
  
  emailInput.addEventListener("input", listener(isValidEmail));
  

// ------------------------------------------
//  POST DATA
// ------------------------------------------


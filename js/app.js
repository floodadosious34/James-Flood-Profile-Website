const username = document.getElementById('name');
const card = document.getElementById('block'); 
const form = document.querySelector('form');
const emailInput = document.getElementById("email");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
.then(response => response.json())
.then(data => generateGenre(data))

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


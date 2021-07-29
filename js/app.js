const username = document.getElementById('name');
const card = document.getElementById('block'); 
const form = document.querySelector('form');
const emailInput = document.getElementById('email');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function getResponse (url) {
   return fetch(url)
            .then(res => res.json())
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

// Wantged to fetch from this json file i created but couldn't get it running.
function generateResponse(data) {
  const response = data;

}




// ------------------------------------------
//  Validtors
// ------------------------------------------
// Regex for email validation.
function isValidEmail(emailInput) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput);
}

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}



// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
    document.getElementById('responseBlock').innerHTML = xhr.responseText; //Displays info from example1.html file into html.
    } else {
      alert(xhr.statusText);
    }
  }


};
xhr.open('GET', 'example1.html');
function sendAJAX() {
  xhr.send();
  document.getElementById('submit').style.display = "none";
  //Retireve data from binary jazz api with fetch call.
  getResponse('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
    .then(data => generateGenre(data))

  getResponse('data/example.json')
    .then(data => generateResponse(data))
};


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
  form.addEventListener('submit', postInfo);
  

// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postInfo(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ Name: name, Contact: comment })
  }

// form values save to this api, but only on initial call. Check console log for verification of adding on to json list.
  fetch('https://jsonplaceholder.typicode.com/comments', config)
    .then(checkStatus)
    .then(res => res.json())
    .then(data => console.log(data))
}
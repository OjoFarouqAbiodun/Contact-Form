// const form = document.getElementById('contact-form')
// const successMessage = document.getElementById('success-message')

//  form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const firstName = document.getElementById('first-name').value.trim()
//     const lastName = document.getElementById('last-name').value.trim()
//     const email = document.getElementById('email').value.trim()
//     const QueryType = document.querySelector('input[name="query-type"]:checked')
//     const message = document.getElementById('message').value.trim()
//     const consent = document.getElementById('consent').checked

//     const formalert = document.querySelectorAll('.form-alert')

//     let isValid = true

//     // first name validation 
//     if(firstName === '') {
//         isValid = false

//         document.querySelector('.first-name .form-alert').style.display = 'block'
//         document.querySelector('.first-name').style.border = '1px solid var(--red)'
//     } else {
//         document.querySelector('.first-name .form-alert').style.display = 'none'
//         document.querySelector('.first-name').style.border = '1px solid var(--medium-grey)'
//     }

//     // last name validation 
//     if(lastName === '') {
//         isValid = false

//         document.querySelector('.last-name .form-alert').style.display = 'block'
//         document.querySelector('.last-name').style.border = '1px solid var(--red)'
//     } else {
//         document.querySelector('.last-name .form-alert').style.display = 'none'
//         document.querySelector('.last-name').style.border = '1px solid var(--medium-grey)'
//     }


//     // Email Validation
//     if(!isValidEmail(email)) {
//         isValid = false

//         document.querySelector('.email .form-alert').style.display = 'block'
//         document.querySelector('.email').style.border = '1px solid var(--red)'
//     } else {
//          document.querySelector('email .form-alert').style.display = 'none'
//         document.querySelector('.email').style.border = '1px solid var(--medium-grey)'
//     }

//     // Query Type Validation
//     if(!QueryType) {
//         isValid = false

//         document.querySelector('.radio-inputs .form-alert').style.display = 'block'
//     } else {
//         document.querySelector('.radio-inputs .form-alert').style.display = 'none'
//     } 

//     //Message Validation 
//     if(message === '') {
//         isValid = false

//         document.querySelector('message .form-alert').style.display = 'block'
//         document.querySelector('message').style.border = '1px solid var(--red)'
//     } else {
//         document.querySelector('message .form-alert').style.display = 'none'
//         document.querySelector('.message').style.border = '1px solid var(--medium-grey)'
//     }

//     // Consent Validation
//     if(!consent) {
//         isValid = false

//         formAlert[5].classList.add('form-error')
//     } else {
//         formalert[5].classList.remove('form-error')
//     } 

//     // Form is valid 
//     if(isValid) {
//         successMessage.classList.add('active')
//         form.reset()
//     }
//  })

//  //Email Valiidation Function 
//  function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email)
//  }

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const queryType = document.querySelector('input[name="query-type"]:checked');
    const consent = document.getElementById("consent");

    let isValid = true;

    // Validate fields
    isValid &= validateField(firstName, ".first-name .form-alert", firstName.value.trim() === "");
    isValid &= validateField(lastName, ".last-name .form-alert", lastName.value.trim() === "");
    isValid &= validateField(email, ".email .form-alert", !isValidEmail(email.value.trim()));
    isValid &= validateField(message, ".message .form-alert", message.value.trim() === "");

    // Query type
   const queryAlert = document.querySelector(".radio-inputs").nextElementSibling;
    if (!queryType) {
        queryAlert.style.display = "block";
        isValid = false;
    } else {
        queryAlert.style.display = "none";
    }

    // Consent
    const consentAlert = document.querySelector(".consent-alert");
    if (!consent.checked) {
        consentAlert.style.display = "block";
        isValid = false;
    } else {
        consentAlert.style.display = "none";
    }

    // If everything is valid
    if (isValid) {
        successMessage.classList.add("active");
        form.reset();

        setTimeout(() => {
            successMessage.classList.remove("active");
        }, 3000);
    }
});

// Helper function
function validateField(input, alertSelector, condition) {
    const alert = document.querySelector(alertSelector);

    if (condition) {
        alert.style.display = "block";
        input.style.borderColor = "var(--red)";
        return false;
    } else {
        alert.style.display = "none";
        input.style.borderColor = "var(--medium-grey)";
        return true;
    }
}

// Email validation
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


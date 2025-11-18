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


var validationErrors = [];
const INVALID_NAME = "INVALID_NAME";
const INVALID_EMAIL = "INVALID_EMAIL";

function validateNameInput() {
	let nameForm = document.getElementById("name-form");
	let nameInput = document.getElementById("name-input");
	let contactToevoegenBtn = document.getElementById("contact-toevoegen-btn");
	
	if (!isNullOrEmpty(nameInput.value)) {
		setInputValidationTheme(nameForm, nameInput, "success");
		validationErrors = validationErrors.filter(value => value !== INVALID_NAME);
        if (validationErrors.length < 1) {
            enableContactToevoegenBtn(contactToevoegenBtn);
        }
	} else if(validationErrors.findIndex(value => value === INVALID_NAME) < 0) {
		setInputValidationTheme(nameForm, nameInput, "danger");
        validationErrors.push(INVALID_NAME);
        disableContactToevoegenBtn(contactToevoegenBtn);
	}
}

function validateEmailInput() {
	const emailValidatorRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let emailForm = document.getElementById("email-form");
	let emailInput = document.getElementById("email-input");
	let contactToevoegenBtn = document.getElementById("contact-toevoegen-btn");
	
	if (emailValidatorRegex.test(emailInput.value) && !isNullOrEmpty(emailInput.value)) {
		setInputValidationTheme(emailForm, emailInput, "success");
		validationErrors = validationErrors.filter(value => value !== INVALID_EMAIL);
		if (validationErrors.length < 1) {
            enableContactToevoegenBtn(contactToevoegenBtn);
        }
	} else if(validationErrors.findIndex(value => value === INVALID_EMAIL) < 0) {
		setInputValidationTheme(emailForm, emailInput, "danger");
        validationErrors.push(INVALID_EMAIL);
        disableContactToevoegenBtn(contactToevoegenBtn);
	}
}

function setInputValidationTheme(formGroupElement, inputElement, validationTheme) {
	formGroupElement.className = `form-group has-${validationTheme} row`;
	inputElement.className = `form-control form-control-${validationTheme}`;
}

function enableContactToevoegenBtn(contactToevoegenBtn) {
    contactToevoegenBtn.className = "btn btn-outline-warning";
	contactToevoegenBtn.addEventListener("click", validateInputFieldsAndAddContact);
	validationErrors = [];
}

function disableContactToevoegenBtn(contactToevoegenBtn) {
    contactToevoegenBtn.className = "btn btn-danger disabled";
    if (contactToevoegenBtn.addEventListener) contactToevoegenBtn.removeEventListener("click", validateInputFieldsAndAddContact);
}

function inputFieldsAreValid() {
	return validationErrors.length < 1;
}
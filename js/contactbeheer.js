const GET_ALLCONTACTS_URL = `${window.location.href}/getAllContacts`;
const POST_ADDCONTACT_URL = `${window.location.href}/addContact`;

window.addEventListener("load", handleWindowLoad);

function handleWindowLoad() {
	setNavLinkActive("nav-contacbeheer");
	createLoader();
    getAllContacts();
	activateTooltip();
}

function getAllContacts() {
	fetch(GET_ALLCONTACTS_URL)
		.then((response) => {
			console.log("Response: ", response);
			return response.json();
		})
		.then((contacts) => {
			writeUserProfiles(contacts);
			setElementEvents();
		})
		.catch((exception) => {
            handleGetAllContactsError(exception);
		});
}

function writeUserProfiles(contacts) {
    let contactProfilesHtmlTemplate = '<div class="btn btn-outline-success my-3" data-toggle="tooltip" data-placement="right" title="Toggle contact toevoegen" id="open-contact-form-btn"><i class="fa fa-plus" aria-hidden="true" id="toggle-icon"></i></div>\n';
    contactProfilesHtmlTemplate += '<div class="row" id="allContacts">\n';
	contacts.forEach(contact => {
        contactProfilesHtmlTemplate += SINGLE_CONTACT_TEMPL.replace("::name::", contact.name).replace("::email::", contact.email);
    });
    
    contactProfilesHtmlTemplate += '</div>';

	removeLoader();
	let allContactsContainer = document.getElementById('contactsTemplate');
	allContactsContainer.innerHTML = contactProfilesHtmlTemplate;
}

function setElementEvents() {
	let toggleContactFormBtn = document.getElementById("open-contact-form-btn");
	toggleContactFormBtn.onclick = toggleContactForm;
	let contactToevoegenBtn = document.getElementById("contact-toevoegen-btn");
	contactToevoegenBtn.addEventListener("click", validateInputFieldsAndAddContact);
	let nameInput = document.getElementById("name-input");
	nameInput.onkeyup = validateNameInput;
	let emailInput = document.getElementById("email-input");
	emailInput.onkeyup = validateEmailInput;
}

function validateInputFieldsAndAddContact() {
	validateNameInput();
	validateEmailInput();
	if (inputFieldsAreValid()) addContact();
}

function toggleContactForm() {
	let contactForm = document.getElementById("contact-form");
	let toggleIcon = document.getElementById("toggle-icon");
	if (contactForm.className === "hide") {
		contactForm.className = "show";
		toggleIcon.className = "fa fa-minus";
	} else {
		contactForm.className = "hide";
		toggleIcon.className = "fa fa-plus";
		resetContactForm();
	}
}

function addContact() {
	let name = document.getElementById("name-input").value;
	let email = document.getElementById("email-input").value;
	var contact = { name: name, email: email };
	
	fetch(POST_ADDCONTACT_URL, {
		method: "POST",
		body: JSON.stringify(contact)
		})
		.then((response) => {
			console.log("PostResponse: ", response);
			if (response.status != 201) throw response.status;
			
			toggleContactForm();
			resetContactForm();
			showFeedback("Het contact is succesvol toegevoegd!", "success");
			addContactToUserProfiles(contact);
			activateTooltip();
		})
		.catch((exception) => {
			handleAddContactError(exception);
		});
}

function resetContactForm() {
	document.getElementById("email-form").className = "form-group row";
	document.getElementById("name-form").className = "form-group row";
	let emailInput = document.getElementById("email-input");
	emailInput.className = "form-control";
	emailInput.value = "";
	let nameInput = document.getElementById("name-input");
	nameInput.className = "form-control";
	nameInput.value = "";
	let btn = document.getElementById("contact-toevoegen-btn");
	if (btn.className.indexOf("danger") > -1) enableContactToevoegenBtn(btn);
}

function addContactToUserProfiles(contact) {	
	let allContactsElement = document.getElementById("allContacts");
	let singleContactTemp = createElement(SINGLE_CONTACT_TEMPL.replace("::name::", contact.name).replace("::email::", contact.email));
	allContactsElement.appendChild(singleContactTemp);
}

function handleGetAllContactsError(exception) {
    removeLoader();
    let allContactsContainer = document.getElementById('contactsTemplate');
    allContactsContainer.innerHTML = '<div class="alert alert-danger" role="alert">\nEr is een fout gebeurt tijdens het ophalen van alle contacten.\n</div>';
    console.error(exception);
}

function handleAddContactError(exception) {
    showFeedback("Er is iets fout gelopen. Het contact is niet toegevoegd.", "danger");
    console.error(exception);
}

function showFeedback(message, colorTheme) {
	var feedbackElement = document.getElementById("contact-toevoegen-feedback");
	feedbackElement.innerHTML = message;
	feedbackElement.className = `mt-3 w-50 alert alert-${colorTheme} show`;
	setTimeout(function() {
		feedbackElement.className = "mt-3 w-50 hide";
	}, 5000);
}



var singleContactProfileHtmlTemplate = '<div class="col-cl-3 col-lg-4 col-sm-12 mb-4">\n<div class="card card-inverse" style="background-color: #333; border-color: #333;">\n<div class="card-block">\n<h4 class="card-title">::name::</h4>\n<h6 class="card-subtitle my-3">::email::</h6>\n<div class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Verwijder contact"><i class="fa fa-trash-o" aria-hidden="true"></i></div>\n</div>\n</div>\n</div>\n';

window.addEventListener("load", handleWindowLoad);

function handleWindowLoad() {
    createLoader();
	setNavLinkActive("nav-contacbeheer");
    getAllContacts();
    activateTooltip();
}

function getAllContacts() {
	const URL = `${window.location.href}/getAllContacts`;
	console.log("URL: ", URL);
	fetch(URL)
		.then((response) => {
			console.log("Response: ", response);
			return response.json();
		})
		.then((contacts) => {
			writeUserProfiles(contacts);
		})
		.catch((exception) => {
            handleGetAllContactsError(exception);
		});
}

function writeUserProfiles(contacts) {
    let contactProfilesHtmlTemplate = '<div class="btn btn-outline-success my-3" data-toggle="tooltip" data-placement="right" title="Contact toevoegen"><i class="fa fa-plus" aria-hidden="true"></i></div>\n';
    contactProfilesHtmlTemplate += '<div class="row" id="allContacts">\n';
	contacts.forEach(contact => {
        contactProfilesHtmlTemplate += singleContactProfileHtmlTemplate.replace("::name::", contact.name).replace("::email::", contact.email);
    });
    
    contactProfilesHtmlTemplate += '</div>';

	removeLoader();
	let allContactsContainer = document.getElementById('contactsTemplate');
	allContactsContainer.innerHTML = contactProfilesHtmlTemplate;
}

function handleGetAllContactsError(exception) {
    removeLoader();
    let allContactsContainer = document.getElementById('contactsTemplate');
    allContactsContainer.innerHTML = '<div class="alert alert-danger" role="alert">\nEr is een fout gebeurt tijdens het ophalen van alle contacten.\n</div>';
    console.error(exception);
}

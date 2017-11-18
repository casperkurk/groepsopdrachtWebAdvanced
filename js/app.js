function setNavLinkActive(currentNavLinkId) {
	let navItems = document.getElementsByClassName("nav-item");
	for (var i = 0; i < navItems.length; i++) {
		if (navItems[i].id != currentNavLinkId)
			navItems[i].className = navItems[i].className.replace("active", "");
		else
			navItems[i].className += " active";
	}
}

function createLoader() {
    let loaderTemplate = '<div class="sk-cube-grid">\n<div class="sk-cube sk-cube1"></div>\n';
    loaderTemplate += '<div class="sk-cube sk-cube2"></div>\n<div class="sk-cube sk-cube3"></div>\n';
    loaderTemplate += '<div class="sk-cube sk-cube4"></div>\n<div class="sk-cube sk-cube5"></div>\n';
    loaderTemplate += '<div class="sk-cube sk-cube6"></div>\n<div class="sk-cube sk-cube7"></div>\n';
    loaderTemplate += '<div class="sk-cube sk-cube8"></div>\n<div class="sk-cube sk-cube9"></div>\n</div>';

    let loaderContainer = document.getElementById('loader');
	loaderContainer.innerHTML = loaderTemplate;
}

function removeLoader() {
    let loaderContainer = document.getElementById('loader');
	loaderContainer.innerHTML = "";
}

function activateTooltip() {
    $('body').tooltip({selector:'[data-toggle=tooltip]'});
}

function isNullOrEmpty(value) {
	return value === null || value === "";
}

function createElement(innerHTML) {
    var fragment = document.createDocumentFragment();

    var elem = document.createElement('div');
    elem.innerHTML = innerHTML;

    while (elem.childNodes[0]) {
        fragment.appendChild(elem.childNodes[0]);
    }
    return fragment.childNodes[0];
}
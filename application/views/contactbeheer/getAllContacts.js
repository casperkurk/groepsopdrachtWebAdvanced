
function getAllContacts(baseUrl) {
	const URL = `${baseUrl}/contactbeheer/getAllContacts`;
	fetch(URL)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			writeOutput(data.name + ": " +
				data.hobbies.join(", ") + "\n");
		})
		.catch((exception) => {
			writeOutput("exception\n")
		});
}

function writeOutput(text) {
	var textNode = document.createTextNode(text + "\n")
	var output = document.getElementById("output");
	output.appendChild(textNode);
}
3

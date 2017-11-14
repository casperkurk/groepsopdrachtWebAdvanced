<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Dit is de ContactBeheer pagina</h4>
  <p class="mb-0"><?= $data ?></p>
</div>

<!-- Hier worden alle contacten opgevraagd via de $data-attribuut van de contactBeheerController. Het gaat via deze manier, maar we moeten het
    via javascript met een fetch-request doen -->
<!-- <?php foreach ($contacts as $contact) : ?>
    
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-block">
            <h4 class="card-title"><?php echo $contact['name']; ?></h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

<?php endforeach; ?> -->

<h4>Data ophalen met fetch-request lukt!</h4>
<pre id="output"></pre>

<!-- Hier worden alle contacten opgevraagd via javascript met een fetch-request -->
<script type="text/javascript" language='javascript'>
    window.addEventListener("load", handleWindowLoad);

    function handleWindowLoad() {
        getAllContacts();
    }

    function getAllContacts() {
            const URL = "<?php echo base_url();?>/contactbeheer/getAllContacts";
            fetch(URL)
                .then((response) => {
                    console.log("Response: ", response);
                    return response.json();
                })
                .then((contacts) => {
                    writeOutput(contacts);
                })
                .catch((exception) => {
                    writeOutput("exception\n");
                });
    }

    function writeOutput(contacts){
        let contactInfo = "";
        contacts.forEach(contact => {
            contactInfo = contactInfo + `${contact.name}: ${contact.email}\n`;
        });
        let textNode = document.createTextNode(contactInfo);
        var output=document.getElementById("output");
        output.appendChild(textNode);
    }
</script>

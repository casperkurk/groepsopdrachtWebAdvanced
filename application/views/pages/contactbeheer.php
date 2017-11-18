<h1 class="my-3">Contactbeheer</h1>

<div id="loader"></div>

<div class="mt-5">
    <div class="hide" id="contact-form">
        <div class="form-group row" id="name-form">
            <label for="name-input" class="col-lg-2 col-md-3 col-sm-4 col-form-label">Naam</label>
            <div class="col-lg-5 col-md-6 col-sm-8">
                <input class="form-control" type="text" placeholder="Voornaam Familienaam" id="name-input">
            </div>
        </div>
        <div class="form-group row" id="email-form">
            <label for="email-input" class="col-lg-2 col-md-3 col-sm-4 col-form-label">Email</label>
            <div class="col-lg-5 col-md-6 col-sm-8">
                <input class="form-control" type="email" placeholder="example@domain.com" id="email-input">
            </div>
        </div>
        <div class="btn btn-outline-warning" id="contact-toevoegen-btn">Toevoegen</div>
    </div>
</div>

<div class="hide" role="alert" id="contact-toevoegen-feedback"></div>

<div id="contactsTemplate"></div>

<script type="text/javascript" src="./js/contactbeheer.js"></script>
 

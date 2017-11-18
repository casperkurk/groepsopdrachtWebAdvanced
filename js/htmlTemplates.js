const SINGLE_CONTACT_TEMPL = '<div class="col-cl-3 col-lg-4 col-sm-12 mb-4">\n<div class="card card-inverse" style="background-color: #333; border-color: #333;">\n<div class="card-block">\n<h4 class="card-title">::name::</h4>\n<h6 class="card-subtitle my-3">::email::</h6>\n<div class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Verwijder contact"><i class="fa fa-trash-o" aria-hidden="true"></i></div>\n</div>\n</div>\n</div>\n';
const CONTACT_FORM_TEMPL = '<div class="form-group row" id="name-form">\n<label for="name-input" class="col-lg-2 col-md-3 col-sm-4 col-form-label">Naam</label>\n<div class="col-lg-5 col-md-6 col-sm-8">\n<input class="form-control" type="text" placeholder="Voornaam Familienaam" id="name-input">\n</div>\n</div>\n<div class="form-group row" id="email-form">\n<label for="email-input" class="col-lg-2 col-md-3 col-sm-4 col-form-label">Email</label>\n<div class="col-lg-5 col-md-6 col-sm-8">\n<input class="form-control" type="email" placeholder="example@domain.com" id="email-input">\n</div>\n</div>\n<div class="btn btn-outline-warning" id="contact-toevoegen-btn">Toevoegen</div>';
<?php
class ContactBeheer extends CI_Controller {
    public function index() {
        $data['data'] = "Data doorgeven werkt!";

        $data['contacts'] = $this->contact_model->get_allContacts();

        $this->load->view('templates/header');
        $this->load->view('pages/contactbeheer', $data);
        $this->load->view('templates/footer');
    }

    public function getAllContacts() {
        $allContacts = json_encode($this->contact_model->get_allContacts());
        echo $allContacts;
    }
}
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

    public function addContact() {
        $contact = json_decode(trim(file_get_contents('php://input')), true);
        $response = $this->contact_model->post_addContact($contact);
        if ($response) {
            var_dump(http_response_code(201));
            echo json_encode($contact);
        }
        else var_dump(http_response_code(400));
    }
}
<?php
    class Contact_model extends CI_Model {
        public function __construct() {
            $this->load->database();
        }

        public function get_allContacts() {
            $query = $this->db->get('contacten');
            return $query->result_array();
        }
    }
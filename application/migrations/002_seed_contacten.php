<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Seed_contacten extends CI_Migration {

  public function up()
  {
    if($this->db->table_exists('contacten'))
    {
      $contacten = [
        [
          'name' => 'Frodo Baggins',
          'email' => 'frodo.baggins@shire.com'
        ],
        [
          'name' => 'Samwise Gamgee',
          'email' => 'samwise.gamgee@shire.com'
        ],
        [
          'name' => 'Peregrin Took',
          'email' => 'peregrin.took@shire.com'
        ],
        [
          'name' => 'Meriadoc Brandybuck',
          'email' => 'meriadoc.brandybuck@shire.com'
        ],
        [
          'name' => 'Gandalf The Grey',
          'email' => 'gandalf@shire.com'
        ],
        [
          'name' => 'Bilbo Baggins',
          'email' => 'bilbo.baggins@shire.com'
        ]
      ];
      
      
      foreach ($contacten as $contact) {
        $this->db->insert('contacten', $contact);
      }

      echo "\nContacten geseed met data!";
    }   
  }
  
  public function down()
  {
    
  }

}
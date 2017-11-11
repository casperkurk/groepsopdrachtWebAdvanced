<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Create_table_contacten extends CI_Migration {
  
  public function up()
  {
    if(!$this->db->table_exists('contacten'))
    {
      $this->dbforge->add_field(array(
        'id' => array(
        'type' => 'int',
        'constraint' => 9,
        'unsigned' => true,
        'auto_increment' => true
         ),
        'name' => array(
        'type' => 'varchar',
        'constraint' => 100,
        'null' => false
         ),
        'email-adres' => array(
        'type' => 'varchar',
        'constraint' => 50,
        'null' => false
         ),
      ));

        $this->dbforge->add_key('id', true);
        $this->dbforge->create_table('contacten', true);
        echo 'Table contacten gecreëerd!';
    }   
  }
  
  public function down()
  {
    
  }

}
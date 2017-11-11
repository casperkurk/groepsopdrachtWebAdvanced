# Groepsopdracht WebAdvanced
### Installatie:
  1. Pak dit project uit in je phpProjectenFolder
  2. Creëer in MySql een Database met de naam "groepsopdracht_web_advanced".
  3. In het project: 
    * open application\config\config.php
    * zoek naar $config['base_url'] en zet deze naar de URL van dit project (bv. 'http://localhost/groepsopdracht-web-advanced')
    * zoek ook naar $config['index_page'] en geef deze een lege string als waarde
    * open application\config\database.php
    * vul de 'hostname', 'username', 'password' van je MySql en vul bij 'database' => 'groepsopdracht_web_advanced' in
    * zoek ook naar $config['index_page'] en geef deze een lege string als waarde
  4. Test ofdat je naar de indexPagina kan gaan => ga naar je ingestelde base_url
  5. Voer de eerste migratie uit (deze gaat de tabel contacten creëren in je database) => dit doe je door naar "jeIngesteldeBase_Url"/migrate te gaan
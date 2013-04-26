<?php

/**
 * Controller class for manipulating a Faculty member's data through
 * proper REST
 * 
 * @author jbooker
 * @package intern
 */
class RestFacultyById {
    
    public function __construct()
    {
        
    }
    
    public function execute()
    {
        switch($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            $this->get();
            exit;
        case 'PUT':
            $this->put();
            exit;
        default:
            header('HTTP/1.1 405 Method Not Allowed');
            exit;
        }
    }

    public function get()
    {
        PHPWS_Core::initModClass('intern', 'FacultyFactory.php');
        
        $id = $_GET['id'];
        
        if(!isset($id) || $id == '') {
            throw new InvalidArgumentException('Missing faculty ID.');
        }
        
        $faculty = FacultyFactory::getFacultyById($id);

        if(empty($faculty)) {
            header('HTTP/1.1 404 Not Found');
            exit;
        }
        
        echo json_encode($faculty);
        
        exit;
    }

    public function put()
    {
        PHPWS_Core::initModClass('intern', 'Faculty.php');
        
        $postarray = json_decode(file_get_contents('php://input'), true);

        var_dump($postarray);
        
        $faculty = new FacultyDB();
        
        $faculty->setId($postarray['id']);
        $faculty->setUsername($postarray['username']);
        $faculty->setFirstName($postarray['first_name']);
        $faculty->setLastName($postarray['last_name']);
        
        $faculty->setPhone($postarray['phone']);
        $faculty->setFax($postarray['fax']);
        
        $faculty->setStreetAddress1($postarray['street_address1']);
        $faculty->setStreetAddress2($postarray['street_address2']);
        $faculty->setCity($postarray['city']);
        $faculty->setState($postarray['state']);
        $faculty->setZip($postarray['zip']);
        
        // Save the faculty object
        PHPWS_Core::initModClass('intern', 'DatabaseStorage.php');
        try {
            var_dump(DatabaseStorage::save($faculty));
        }
        catch(Exception $e) {
            header('HTTP/1.1 500 Internal Server Error');
            exit;
        }
        
        echo json_encode($faculty);
        
        // Exit, since this is called by JSON
        exit;
    }
}

?>
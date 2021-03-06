<?php

class RegisterAfterIssue extends WorkflowTransition {
    const sourceState = 'RegistrationIssueState';
    const destState   = 'RegisteredState';
    const actionName  = 'Mark as Registered / Enrollment Complete';

    public function getAllowedPermissionList(){
        return array('register');
    }
    
    public function doNotification(Internship $i, $note = null)
    {
        $agency = $i->getAgency();
    
        PHPWS_Core::initModClass('intern', 'Email.php');
        Email::sendRegistrationConfirmationEmail($i, $agency);
    }
}

?>
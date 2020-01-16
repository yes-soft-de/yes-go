<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ServiceEmployeeController extends AbstractController
{
    /**
     * @Route("/service/employee", name="service_employee")
     */
    public function index()
    {
        return $this->render('service_employee/index.html.twig', [
            'controller_name' => 'ServiceEmployeeController',
        ]);
    }
}

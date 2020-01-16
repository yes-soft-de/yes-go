<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProjectEmployeeController extends AbstractController
{
    /**
     * @Route("/project/employee", name="project_employee")
     */
    public function index()
    {
        return $this->render('project_employee/index.html.twig', [
            'controller_name' => 'ProjectEmployeeController',
        ]);
    }
}

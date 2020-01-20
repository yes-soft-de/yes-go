<?php


namespace App\Service;


use App\AutoMapping;
use App\Entity\EmployeeEntity;
use App\Manager\EmployeeManager;
use App\Request\GetEmployeeByIdResponse;
use App\Response\CreateEmployeeResponse;
use App\Response\DeleteResponse;
use App\Response\GetEmployeesResponse;
use App\Response\UpdateEmployeeResponse;
use Symfony\Component\HttpFoundation\Request;

class EmployeeService

{
    private $employeeManager;
    private $autoMapping;


    public function __construct(EmployeeManager $employeeManager, AutoMapping $autoMapping)
    {
        $this->employeeManager =$employeeManager;
        $this->autoMapping = $autoMapping;
    }

    public function create($request)
    {
        $employeeResult = $this->employeeManager->create($request);
        $response = $this->autoMapping->map(EmployeeEntity::class, CreateEmployeeResponse::class,
            $employeeResult);
        return $response;
    }

    public function update($request)
    {
        $employeeResult = $this->employeeManager->update($request);
        $response = $this->autoMapping->map(EmployeeEntity::class, UpdateEmployeeResponse::class, $employeeResult);
        return $response;
    }

   public function getAll()
    {
        $result = $this->employeeManager->getAll();
        $response=[];
        foreach ($result as $row)
            $response[] = $this->autoMapping->map(EmployeeEntity::class, GetEmployeesResponse::class, $row);
        return $response;
    }

    public function delete($request)
    {
        $result = $this->employeeManager->delete($request);
        $response = new DeleteResponse($result->getId());
        return $response;
    }

    public function getEmployeeById($request)
    {
        $result = $this->employeeManager->getEmployeeById($request);
       // $projects=$this->employeeManager->getEmployeeProjects($request);
        $response = $this->autoMapping->map(EmployeeEntity::class, GetEmployeeByIdResponse::class, $result);
      //  $response->setProjects($projects);
        return $response;
    }
}
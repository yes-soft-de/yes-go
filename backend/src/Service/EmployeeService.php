<?php


namespace App\Service;


use App\AutoMapping;
use App\Entity\EmployeeEntity;
use App\Manager\EmployeeManager;
use App\Response\GetEmployeeByIdResponse;
use App\Response\CreateEmployeeResponse;
use App\Response\DeleteResponse;
use App\Response\GetEmployeeProjectsResponse;
use App\Response\GetEmployeesResponse;
use App\Response\SearchResponse;
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
        $counter=0;
        foreach ($result as $row) {
            $response[$counter] = $this->autoMapping->map(EmployeeEntity::class, GetEmployeesResponse::class, $row);
            $skills=$this->employeeManager->getEmployeeSkills($row->getId());
            $response[$counter]->setSkills($skills);
            $counter++;
        }
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
        $skills=$this->employeeManager->getEmployeeSkills($request->getId());
        $response = $this->autoMapping->map(EmployeeEntity::class, GetEmployeeByIdResponse::class, $result);
        $response->setSkills($skills);
        return $response;
    }
    public function getEmployeeProjects($request)
    {
        $result = $this->employeeManager->getEmployeeProjects($request);
        $response=[];
        foreach ($result as $project)
        $response[] = $this->autoMapping->map('array', GetEmployeeProjectsResponse::class,$project);
        return $response;
    }
    public function search($request)
    {
        $result = $this->employeeManager->search($request);
        $response=[];
        foreach ($result as $employee)
            $response[] = $this->autoMapping->map('array', SearchResponse::class,$employee);
        return $response;
    }
}
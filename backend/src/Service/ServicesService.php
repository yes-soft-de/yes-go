<?php


namespace App\Service;


use App\AutoMapping;
use App\Entity\EmployeeEntity;
use App\Entity\ServicesEntity;
use App\Manager\ServicesManager;
use App\Request\GetEmployeeByIdResponse;
use App\Response\DeleteResponse;
use App\Response\GetServiceByIdResponse;
use App\Response\GetServicesResponse;

class ServicesService
{
    private $servicesManager;
    private $autoMapping;


    public function __construct(ServicesManager $servicesManager, AutoMapping $autoMapping)
    {
        $this->servicesManager =$servicesManager;
        $this->autoMapping = $autoMapping;
    }

    public function create($request)
    {
        $servicesResult = $this->servicesManager->create($request);
        $response = $this->autoMapping->map(ServicesEntity::class, CreateServicesResponse::class,
            $servicesResult);
        return $response;
    }

    public function update($request)
    {
        $servicesResult = $this->servicesManager->update($request);
        $response = $this->autoMapping->map(ServicesEntity::class, UpdateServicesResponse::class, $servicesResult);
        return $response;
    }

    public function getAll()
    {
        $result = $this->servicesManager->getAll();
        $response=[];
        foreach ($result as $row)
            $response[] = $this->autoMapping->map(ServicesEntity::class, GetServicesResponse::class, $row);
        return $response;
    }

    public function delete($request)
    {
        $result = $this->servicesManager->delete($request);
        $response = new DeleteResponse($result->getId());
        return $response;
    }

    public function getServicesById($request)
    {
        $result = $this->servicesManager->getServicesById($request);
        // $servicess=$this->servicesManager->getServicesServicess($request);
        $response = $this->autoMapping->map(ServicesEntity::class, GetServiceByIdResponse::class, $result);
        //  $response->setServicess($Servicess);
        return $response;
    }
    public function getServiceTeam($request)
    {
        $result=$this->servicesManager->getServiceTeam($request);
        $response=[];
        foreach ($result as $employee)
        $response[]=$this->autoMapping->map(EmployeeEntity::class,GetEmployeeByIdResponse::class,$employee);
        return $response;
    }

}
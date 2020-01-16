<?php


namespace App\Service;


use App\AutoMapping;
use App\Entity\CustomerEntity;
use App\Manager\CustomerManager;
use App\Response\GetCustomerByIdResponse;
use App\Response\GetCustomersResponse;

class CustomerService
{
    private $customerManager;
    private $autoMapping;


    public function __construct(CustomerManager $customerManager, AutoMapping $autoMapping)
    {
        $this->customerManager =$customerManager;
        $this->autoMapping = $autoMapping;
    }

    public function getAll()
    {
        $result = $this->customerManager->getAll();
        $response=[];
        foreach ($result as $row)
            $response[] = $this->autoMapping->map(CustomerEntity::class, GetCustomersResponse::class, $row);
        return $response;
    }
    public function getCustomerById($request)
    {
        $result = $this->customerManager->getCustomerById($request);
        $response=[];
        $response = $this->autoMapping->map(CustomerEntity::class, GetCustomerByIdResponse::class, $result);
        return $response;
    }

}
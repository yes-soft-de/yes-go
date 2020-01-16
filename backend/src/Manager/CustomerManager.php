<?php


namespace App\Manager;


use App\AutoMapping;
use App\Repository\CustomerEntityRepository;
use App\Request\GetByIdRequest;
use Doctrine\ORM\EntityManagerInterface;

class CustomerManager
{
    private $entityManager;
    private $customerRepository;
    private $autoMapping;

    /**
     * CustomerManager constructor.
     * @param $entityManager
     * @param $customerRepository
     * @param $autoMapping
     */
    public function __construct(EntityManagerInterface $entityManagerInterface,
                                CustomerEntityRepository $customerEntityRepository, AutoMapping $autoMapping)
    {
        $this->entityManager = $entityManagerInterface;
        $this->customerRepository = $customerEntityRepository;
        $this->autoMapping = $autoMapping;
    }

    public function getAll()
    {
        $data = $this->customerRepository->getAll();

        return $data;
    }
    public function getCustomerById(GetByIdRequest $request)
    {
        return $result = $this->customerRepository->findCustomerById($request->getId());
    }
}
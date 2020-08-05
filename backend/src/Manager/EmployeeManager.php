<?php


namespace App\Manager;

use App\AutoMapping;
use App\Entity\EmployeeEntity;
use App\Repository\EmployeeEntityRepository;
use App\Request\CreateEmployeeRequest;
use App\Request\DeleteRequest;
use App\Request\GetByIdRequest;
use App\Request\UpdateEmployeeRequest;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class EmployeeManager
{
    private $entityManager;
    private $employeeRepository;
    private $autoMapping;

    public function __construct(EntityManagerInterface $entityManagerInterface,
                                EmployeeEntityRepository $employeeEntityRepository, AutoMapping $autoMapping)
    {
        $this->entityManager = $entityManagerInterface;
        $this->employeeRepository=$employeeEntityRepository;
        $this->autoMapping = $autoMapping;
    }

    public function create(CreateEmployeeRequest $request)
    {
        $employeeEntity = $this->autoMapping->map(CreateEmployeeRequest::class, EmployeeEntity::class, $request);
        $this->entityManager->persist($employeeEntity);
        $this->entityManager->flush();
        $this->entityManager->clear();
        return $employeeEntity;
    }

    public function update(UpdateEmployeeRequest $request)
    {
        $employeeEntity = $this->employeeRepository->findEmployeeByld($request->getId());
        if (!$employeeEntity) {

        } else {
            $employeeEntity =  $this->autoMapping->mapToObject(UpdateEmployeeRequest::class,
                EmployeeEntity::class, $request, $employeeEntity);
            $this->entityManager->flush();
            return $employeeEntity;
        }
    }

    public function delete(DeleteRequest $request)
    {
        $employee = $this->employeeRepository->findEmployeeByld($request->getId());
        if (!$employee) {

        } else {
            $employee->setIsActive(false);
            $this->entityManager->flush();
        }
        return $employee;
    }

    public function getAll()
    {
        $data = $this->employeeRepository->getAll();
        return $data;
    }

    public function getEmployeeById(GetByIdRequest $request)
    {
        return $result = $this->employeeRepository->findEmployeeByld($request->getId());
    }
    public function getEmployeeProjects(GetByIdRequest $request)
    {
        return $result=$this->employeeRepository->findEmployeeProjects($request->getId());
    }
    public function getEmployeeSkills($request)
    {
        return $result = $this->employeeRepository->getEmployeeSkills($request);
    }
    public function search($request)
    {
        return $result = $this->employeeRepository->search($request);
    }
}

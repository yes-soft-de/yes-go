<?php


namespace App\Manager;


use App\AutoMapping;
use App\Entity\ServicesEntity;
use App\Repository\ServicesEntityRepository;
use App\Request\CreateServiceRequest;
use App\Request\DeleteRequest;
use App\Request\GetByIdRequest;
use App\Request\UpdateServiceRequest;
use Doctrine\ORM\EntityManagerInterface;

class ServicesManager
{
    private $entityManager;
    private $servicesRepository;
    private $autoMapping;

    public function __construct(EntityManagerInterface $entityManagerInterface,
                                ServicesEntityRepository $servicesEntityRepository, AutoMapping $autoMapping)
    {
        $this->entityManager = $entityManagerInterface;
        $this->servicesRepository=$servicesEntityRepository;
        $this->autoMapping = $autoMapping;
    }

    public function create(CreateServiceRequest $request)
    {
        $servicesEntity = $this->autoMapping->map(CreateServiceRequest::class, ServicesEntity::class, $request);
        $this->entityManager->persist($servicesEntity);
        $this->entityManager->flush();
        $this->entityManager->clear();
        return $servicesEntity;
    }

    public function update(UpdateServiceRequest $request)
    {
        $servicesEntity = $this->servicesRepository->findServiceByld($request->getId());
        if (!$servicesEntity) {

        } else {
            $servicesEntity =  $this->autoMapping->mapToObject(UpdateServiceRequest::class,
                ServicesEntity::class, $request, $servicesEntity);
            $this->entityManager->flush();
            return $servicesEntity;
        }
    }

    public function delete(DeleteRequest $request)
    {
        $services = $this->servicesRepository->findServiceByld($request->getId());
        if (!$services) {

        } else {
            $services->setIsActive(false);
            $this->entityManager->flush();
        }
        return $services;
    }

    public function getAll()
    {
        $data = $this->servicesRepository->getAll();

        return $data;
    }

    public function getServicesById(GetByIdRequest $request)
    {
        return $result = $this->servicesRepository->findServiceByld($request->getId());
    }
    public function getServiceTeam(GetByIdRequest $request)
    {
        return $result=$this->servicesRepository->findServiceTeam($request->getId());
    }

}
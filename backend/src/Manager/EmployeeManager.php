<?php


namespace App\Manager;

use App\AutoMapping;
use App\Entity\EmployeeEntity;
use App\Repository\EmployeeEntityRepository;
use App\Request\CreateEmployeeRequest;
use App\Request\GetByIdRequest;
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

//    public function update(UpdateArtistRequest $request)
//    {
//        $artistEntity = $this->artistRepository->getArtist($request->getId());
//        if (!$artistEntity) {
//            $exception = new EntityException();
//            $exception->entityNotFound("artist");
//        } else {
//            $artistEntity = $artistEntity = $this->autoMapping->mapToObject(UpdateArtistRequest::class,
//                ArtistEntity::class, $request, $artistEntity);
//            $artistEntity->setBirthDate($request->getBirthDate());
//            $artistEntity->setUpdateDate();
//            $this->entityManager->flush();
//            return $artistEntity;
//        }
//    }
//
//    public function delete(DeleteRequest $request)
//    {
//        $artist = $this->artistRepository->getArtist($request->getId());
//        if (!$artist) {
//            $exception = new EntityException();
//            $exception->entityNotFound("artist");
//        } else {
//            $artist->setIsActive(false);
//            $this->entityManager->flush();
//        }
//        return $artist;
//    }
//
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
//    public function search(Request $request)
//    {
//        $data = json_decode($request->getContent(), true);
//        return $result = $this->artistRepository->search($data['keyword']);
//    }
//
//    public function getAllDetails()
//    {
//        $data = $this->artistRepository->getAllDetails();
//
//        return $data;
//    }
//
//    public function isReportSent($artist)
//    {
//        $result = $this->reportRepository->findReportByArtist($artist->getId());
//        if (isset($result))
//            return true;
//        else return false;
//    }
//
//    public function getArtistPaintings($artist)
//    {
//        return $this->artistRepository->getArtistPaintings($artist);
//    }
}

<?php


namespace App\Service;


use App\AutoMapping;
use App\Entity\EmployeeEntity;
use App\Manager\EmployeeManager;
use App\Request\GetEmployeeByIdResponse;
use App\Response\CreateEmployeeResponse;
use App\Response\GetEmployeesResponse;
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
      //  $employeeID = $employeeResult->getId();
        $response = $this->autoMapping->map(EmployeeEntity::class, CreateEmployeeResponse::class,
            $employeeResult);
        return $response;
    }

//    //ToDO mapping painting entity and response
//    public function update($request)
//    {
//        $artistResult = $this->artistManager->update($request);
//        $artTypeResult = $this->artTypeManager->update($request, 2);
//        $mediaResault = $this->mediaManager->update($request, 2);
//        $response = $this->autoMapping->map(ArtistEntity::class, UpdateArtistResponse::class, $artistResult);
//        $response->setImage($mediaResault->getPath());
//        $response->setArtType($artTypeResult->getId());
//        return $response;
//    }
//
   public function getAll()
    {
        $result = $this->employeeManager->getAll();
        $response=[];
        foreach ($result as $row)
            $response[] = $this->autoMapping->map(EmployeeEntity::class, GetEmployeesResponse::class, $row);
        return $response;
    }
//
//    public function delete($request)
//    {
//        $result = $this->artistManager->delete($request);
//        $this->mediaManager->delete($request, 2);
//        $this->artTypeManager->delete($request, 2);
//        $this->interactionManager->deleteClaps($request, 2);
//        $this->interactionManager->deleteComments($request, 2);
//        $this->interactionManager->deleteInteractions($request, 2);
//        $response = new DeleteResponse($result->getId());
//        return $response;
//    }

    public function getEmployeeById($request)
    {
        $result = $this->employeeManager->getEmployeeById($request);
       // $projects=$this->employeeManager->getEmployeeProjects($request);
        $response = $this->autoMapping->map(EmployeeEntity::class, GetEmployeeByIdResponse::class, $result);
      //  $response->setProjects($projects);
        return $response;
    }

//    public function search(Request $request)
//    {
//        return $result = $this->artistManager->search($request);
//    }
//
//    public function getAllDetails()
//    {
//        $result = $this->artistManager->getAllDetails();
//        foreach ($result as $row)
//            $response[] = $this->autoMapping->map('array', GetArtistsDetailsResponse::class, $row);
//        return $response;
//    }

}
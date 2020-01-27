<?php


namespace App\Service;


use App\AutoMapping;
use App\Entity\ProjectEntity;
use App\Response\CreateProjectResponse;
use App\Response\DeleteResponse;
use App\Response\GetProjectByIdResponse;
use App\Response\GetProjectsResponse;
use App\Response\UpdateProjectResponse;

class ProjectService
{
    private $projectManager;
    private $autoMapping;


    public function __construct(ProjectManager $projectManager, AutoMapping $autoMapping)
    {
        $this->projectManager =$projectManager;
        $this->autoMapping = $autoMapping;
    }

    public function create($request)
    {
        $projectResult = $this->projectManager->create($request);
        $response = $this->autoMapping->map(ProjectEntity::class, CreateProjectResponse::class,
            $projectResult);
        return $response;
    }

    public function update($request)
    {
        $projectResult = $this->projectManager->update($request);
        $response = $this->autoMapping->map(ProjectEntity::class, UpdateProjectResponse::class, $projectResult);
        return $response;
    }

    public function getAll()
    {
        $result = $this->projectManager->getAll();
        $response=[];
        foreach ($result as $row)
            $response[] = $this->autoMapping->map(ProjectEntity::class, GetProjectsResponse::class, $row);
        return $response;
    }

    public function delete($request)
    {
        $result = $this->projectManager->delete($request);
        $response = new DeleteResponse($result->getId());
        return $response;
    }

    public function getProjectById($request)
    {
        $result = $this->projectManager->getProjectById($request);
        // $projects=$this->projectManager->getProjectProjects($request);
        $response = $this->autoMapping->map(ProjectEntity::class, GetProjectByIdResponse::class, $result);
        //  $response->setProjects($projects);
        return $response;
    }
}
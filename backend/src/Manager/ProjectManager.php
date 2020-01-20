<?php


namespace App\Manager;


use App\AutoMapping;
use App\Entity\ProjectEntity;
use App\Repository\ProjectEntityRepository;
use App\Request\CreateProjectRequest;
use App\Request\DeleteRequest;
use App\Request\GetByIdRequest;
use App\Request\UpdateProjectRequest;
use Doctrine\ORM\EntityManagerInterface;

class ProjectManager
{
    private $entityManager;
    private $projectRepository;
    private $autoMapping;

    public function __construct(EntityManagerInterface $entityManagerInterface,
                                ProjectEntityRepository $projectEntityRepository, AutoMapping $autoMapping)
    {
        $this->entityManager = $entityManagerInterface;
        $this->projectRepository=$projectEntityRepository;
        $this->autoMapping = $autoMapping;
    }

    public function create(CreateProjectRequest $request)
    {
        $projectEntity = $this->autoMapping->map(CreateProjectRequest::class, ProjectEntity::class, $request);
        $this->entityManager->persist($projectEntity);
        $this->entityManager->flush();
        $this->entityManager->clear();
        return $projectEntity;
    }

    public function update(UpdateProjectRequest $request)
    {
        $projectEntity = $this->projectRepository->findProjectById($request->getId());
        if (!$projectEntity) {

        } else {
            $projectEntity =  $this->autoMapping->mapToObject(UpdateProjectRequest::class,
                ProjectEntity::class, $request, $projectEntity);
            $this->entityManager->flush();
            return $projectEntity;
        }
    }

    public function delete(DeleteRequest $request)
    {
        $project = $this->projectRepository->findProjectById($request->getId());
        if (!$project) {

        } else {
            $project->setIsActive(false);
            $this->entityManager->flush();
        }
        return $project;
    }

    public function getAll()
    {
        $data = $this->projectRepository->getAll();

        return $data;
    }

    public function getProjectById(GetByIdRequest $request)
    {
        return $result = $this->projectRepository->findProjectById($request->getId());
    }
}
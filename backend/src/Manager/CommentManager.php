<?php


namespace App\Manager;


use App\AutoMapping;
use App\Entity\CommentEntity;
use App\Repository\CommentEntityRepository;
use App\Request\CreateCommentRequest;
use App\Request\DeleteRequest;
use App\Request\GetByIdRequest;
use App\Request\UpdateCommentRequest;
use Doctrine\ORM\EntityManagerInterface;

class CommentManager
{
    private $entityManager;
    private $commentRepository;
    private $autoMapping;

    public function __construct(EntityManagerInterface $entityManagerInterface,
                                CommentEntityRepository $commentEntityRepository, AutoMapping $autoMapping)
    {
        $this->entityManager = $entityManagerInterface;
        $this->commentRepository=$commentEntityRepository;
        $this->autoMapping = $autoMapping;
    }

    public function create(CreateCommentRequest $request)
    {
        $commentEntity = $this->autoMapping->map(CreateCommentRequest::class, CommentEntity::class, $request);
        $this->entityManager->persist($commentEntity);
        $this->entityManager->flush();
        $this->entityManager->clear();
        return $commentEntity;
    }

    public function update(UpdateCommentRequest $request)
    {
        $commentEntity = $this->commentRepository->findCommentById($request->getId());
        if (!$commentEntity) {

        } else {
            $commentEntity =  $this->autoMapping->mapToObject(UpdateCommentRequest::class,
                CommentEntity::class, $request, $commentEntity);
            $this->entityManager->flush();
            return $commentEntity;
        }
    }

    public function delete(DeleteRequest $request)
    {
        $comment = $this->commentRepository->findCommentById($request->getId());
        if (!$comment) {

        } else {
            $this->entityManager->flush();
        }
        return $comment;
    }

    public function getAll()
    {
        $data = $this->commentRepository->getAll();

        return $data;
    }

    public function getCommentById(GetByIdRequest $request)
    {
        return $result = $this->commentRepository->findCommentById($request->getId());
    }
    public function getCustomerComments(GetByIdRequest $request)
    {
        return $result=$this->commentRepository->findCustomerComments($request->getId());
    }
    public function getEmployeeComments(GetByIdRequest $request)
    {
        return $result=$this->commentRepository->findEmployeeComments($request->getId());
    }

}
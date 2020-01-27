<?php


namespace App\Service;


use App\AutoMapping;
use App\Entity\CommentEntity;
use App\Manager\CommentManager;
use App\Response\DeleteResponse;
use App\Response\GetCommentByIdResponse;
use App\Response\GetCommentsResponse;
use App\Response\GetEmployeeCommentsResponse;

class CommentService
{
    private $commentManager;
    private $autoMapping;


    public function __construct(CommentManager $commentManager, AutoMapping $autoMapping)
    {
        $this->commentManager =$commentManager;
        $this->autoMapping = $autoMapping;
    }

    public function create($request)
    {
        $commentResult = $this->commentManager->create($request);
        $response = $this->autoMapping->map(CommentEntity::class, CreateCommentResponse::class,
            $commentResult);
        return $response;
    }

    public function update($request)
    {
        $commentResult = $this->commentManager->update($request);
        $response = $this->autoMapping->map(CommentEntity::class, UpdateCommentResponse::class, $commentResult);
        return $response;
    }

    public function getAll()
    {
        $result = $this->commentManager->getAll();
        $response=[];
        foreach ($result as $row)
            $response[] = $this->autoMapping->map(CommentEntity::class, GetCommentsResponse::class, $row);
        return $response;
    }

    public function delete($request)
    {
        $result = $this->commentManager->delete($request);
        $response = new DeleteResponse($result->getId());
        return $response;
    }

    public function getCommentById($request)
    {
        $result = $this->commentManager->getCommentById($request);
        $response = $this->autoMapping->map(CommentEntity::class, GetCommentByIdResponse::class, $result);
        return $response;
    }
    public function getEmployeeComments($request)
    {
        $result = $this->commentManager->getEmployeeComments($request);
        $response=[];
        foreach ($result as $comment)
        $response = $this->autoMapping->map('array', GetEmployeeCommentsResponse::class, $comment);
        return $response;
    }
}
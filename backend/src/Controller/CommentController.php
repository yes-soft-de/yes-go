<?php

namespace App\Controller;

use App\AutoMapping;
use App\Request\CreateCommentRequest;
use App\Request\DeleteRequest;
use App\Request\GetByIdRequest;
use App\Request\UpdateCommentRequest;
use App\Service\CommentService;
use AutoMapperPlus\Exception\UnregisteredMappingException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CommentController extends BaseController
{
    private $commentService;
    private $autoMapping;
    /**
     * CommentController constructor.
     * @param CommentService $commentService
     */
    public function __construct(CommentService $commentService,AutoMapping $autoMapping)
    {
        $this->commentService = $commentService;
        $this->autoMapping=$autoMapping;
    }

    /**
     * @Route("/comments",name="createComment",methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function create(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $request=$this->autoMapping->map(\stdClass::class,CreateCommentRequest::class,(object)$data);
        $result = $this->commentService->create($request);
        return $this->response($result, self::CREATE);
    }

    /**
     * @Route("/comment/{id}", name="updateComment",methods={"PUT"})
     * @param Request $request
     * @return JsonResponse|Response
     * @throws UnregisteredMappingException
     */
    public function update(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $id=$request->get('id');
        $request=$this->autoMapping->map(\stdClass::class,UpdateCommentRequest::class,(object)$data);
        $request->setId($id);
        $result = $this->commentService->update($request);
        return $this->response($result, self::UPDATE);
    }

    /**
     * @Route("/comment/{id}", name="deleteComment",methods={"DELETE"})
     * @param Request $request
     * @return JsonResponse
     */
    public function delete(Request $request)
    {
        $request=new DeleteRequest($request->get('id'));
        $result = $this->commentService->delete($request);
        return $this->response($result, self::DELETE);
    }

    /**
     * @Route("/comments", name="getAllComment",methods={"GET"})
     * @return JsonResponse
     */
    public function getAll()
    {
        $result = $this->commentService->getAll();
        return $this->response($result, self::FETCH);
    }

    /**
     * @Route("/comment/{id}", name="getCommentById",methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getCommentById(Request $request)
    {
        $request=new GetByIdRequest($request->get('id'));
        $result = $this->commentService->getCommentById($request);
        return $this->response($result, self::FETCH);
    }
    /**
     * @Route("/employeecomments/{id}", name="getEmployeeComments",methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getEmployeeComments(Request $request)
    {
        $request=new GetByIdRequest($request->get('id'));
        $result = $this->commentService->getEmployeeComments($request);
        return $this->response($result, self::FETCH);
    }
}

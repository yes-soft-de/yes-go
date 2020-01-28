<?php

namespace App\Controller;

use App\Request\CreateEmployeeRequest;
use App\Request\DeleteRequest;
use App\Request\GetByIdRequest;
use App\Request\UpdateEmployeeRequest;
use App\Service\EmployeeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\AutoMapping;
use AutoMapperPlus\Exception\UnregisteredMappingException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EmployeeController extends BaseController
{
    private $employeeService;
    private $autoMapping;
    /**
     * EmployeeController constructor.
     * @param EmployeeService $employeeService
     */
    public function __construct(EmployeeService $employeeService,AutoMapping $autoMapping)
    {
        $this->employeeService = $employeeService;
        $this->autoMapping=$autoMapping;
    }

    /**
     * @Route("/employees",name="createEmployee",methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function create(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $request=$this->autoMapping->map(\stdClass::class,CreateEmployeeRequest::class,(object)$data);
        $result = $this->employeeService->create($request);
        return $this->response($result, self::CREATE);
    }

    /**
     * @Route("/employee/{id}", name="updateEmployee",methods={"PUT"})
     * @param Request $request
     * @return JsonResponse|Response
     * @throws UnregisteredMappingException
     */
    public function update(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $id=$request->get('id');
        $request=$this->autoMapping->map(\stdClass::class,UpdateEmployeeRequest::class,(object)$data);
        $request->setId($id);
        $result = $this->employeeService->update($request);
        return $this->response($result, self::UPDATE);
    }

    /**
     * @Route("/employee/{id}", name="deleteEmployee",methods={"DELETE"})
     * @param Request $request
     * @return JsonResponse
     */
    public function delete(Request $request)
    {
        $request=new DeleteRequest($request->get('id'));
        $result = $this->employeeService->delete($request);
        return $this->response($result, self::DELETE);
    }

    /**
     * @Route("/employees", name="getAllEmployee",methods={"GET"})
     * @return JsonResponse
     */
    public function getAll()
    {
        $result = $this->employeeService->getAll();
        return $this->response($result, self::FETCH);
    }

    /**
     * @Route("/employee/{id}", name="getEmployeeById",methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getEmployeeById(Request $request)
    {
        $request=new GetByIdRequest($request->get('id'));
        $result = $this->employeeService->getEmployeeById($request);
        return $this->response($result, self::FETCH);
    }
    /**
     * @Route("/employeeprojects/{id}", name="getEmployeeProjects",methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getEmployeeProjects(Request $request)
    {
        $request=new GetByIdRequest($request->get('id'));
        $result = $this->employeeService->getEmployeeProjects($request);
        return $this->response($result, self::FETCH);
    }
}

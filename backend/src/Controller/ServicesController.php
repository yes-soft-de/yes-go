<?php

namespace App\Controller;

use App\AutoMapping;
use App\Request\GetByIdRequest;
use App\Service\ServicesService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ServicesController extends BaseController
{

    private $servicesService;
    private $autoMapping;
    /**
     * EmployeeController constructor.
     * @param ServicesService $employeeService
     */
    public function __construct(ServicesService  $servicesService,AutoMapping $autoMapping)
    {
        $this->servicesService = $servicesService;
        $this->autoMapping=$autoMapping;
    }
    /**
     * @Route("/serviceteam/{id}", name="getServiceTeam",methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getServiceTeam(Request $request)
    {
        $request=new GetByIdRequest($request->get('id'));
        $result = $this->servicesService->getServiceTeam($request);
        return $this->response($result, self::FETCH);
    }
}

<?php

namespace App\Controller;

use App\AutoMapping;
use App\Request\GetByIdRequest;
use App\Service\CustomerService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CustomerController extends BaseController
{
    private $autoMapping;
    private $customerService;

    /**
     * CustomerController constructor.
     * @param $autoMapping
     * @param $customerService
     */
    public function __construct(AutoMapping $autoMapping,CustomerService $customerService)
    {
        $this->autoMapping = $autoMapping;
        $this->customerService = $customerService;
    }

    /**
     * @Route("/customers", name="getAllCustomers",methods={"GET"})
     * @return JsonResponse
     */
    public function getAll()
    {
        $result = $this->customerService->getAll();
        return $this->response($result, self::FETCH);
    }
    /**
     * @Route("/customer/{id}", name="getCustomerById",methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getCustomerById(Request $request)
    {
        $request=new GetByIdRequest($request->get('id'));
        $result = $this->customerService->getCustomerById($request);
        return $this->response($result, self::FETCH);
    }

}

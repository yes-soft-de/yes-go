<?php

namespace App\Controller;

use App\Request\CreateEmployeeRequest;
use App\Request\GetByIdRequest;
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
     * ArtistController constructor.
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

//    /**
//     *  @IsGranted("ROLE_ADMIN", message="access denied")
//     * @Route("/artist/{id}", name="updateArtist",methods={"PUT"})
//     * @param Request $request
//     * @param ArtistValidateInterface $artistValidate
//     * @return JsonResponse|Response
//     * @throws UnregisteredMappingException
//     */
//    public function update(Request $request, ArtistValidateInterface $artistValidate)
//    {
//        $validateResult = $artistValidate->artistValidator($request, 'update');
//        if (!empty($validateResult)) {
//            $resultResponse = new Response($validateResult, Response::HTTP_OK, ['content-type' => 'application/json']);
//            $resultResponse->headers->set('Access-Control-Allow-Origin', '*');
//            return $resultResponse;
//        }
//        $data = json_decode($request->getContent(), true);
//        $id=$request->get('id');
//        $request=$this->autoMapping->map(\stdClass::class,UpdateArtistRequest::class,(object)$data);
//        $request->setId($id);
//        $result = $this->artistService->update($request);
//        return $this->response($result, self::UPDATE);
//    }
//
//    /**
//     *  @IsGranted("ROLE_ADMIN", message="access denied")
//     * @Route("/artist/{id}", name="deleteArtist",methods={"DELETE"})
//     * @param Request $request
//     * @return JsonResponse
//     */
//    public function delete(Request $request)
//    {
//        $request=new DeleteRequest($request->get('id'));
//        $result = $this->artistService->delete($request);
//        return $this->response($result, self::DELETE);
//    }
//
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

//    /**
//     * @Route("/search", name="search")
//     * @param Request $request
//     * @return Response
//     * @throws \Exception
//     */
//    public function search(Request $request)
//    {
//        $result = $this->artistService->search($request);
//        return $this->response($result, self::FETCH);
//    }
//
//    /**
//     * @Route("/artistsdetails", name="getAllArtistData",methods={"GET"})
//     *
//     * @return
//     */
//    public function getAllDetails()
//    {
//        $result = $this->artistService->getAllDetails();
//        return $this->response($result, self::FETCH);
//    }
}

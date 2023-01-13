<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route("/")]
class DefaultController extends AbstractController
{
    #[Route('/')]
    public function index(): Response
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    #[Route('/api/hello')]
    public function indexApi(): Response
    {
        return $this->json("Hello API service User");
    }

    #[Route('api/inscription', name: 'app_user_api_inscription', methods: "POST")]
    public function inscription(Request $request){

        return $this->json($request->getContent());

    }


}

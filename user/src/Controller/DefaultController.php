<?php

namespace App\Controller;

use App\Entity\FutureUser;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route("/")]
class DefaultController extends AbstractController
{

    /**
     * @param EntityManagerInterface $manager
     */
    public function __construct(private readonly EntityManagerInterface $manager) {}

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
    public function inscription(Request $request): Response{
        $data = json_decode($request->getContent(), true);
        $futureUser = new FutureUser();
        $futureUser->setNom($data["lastName"])
            ->setPrenom($data["lastName"])
            ->setTel($data["phone"])
            ->setNationalite($data["country"])
            ->setEmail($data["email"])
            ->setInscriptionValidee(false);

        $manager = $this->manager;
        $manager->persist($futureUser);
        $manager->flush();

        return $this->json($futureUser);

    }

    #[Route('api/inscription/valide-user/{id}', name: 'app_user_api_inscription_valide_user', methods: "POST")]
    public function valideUser(Request $request, string $id): Response{
        return $this->json($id);
    }

    #[Route('api/future-users', name: 'app_user_api_future_users', methods: "GET")]
    public function getFutureUsers(Request $request): Response {
        $futureUsers = $this->manager->getRepository(FutureUser::class)->findAll();
        return $this->json($futureUsers);
    }


    #[Route('api/users', name: 'app_user_api_users', methods: "GET")]
    public function getUsers(Request $request): Response {
        $users = $this->manager->getRepository(User::class)->findAll();
        return $this->json($users);
    }


}

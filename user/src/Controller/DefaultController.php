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
            ->setPrenom($data["firstName"])
            ->setTel($data["phone"])
            ->setNationalite($data["country"])
            ->setEmail($data["email"])
            ->setInscriptionValidee(false);

        $manager = $this->manager;
        $manager->persist($futureUser);
        $manager->flush();

        return $this->json($futureUser);

    }

    #[Route('api/inscription/valide-user/', name: 'app_user_api_inscription_valide_user', methods: "POST")]
    public function valideUser(Request $request): Response{
        $data = json_decode($request->getContent(), true);
        $id = $data["id"];
        $id = intval($id);
        $futureUser = $this->manager->getRepository(FutureUser::class)->find($id);
        $thisUser = $this->getUser();
        $thisUserRole = $thisUser->getRoles();

        #1. Check if admin
        if (in_array("ROLE_ADMIN", $thisUserRole)){
            #2. Create new user
            $newUser = new User();
            $newUser->setPassword("defaultPassword123##");
            $newUser->setRoles(["ROLE_USER"]);
            $newUser->setEmail($futureUser->getEmail());

            #3. Link to FutureUser and set validated
            $newUser->setFutureUser($futureUser);
            $futureUser->setInscriptionValidee(true);

            #4. Persist and flush
            $this->manager->persist($newUser);
            $this->manager->persist($futureUser);
            $this->manager->flush();

            return $this->json($futureUser);

        }
        return $this->json("Vous n'avez pas les droits pour valider une inscription", Response::HTTP_FORBIDDEN);


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

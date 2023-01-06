<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setEmail('user@myapp.com');

        $password = $this->hasher->hashPassword($user, 'user');
        $user->setPassword($password);
        $user->setRoles(["ROLE_USER"]);

        $manager->persist($user);

        $admin = new User();
        $admin->setEmail("admin@myapp.com");
        $passwordAdmin = $this->hasher->hashPassword($user, 'admin');
        $admin->setPassword($passwordAdmin);
        $admin->setRoles(["ROLE_ADMIN"]);

        $manager->persist($admin);

        $manager->flush();
    }
}

# Installation

cd proxy
npm install
cd ..
docker-compose up --build

docker-compose exec user bash
composer install
php bin/console doctrine:schema:update --force
php bin/console doctrine:fixtures:load

> CTRL + D

# Rendu
## Lien Project GitHub
https://github.com/users/tom-guastapaglia/projects/2/views/1
## Lien GitHub
https://github.com/tom-guastapaglia/fullstack_projet_final/
## Rendus
- Vidéo "Guastapaglia | Ferrali" => présentation du projet

# Installation
```
cd proxy
npm install
cd ..
docker-compose up --build

docker-compose exec user bash
composer install
php bin/console doctrine:schema:update --force
php bin/console doctrine:fixtures:load
```
> CTRL + D


## Next
Dans my-lib-ui
```
npm i yalc -g
npm install
npm run yalc:build
```
Dans vitrine
```
yalc add my-lib-ui
npm install
npm run dev
```

# Projet films 3WA

## Consignes
Ce projet utilise l'api *tmdb* (TheMovieDB). Cette api permet de récupérer des informations sur les films, séries, acteurs, etc.

[Documentation](https://developer.themoviedb.org/reference/intro/getting-started)
[Site TheMovieDB](https://www.themoviedb.org/)

Pour utiliser cette api il vous faudra vous créer un compte sur le site TheMovieDB puis récupérer un token d'accès qui sera nécessaire de vos requêtes.

#### Objectif

Créer une page qui affiche une liste de films correspondant à une recherche. L'utilisateur dispose d'un champ de recherche dans lequel il peut taper le nom d'un film qu'il souhaite rechercher. Lorsqu'il a tapé sa recherche et l'a validée, une liste de films s'affiche.

#### Instructions

##### Recherche de films

* Créer un formulaire avec un champ de recherche et un bouton
* Lorsque ce formulaire est soumis, récupérer la liste des films correspondant à la recherche
* Afficher la liste des films (image, titre, description)

##### Gérer une pagination

Si vous effectuez la recherche "Batman", vous ne récupérez que les 20 premiers résultats. Pour récupérer les résultats suivants il faudra faire une requête vers la page 2, 3, 4 etc.

* Afficher la liste des pages de la recherche
* Lorsque l'on clique sur une page on récupère la liste des films correspondants à cette page
* Afficher la liste des films (image, titre, description)
# Correction

## Refactoring

Nous allons voir les étapes pour refactoriser le code qui, bien qu'il fonctionne n'est pas optimisé.

## Les étapes

1. Tout d'abord, nous savons que nous allons utiliser `context` de react et donc, créer un dossier `context` dans `src` et y créer un fichier `CurrentUserContext.js` qui va contenir notre context.

2. Nous allons ensuite utiliser notre `CurrentUserContext` dans notre `App.js`, ce qui implique de l'importer et de nettoyer notre `App.js`. Et oui, les useState n'est plus necessaire dans `App.js` car nous avons utilisé notre `CurrentUserContext`.

3. Cependant, vu que nous avons besoins d'utiliser cet élément dans mes composants enfants, je vais devoir utiliser `useContext` dans mes composants enfants qui utilisent notre `CurrentUserContext`.
   1. `EditProfileForm.jsx`
   2. `UserAvatar.jsx` 
   3. `Footer.jsx`
   4. `Header.jsx` car j'enlève les props qui ne sert plus à rien.
   5. `Profile.jsx` idem qu'au dessus.

4. Et voilà !

![](https://media4.giphy.com/media/EKzR3vRKnxrUfAkl27/giphy.gif)
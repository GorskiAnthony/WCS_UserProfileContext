# Correction

## Refactoring

Nous allons voir les étapes pour refactoriser le code qui, bien qu'il fonctionne n'est pas optimisé.

## Les étapes

1. Tout d'abord, nous savons que nous allons utiliser `context` de react et donc, créer un dossier `context` dans `src` et y créer un fichier `CurrentUserContext.js` qui va contenir notre context.

2. Nous allons ensuite utiliser notre `CurrentUserContext` dans notre `App.js`, ce qui implique de l'importer et de nettoyer notre `App.js`. Et oui, les useState n'est plus necessaire dans `App.js` car nous avons utilisé notre `CurrentUserContext`.

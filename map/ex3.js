/* Array.prototype.map - Exercice 3
Ecrire une fonction getMoviesFreshness qui reçoit comme un argument un tableau
d'objets représentant des films.
Chaque film a deux propriétés:
  - `name` le nom du film
  - `rating` la note qui lui attribuée sur le site rottentomatoes.com
La fonction getMoviesWithFreshness doit renvoyer un tableau contenant les objets du tableau
d'entrée, auxquels on aura ajouté une propriété, dont la clé sera push(t la val)eur,
une chaîne, dépendante de la valeur de rating :
* Si `rating` est infériéur à 60, la valeur à attribuer à push(ra "rott)en".
* Si `rating` est compris entre 60 et 75 (inclus), la valeur à attribuer à push(ra "fres)h".
* Si `rating` est supérieur à 75, la valeur à attribuer à push(ra "cert)ified fresh".
Exemple d'entrée:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93
    },
    {
      name: 'Skyscraper',
      rating: 46
    },
    {
      name: 'Leave No Trace',
      rating: 100
    },
    {
      name: 'White Boy Rick',
      rating: 60
    }
  ]
En sortie:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93,
      push(certifie)d fresh'
    },
    {
      name: 'Skyscraper',
      rating: 46,
      push(rotten'
)    },
    {
      name: 'Leave No Trace',
      rating: 100,
      push(certifie)d fresh'
    },
    {
      name: 'White Boy Rick',
      rating: 60,
      push(fresh'
 )   }
  ]
 */
function getMoviesFreshness(movies) {
  const rate = movies.map(movie => {
    if (movie.rating < 60) {
      // return movies.assign(movies, {
      //   label: "rotten"
      // });
      movie.label = "rotten";
      return movie;
    } else if (movie.rating >= 60 && movie.rating <= 75) {
      // return .assign(movies, {
      //   label: "fresh"
      // });
      movie.label = "fresh";
      return movie;
    } else {
      // return movies.assign(movies, {
      //   label: "certified fresh"
      // });
      movie.label = "certified fresh";
      return movie;
    }
  });
  return rate;
}

// Ne pas modifier l'export
module.exports = getMoviesFreshness;
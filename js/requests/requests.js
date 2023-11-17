const inputText = document.querySelector('#input-t')
const searchResult = document.querySelector('.film-title-search-result')
const movieContainer = document.querySelector('.movie-container')

export function getFilmsRequest() {
    searchResult.innerHTML = null
    movieContainer.innerHTML = null
    searchResult.append(inputText.value)
    const searchItem = inputText.value

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGI2YWFiN2JhNDBjODA1ZmFiOTc4MmI4ZTQzMGNlMSIsInN1YiI6IjY1NTc0NmUxZDRmZTA0MDBjNDIzMDI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TGd0rHWgSN79V-w15V8jLD5T_a1WQ1HIDaOBp3N_-jk'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchItem}&include_adult=false&language=fr-FR&page=1`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            for (const movie of response.results) {
                console.log(movie.title);
                // creation des éléments en html
                let filmDiv = document.createElement('div')
                let filmImg = document.createElement('img')
                let filmTitle = document.createElement('span')
                let filmDesc = document.createElement('p')
                // ajout des classes en html
                filmDiv.classList.add = 'film-card'
                filmImg.classList.add = 'film-img'
                filmTitle.classList.add = 'film-title'
                filmDesc.classList.add = 'film-desc'

                // ajout des informations
                filmImg.src = movie.poster_path
                filmTitle = movie.title
                filmDesc = movie.overview

                filmDiv.append(filmImg, filmTitle, filmDesc)
                movieContainer.append(filmDiv)

            }
        })
        .catch(err => console.error(err));
}
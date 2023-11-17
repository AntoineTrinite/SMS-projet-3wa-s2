const inputText = document.querySelector('#input-t')
const searchResult = document.querySelector('.film-title-search-result')
const movieContainer = document.querySelector('.movie-container')
const pagination = document.querySelector('.pagination')
const aLink = document.querySelectorAll('p-link')

export function getFilmsRequest(e) {
    e.preventDefault()
    let page_num = 1
    searchResult.innerHTML = null
    movieContainer.innerHTML = null
    pagination.innerHTML = null
    searchResult.append(inputText.value)
    const searchItem = inputText.value


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGI2YWFiN2JhNDBjODA1ZmFiOTc4MmI4ZTQzMGNlMSIsInN1YiI6IjY1NTc0NmUxZDRmZTA0MDBjNDIzMDI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TGd0rHWgSN79V-w15V8jLD5T_a1WQ1HIDaOBp3N_-jk'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchItem}&include_adult=false&language=fr-FR&page=${page_num}`, options)
        .then(response => response.json())
        .then(response => {
            for (let page = 1; page <= response.total_pages + 1; page++) {
                let aLink = document.createElement('a');
                aLink.classList.add('p-link');
                aLink.href = 'http://127.0.0.1:5500/index.html/page' + page;
                aLink.textContent = page;
                pagination.appendChild(aLink);
            }

            for (const movie of response.results) {
                // creation des éléments en html
                let filmDiv = document.createElement('div')
                let filmImg = document.createElement('img')
                let filmTitle = document.createElement('span')
                let filmDesc = document.createElement('p')
                // ajout des classes en html
                filmDiv.classList.add('film-card')
                filmImg.classList.add('film-img')
                filmTitle.classList.add('film-title')
                filmDesc.classList.add('film-desc')

                // ajout des informations
                filmImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                filmTitle.textContent = movie.title
                filmDesc.textContent = movie.overview.length > 150 ? movie.overview.substring(0, 150) + '...' : movie.overview;

                filmDiv.append(filmImg, filmTitle, filmDesc)
                movieContainer.append(filmDiv)
            }
        })
        .catch(err => console.error(err));

}


// TMDB

const API_KEY = 'api_key=2e1ae992a1c327d7df0f4b34503760d4';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const main = document.getElementById('main');
const form = document.getElementById('form');

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results);
    });
}
function showMovies(data) {
    main.innerHTML = '';
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = `
            <img src="${IMAGE_URL+poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieE1);
    })
}

function getColor(vote) {
    if (vote>=8){
        return 'green'
    }
    else if (vote>=5){
        return 'orange'
    }
    else{
        return 'red'
    }
}

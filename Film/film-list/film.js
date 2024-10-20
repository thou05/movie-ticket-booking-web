async function loadMovies() {
    try {
        const response = await fetch('../phim-dang-chieu.json');
        const movies = await response.json();
        const movieList = document.querySelector('.movie-list');
        movieList.innerHTML = '';

        movies.forEach(movie => {
            const movieCard = `
                <div class="col mb-4">
                    <div class="card card-movie">
                        <div class="position-relative">
                        <div class="movie-age" data-age="${movie.Age}">${movie.Age}</div>
                        </div>
                        <a href="../film-detail/test.html?id=${movie.id}" class="card card-movie">
                        <img src="${movie.Poster || 'default-poster.jpg'}" class="card-img-top movie-list-item-img" alt="${movie.Title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <span class="movie_genre">${movie.Genre}</span>
                            <div class="row row-cols-2">
                                <div class="col class="movie_star">
                                    <span class="movie_info"><i class="fas fa-star"></i> ${movie.Rated}</span>
                                </div>
                                <div class="col">
                                    <a href="#" class="btn btn-danger float-end">Mua vé</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            movieList.insertAdjacentHTML('beforeend', movieCard);
        });
    } catch (error) {
        console.error('Error loading movies:', error);
    }
}

async function loadUpcomingMovies() {
    try {
        const response = await fetch('../phim-sap-chieu.json');
        const movies = await response.json();
        const movieList = document.querySelector('#upcoming-content');
        movieList.innerHTML = '';

        movies.forEach(movie => {
            const movieCard = `
                <div class="col mb-4">
                    <div class="card card-movie">
                        <a href="../film-detail/test.html?id=${movie.id}" class="card card-movie">
                            <img src="${movie.Poster || 'default-poster.jpg'}" class="card-img-top movie-list-item-img" alt="${movie.Title}">
                            <div class="card-body">
                                <h5 class="card-title">${movie.Title}</h5>
                                <span class="movie_genre">${movie.Genre}</span>
                            </div>
                        </a>
                    </div>
                </div>
            `;
            movieList.insertAdjacentHTML('beforeend', movieCard);
        });
    } catch (error) {
        console.error('Error loading upcoming movies:', error);
    }
}


document.addEventListener('DOMContentLoaded', loadMovies);

function showNowShowing() {
    document.getElementById('now-showing-content').classList.remove('d-none');
    document.getElementById('upcoming-content').classList.add('d-none');
}

function showUpcomingMovies() {
    document.getElementById('now-showing-content').classList.add('d-none');
    document.getElementById('upcoming-content').classList.remove('d-none');
}

document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    loadUpcomingMovies();
    showNowShowing();

    document.getElementById('now-showing').addEventListener('click', (event) => {
        event.preventDefault();
        showNowShowing();
    });

    document.getElementById('upcoming-movies').addEventListener('click', (event) => {
        event.preventDefault();
        showUpcomingMovies();
    });
});

async function loadMovies() {
    try {
        const response = await fetch('../json/phim-dang-chieu.json');
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
                        <a href="../html/film-detail.html?id=${movie.id}" class="card card-movie">
                        <img src="${movie.Poster || 'default-poster.jpg'}" class="card-img-top movie-list-item-img" alt="${movie.Title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <span class="movie_genre">${movie.Genre}</span>
                            <div class="row row-cols-2 align-items-center">
                                <div class="col class="movie_star">
                                    <span class="movie_info"><i class="fas fa-star text-warning"></i> ${movie.Rated}</span>
                                </div>
                                <div class="col">
                                    <a href="${movie.Booking}" class="btn btn-danger float-end btn-buy">Mua vé</a>
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
        const response = await fetch('../json/phim-sap-chieu.json');
        const movies = await response.json();
        const movieList = document.querySelector('#upcoming-content');
        movieList.innerHTML = '';

        movies.forEach(movie => {
            const movieCard = `
                <div class="col mb-4">
                    <div class="card card-movie">
                        <a href="../html/film-detail.html?id=${movie.id}" class="card card-movie">
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

    const nowShowingTab = document.getElementById('now-showing');
    const upcomingMoviesTab = document.getElementById('upcoming-movies');

    nowShowingTab.addEventListener('click', (event) => {
        event.preventDefault();
        showNowShowing();
        updateActiveTab(nowShowingTab, upcomingMoviesTab);
    });

    upcomingMoviesTab.addEventListener('click', (event) => {
        event.preventDefault();
        showUpcomingMovies();
        updateActiveTab(upcomingMoviesTab, nowShowingTab);
    });
});

// Hàm để cập nhật class 'active' cho các tab
function updateActiveTab(activeTab, inactiveTab) {
    activeTab.classList.add('active'); // Thêm class 'active' cho tab được nhấn
    inactiveTab.classList.remove('active'); // Xóa class 'active' khỏi tab không được nhấn
}


        // Chèn CSS vào iframe khi nó tải
        // const iframe = document.getElementById('myIframe');
        // iframe.onload = function() {
        //     const link = document.createElement('link');
        //     link.rel = 'stylesheet';
        //     link.href = 'nav.css'; // Đường dẫn tới file CSS
        //     iframe.contentWindow.document.head.appendChild(link);
        //     const script = document.createElement('script');
        //     script.src = 'script.js';  // Đường dẫn tới file JS
        //     iframe.contentWindow.document.body.appendChild(script);
        // };

// ---------------------------------


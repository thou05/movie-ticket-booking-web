// Get the movie ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id'); // Assuming the ID is passed as a query parameter

async function loadMovieDetails(movieId) {
    try {
        // Fetch both currently showing and upcoming movies
        const [nowShowingResponse, upcomingResponse] = await Promise.all([
            fetch('../json/phim-dang-chieu.json'),
            fetch('../json/phim-sap-chieu.json')
        ]);

        const nowShowingMovies = await nowShowingResponse.json();
        const upcomingMovies = await upcomingResponse.json();

        // find the movie in currently showing
        let movie = nowShowingMovies.find(m => m.id === movieId);

        // If not found, find in upcoming movies
        if (!movie) {
            movie = upcomingMovies.find(m => m.id === movieId);
        }

        if (movie) {
            
            document.getElementById('movieAge').textContent = movie.Age;
            document.getElementById('movieTitle').textContent = movie.Title;


            const movieMetaElement = document.getElementById('movieMeta');
            const metaItems = [];

            if (movie.Released) {
                metaItems.push(`<span class="movie-meta-item">${movie.Released}</span>`);
            }
            if (movie.Runtime) {
                metaItems.push(`<span class="movie-meta-item">${movie.Runtime}</span>`);
            }
            if (movie.Country) {
                metaItems.push(`<span class="movie-meta-item">${movie.Country}</span>`);
            }
            if (movie.Genre) {
                metaItems.push(`<span class="movie-meta-item">${movie.Genre}</span>`);
            }

            const metaHTML = `<div class="meta">${metaItems.join(' ')}</div>`;
            

            // Kết nối các phần tử bằng dấu phân cách và gán vào phần tử meta
            movieMetaElement.innerHTML = metaItems.join(' <span class="movie-meta-separator">|</span> ');

            //DESCRIPTION
            document.getElementById('movieDecs').textContent = movie.Description;
            const plotShort = movie.Plot.slice(0, 130);  // Giới hạn 130 ký tự
            const plotFull = movie.Plot;

            document.getElementById('moviePlotShort').textContent = plotShort + "...";
            document.getElementById('moviePlotFull').textContent = plotFull;

            // Xem thêm / Thu gọn
            const toggleText = document.getElementById('toggleText');
            toggleText.addEventListener('click', function() {
                const isExpanded = toggleText.textContent === "Thu gọn";

                if (isExpanded) {
                    // Thu gọn nội dung
                    document.getElementById('moviePlotShort').style.display = 'inline';
                    document.getElementById('moviePlotFull').style.display = 'none';
                    toggleText.textContent = "Xem thêm";
                } else {
                    // Hiển thị toàn bộ nội dung
                    document.getElementById('moviePlotShort').style.display = 'none';
                    document.getElementById('moviePlotFull').style.display = 'inline';
                    toggleText.textContent = "Thu gọn";
                }
            });

            document.getElementById('director').textContent = movie.Director;
            document.getElementById('actors').textContent = movie.Actors;
            document.getElementById('language').textContent = movie.Language;

            document.getElementById('movieAge').textContent = movie.Age; 
            document.getElementById('movieAge').setAttribute('data-age', movie.Age); 

            document.getElementById('movieVideo2').src = movie.Video;
            const bookingButton = document.getElementById('Booking');
            if (bookingButton && movie.Booking) {
                bookingButton.href = movie.Booking;
            }
            else {
                bookingButton.style.display = 'none'
            }
        } else {
            console.error('Movie not found!');
        }

    } catch (error) {
        console.error('Error fetching the JSON files:', error);
    }
}

// Load movie details on page load
loadMovieDetails(movieId);



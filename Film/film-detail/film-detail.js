// Get the movie ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id'); // Assuming the ID is passed as a query parameter

async function loadMovieDetails(movieId) {
    try {
        // Fetch both currently showing and upcoming movies
        const [nowShowingResponse, upcomingResponse] = await Promise.all([
            fetch('../phim-dang-chieu.json'),
            fetch('../phim-sap-chieu.json')
        ]);

        const nowShowingMovies = await nowShowingResponse.json();
        const upcomingMovies = await upcomingResponse.json();

        // Try to find the movie in currently showing
        let movie = nowShowingMovies.find(m => m.id === movieId);

        // If not found, try to find in upcoming movies
        if (!movie) {
            movie = upcomingMovies.find(m => m.id === movieId);
        }

        if (movie) {
            // Update HTML content with the movie data
            document.getElementById('movieAge').textContent = movie.Age;
            document.getElementById('movieTitle').textContent = movie.Title;
            // document.getElementById('movieMeta').textContent = `${movie.Released} | ${movie.Runtime} | ${movie.Genre} | ${movie.Country}`;
            // document.getElementById('movieMeta').innerHTML = `
            //     <span class="movie-meta-item">${movie.Released}</span> 
            //     <span class="movie-meta-separator"> | </span> 
            //     <span class="movie-meta-item">${movie.Runtime}</span> 
            //     <span class="movie-meta-separator"> | </span> 
            //     <span class="movie-meta-item">${movie.Genre}</span> 
            //     <span class="movie-meta-separator"> | </span> 
            //     <span class="movie-meta-item">${movie.Country}</span>`;
        

            // Lấy phần tử meta
            const movieMetaElement = document.getElementById('movieMeta');

            // Tạo một mảng để chứa các phần tử meta
            const metaItems = [];

            // Kiểm tra và thêm từng phần tử vào mảng nếu nó có dữ liệu
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
            

            // Kết nối các phần tử bằng dấu phân cách và gán vào phần tử meta
            movieMetaElement.innerHTML = metaItems.join(' <span class="movie-meta-separator">|</span> ');

            //DESCRIPTION
            document.getElementById('movieDecs').textContent = movie.Description;
            // Thiết lập nội dung ngắn và đầy đủ
            const plotShort = movie.Plot.slice(0, 150);  // Giới hạn 100 ký tự
            const plotFull = movie.Plot;

            document.getElementById('moviePlotShort').textContent = plotShort + "...";
            document.getElementById('moviePlotFull').textContent = plotFull;

            // Gắn sự kiện click vào nút toggle (Xem thêm / Thu gọn)
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

            document.getElementById('movieAge').textContent = movie.Age; // Set text content
            document.getElementById('movieAge').setAttribute('data-age', movie.Age); // Set data attribute for styling
            // Update video source
            document.getElementById('movieVideo2').src = movie.Video;
        } else {
            console.error('Movie not found!');
        }
    } catch (error) {
        console.error('Error fetching the JSON files:', error);
    }
}

// Load movie details on page load
loadMovieDetails(movieId);


document.getElementById("infoBtn").addEventListener("click", function(e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    const moreInfo = document.getElementById("multi-info");
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
        this.innerText = "Ẩn thông tin";
    } else {
        moreInfo.style.display = "none";
        this.innerText = "Thêm thông tin";
    }
});
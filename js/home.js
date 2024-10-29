let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

let json_url = "../json/movie.json";

fetch(json_url)
    .then(response => response.json())
    .then((data) => {
        data.forEach(element => {
            let {id, Title, Rated, Released, Poster, Genre, url } = element;
            let card = document.createElement('a');
            card.classList.add('card1');
            card.href = `../html/film-detail.html?id=${id}`;    
            card.innerHTML = `
                <img src="${Poster}" alt="">
                <div class="cont">
                    <h3 class="titl">${Title}</h3>
                    <p>${Genre}, <span>Rated</span><i class="fa-solid fa-star"></i> ${Rated}</p>
                </div>
            `;
            search.appendChild(card);
        });
    

        // search filter  

        search_input.addEventListener('keyup', () => {
            let filter = search_input.value.toUpperCase();
            let a = search.getElementsByTagName('a');
            let isAnyVisible = false;  
        
            for (let index = 0; index < a.length; index++) {
                let b = a[index].getElementsByClassName('titl')[0];
                let TextValue = b.textContent || b.innerText;
                
                if (TextValue.toUpperCase().indexOf(filter) > -1) {
                    a[index].style.display = "flex";  
                    isAnyVisible = true;  
                } else {
                    a[index].style.display = "none";  
                }
            }
        
            if (isAnyVisible) {
                search.style.display = "block";  
            } else {
                search.style.display = "none";  
            }
        
            if (search_input.value == "") {
                search.style.display = "none";
            }
        });
        document.addEventListener('click', function (event) {
    
            if (!search_input.contains(event.target) && !search.contains(event.target)) {
                search_input.value = ''; 
                search.style.display = 'none'; 
            }
        });
    
        search_input.addEventListener('focus', function () {
            if (search_input.value != "") {
                search.style.display = "block"; 
            }
        });

    });

    let slider_container = "../json/phim-dang-chieu.json"; // Đường dẫn đến file JSON

    fetch(slider_container)
        .then(response => response.json())
        .then(data => {
            const carousel = document.getElementById('movieCarousel');
                data.forEach(element => {
                    let card = document.createElement('div');
                    card.classList.add('cards');
                    card.innerHTML = `
                        <div class="card-img">
                            <a href="../html/film-detail.html?id=${element.id}"><img src="${element.Poster}" alt="${element.Title}"></a>
                            <div class="img-title">
                                <h4>${element.Rated}<i class="fa-solid fa-star"></i></h4>
                                <p>Rated</p>
                            </div>
                        </div>
                        <div class="card-title">
                            <a href="../html/film-detail.html?id=${element.id}"><h3>${element.Title}</h3></a>
                            <p>${element.Genre}</p>
                        </div>
                    `;
                    carousel.appendChild(card);
                });
                $('#movieCarousel').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        500: {
                            items: 2
                        },
                        700: {
                            items: 3
                        },
                        800: {
                            items: 3
                        },
                        1000: {
                            items: 4
                        },
                        1200: {
                            items: 5
                        },
                        1300: {
                            items:6
                        }
                    }
                });
        })


const swiperWrapper = document.querySelector('.swiper-wrapper');

fetch('../json/popular-movie.json') 
    .then(response => response.json())
    .then(data => {
        data.forEach(movie => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide'); 
            slide.style.backgroundImage = `url('${movie.Images}')`; 

            slide.innerHTML = `
                <div class="swiper-container">
                    <div class="type">
                        <p>${movie.Genre.split(',').join('</p><div class="line"></div><p>')}</p>
                    </div>
                    <div class="movie-title">
                        <h2>${movie.Title}</h2>
                        <p>${movie.Plot}</p>
                    </div>
                    <div class="movie-rating">
                        <div>
                            <p>Rated : ${movie.Rated}<i class="fa-solid fa-star"></i></p>
                        </div>
                        <div>
                            <p>${movie.Runtime}</p>
                        </div>
                        <div class="rect" data-age="${movie.Age}">
                            <p>${movie.Age}</p>
                        </div>
                    </div>
                    <div class="movie-btn">
                        <a href="${movie.Booking}" ><button class="btn-1">Đặt Vé</button></a>
                        <a href="../html/film-detail.html?id=${movie.id}"><button class="btn-2">Xem Chi Tiết</button></a>
                    </div>
                </div>
            `;

            swiperWrapper.appendChild(slide); 
        });

        const swiper = new Swiper('.mySwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    })

    
        $('#user_icon').click(function(event) {
            event.stopPropagation(); 
            $('.user .sub-menu').toggle();
        });
    
        $(document).click(function() {
            $('.user .sub-menu').hide();
        });
        

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


let eventOwl = $('.slider-event .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});

$('.slider-container .owl-next').click(function() {
    movieOwl.trigger('next.owl.carousel');
});
$('.slider-container .owl-prev').click(function() {
    movieOwl.trigger('prev.owl.carousel');
});

$('.slider-event .owl-next').click(function() {
    eventOwl.trigger('next.owl.carousel');
});
$('.slider-event .owl-prev').click(function() {
    eventOwl.trigger('prev.owl.carousel');
});





const nav = document.querySelector(".nav-items")
const open = document.getElementById("open")
const close = document.getElementById("close")

open.addEventListener("click", () => {
    nav.style.display="flex";
    nav.style.top="0%"
})
close.addEventListener("click", () => {
    nav.style.top="-110%"
    nav.style.display="none";
})



window.addEventListener("scroll", () => {
    let bar = document.getElementById('header');
    if (window.scrollY > 50) {
        bar.style.background = 'rgba(20, 20, 20, 0.7)';
        bar.style.backdropFilter = 'blur(10px)';
    }
    else {
        bar.style.backdropFilter = ''
        bar.style.background = '';
    }    
})

window.addEventListener('resize', function() {
    if (window.innerWidth > 1200) {
        document.querySelector('.nav-items').style.display = 'flex';
    } 
    else {
        document.querySelector('.nav-items').style.display = 'none';
    }
});

window.onload = function() {
    const currentPage = window.location.pathname.split('/').pop(); 
    const navLinks = document.querySelectorAll('.nav-items a');

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop(); 
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
};

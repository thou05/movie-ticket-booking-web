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
    const currentPage = window.location.pathname.split('/').pop().split('#')[0];
    const navLinks = document.querySelectorAll('.nav-items a');

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop().split('#')[0];
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
};


window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        search.style.background = 'rgba(20, 20, 20, 0.7)';
        search.style.backdropFilter = 'blur(10px)';
    }
    else {
        search.style.backdropFilter = ''
        search.style.background = '';
    }    
})

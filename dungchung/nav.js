let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

let json_url = "/json/movie.json";

fetch(json_url)
    .then(response => response.json())
    .then((data) => {
        data.forEach(element => {
            let { Title, Rated, Released, Poster, Genre, url } = element;
            let card = document.createElement('a');
            card.classList.add('card1');
            card.href = url;    
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

            for (let index = 0; index < a.length; index++) {
                let b = a[index].getElementsByClassName('titl')[0];
                // console.log(a.textContent)
                let TextValue = b.textContent || b.innerText;
                if (TextValue.toUpperCase().indexOf(filter) > -1) {
                    a[index].style.display = "flex";
                    search.style.visibility = "visible";
                    search.style.opacity = 1;
                } else {
                    a[index].style.display = "none";
                }
                if (search_input.value == "") {
                    search.style.visibility = "hidden";
                    search.style.opacity = 0;
                }
            }
        })
    

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
    
    
    
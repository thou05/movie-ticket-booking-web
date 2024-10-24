let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

let json_url = "../json/movie.json";

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

// Modal 1
var modal1 = document.getElementById("modal1");
var btn1 = document.getElementById("openModal1");
var span1 = document.getElementById("closeModal1"); // Sửa lại để sử dụng ID thay vì class

btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

// Modal 2
var modal2 = document.getElementById("modal2");
var btn2 = document.getElementById("openModal2");
var span2 = document.getElementById("closeModal2"); // Sử dụng ID cho modal 2

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}
var modal3 = document.getElementById("modal3");
var btn3 = document.getElementById("openModal3");
var span3 = document.getElementById("closeModal3");
btn3.onclick = function() {
    modal3.style.display = "block";
  }
  
  span3.onclick = function() {
    modal3.style.display = "none";
  }
// Đóng modal khi click ra ngoài
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
const nav = document.querySelector(".nav-items")
const open = document.getElementById("open")
const close = document.getElementById("close")

open.addEventListener("click", () => {
    nav.style.display = "flex";
    nav.style.top = "0%"
})
close.addEventListener("click", () => {
    nav.style.top = "-110%"
    nav.style.display = "none";
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

window.addEventListener('resize', function () {
    if (window.innerWidth > 1200) {
        document.querySelector('.nav-items').style.display = 'flex';
    }
    else {
        document.querySelector('.nav-items').style.display = 'none';
    }
});

window.onload = function() {
    const currentPage = window.location.pathname;
    
    const navLinks = document.querySelectorAll('.nav-items a');

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
};
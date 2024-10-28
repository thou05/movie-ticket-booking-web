

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

btn2.onclick = function(event) {
  event.preventDefault();
  modal2.style.display = "block";
}

span2.onclick = function(){
  modal2.style.display = "none";
}
var modal3 = document.getElementById("modal3");
var btn3 = document.getElementById("openModal3");
var span3 = document.getElementById("closeModal3");
btn3.onclick = function(event) {
  event.preventDefault();
    modal3.style.display = "block";
  }
  
  span3.onclick = function(){
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

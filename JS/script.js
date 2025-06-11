// toggle class active

const navbarnav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick = () => {
    navbarnav.classList.toggle('active');
};

// click luar sidebar

const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});

var name = prompt("Masukan nama kamu");
document.getElementById("nama").innerText = name;

// Slideshow logic
var slideIndex = 1;
showDivs(slideIndex);

document.getElementById('prevBtn').onclick = function() {
  plusDivs(-1);
};
document.getElementById('nextBtn').onclick = function() {
  plusDivs(1);
};

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}

setInterval(function() {
  plusDivs(1);
}, 5000);

// Form validation function
function validateForm() {
  var name = document.forms["message-form"]["full-name"].value;
  var date = document.forms["message-form"]["birth-date"].value;
  var gender = document.forms["message-form"]["gender"].value;
  var messages = document.forms["message-form"]["messages"].value;

  if (name == "" || date == "" || gender == "" || messages == "") {
    alert("tidak boleh kosong");
    return false;
  }

  document.getElementById("sender-full-name").innerText = name;
  document.getElementById("sender-birth-date").innerText = date;
  document.getElementById("sender-gender").innerText = gender;
  document.getElementById("sender-messages").innerText = messages;
  return false;
} 
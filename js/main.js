


if (window.navigator.userAgent.indexOf("Edge") !== -1 || navigator.appVersion.indexOf("MSIE 10") !== -1 || window.navigator.userAgent.indexOf("Trident/7.0") > 0) { 
    document.documentElement.className += ' crappy-browser';
} else {
    document.documentElement.className += ' modern-browser';
}


//modal
var modal = document.querySelector(".modalPhoto");
var trigger = document.querySelector(".modal-trigger");
var closeButton = document.querySelector(".close-btn");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



// selectbox
$(document).ready(function(){
$('select').formSelect();
});
    
//tab
$(document).ready(function(){
    $('.tabs').tabs();
});
var agreeBtn = document.getElementsByClassName("agree-btn");
function handleClick(event) {
console.log(event.target);
// console.log(this);
// 콘솔창을 보면 둘다 동일한 값이 나온다
console.log(event.target.classList);
if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
} else {
    for (var i = 0; i < agreeBtn.length; i++) {
    agreeBtn[i].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
}
}
function init() {
for (var i = 0; i < agreeBtn.length; i++) {
    agreeBtn[i].addEventListener("click", handleClick);
}
}
init();


//swiper
var swiper = new Swiper(".mySwiper", {
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  // }
});



const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".Submit");
const progressText = document.querySelectorAll(".step p");
const bullet = document.querySelectorAll(".step .bullet");

let current = 0;


firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current].classList.add("active");
    progressText[current].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
    bullet[current].classList.add("active");
    progressText[current].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-75%";
    bullet[current].classList.add("active");
    progressText[current].classList.add("active");
    current += 1;
});


prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";
    current --;
    bullet[current].classList.remove("active");
    progressText[current].classList.remove("active");
});
prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    current --;
    bullet[current].classList.remove("active");
    progressText[current].classList.remove("active");
});
prevBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
    current --;
    bullet[current].classList.remove("active");
    progressText[current].classList.remove("active");

});

submitBtn.addEventListener("click", function(){
    bullet[current].classList.add("active");
    progressText[current].classList.add("active");
    current += 1;
    setTimeout(function(){
        alert("You're successfully submitted. Thank You!");
        location.reload();
    }, 800);
});
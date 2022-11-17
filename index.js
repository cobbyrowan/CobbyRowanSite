let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slide1 = document.getElementsByClassName("mySlides1");
  console.log(slide1)
  let dots = document.getElementsByClassName("dot");
  if (n > slide1.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slide1.length}
  for (i = 0; i < slide1.length; i++) {
    slide1[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide1[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slide2 = document.getElementsByClassName("mySlides2");
  console.log(slide2)
  let dots = document.getElementsByClassName("dot2");
  if (n > slide2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slide2.length}
  for (i = 0; i < slide2.length; i++) {
    slide2[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide2[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active";
}

let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slide3 = document.getElementsByClassName("mySlides3");
  console.log(slide3)
  let dots = document.getElementsByClassName("dot3");
  if (n > slide3.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slide3.length}
  for (i = 0; i < slide3.length; i++) {
    slide3[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide3[slideIndex3-1].style.display = "block";  
  dots[slideIndex3-1].className += " active";
}

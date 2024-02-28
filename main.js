const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
let slideIndex = 0; 
const slide = document.querySelector(".slide");
const slides = [
  {
    image: "https://images.pexels.com/photos/3672355/pexels-photo-3672355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },

  {
    image: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  
  {
    image: "https://images.pexels.com/photos/250695/pexels-photo-250695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

getSlides();

function getSlides(){
  slide.src = slides[slideIndex].image;
}

nextButton.addEventListener("click", function(){
  if(slideIndex >= (slides.length - 1)){
    slideIndex = slides.length - 1;
  }
  else{
    slideIndex++;
  }
  console.log(`Next button index: ${slideIndex}`);
  getSlides();
  
});

prevButton.addEventListener("click", function(){
    if(slideIndex <= 0){
    slideIndex = 0;
  }
  else{
    slideIndex--;
  }
  
  getSlides();
   console.log(`Prev button index: ${slideIndex}`);
});

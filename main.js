const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const githubButton = document.querySelector("#github-button");
const showcaseButton = document.querySelector("#showcase-button");
const projectTitle = document.querySelector("#project-title");
const projectDescription = document.querySelector("#project-description");
const projectTechnologies = document.querySelector("#project-technologies");
const projectImage = document.querySelector("#project-image")

let slideIndex = 0; 
const slide = document.querySelector(".slide");
const slides = [
  {
    image: "./assets/landing-page.png",
    link: "https://t4f-landing-page.netlify.app",
    github: "https://github.com/Techin4Fun/sylo-landing-page",
    title: "Sylo",
    description: "Sylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
    technologies: "HTML / Tailwind CSS"
  },

  {
    image: "./assets/expense-tracker.png",
    link: "https://t4f-expense-tracker.netlify.app",
    github: "https://github.com/Techin4Fun/expense-tracker",
    title: "Expense Tracker",
    description: "A utility tool to help you stay on top of all your expenses. It calculates your total balance, income and expense for you.",
    technologies: "HTML / CSS / Tailwind CSS / React / Local Storage"
  },
  
  {
    image: "./assets/pokedex.png",
    link: "https://t4f-pokedex.netlify.app",
    github: "https://github.com/Techin4Fun/pokedex-project",
    title: "Pokedex",
    description: "This Pokedex features all 151 Pokemon (in color) from the game Pokemon Red on the GameBoy!",
    technologies: "HTML / Tailwind CSS / React"
  }
];

getSlides();

function getSlides(){
  slide.src = slides[slideIndex].image;

  showcaseButton.href = slides[slideIndex].link;
  showcaseButton.target = "_blank";

  githubButton.href = slides[slideIndex].github;
  githubButton.target = "_blank";

  projectTitle.textContent = slides[slideIndex].title;
  projectDescription.textContent = slides[slideIndex].description;
  projectTechnologies.textContent = slides[slideIndex].technologies;
  projectImage.src = slide.src;
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

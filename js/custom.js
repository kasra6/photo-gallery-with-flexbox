function toggleOpen(){
  this.classList.toggle("open");
}

function toggleActive(evt){
  if (evt.propertyName.includes("flex")){
    this.classList.toggle("open-active");
  }

}

const slides = document.querySelectorAll(".slide");

slides.forEach( slide => slide.addEventListener("click", toggleOpen));
slides.forEach( slide => slide.addEventListener("transitionend", toggleActive));

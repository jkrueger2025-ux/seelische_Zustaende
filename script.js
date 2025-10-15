const slides = document.querySelector('.bilder');
  const slideImages = document.querySelectorAll('.bilder img');
  const total = slideImages.length;
  let index = 0;

  function next (){
    index = (index + 1) % total;
    // Slides verschieben
    slides.style.transform = `translateX(-${index * 100}%)`;
  };

  function prev(){
    index = (index - 1 + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
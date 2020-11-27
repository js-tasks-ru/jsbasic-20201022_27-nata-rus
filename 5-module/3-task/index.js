function initCarousel() {
  

  let slider = document.querySelector('.carousel__inner');
  let image = document.querySelectorAll('.carousel__slide');
  let leftCarouselArrow = document.querySelector('.carousel__arrow_left');
  let rightCarouselArrow = document.querySelector('.carousel__arrow_right');
  let widthImage = slider.offsetWidth;
  let translate = 0;

  leftCarouselArrow.style.display = 'none';

  leftCarouselArrow.onclick = () => {
    translate -= widthImage;
    slider.style.transform = `translateX(-${translate + 'px'})`;
    if (translate == 0) {
      leftCarouselArrow.style.display = 'none';
    }
    if (translate < widthImage * (image.length - 1)) {
      rightCarouselArrow.style.display = '';
    }
  }

  rightCarouselArrow.onclick = () => {
    translate += widthImage;
    slider.style.transform = `translateX(-${translate + 'px'})`;
    if (translate > 0) {
      leftCarouselArrow.style.display = '';
    }
    if (translate == widthImage * (image.length - 1)) {
      rightCarouselArrow.style.display = 'none';
    }
  }

}

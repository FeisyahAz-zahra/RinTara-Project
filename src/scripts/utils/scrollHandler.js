const initSlider = () => {
  const exploreItemList = document.querySelector('.explore .explore-content');
  const slideButtons = document.querySelectorAll('.explore .slide-button');
  const sliderScrollbar = document.querySelector('.explore .slider-scrollbar');
  const scrollbarThumb = sliderScrollbar.querySelector('.scrollbar-thumb');
  const maxScrollLeft = exploreItemList.scrollWidth - exploreItemList.clientWidth;

  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener('mousedown', (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

    // Update thumb position on mouse move
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      // Ensure the scrollbar thumb stays within bounds
      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      exploreItemList.scrollLeft = scrollPosition;
    };

    // Remove event listeners on mouse up
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    // Add event listeners for drag interaction
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.id === 'prev-slide' ? -1 : 1;
      const scrollAmount = exploreItemList.clientWidth * direction;
      exploreItemList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });

  // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
    slideButtons[0].style.display = exploreItemList.scrollLeft <= 0 ? 'none' : 'block';
    slideButtons[1].style.display = exploreItemList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
  };

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
    const scrollPosition = exploreItemList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft)
      * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  // Call these two functions when image list scrolls
  exploreItemList.addEventListener('scroll', () => {
    updateScrollThumbPosition();
    handleSlideButtons();
  });
};

export default initSlider;

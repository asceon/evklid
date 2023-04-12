const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: {
    prevSlideMessage: 'Предыдущиый слайд',
    nextSlideMessage: 'Следующий слайд',
    lastSlideMessage: 'Это последний слайд',
    firstSlideMessage: 'Это первый слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}'
 },
});

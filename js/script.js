const swiper = new Swiper('.questions_row', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2.5,
    },
   767: {
      slidesPerView: 3.5,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 4.5,
      spaceBetween: 40
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 10
    },
  }
});

//=============================================
const accItem = document.querySelectorAll('.questions_descr_item');

const hideAll = ()=>{
  accItem.forEach(item =>{
    const text = item.querySelector('.questions_descr_item_answer_wrap');
    text.style.marginTop = - text.offsetHeight +'px';
  })
}

const cards = document.querySelectorAll('.questions_card');
const tabsContent = document.querySelectorAll('.questions_descr_wrap');

const cardsNoActive = ()=>{
  cards.forEach(item=>{
    item.classList.remove('active')
  })

  tabsContent.forEach(item=>{
    item.classList.remove('active')
  })
}

cards.forEach((item, index)=>{

  item.addEventListener('click', ()=>{
    cardsNoActive();
    item.classList.add('active');
    tabsContent[index].classList.add('active');

  })
})

const remActive = ()=>{
  document.querySelectorAll('.questions_descr_item').forEach(item=>{
    item.classList.remove('active');
  })
}

document.querySelectorAll('.questions_descr_item').forEach(item=>{
  item.querySelector('.questions_descr_item_header').addEventListener('click', ()=>{
    remActive()
    item.classList.add('active');
  })
})

hideAll()
// HEADER

const badgeEl = document.querySelector('header .badges');
const toTopEl =document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 사라지게
    // gsap.to(요소, 지속시간(s), 옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      display: 'none'
    });
    // to-top 버튼 보이기
    gsap.to('#to-top', .2, {
      x:0
    });
  } else {
    // 배지 보이게
    gsap.to(badgeEl, .6, {
      opacity:1,
      display: 'block'
    });
    // to-top 버튼 숨기기
    gsap.to('#to-top', .2, {
      x:100
    });
  }
}, 300));
// _.throttle(함수, 시간(ms)) -> 스크롤 이벤트가 스크롤 할때 마다 우르르 실행되지 않게 하기 위한 외부 라이브러리

toTopEl.addEventListener('click',function(){
  gsap.to(window, .7, {
    scrollTo:0
  });
});

//VISUAL
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
  // gsap.to(요소, 지속시간(s), 옵션);
  gsap.to(fadeEl, 1, {
    delay:(index + 1) * .7, //0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

// new swiper(선택자, 옵션)
new Swiper(".notice-line .mySwiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
  spaceBetween: 30,
});

new Swiper(".notice .promotion .mySwiper", {
  slidesPerView: 3, // 한 번에 3개 보이기
  spaceBetween: 10, // 사이 여백 (px)
  centeredSlides: true, // 내용 정 가운데에 넣기
  loop: true,
  autoplay: {
    delay:5000
  },
  navigation: {
    nextEl: ".notice .promotion .swiper-next",
    prevEl: ".notice .promotion .swiper-prev",
  },
  pagination: {
    el: ".notice .promotion .swiper-pagination",
    clickable: true,
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function(){
  isHidePromotion = !isHidePromotion; //클릭 시 isHidePromotion 값을 지속적으로 반대값으로 반환해줌
  if(isHidePromotion) {
    promotionEl.classList.add('hide'); // 숨김 처리!
  } else {
    promotionEl.classList.remove('hide'); // 보임 처리!
  }
});

// FLOATING
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject (selector, delay, size) {
  // gsap.to(요소, 지속시간(s), 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // size 매개변수만큼 y축으로 움직임
    repeat: -1, // 무한반복
    yoyo: true, // 한번 재생된 애니메이션을 거꾸로 재생되서 자연스럽게 반복
    ease: Power1.easeInOut,
    delay: random(0, delay) // 1초에서 ~ delay 매개변수만큼 딜레이
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  //감시
  //code chaining 줄바꿈처리 한거임
  new ScrollMagic.
    Scene({
      triggerElement:spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook : 0.8 //뷰포트에 어떤 지점에서 보여질지
    }).
    setClassToggle(spyEl, 'show'). // 요소, 클래스
    addTo(new ScrollMagic.Controller());
});

new Swiper(".awards .mySwiper", {
  slidesPerView: 5, // 한 번에 3개 보이기
  spaceBetween: 30, // 사이 여백 (px)
  centeredSlides: true, // 내용 정 가운데에 넣기
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".awards .swiper-next",
    prevEl: ".awards .swiper-prev",
  }
});



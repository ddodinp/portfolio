'use strict';

// Make navbar transparent when it is on the top
// 도큐먼트 쿼리셀렉터로 원하는 엘레멘트 받아와서 변수할당
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// 스크롤이 될때마다 작성한 로직이 실행되게 하라
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    console.log(`navbarHeight : ${navbarHeight}`);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark')
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
//navbarMenu에 이벤트를 추가할 건데, 클릭한 요소에 다음의 함수를 실행하게 한다
navbarMenu.addEventListener('click', (event) => {
    // 다른부분 찍엇을때 undefined 찍히는 현상 방지
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

// handle click on the conctact me button on home!
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {

    scrollIntoView('#contact');
});

//스크롤이벤트 중복부분은 함수로 지정 : 함수명은 임의로 지정, selector만 추가하면 함수 실행되게 함
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}
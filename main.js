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

//Make home slowly fade to transparent as the window scrolls down
//document.querySelector를 이용해 #home을 가져와서 변수에 할당하기

// home 배경말고 안에 내용만 투명도 조절
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
//스크롤할때 이벤트 등록
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
    console.log(1 - window.scrollY / homeHeight);
    //ex)
    //1 - '(0 / 800)= 1' = 1(opacity)
    //1 - '(400 / 800)= 0.5' = 0.5(opacity)
    //1 - '(800 / 800)= 0' = 0(opacity)
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up') 
document.addEventListener('scroll', () => {
    // 윈도우 스크롤이 홈높이의 반정도 도달했을 때
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});



//스크롤이벤트 중복부분은 함수로 지정 : 함수명은 임의로 지정, selector만 추가하면 함수 실행되게 함
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}
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
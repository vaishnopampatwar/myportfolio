
/*var nav=document.getElementById('nav');
window.onscroll=function(){
    if(window.pageYOffset>250){
        nav.classList.toggle('scrolling-act',window.scrollY>0);
        //nav.style.backgroundColor='black';
    }
else {
    nav.style.backgroundColor = 'transparent';
}
}*/
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-list ul');
const menu_item = document.querySelectorAll('.nav-list ul li a');
var nav=document.getElementById('nav');

window.onscroll=function(){
    nav.classList.toggle('scrolling-act',window.scrollY>550);
    nav.classList.toggle('scrolling-act:hover',window.scrollY>250);
}

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

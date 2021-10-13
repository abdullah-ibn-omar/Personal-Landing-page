var menuIcon = document.querySelector('.menu_icon'),
    menu = document.getElementById('menu'),
    menuItem = document.querySelectorAll('nav ul li a');
    item = document.getElementById('services')

menuIcon.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    menuIcon.classList.toggle('active')
})
menuItem.forEach((icon) => icon.addEventListener('click', () => {
    menu.classList.remove('active');
    menuIcon.classList.remove('active');
    
}));

document.addEventListener("scroll",() => {
    var scroll_position = window.scrollY;
    var nav_bar = document.getElementById("nav_bar")
    if(scroll_position > 250) {
        nav_bar.style.backgroundColor = "#29323c"
    }else{
        nav_bar.style.backgroundColor = "transparent"
    }
})

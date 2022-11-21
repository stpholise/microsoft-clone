var hiddenMenu = document.querySelector('.hidden-menu')
var button = document.querySelector('#showbtn').addEventListener('click', econt)
var selectMent = document.querySelector('.menu-btn').addEventListener('click', openMen)
var stMent = document.querySelector('.main-menu')

function openMen() {
    stMent.style.display = 'block';
}

var button = document.querySelector('.close-btn').addEventListener('click', closeBtn)

function closeBtn(e) {
    hiddenMenu.style.display = 'none';
}

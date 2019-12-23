var switchbtn = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");
var breackpoint = 768;

var openMenu = function () {
  menu.classList.remove("main-nav--off");
};

var closeMenu = function () {
  menu.classList.add("main-nav--off");
};

var checkMenuStatus = function () {
  if (window.innerWidth >= breackpoint) {
    openMenu();
  }
  else {
    closeMenu();
  }
};

var checkBtnStatus = function () {
  if (menu.classList.contains("main-nav--off")) {
    switchbtn.classList.add("main-nav__toggle--close");
    switchbtn.classList.remove("main-nav__toggle--open");
  }
  else {
    switchbtn.classList.remove("main-nav__toggle--close");
    switchbtn.classList.add("main-nav__toggle--open");
  }
};

checkMenuStatus();

checkBtnStatus();

switchbtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!menu.classList.contains("main-nav--off")) {
    closeMenu();
    switchbtn.classList.remove("main-nav__toggle--open");
    switchbtn.classList.add("main-nav__toggle--close");
  }
  else {
    openMenu();
    switchbtn.classList.remove("main-nav__toggle--close");
    switchbtn.classList.add("main-nav__toggle--open");
  }
});

window.addEventListener('resize', checkMenuStatus);
window.addEventListener('resize', checkBtnStatus);

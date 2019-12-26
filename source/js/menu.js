var switchbtn = document.querySelector(".page-header__toggle");
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
    switchbtn.classList.add("page-header__toggle--close");
    switchbtn.classList.remove("page-header__toggle--open");
  }
  else {
    switchbtn.classList.remove("page-header__toggle--close");
    switchbtn.classList.add("page-header__toggle--open");
  }
};

checkMenuStatus();

checkBtnStatus();

switchbtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!menu.classList.contains("main-nav--off")) {
    closeMenu();
    switchbtn.classList.remove("page-header__toggle--open");
    switchbtn.classList.add("page-header__toggle--close");
  }
  else {
    openMenu();
    switchbtn.classList.remove("page-header__toggle--close");
    switchbtn.classList.add("page-header__toggle--open");
  }
});

window.addEventListener('resize', checkMenuStatus);
window.addEventListener('resize', checkBtnStatus);

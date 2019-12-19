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
  console.log("1");
  if (window.innerWidth > breackpoint) {
    openMenu();
  }
  else {
    closeMenu();
  }
};

checkMenuStatus();

switchbtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!menu.classList.contains("main-nav--off")) {
    closeMenu();
  }
  else {
    openMenu();
  }
});

window.addEventListener('resize', checkMenuStatus);

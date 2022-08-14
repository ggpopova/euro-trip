// MENU
var menuNav = document.querySelector(".menu-nav");
var menuNavToggle = document.querySelector(".menu-nav__toggle");

menuNav.classList.remove("menu-nav-nojs");

menuNav.classList.add("menu-nav--closed");

menuNavToggle.addEventListener("click", () => {
    if (menuNav.classList.contains("menu-nav--closed")) {
      menuNav.classList.remove("menu-nav--closed");
      menuNav.classList.add("menu-nav--opened");
    } else {
      menuNav.classList.add("menu-nav--closed");
      menuNav.classList.remove("menu-nav--opened");
    }
  }
);

//  Обработка нажатий на кнопки переключения слайдов в промослайдере

var countryItem1 = document.querySelector(".country__item--1");
var countryItem2 = document.querySelector(".country__item--2");
var countryItem3 = document.querySelector(".country__item--3");
var countryItem4 = document.querySelector(".country__item--4");
var countryItem5 = document.querySelector(".country__item--5");

var formRadioGroupItem1 = document.querySelector(".form_radio_group-item--1");
var formRadioGroupItem2 = document.querySelector(".form_radio_group-item--2");
var formRadioGroupItem3 = document.querySelector(".form_radio_group-item--3");
var formRadioGroupItem4 = document.querySelector(".form_radio_group-item--4");
var formRadioGroupItem5 = document.querySelector(".form_radio_group-item--5");

if (countryItem1) {
  countryItem1.addEventListener("change", function (evt) {
    evt.preventDefault();
    formRadioGroupItem1.classList.add("country__item--displayed");
    formRadioGroupItem2.classList.remove("country__item--displayed");
    formRadioGroupItem3.classList.remove("country__item--displayed");
    formRadioGroupItem4.classList.remove("country__item--displayed");
    formRadioGroupItem5.classList.remove("country__item--displayed");

    // radio1.checked = false;
    // radio2.checked = false;
    // radio3.checked = false;
    // radio4.checked = false;
    // radio1.checked = true;
  });
}

if (countryItem2) {
  countryItem2.addEventListener("change", function (evt) {
    evt.preventDefault();
    console.log(222)
    console.log(formRadioGroupItem2)
    formRadioGroupItem1.classList.remove("country__item--displayed");
    formRadioGroupItem2.classList.add("country__item--displayed");
    formRadioGroupItem3.classList.remove("country__item--displayed");
    formRadioGroupItem4.classList.remove("country__item--displayed");
    formRadioGroupItem5.classList.remove("country__item--displayed");

    // radio1.checked = false;
    // radio2.checked = true;
    // radio3.checked = false;
    // radio4.checked = false;
    // radio1.checked = false;
  });
}


if (countryItem3) {
  countryItem3.addEventListener("click", function (evt) {
    evt.preventDefault();
    formRadioGroupItem1.classList.remove("country__item--displayed");
    formRadioGroupItem2.classList.remove("country__item--displayed");
    formRadioGroupItem3.classList.add("country__item--displayed");
    formRadioGroupItem4.classList.remove("country__item--displayed");
    formRadioGroupItem5.classList.remove("country__item--displayed");
  });

}

if (countryItem4) {
  countryItem4.addEventListener("click", function (evt) {
    evt.preventDefault();
    formRadioGroupItem1.classList.remove("country__item--displayed");
    formRadioGroupItem2.classList.remove("country__item--displayed");
    formRadioGroupItem3.classList.remove("country__item--displayed");
    formRadioGroupItem4.classList.add("country__item--displayed");
    formRadioGroupItem5.classList.remove("country__item--displayed");
  });
}

if (countryItem5) {
  countryItem5.addEventListener("click", function (evt) {
    evt.preventDefault();
    formRadioGroupItem1.classList.remove("country__item--displayed");
    formRadioGroupItem2.classList.remove("country__item--displayed");
    formRadioGroupItem3.classList.remove("country__item--displayed");
    formRadioGroupItem4.classList.remove("country__item--displayed");
    formRadioGroupItem5.classList.add("country__item--displayed");
  });
}



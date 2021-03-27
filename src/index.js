import './styles.css';
import menu from './menu.json';
import dishesListTemplate from './templates/dishes-list.hbs';
import menuStorage from './menu-storage'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuListRef = document.querySelector(".js-menu")
menuListRef.innerHTML = dishesListTemplate(menu)

const switcherCheckbox = document.querySelector(".theme-switch__toggle")

switcherCheckbox.addEventListener("click", switchTheme)

function switchTheme () {
  switcherCheckbox.toggleAttribute("checked")
  menuStorage.setItem("checkbox", true)
  if (switcherCheckbox.hasAttribute("checked")) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK)
      || document.body.classList.add(Theme.DARK)
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT)
    menuStorage.setItem("checkbox", false)
  }
}

if (menuStorage.getItem("checkbox")) {
  switchTheme()
}
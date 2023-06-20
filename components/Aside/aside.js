import sellersFilterTemplate from '../Filters/sellers.js';
import priceFilterTemplate from '../Filters/price.js';

let abierto = false;

export const filtersAside = () => {
    const aside = document.createElement('aside');

    const wrapper = document.createElement('div');
    wrapper.classList.add('rtc--swingman-filters-menu');

    const filtersImg = document.createElement('img');
    filtersImg.src = './assets/menu.png';
    filtersImg.alt = 'Menú de filtros de búsqueda';
    filtersImg.classList.add('rtc--swingman-filters-menu-img');

    const nbaImg = document.createElement('img');
    nbaImg.src = './assets/logonba.png';
    nbaImg.alt = 'Logo de la NBA';
    nbaImg.classList.add('rtc--swingman-filters-menu-nba_logo');

    wrapper.appendChild(filtersImg);
    wrapper.appendChild(nbaImg);
    aside.appendChild(wrapper);
    return aside;
}

export const filtersMenu = () => {
    const menu = document.querySelector(".rtc--swingman-filters-menu");

    menu.addEventListener("click", toggleMenu);
}

const toggleMenu = () => {
    const menu = document.querySelector(".rtc--swingman-filters-menu");

    if (abierto) {
        menu.style.height = '3rem';
        abierto = false;
        menu.removeChild(menu.lastChild);
        menu.removeChild(menu.lastChild);
    } else {
        menu.style.height = '90%';
        abierto = true;
        menu.appendChild(sellersFilterTemplate());
        menu.appendChild(priceFilterTemplate());
    }
}
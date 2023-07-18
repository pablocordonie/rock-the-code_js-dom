import { toggleMenu } from '../../utils/CallToAction/cta.js';

export const createFiltersNav = () => {
    const nav = document.createElement('nav');

    const wrapper = document.createElement('div');
    wrapper.classList.add('rtc--swingman-header-filters-menu');

    const filtersImg = document.createElement('img');
    filtersImg.src = './assets/menu.png';
    filtersImg.alt = 'Menú de filtros de búsqueda';
    filtersImg.classList.add('rtc--swingman-header-filters-menu-img');
    filtersImg.setAttribute('role', 'img');
    filtersImg.setAttribute('aria-label', 'Accede al menú de filtros');

    const nbaImg = document.createElement('img');
    nbaImg.src = './assets/logonba.png';
    nbaImg.alt = 'Logo de la NBA';
    nbaImg.classList.add('rtc--swingman-header-filters-menu-nba_logo');
    nbaImg.setAttribute('role', 'img');
    nbaImg.setAttribute('aria-label', 'Icono oficial de la NBA');

    wrapper.appendChild(filtersImg);
    wrapper.appendChild(nbaImg);
    nav.appendChild(wrapper);
    return nav;
}

export const filtersMenu = () => {
    const menu = document.querySelector('.rtc--swingman-header-filters-menu-img');

    menu.addEventListener('click', toggleMenu);
}
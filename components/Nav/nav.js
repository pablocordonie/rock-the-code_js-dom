import { toggleVerticalMenu, toggleHorizontalMenu } from '../../utils/CallToAction/cta.js';

export const createFiltersNav = () => {

    const nav = document.createElement('nav');

    nav.classList.add('rtc--swingman-header-filters-menu');

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

    nav.appendChild(filtersImg);
    nav.appendChild(nbaImg);
    return nav;

}

export const filtersMenu = () => {

    const menu = document.querySelector('.rtc--swingman-header-filters-menu');;
    const menuImg = document.querySelector('.rtc--swingman-header-filters-menu-img');
    const devicesLimit = matchMedia('(max-width: 768px)');

    if (screen.width < 768) {
        menuImg.addEventListener('click', toggleVerticalMenu);
    } else {
        menuImg.addEventListener('click', toggleHorizontalMenu);
    }

    devicesLimit.addEventListener('change', (ev) => {

        if (ev.matches) {

            if (menu.style.height === '3rem' && menu.style.width === '100%') {

                menuImg.removeEventListener('click', toggleHorizontalMenu);
                menuImg.addEventListener('click', toggleVerticalMenu);

            } else {

                menu.style.height = '3rem';
                menu.style.width = '100%';
                menuImg.removeEventListener('click', toggleHorizontalMenu);
                menuImg.addEventListener('click', toggleVerticalMenu);

            }


        } else {

            if (menu.style.height === '100%' && menu.style.width === '2.5rem') {

                menuImg.removeEventListener('click', toggleVerticalMenu);
                menuImg.addEventListener('click', toggleHorizontalMenu);

            } else {

                menu.style.height = '100%';
                menu.style.width = '2.5rem';
                menuImg.removeEventListener('click', toggleVerticalMenu);
                menuImg.addEventListener('click', toggleHorizontalMenu);

            }

        }

    });

}
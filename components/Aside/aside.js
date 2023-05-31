export const filtersAside = () => {
    const aside = document.createElement('aside');
    aside.classList.add('rtc--swingman-filters-menu');
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('rtc--swingman-filters-menu-imgContainer');

    const filtersImg = document.createElement('img');
    filtersImg.src = './assets/menu.png';
    filtersImg.alt = 'Menú de filtros de búsqueda';
    filtersImg.classList.add('rtc--swingman-filters-menu-img');

    imgWrapper.appendChild(filtersImg);
    aside.appendChild(imgWrapper);
    return aside;
}
import swingmanProducts from '../../data/data.js';
import { initGallery } from '../../components/Gallery/gallery.js';
import { createSellersFilter } from '../../components/Filters/sellers.js';
import { createPriceFilter } from '../../components/Filters/price.js';
import { createFiltersCleaner } from '../../components/Filters/cleaner.js';

let abierto = false;
let filteredItems = [];

export const toFilterSellers = (event) => {

    const selectedOption = event.target.selectedOptions[0];

    if (selectedOption.value !== '') {

        filteredItems.length
            ? filteredItems = filteredItems.filter((product) => product.seller === event.target.value)
            : filteredItems = swingmanProducts.filter((product) => product.seller === event.target.value);

    } else {
        return;
    }

    initGallery(filteredItems);
};

export const toFilterPrice = (event) => {

    const clickedButton = event.type;
    const input = document.querySelector('.rtc--swingman-header-filters-price_input');

    if (clickedButton === 'click' && input.valueAsNumber > 0 && input.valueAsNumber < 1000) {

        filteredItems.length
            ? filteredItems = filteredItems.filter((product) => product.price <= input.valueAsNumber)
            : filteredItems = swingmanProducts.filter((product) => product.price <= input.valueAsNumber);

    } else {
        return;
    }

    initGallery(filteredItems);
};

export const toggleCleanerButton = (event) => {

    const menu = document.querySelector('.rtc--swingman-header-filters-menu');
    const clickedButton = event.target.type;

    if (clickedButton && screen.width < 768) {

        menu.style.height = '3rem';
        abierto = false;


    } else {

        menu.style.width = '2.5rem';
        abierto = false;

    };

    menu.removeChild(menu.lastChild);
    menu.removeChild(menu.lastChild);
    menu.removeChild(menu.lastChild);

    initGallery(swingmanProducts);
    filteredItems = [];

};

export const toggleVerticalMenu = (e) => {

    const menu = document.querySelector('.rtc--swingman-header-filters-menu');

    if (!abierto) {
        menu.style.height = '36rem';
        abierto = true;
        menu.appendChild(createSellersFilter());
        menu.appendChild(createPriceFilter());
        menu.appendChild(createFiltersCleaner());

    } else {
        menu.style.height = '3rem';
        abierto = false;
        menu.removeChild(menu.lastChild);
        menu.removeChild(menu.lastChild);
        menu.removeChild(menu.lastChild);
    }

};

export const toggleHorizontalMenu = (e) => {

    const menu = document.querySelector('.rtc--swingman-header-filters-menu');

    if (!abierto) {

        menu.style.width = '24rem';
        abierto = true;
        menu.appendChild(createSellersFilter());
        menu.appendChild(createPriceFilter());
        menu.appendChild(createFiltersCleaner());

    } else {

        menu.style.width = '2.5rem';
        abierto = false;
        menu.removeChild(menu.lastChild);
        menu.removeChild(menu.lastChild);
        menu.removeChild(menu.lastChild);

    }

};
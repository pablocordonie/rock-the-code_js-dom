import swingmanProducts from '../../data/data.js';
import { initGallery } from '../../components/Gallery/gallery.js';
import { createSellersFilter } from '../../components/Filters/sellers.js';
import { createPriceFilter } from '../../components/Filters/price.js';
import { createNameFilter } from '../../components/Filters/name.js';
import { createFiltersCleaner, toCleanFilters } from '../../components/Filters/cleaner.js';

let abierto = false;

export const toggleButton = (event) => {
    const menu = document.querySelector('.rtc--swingman-filters-menu');
    const clickedButton = event.target.type;

    if (clickedButton) {
        menu.style.height = '3rem';
        abierto = false;
        menu.removeChild(menu.lastChild);
        menu.removeChild(menu.lastChild);
        menu.removeChild(menu.lastChild);
        menu.removeChild(menu.lastChild);
        initGallery(swingmanProducts);
    };
};

export const toggleMenu = () => {
    const menu = document.querySelector('.rtc--swingman-filters-menu');

    if (!abierto) {
        menu.style.height = '80%';
        abierto = true;
        menu.appendChild(createSellersFilter());
        menu.appendChild(createPriceFilter());
        menu.appendChild(createNameFilter());
        menu.appendChild(createFiltersCleaner());

        if (menu.lastChild.firstChild.textContent === 'LIMPIAR FILTROS') {
            toCleanFilters();
        }

    } else {
        menu.style.height = '3rem';
        abierto = false;
        menu.removeChild(menu.lastChild);
        menu.removeChild(menu.lastChild);
        menu.removeChild(menu.lastChild);
        menu.removeChild(menu.lastChild);
    }
};
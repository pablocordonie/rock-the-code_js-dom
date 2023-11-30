import { toggleCleanerButton } from '../../utils/CallToAction/cta.js';

export const createFiltersCleaner = () => {

    const cleanerContainer = document.createElement('div');
    cleanerContainer.classList.add('rtc--swingman-header-filters-cleaner_div');
    cleanerContainer.classList.add('rtc--flex');
    const cleaner_title = 'limpiar filtros';

    const button = document.createElement('button');
    button.classList.add('rtc--swingman-header-filters-cleaner_button');
    button.setAttribute('type', 'button');
    button.setAttribute('role', 'button');
    button.setAttribute('aria-label', 'Haz click aquí para limpiar los filtros y reiniciar la lista de productos ofertados');
    button.innerText = `${cleaner_title.toUpperCase()}`;

    button.addEventListener('click', toggleCleanerButton);
    cleanerContainer.appendChild(button);
    return cleanerContainer;

}
import { toggleButton } from '../../utils/Toggle/toggle.js';

export const createFiltersCleaner = () => {

    const cleanerContainer = document.createElement('div');
    cleanerContainer.classList.add('rtc--swingman-filters-cleaner_div');
    const cleaner_title = 'limpiar filtros';

    const button = document.createElement('button');
    button.classList.add('rtc--swingman-filters-cleaner_button');
    button.setAttribute('type', 'button');
    button.innerText = `${cleaner_title.toUpperCase()}`;
    cleanerContainer.appendChild(button);

    return cleanerContainer;
}

export const toCleanFilters = () => {
    const button = document.querySelector('.rtc--swingman-filters-cleaner_button');

    button.addEventListener('click', toggleButton);
};
import { createFiltersAside, filtersMenu } from '../Aside/aside.js';

const createHeader = () => {
    const header = document.querySelector('header');
    const headerContainerTemplate = () => `
        <div class="rtc--swingman-header-logo">
            <h1 class="rtc--swingman-header-logo-h1" role="title" aria-label="Bienvenido a The Swingman, en las siguientes opciones obtendrá la información de cada producto ofertado">The Swingman</h1>
        </div>
    `;

    header.innerHTML += headerContainerTemplate();
    header.appendChild(createFiltersAside());
    filtersMenu();
    return header;
}

export default createHeader;
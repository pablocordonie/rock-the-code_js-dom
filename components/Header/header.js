import { createFiltersMenu, displayFiltersMenu } from '../Menu/menu.js';

const createHeader = () => {

    const header = document.querySelector('header');
    const headerContainerTemplate = () => `
        <div class="rtc--swingman-header-logo rtc--flex">
            <h1 class="rtc--swingman-header-logo-h1" role="title" aria-label="Bienvenido a The Swingman, en las siguientes opciones obtendrá la información de cada producto ofertado">The Swingman</h1>
        </div>
    `;

    header.innerHTML += headerContainerTemplate();
    header.appendChild(createFiltersMenu());
    displayFiltersMenu();
    return header;

}

export default createHeader;
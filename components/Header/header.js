import { createFiltersAside, filtersMenu } from '../Aside/aside.js';

const createHeader = () => {
    const header = document.querySelector('header');
    const headerContainerTemplate = () => `
        <div class="rtc--header-logo">
            <h1 class="rtc--header-logo-h1">The Swingman</h1>
        </div>
    `;

    header.innerHTML += headerContainerTemplate();
    header.appendChild(createFiltersAside());
    filtersMenu();
    return header;
}

export default createHeader;
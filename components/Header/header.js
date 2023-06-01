import { filtersAside } from '../Aside/aside.js';

export const headerTemplate = () => {
    const header = document.querySelector('header');
    const div = document.createElement('div');

    div.classList.add('rtc--header-logo');
    const h1 = document.createElement('h1');
    h1.classList.add('rtc--header-logo-h1');
    h1.textContent = 'The Swingman';

    div.appendChild(h1);
    header.appendChild(div);
    header.appendChild(filtersAside());
    return header;
}
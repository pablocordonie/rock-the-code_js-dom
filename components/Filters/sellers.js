import swingmanProducts from '../../data/data.js';
import { toFilterSellers } from '../../utils/CallToAction/cta.js';

export const createSellersFilter = () => {

    const sellersContainer = document.createElement('div');
    sellersContainer.classList.add('rtc--swingman-header-filters-sellers_div');
    sellersContainer.classList.add('rtc--flex');
    const sellers_title = 'vendedores';

    const label = document.createElement('label');
    label.classList.add('rtc--swingman-header-filters-sellers_label');
    label.innerText = `${sellers_title.toUpperCase()}`;
    label.setAttribute('for', 'sellers_select');
    label.setAttribute('role', 'label');
    label.setAttribute('aria-label', 'Selecciona la siguiente opción para filtrar por vendedores');
    sellersContainer.appendChild(label);

    const select = document.createElement('select');
    select.classList.add('rtc--swingman-header-filters-sellers_select');
    select.setAttribute('name', 'vendedores');
    select.setAttribute('id', 'sellers_select');
    select.setAttribute('role', 'select');
    select.setAttribute('aria-label', 'Haz click aquí para acceder a la lista de vendedores');

    const emptyOption = document.createElement('option');
    emptyOption.innerText = 'Todos los vendedores';
    emptyOption.setAttribute('value', 'Todos los vendedores');
    emptyOption.classList.add('rtc--swingman-header-filters-sellers-empty_option');
    emptyOption.setAttribute('role', 'option');
    emptyOption.setAttribute('aria-label', '#');
    select.appendChild(emptyOption);

    const sellers = [];

    swingmanProducts.forEach((product) => {
        if (!sellers.includes(product.seller)) {
            sellers.push(product.seller);
        }
    });

    const sellerOptionTemplate = (seller, label) => `<option value="${seller}" class="${label}" role="option" aria-label="Filtrar por el siguiente vendedor: ${seller}">${seller}</option>`;

    const sellerOption = sellers.map(seller => sellerOptionTemplate(seller, `rtc--swingman-header-filters-sellers-${seller}_option`));

    select.innerHTML += sellerOption.join('');

    select.addEventListener('change', toFilterSellers);

    sellersContainer.append(select);

    return sellersContainer;
}
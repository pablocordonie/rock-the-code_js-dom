import swingmanProducts from '../../data/data.js';
import { toFilterSellers } from '../../utils/Filtering/toFilter.js';

export const createSellersFilter = () => {

    const sellersContainer = document.createElement('div');
    sellersContainer.classList.add('rtc--swingman-filters-sellers_div');
    const sellers_title = 'vendedores';

    const label = document.createElement('label');
    label.classList.add('rtc--swingman-filters-sellers_label');
    label.innerText = `${sellers_title.toUpperCase()}`;
    label.setAttribute('for', 'sellers_select');
    sellersContainer.appendChild(label);

    const select = document.createElement('select');
    select.classList.add('rtc--swingman-filters-sellers_select');
    select.setAttribute('name', 'vendedores');
    select.setAttribute('id', 'sellers_select');

    const emptyOption = document.createElement('option');
    emptyOption.setAttribute('value', '');
    emptyOption.classList.add('rtc--swingman-filters-sellers-empty_option');
    select.appendChild(emptyOption);

    const sellers = [];

    swingmanProducts.forEach((product) => {
        if (!sellers.includes(product.seller)) {
            sellers.push(product.seller);
        }
    });

    const sellerOptionTemplate = (seller, label) => `<option value="${seller}" class="${label}">${seller}</option>`;

    const sellerOption = sellers.map(seller => sellerOptionTemplate(seller, `rtc--swingman-filters-sellers-${seller}_option`));

    select.innerHTML += sellerOption.join('');

    select.addEventListener('change', toFilterSellers);

    sellersContainer.append(select);

    return sellersContainer;
}
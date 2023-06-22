import swingmanProducts from '../../data/data.js';

const createSellersFilter = () => {

    const sellersContainer = document.createElement('div');
    sellersContainer.classList.add('rtc--swingman-filters-sellers_div');
    const sellers_title = 'vendedores';

    const label = document.createElement('label');
    label.innerText = `${sellers_title.toUpperCase()}`;
    label.setAttribute('for', 'sellers_select');
    sellersContainer.appendChild(label);

    const select = document.createElement('select');
    select.classList.add('rtc--swingman-filters-sellers_select');
    select.setAttribute('name', 'sellers');
    select.setAttribute('id', 'sellers_select');

    const mappedSellers = swingmanProducts.map((product) => product.seller);

    const sellers = [... new Set(mappedSellers)];

    const sellerOptionTemplate = (seller) => `<option value="${seller.toLowerCase()}">${seller}</option>`;

    const sellerOption = sellers.map(seller => sellerOptionTemplate(seller));

    select.innerHTML += sellerOption.join('');

    sellersContainer.append(select);

    return sellersContainer;
}

export default createSellersFilter;
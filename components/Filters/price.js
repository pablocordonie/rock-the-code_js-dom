import swingmanProducts from '../../data/data.js';

const createPriceFilter = () => {

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('rtc--swingman-filters-price_div');
    const price_title = 'precio';

    const label = document.createElement('label');
    label.classList.add('rtc--swingman-filters-price_label');
    label.innerText = `${price_title.toUpperCase()}`;
    label.setAttribute('for', 'price_input');
    priceContainer.appendChild(label);

    const input = document.createElement('input');
    input.classList.add('rtc--swingman-filters-price_input');
    input.setAttribute('type', 'number');
    input.setAttribute('name', 'price');
    input.setAttribute('id', 'price_input');
    input.setAttribute('minlength', '1');
    input.setAttribute('maxlength', '4');
    input.setAttribute('size', '5');
    priceContainer.appendChild(input);

    const button = document.createElement('button');
    const search = 'buscar';
    button.classList.add('rtc--swingman-filters-price_search');
    button.setAttribute('type', 'button');
    button.innerText = `${search.toUpperCase()}`;
    priceContainer.appendChild(button);

    return priceContainer;
}

export default createPriceFilter;
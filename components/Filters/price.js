import { toFilterPrice } from '../../utils/Filtering/toFilter.js';

export const createPriceFilter = () => {

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
    input.setAttribute('name', 'precio');
    input.setAttribute('id', 'price_input');
    input.setAttribute('min', 0);
    input.setAttribute('max', 999);
    input.addEventListener('change', handlePriceInput);
    priceContainer.appendChild(input);

    const button = document.createElement('button');
    const search = 'buscar';
    button.classList.add('rtc--swingman-filters-price_search');
    button.setAttribute('type', 'button');
    button.innerText = `${search.toUpperCase()}`;

    button.addEventListener('click', toFilterPrice);
    priceContainer.appendChild(button);

    return priceContainer;
};

const handlePriceInput = (event) => {
    let introducedNumber = event.target.valueAsNumber;

    if (introducedNumber !== 0 || introducedNumber.length > 0 && introducedNumber.length <= 3) {
        return introducedNumber;
    } else {
        event.target.value = '';
        return;
    }
};
import { toFilterPrice } from '../../utils/CallToAction/cta.js';

export const createPriceFilter = () => {

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('rtc--swingman-header-filters-price_div');
    const price_title = 'precio';

    const label = document.createElement('label');
    label.classList.add('rtc--swingman-header-filters-price_label');
    label.innerText = `${price_title.toUpperCase()}`;
    label.setAttribute('for', 'price_input');
    label.setAttribute('role', 'label');
    label.setAttribute('aria-label', 'Selecciona la siguiente opción para filtrar por precio');
    priceContainer.appendChild(label);

    const input = document.createElement('input');
    input.classList.add('rtc--swingman-header-filters-price_input');
    input.setAttribute('type', 'number');
    input.setAttribute('name', 'precio');
    input.setAttribute('id', 'price_input');
    input.setAttribute('min', 0);
    input.setAttribute('max', 999);
    input.setAttribute('role', 'input');
    input.setAttribute('aria-label', `Haz click aquí para escribir su tope máximo de precio y, después, seleccione la siguiente opción para buscar`);
    input.addEventListener('change', handlePriceInput);
    priceContainer.appendChild(input);

    const button = document.createElement('button');
    const search = 'buscar';
    button.classList.add('rtc--swingman-header-filters-price_search');
    button.setAttribute('type', 'button');
    button.setAttribute('role', 'button');
    button.setAttribute('aria-label', `Haz click aquí para ${search}`);
    button.innerText = `${search.toUpperCase()}`;

    button.addEventListener('click', toFilterPrice);
    priceContainer.appendChild(button);

    return priceContainer;
};

const handlePriceInput = (event) => {
    let introducedNumber = event.target.valueAsNumber;

    if (introducedNumber > 0 && introducedNumber < 1000) {
        return introducedNumber;
    } else {
        event.target.value = '';
        return;
    }
};
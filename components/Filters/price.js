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
    input.setAttribute('name', 'price');
    input.setAttribute('id', 'price_input');
    input.setAttribute('min', 0);
    input.setAttribute('max', 999);
    input.addEventListener('change', handleInput);
    priceContainer.appendChild(input);

    const button = document.createElement('button');
    const search = 'buscar';
    button.classList.add('rtc--swingman-filters-price_search');
    button.setAttribute('type', 'button');
    button.innerText = `${search.toUpperCase()}`;

    button.addEventListener('click', handleSearch);
    priceContainer.appendChild(button);

    return priceContainer;
};

const handleInput = (event) => {
    let introducedNumber = event.target.value;

    if (introducedNumber.length >= 0 && introducedNumber.length <= 3) {
        return introducedNumber;
    } else {
        event.target.valueAsNumber = 0;
        return event.target.valueAsNumber;
    }
};

const handleSearch = (event) => {
    // PENDING
}
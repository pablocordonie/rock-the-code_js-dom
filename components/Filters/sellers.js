import swingmanProducts from '../../data/data.js';

const sellersFilterTemplate = () => {

    const sellersContainer = document.createElement('div');
    sellersContainer.classList.add('rtc--swingman-filters-sellers_div');

    const label = document.createElement('label');
    label.textContent = 'vendedores';
    label.setAttribute('for', 'sellers_select');
    sellersContainer.appendChild(label);

    const select = document.createElement('select');
    select.classList.add('rtc--swingman-filters-sellers_select');
    select.setAttribute('name', 'sellers');
    select.setAttribute('id', 'sellers_select');

    const sellers = swingmanProducts.map((product) => {
        // CONDICIÓN PARA CONSEGUIR EL PRIMER SELLER DE CADA SET DE OBJETOS CON EL MISMO SELLER
        return;
    });
    console.log(sellers);

    const sellersOptions = sellers.map((seller) => {
        const option = document.createElement('option');
        option.setAttribute('value', seller);
        option.textContent = seller;
    });
    select.appendChild(sellersOptions);

    sellersContainer.appendChild(select);

    return sellersContainer;
}

export default sellersFilterTemplate;
import { toFilterName } from '../../utils/Filtering/toFilter.js';

export const createNameFilter = () => {
    const nameFilterContainer = document.createElement('div');
    nameFilterContainer.className = 'rtc--swingman-filters-name_div';

    const label = document.createElement('label');
    const title = 'nombre';
    label.classList.add('rtc--swingman-filters-name_label');
    label.innerText = `${title.toUpperCase()}`;
    label.setAttribute('for', 'name_input');
    nameFilterContainer.appendChild(label);

    const input = document.createElement('input');
    input.className = 'rtc--swingman-filters-name_input';
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'nombre');
    input.setAttribute('id', 'name_input');
    input.setAttribute('min', 0);
    input.setAttribute('max', 15);
    input.addEventListener('change', handleNameInput);
    input.addEventListener('change', toFilterName);
    nameFilterContainer.appendChild(input);

    const icon = document.createElement('img');
    icon.src = './assets/buscar.png';
    icon.className = 'rtc--swingman-filters-name_icon';
    icon.alt = 'Buscar a partir del nombre introducido';
    nameFilterContainer.appendChild(icon);

    return nameFilterContainer;
};

const handleNameInput = (event) => {
    let introducedText = event.target.value;

    if (introducedText.length > 0 && introducedText.length <= 15) {
        return introducedText;
    } else {
        event.target.value = '';
        return;
    }
};

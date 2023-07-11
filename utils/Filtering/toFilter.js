import swingmanProducts from '../../data/data.js';
import { initGallery } from '../../components/Gallery/gallery.js';
//import { handleInput } from '../../components/Filters/price.js';

let filteredItems = [];

export const toFilterSellers = (event) => {

    const selectedOption = event.target.selectedOptions[0];

    if (selectedOption.value === '') {

        initGallery(swingmanProducts);

    } else {

        filteredItems = [...swingmanProducts.filter((product) => product.seller === event.target.value),
        ];

        initGallery(filteredItems);

    }
};

export const toFilterPrice = (event) => {

    const clickedButton = event.type;
    const input = document.querySelector('.rtc--swingman-filters-price_input');

    if (clickedButton === 'click' && input.valueAsNumber > 0 && input.valueAsNumber < 1000) {

        const filteredProductsByPrice = swingmanProducts.filter((product) => product.price <= input.valueAsNumber);

        filteredItems = [
            ...filteredProductsByPrice
        ];

    } else {
        return;
    }

    initGallery(filteredItems);
};

export const toFilterName = () => {

};
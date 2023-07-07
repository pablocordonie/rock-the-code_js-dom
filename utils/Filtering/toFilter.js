import swingmanProducts from '../../data/data.js';
import { initGallery } from '../../components/Gallery/gallery.js';

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

    if (clickedButton === 'click') {

        const filteredProductsByPrice = swingmanProducts.filter((product) => product.price <= input.valueAsNumber);

        filteredItems = [
            ...filteredProductsByPrice
        ];

    }

    initGallery(filteredItems);
};
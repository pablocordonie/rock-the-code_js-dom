import swingmanProducts from '../../data/data.js';
import { initGallery } from '../../components/Gallery/gallery.js';

let filteredItems = [];

export const toFilterSellers = (event) => {

    const selectedOption = event.target.selectedOptions[0];

    if (selectedOption.value === '') {

        initGallery(swingmanProducts);

    } else {

        filteredItems = [
            ...swingmanProducts.filter((product) => product.seller === event.target.value),
        ];

        initGallery(filteredItems);

    }
};
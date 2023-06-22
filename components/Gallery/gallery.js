import swingmanProducts from '../../data/data.js';

const productTemplate = (product) => `
    <li class="rtc--swingman-item">
        <a href="${product.link}" class="rtc--swingman-card">
            <img src="${product.image}" alt="${product.name}" class="rtc--swingman-card-img">
            <h3 class="rtc--swingman-card-h3">${product.name}</h3>
            <p>${product.price} €</p>
        </a>
    </li>
    `;

export const createGallery = () => {

    const productsList = document.createElement('ul');
    productsList.classList.add('rtc--swingman-gallery');

    for (const product of swingmanProducts) {
        productsList.innerHTML += productTemplate(product);
    }

    const productsGallery = document.createElement('section');
    productsGallery.classList.add('rtc--swingman-products');
    productsGallery.appendChild(productsList);

    const main = document.querySelector('main');

    main.appendChild(productsGallery);
    return main;

};

export default createGallery;
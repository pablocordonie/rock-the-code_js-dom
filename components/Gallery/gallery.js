
const productTemplate = (product) => `
    <li class="rtc--swingman-products-gallery-item">
        <a href="${product.link}" class="rtc--swingman-products-gallery-card" role="link" aria-label="Ir a la ficha del siguiente producto: ${product.name}">
            <img src="${product.image}" alt="${product.name} role="img" aria-label="Imagen del siguiente producto: ${product.name}" class="rtc--swingman-products-gallery-card-img">
            <h3 class="rtc--swingman-products-gallery-card-h3">${product.name}</h3>
            <p>${product.price.toFixed(2).toString().split('.')} €</p>
        </a>
    </li>
    `;

const createGallery = (products) => {

    const productsList = document.createElement('ul');
    productsList.classList.add('rtc--swingman-products-gallery');

    for (const product of products) {
        productsList.innerHTML += productTemplate(product);
    }

    const productsGallery = document.createElement('article');
    productsGallery.classList.add('rtc--swingman-products');
    productsGallery.appendChild(productsList);

    const main = document.querySelector('main');

    main.appendChild(productsGallery);
    return main;

};

export const initGallery = (products) => {

    const main = document.querySelector('main');

    main.innerHTML = '';

    if (products.length === 0 || products.find((product) => product.name === undefined)) {
        const h2 = document.createElement('h2');
        h2.textContent = 'No se han encontrado los artículos especificados';
        h2.className = 'rtc--swingman-products-gallery-card-notfound';
        main.appendChild(h2);
    } else {
        createGallery(products);
    }
};
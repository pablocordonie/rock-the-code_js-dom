import swingmanProducts from '../../data/data.js';

const createProducts = (product) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = product.link;
    a.innerText = product.name;
    li.appendChild(a);

    //Completamos la información de los productos
    const img = document.createElement('img');
    img.classList.add('swingman-shirt');
    img.src = `${product.image}`;
    img.alt = product.name;
    a.appendChild(img);

    const p = document.createElement('p');
    p.textContent = `${product.price} €`;
    li.appendChild(p);

    return li;
};

export const galleryTemplate = () => {

    //Creamos la lista
    const ul = document.createElement('ul');
    ul.classList.add('swingman-gallery');

    const h2 = document.createElement('h2');
    h2.textContent = 'The Official Swingman Shirts';
    ul.appendChild(h2);

    //Almacenamos los productos;
    for (const product of swingmanProducts) {
        ul.appendChild(createProducts(product));
    }

    const main = document.querySelector('main');
    main.appendChild(ul);
    return main;

};
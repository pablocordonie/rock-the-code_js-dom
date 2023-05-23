import swingmanProducts from '../../data/data.js';

const createProducts = (product) => {
    const a = document.createElement('a');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const li = document.createElement('li');
    const p = document.createElement('p');

    li.classList.add('swingman-item');
    a.href = product.link;
    a.classList.add('swingman-shirt');
    h3.innerText = product.name;
    li.appendChild(a);
    a.appendChild(h3);

    //Completamos la información de los productos
    img.classList.add('swingman-shirt-img');
    img.src = `${product.image}`;
    img.alt = product.name;
    a.appendChild(img);

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
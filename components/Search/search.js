export const searchTemplate = () => {

    const article = document.createElement('article');
    article.classList.add('rtc--swingman-filters');

    const filtersContainer = document.createElement('div');
    filtersContainer.classList.add('rtc--swingman-filters-div');
    article.appendChild(filtersContainer);

    return article;
}
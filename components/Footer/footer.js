const socialWebs = [
    { web: 'facebook', image: './assets/facebook.png', link: 'https://es-es.facebook.com/' },
    { web: 'twitter', image: './assets/twitter.png', link: 'https://twitter.com/?lang=ES' },
    { web: 'instagram', image: './assets/instagram.png', link: 'https://www.instagram.com/' }
];

const socialWebTemplate = (socialWeb) => `
    <li class="rtc--swingman-footer-social_web-${socialWeb.web}">
        <a href="${socialWeb.link}" target="_blank">
            <img class="rtc--swingman-footer-social_web-img" src="${socialWeb.image}" alt="${socialWeb.web}">
        </a>
    </li>
`;

const createFooter = () => {
    const footer = document.querySelector('footer');

    const copyright = '@2023 RockTheCode Todos los derechos reservados';

    const socialWebsList = document.createElement('ul');
    socialWebsList.className = 'rtc--swingman-footer-social_webs';

    socialWebs.forEach((socialWeb) => socialWebsList.innerHTML += socialWebTemplate(socialWeb));

    const footerContainerTemplate = () => `
        <div class="rtc--swingman-footer_div">
            ${socialWebsList.outerHTML}
            <p>${copyright}</p>
        </div>
    `;

    footer.innerHTML += footerContainerTemplate();

    return footer;
};

export default createFooter;
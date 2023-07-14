const socialWebs = [
    { web: 'facebook', image: './assets/facebook.png', link: 'https://es-es.facebook.com/' },
    { web: 'twitter', image: './assets/twitter.png', link: 'https://twitter.com/?lang=ES' },
    { web: 'instagram', image: './assets/instagram.png', link: 'https://www.instagram.com/' }
];

const socialWebTemplate = (socialWeb) => `
    <li class="rtc--swingman-footer-social_web-${socialWeb.web}">
        <a href="${socialWeb.link}" class="rtc--swingman-footer-social_web-${socialWeb.web}-link" role="link" aria-label="Ir a ${socialWeb.web}.com" target="_blank">
            <img src="${socialWeb.image}" alt="${socialWeb.web}" class="rtc--swingman-footer-social_web-img" role="img" aria-label="Icono de ${socialWeb.web}">
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
        <div class="rtc--swingman-footer">
            ${socialWebsList.outerHTML}
            <p class="rtc--swingman-footer-copyright-p" role="paragraph" aria-label="${copyright}">${copyright}</p>
        </div>
    `;

    footer.innerHTML += footerContainerTemplate();

    return footer;
};

export default createFooter;
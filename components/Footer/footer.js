const socialWebs = ['facebook', 'twitter', 'instagram'];

const socialWebTemplate = (socialWeb) => `
    <li class="rtc--swingman-footer-social_web-${socialWeb}">${socialWeb}</li>
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
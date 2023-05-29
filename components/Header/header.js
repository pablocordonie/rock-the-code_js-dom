export const headerTemplate = () => {
    const header = document.querySelector('header');
    const divImg = document.createElement('div');
    const logoImg = document.createElement('img');

    divImg.classList.add('rtc--header-logo');
    logoImg.src = './assets/Swing-Logo-190613.png';
    logoImg.alt = 'Swing Brand';
    logoImg.classList.add('rtc--header-logo-img');
    divImg.appendChild(logoImg);
    header.appendChild(divImg);
    return header;
}
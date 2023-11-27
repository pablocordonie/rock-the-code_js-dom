const swingmanProducts = [
    {
        id: 1,
        name: 'Philadelphia 76ers Nike Icon Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116890/harden-sixers_u6qwca.jpg',
        link: 'https://24segons.es/es/product/james-harden-philadelphia-76ers-22-23-icon-edition-swingman-camiseta'
    },
    {
        id: 2,
        name: 'Phoenix Suns Nike Icon Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116889/booker-suns_t5hepr.jpg',
        link: 'https://24segons.es/es/product/devin-booker-phoenix-suns-20-21-icon-edition-swingman-camiseta'
    },
    {
        id: 3,
        name: 'Denver Nuggets Nike Icon Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116889/jokic-nuggets_wzyp9g.jpg',
        link: 'https://24segons.es/es/product/nikola-jokic-denver-nuggets-20-21-icon-swingman'
    },
    {
        id: 4,
        name: 'Milwaukee Bucks Nike Statement Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116889/antetokoumpo-bucks_c20hoy.jpg',
        link: 'https://24segons.es/es/product/swingman-giannis-milwaukee-bucks-statement-2021'
    },
    {
        id: 5,
        name: 'Charlotte Hornets Nike Icon Edition - Unisex',
        price: 104.9,
        seller: 'Basket World',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116889/ball-hornets_yx7iu6.jpg',
        link: 'https://basketworld.com/lamelo-ball-charlotte-hornets-icon-edition-swingman-jersey-22-23.html'
    },
    {
        id: 6,
        name: 'Boston Celtics Nike Statement Edition - Unisex',
        price: 104.9,
        seller: 'Basket World',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116888/tatum-celtics_ioyrvi.jpg',
        link: 'https://basketworld.com/jayson-tatum-boston-celtics-statement-edition-swingman-jersey.html'
    },
    {
        id: 7,
        name: 'Golden State Warriors Nike Icon Edition - Unisex',
        price: 104.9,
        seller: 'Basket World',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116889/curry-warriors_a7dlzt.jpg',
        link: 'https://basketworld.com/stephen-curry-golden-state-warriors-icon-edition-swingman-jersey-22-23.html'
    },
    {
        id: 8,
        name: 'Oklahoma City Thunder Nike Icon Edition - Unisex',
        price: 104.9,
        seller: 'Basket World',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116890/shai-thunder_otpb3z.jpg',
        link: 'https://basketworld.com/shai-gilgeous-alexander-oklahoma-city-thunder-icon-edition-swingman-jersey.html'
    },
    {
        id: 9,
        name: 'Los Angeles Lakers Nike City Edition - Unisex',
        price: 105,
        seller: 'Basket Revolution',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116889/james-lakers_pdkl8e.jpg',
        link: 'https://www.basketrevolution.es/equipos-baloncesto/nba/adulto/swingman/nike-nba-los-angeles-lakers-swingman-jersey-lebron-james-city-edition-23-24/'
    },
    {
        id: 10,
        name: 'San Antonio Spurs Nike Icon Edition - Unisex',
        price: 105,
        seller: 'Basket Revolution',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116889/wembanyama-spurs_hxqzhe.jpg',
        link: 'https://www.basketrevolution.es/equipos-baloncesto/nba/adulto/swingman/nike-nba-s-a-spurs-swingman-jersey-wembanyama-icon-edition-23-24/'
    },
    {
        id: 11,
        name: 'Utah Jazz Nike City Edition - Unisex',
        price: 105,
        seller: 'Basket Revolution',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116889/markkanen-jazz_umfeup.jpg',
        link: 'https://www.basketrevolution.es/equipos-baloncesto/nba/adulto/swingman/nike-nba-utah-jazz-swingman-jersey-lauri-markkanen-city-edition-23-24/'
    },
    {
        id: 12,
        name: 'Memphis Grizzlies Nike City Edition - Unisex',
        price: 105,
        seller: 'Basket Revolution',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116889/morant-grizzlies_ydszlv.jpg',
        link: 'https://www.basketrevolution.es/equipos-baloncesto/nba/adulto/swingman/nike-nba-memphis-grizzlies-swingman-jersey-ja-morant-city-edition-23-24/'
    },
    {
        id: 13,
        name: 'New York Knicks Nike City Edition - Unisex',
        price: 99.9,
        seller: 'KICKZ',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116888/randle-knicks_r93uoq.jpg',
        link: 'https://www.kickz.com/es/p/nike-camisetas-de-baloncesto-nba-new-york-knicks-dri-fit-city-edition-swingman-jersey-julius-randle-rush-blue-randle-julius/194833126.html'
    },
    {
        id: 14,
        name: 'Cleveland Cavaliers Nike City Edition - Unisex',
        price: 99.9,
        seller: 'KICKZ',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116888/mitchell-cavaliers_cwjmfw.jpg',
        link: 'https://www.kickz.com/es/p/nike-camisetas-de-baloncesto-nba-cleveland-cavaliers-dri-fit-city-edition-swingman-jersey-donovan-mitchell-team-crimson-mtlc-red-bronze-gym-red/210150144.html'
    },
    {
        id: 15,
        name: 'Toronto Raptors Nike City Edition - Unisex',
        price: 99.9,
        seller: 'KICKZ',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116888/siakam-raptors_iulhfm.jpg',
        link: 'https://www.kickz.com/es/p/nike-camisetas-de-baloncesto-nba-toronto-raptors-dri-fit-city-edition-swingman-jersey-pascal-siakam-club-gold-night-maroon/194842069.html'
    },
    {
        id: 16,
        name: 'Orlando Magic Nike Statement Edition - Unisex',
        price: 104.9,
        seller: 'KICKZ',
        image: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1701116888/wagner-magic_ejbugy.jpg',
        link: 'https://www.kickz.com/es/p/nike-camisetas-de-baloncesto-nba-orlando-magic-dri-fit-statement-swingman-jersey-franz-wagner-game-royal-wagner-franz/209776041.html'
    }
];

export default swingmanProducts;
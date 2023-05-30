const swingmanProducts = [
    {
        id: 1,
        name: 'Los Angeles Lakers Nike Icon Edition Gold Swingman Jersey - Lebron James - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-icon-edition-swingman-jersey-gold-lebron-james-unisex_ss4_p-13348378+u-fp3otbq191kx828hrd1i+v-5a9c2d0539404bff8535dc183e58a4f2.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/los-angeles-lakers/los-angeles-lakers-nike-icon-edition-swingman-jersey-gold-lebron-james-unisex/t-36586380+p-01697015753603+z-9-359281767?_ref=p-DLP:m-GRID:i-r0c0:po-0'
    },
    {
        id: 2,
        name: 'Milwaukee Bucks Jordan Statement Edition Black Swingman Jersey - Giannis Antetokounmpo - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/milwaukee-bucks/milwaukee-bucks-jordan-statement-edition-swingman-jersey-black-giannis-antetokounmpo-unisex_ss4_p-13365107+u-lnb0jqoc3lavokjfin0j+v-32a1fb591be144f99a6f8c1aada1ce5e.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/milwaukee-bucks/milwaukee-bucks-jordan-statement-edition-swingman-jersey-black-giannis-antetokounmpo-unisex/t-25702927+p-01259273504524+z-9-2766560052?_ref=p-DLP%3Am-GRID%3Ai-r5c1%3Apo-16'
    },
    {
        id: 3,
        name: 'Golden State Warriors Nike Association Edition White Swingman Jersey - Stephen Curry - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/golden-state-warriors/golden-state-warriors-nike-association-edition-swingman-jersey-white-stephen-curry-unisex_ss4_p-13348801+u-5k7hzqykx13ib75dknin+v-48661c059d8a43bcb09268072750902a.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/golden-state-warriors/golden-state-warriors-nike-association-edition-swingman-jersey-white-stephen-curry-unisex/t-36037330+p-45257059649731+z-9-3736601875?_ref=p-DLP:m-GRID:i-r2c2:po-8'
    },
    {
        id: 4,
        name: 'Chicago Bulls Jordan Statement Edition Black Swingman Jersey - DeMar DeRozan - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/chicago-bulls/chicago-bulls-jordan-statement-edition-swingman-jersey-black-demar-derozan-unisex_ss4_p-13363627+u-1g6n4m0kg0kmra74hxr5+v-5dd060e7f6194c5d919260b21d8c7ebc.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/chicago-bulls/chicago-bulls-jordan-statement-edition-swingman-jersey-black-demar-derozan-unisex/t-36929567+p-90039251587356+z-9-2856343593?_ref=p-DLP%3Am-GRID%3Ai-r4c0%3Apo-12'
    },
    {
        id: 5,
        name: 'Boston Celtics Nike Icon Edition Green Swingman Jersey - Jayson Tatum - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/boston-celtics/boston-celtics-nike-icon-edition-swingman-jersey-kelly-green-jayson-tatum-unisex_ss4_p-13349306+u-15eykfryh8je05mewbr5+v-19cec5b633d847d0a24a79d1b30e1de1.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/boston-celtics/boston-celtics-nike-icon-edition-swingman-jersey-kelly-green-jayson-tatum-unisex/t-14588308+p-23255815540311+z-9-2973948868?_ref=p-DLP%3Am-GRID%3Ai-r3c2%3Apo-11'
    },
    {
        id: 6,
        name: 'Philadelphia 76ers Jordan Statement Edition Red Swingman Jersey - Joel Embiid - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/philadelphia-76ers/philadelphia-76ers-jordan-statement-edition-swingman-jersey-red-joel-embiid-unisex_ss4_p-13363835+u-11cpjsy9v7nb21ptdbbp+v-35babf26709340e8a0dbe9c58778c4ed.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/philadelphia-76ers/philadelphia-76ers-jordan-statement-edition-swingman-jersey-red-joel-embiid-unisex/t-47036489+p-01365817473175+z-9-191680258?_ref=p-DLP%3Am-GRID%3Ai-r0c0%3Apo-0'
    },
    {
        id: 7,
        name: 'Sacramento Kings Nike Icon Edition Purple Swingman Jersey - Domantas Sabonis - Unisex',
        price: 100.00.toFixed(2),
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/sacramento-kings/sacramento-kings-nike-icon-edition-swingman-jersey-purple-domantas-sabonis-mens_ss4_p-13317173+u-inbyx7mujbsb7fs8c8qr+v-93849046473a472da1aa4f2b0027c0ee.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/sacramento-kings/sacramento-kings-nike-icon-edition-swingman-jersey-purple-domantas-sabonis-mens/t-14813160+p-56362545180181+z-9-2881658520?_ref=p-DLP%3Am-GRID%3Ai-r7c2%3Apo-23'
    },
    {
        id: 8,
        name: 'Denver Nuggets Nike Association Edition White Swingman Jersey - Nikola Jokic - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/denver-nuggets/denver-nuggets-nike-association-edition-swingman-jersey-white-nikola-jokic-unisex_ss4_p-13348808+u-rfcis36k367hv1l7oc12+v-10d7f9d2c92d402ea4b4f4a61aa957a4.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/denver-nuggets/denver-nuggets-nike-association-edition-swingman-jersey-white-nikola-jokic-unisex/t-14367304+p-3458032620935+z-8-3793748406?_ref=p-DLP%3Am-GRID%3Ai-r2c2%3Apo-8'
    },
    {
        id: 9,
        name: 'Miami Heat Jordan Statement Edition Red Swingman Jersey - Jimmy Butler - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/miami-heat/miami-heat-jordan-statement-edition-swingman-jersey-red-jimmy-butler-unisex_ss4_p-13365072+u-gippfentzzpnbqqfu1dl+v-bac1e1f715ff493abc2ec2007811c3f2.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/miami-heat/miami-heat-jordan-statement-edition-swingman-jersey-red-jimmy-butler-unisex/t-36032948+p-12257039384402+z-9-198678896?_ref=p-DLP%3Am-GRID%3Ai-r2c0%3Apo-6'
    },
    {
        id: 10,
        name: 'Memphis Grizzlies City Edition Nike Dri-FIT Black Swingman Jersey - Ja Morant - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6bd43e59-13bc-4bf3-9d83-11b6b2e3a159/ja-morant-memphis-grizzlies-city-edition-camiseta-dri-fit-nba-swingman-zdhNSr.png',
        link: 'https://www.nike.com/es/t/ja-morant-memphis-grizzlies-city-edition-camiseta-dri-fit-nba-swingman-zdhNSr/DO9598-010'
    },
    {
        id: 11,
        name: 'Milwaukee Bucks Icon Edition Nike Green Swingman Jersey - Giannis Antetokounmpo - Kids',
        price: 69.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/yj263ggi8stxj1frgp8p/icon-edition-swingman-jersey-camiseta-de-la-nba-nino-a-zsmqGL.png',
        link: 'https://www.nike.com/es/t/icon-edition-swingman-jersey-camiseta-de-la-nba-nino-a-zsmqGL/AA4539-323'
    },
    {
        id: 12,
        name: 'Los Angeles Clippers City Edition Nike Dri-FIT Black Swingman Jersey - Kawhi Leonard - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a53dede-ef7e-4c08-b40f-19cb3c0d373f/kawhi-leonard-los-angeles-clippers-city-edition-camiseta-dri-fit-nba-swingman-L2bRMv.png',
        link: 'https://www.nike.com/es/t/kawhi-leonard-los-angeles-clippers-city-edition-camiseta-dri-fit-nba-swingman-L2bRMv/DO9596-010'
    },
    {
        id: 13,
        name: 'Philadelphia 76ers City Edition Nike Dri-FIT White Swingman Jersey - James Harden  - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37579661-d9cc-4e3d-9541-d73dcea15765/james-harden-philadelphia-76ers-city-edition-camiseta-dri-fit-nba-swingman-tzNtG4.png',
        link: 'https://www.nike.com/es/t/james-harden-philadelphia-76ers-city-edition-camiseta-dri-fit-nba-swingman-tzNtG4/DO9606-107'
    },
    {
        id: 14,
        name: 'Phoenix Suns City Edition Nike Dri-FIT Teal Swingman Jersey - Devin Booker - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e983af3-8d3e-47b1-b0d1-c22daf5cca90/devin-booker-phoenix-suns-city-edition-camiseta-dri-fit-nba-swingman-jPV4nH.png',
        link: 'https://www.nike.com/es/t/devin-booker-phoenix-suns-city-edition-camiseta-dri-fit-nba-swingman-jPV4nH/DO9607-416'
    },
    {
        id: 15,
        name: 'Detroit Pistons Icon Edition Nike Dri-FIT NBA Swingman Jersey - Cade Cunningham - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6251b22f-b79b-49c5-8771-701680813c25/detroit-pistons-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-jkfc2z.png',
        link: 'https://www.nike.com/es/t/detroit-pistons-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-jkfc2z/DN2004-401'
    },
    {
        id: 16,
        name: 'New Orleans Pelicans Icon Edition Nike Dri-FIT NBA Swingman Jersey - Zion Williamson - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f2e466e-a36f-4f90-80e0-a6a157494645/new-orleans-pelicans-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-ZdvdMc.png',
        link: 'https://www.nike.com/es/t/new-orleans-pelicans-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-ZdvdMc/DN2014-419'
    },
    {
        id: 17,
        name: 'Toronto Raptors Icon Edition Nike Dri-FIT NBA Swingman Jersey - Pascal Siakam - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a11c3942-ef55-435f-a83f-3f9ae50e466c/toronto-raptors-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-tTCWcz.png',
        link: 'https://www.nike.com/es/t/toronto-raptors-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-tTCWcz/DN2023-657'
    },
    {
        id: 18,
        name: 'Utah Jazz Icon Edition Nike Dri-FIT NBA Swingman - Donovan Mitchell - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3926f867-4821-4ee5-926f-bdffde837d15/utah-jazz-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-ShCR4C.png',
        link: 'https://www.nike.com/es/t/utah-jazz-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-ShCR4C/DN2024-729'
    },
    {
        id: 19,
        name: 'New York Knicks City Edition Swingman Jersey - Julius Randle - Unisex',
        price: 94.90.toFixed(2),
        seller: 'Basket World',
        image: 'https://basketworld.com/22548-home_default/julius-randle-new-york-knicks-city-edition-swingman-jersey-22-23.jpg',
        link: 'https://basketworld.com/julius-randle-new-york-knicks-city-edition-swingman-jersey-22-23.html'
    },
    {
        id: 20,
        name: 'Los Angeles Clippers Icon Edition Swingman Jersey - Paul George - Unisex',
        price: 94.90.toFixed(2),
        seller: 'Basket World',
        image: 'https://basketworld.com/22627-home_default/paul-george-los-angeles-clippers-icon-edition-swingman-jersey-22-23.jpg',
        link: 'https://basketworld.com/paul-george-los-angeles-clippers-icon-edition-swingman-jersey-22-23.html'
    },
    {
        id: 21,
        name: 'Utah Jazz Statement Edition Swingman Jersey - Jordan Clarkson - Kids',
        price: 74.90.toFixed(2),
        seller: 'Basket World',
        image: 'https://basketworld.com/22169-home_default/jordan-clarkson-utah-jazz-statement-edition-swingman-jersey-22-23-junior.jpg',
        link: 'https://basketworld.com/jordan-clarkson-utah-jazz-statement-edition-swingman-jersey-22-23-junior.html'
    },
    {
        id: 22,
        name: 'Miami Heat Classic Edition Swingman Jersey - Tyler Herro - Kids',
        price: 74.90.toFixed(2),
        seller: 'Basket World',
        image: 'https://basketworld.com/22129-home_default/tyler-herro-miami-heat-classic-edition-swingman-jersey-22-23-junior.jpg',
        link: 'https://basketworld.com/tyler-herro-miami-heat-classic-edition-swingman-jersey-22-23-junior.html'
    },
    {
        id: 23,
        name: 'Charlotte Hornets Icon Edition Swingman Jersey - Lamelo Ball - Unisex',
        price: 94.90.toFixed(2),
        seller: 'Basket World',
        image: 'https://basketworld.com/21062-home_default/lamelo-ball-charlotte-hornets-icon-edition-swingman-jersey-22-23.jpg',
        link: 'https://basketworld.com/lamelo-ball-charlotte-hornets-icon-edition-swingman-jersey-22-23.html'
    },
    {
        id: 24,
        name: 'Los Angeles Lakers Association Edition Swingman Jersey - Anthony Davis - Unisex',
        price: 94.90.toFixed(2),
        seller: 'Basket World',
        image: 'https://basketworld.com/22291-home_default/anthony-davis-los-angeles-lakers-association-edition-swingman-jersey-22-23.jpg',
        link: 'https://basketworld.com/anthony-davis-los-angeles-lakers-association-edition-swingman-jersey-22-23.html'
    },
    {
        id: 25,
        name: 'Alex Caruso Chicago Bulls Icon Edition Swingman Jersey - Unisex',
        price: 94.90.toFixed(2),
        seller: 'Basket World',
        image: 'https://basketworld.com/21856-home_default/alex-caruso-chicago-bulls-icon-edition-swingman-jersey-22-23.jpg',
        link: 'https://basketworld.com/alex-caruso-chicago-bulls-icon-edition-swingman-jersey-22-23.html'
    },
    {
        id: 26,
        name: 'Philadelphia 76ers Association Edition Swingman Jersey - James Harden - Kids',
        price: 74.90.toFixed(2),
        seller: 'Basket World',
        image: 'https://basketworld.com/21964-home_default/james-harden-philadelphia-76ers-association-edition-swingman-jersey-22-23-junior.jpg',
        link: 'https://basketworld.com/james-harden-philadelphia-76ers-association-edition-swingman-jersey-22-23-junior.html'
    },

    {
        id: 27,
        name: 'Milwaukee Bucks Icon Edition Swingman Jersey - Giannis Antetokoumpo - Unisex',
        price: 94.90.toFixed(2),
        seller: 'Basket World',
        image: 'https://basketworld.com/22287-home_default/giannis-antetokounmpo-milwaukee-bucks-icon-edition-swingman-jersey-22-23.jpg',
        link: 'https://basketworld.com/giannis-antetokounmpo-milwaukee-bucks-icon-edition-swingman-jersey-22-23.html'
    },
    {
        id: 28,
        name: 'Cleveland Cavaliers 2003-04 Icon Edition Swingman Jersey - LeBron James - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/13181-home_default/swingman-lebron-james.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-lebron-james.html'
    },
    {
        id: 29,
        name: 'New York Knicks 1998-99 Icon Edition Swingman Jersey - Latrell Sprewell - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/12823-home_default/swingman-nba-latrell-sprewell-new-yorks-knicks-199899.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-nba-latrell-sprewell-new-yorks-knicks-199899.html'
    },
    {
        id: 30,
        name: 'Denver Nuggets 2005-06 Icon Edition Swingman Jersey - Carmelo Anthony - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/13168-home_default/swingman-carmelo-anthony.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-carmelo-anthony.html'
    },
    {
        id: 31,
        name: 'Portland Trail Blazers 1995-96 Icon Edition Swingman Jersey - Arvydas Sabonis - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/12796-home_default/swingman-nba-arvydas-sabonis-portland-trail-blazers.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-nba-arvydas-sabonis-portland-trail-blazers.html'
    },
    {
        id: 32,
        name: 'Golden State Warriors 2009-10 Icon Edition Swingman Jersey - Stephen Curry - Kids',
        price: 94.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/12962-home_default/swingman-nba-ninos-stephen-curry-golden-state-warriors.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-nba-ninos-stephen-curry-golden-state-warriors.html'
    },
    {
        id: 33,
        name: 'New Orleans Hornets 2004-05 Icon Edition Swingman Jersey - Chris Paul - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/11102-home_default/swingman-nba-chris-paul-nola-.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-nba-chris-paul-nola-.html'
    },
    {
        id: 34,
        name: 'Orlando Magic 1994-95 Icon Edition Swingman Jersey - Penny Hardaway - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/9614-home_default/swingman-anfernee-penny-hardaway-orlando-magic.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-anfernee-penny-hardaway-orlando-magic.html'
    },
    {
        id: 35,
        name: 'Phoenix Suns 1996-97 Icon Edition Swingman Edition - Steve Nash - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/10589-home_default/swingman-steve-nash-phoenix-suns-9697-morada.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-steve-nash-phoenix-suns-9697-morada.html'
    },
    {
        id: 36,
        name: 'Detroit Pistons 1994-95 Icon Edition Swingman Edition - Grant Hill - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/9612-home_default/swingman-grant-hill-detroit-pistons.jpg',
        link: 'https://www.madbasket.com/es/detroit-pistons/swingman-grant-hill-detroit-pistons.html'
    }
];

export default swingmanProducts;
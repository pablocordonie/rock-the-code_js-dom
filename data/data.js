const swingmanProducts = [
    {
        id: 1,
        name: 'Los Angeles Lakers Nike Icon Edition - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-icon-edition-swingman-jersey-gold-lebron-james-unisex_ss4_p-13348378+u-fp3otbq191kx828hrd1i+v-5a9c2d0539404bff8535dc183e58a4f2.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/los-angeles-lakers/los-angeles-lakers-nike-icon-edition-swingman-jersey-gold-lebron-james-unisex/t-36586380+p-01697015753603+z-9-359281767?_ref=p-DLP:m-GRID:i-r0c0:po-0'
    },
    {
        id: 2,
        name: 'Milwaukee Bucks Jordan Statement Edition - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/milwaukee-bucks/milwaukee-bucks-jordan-statement-edition-swingman-jersey-black-giannis-antetokounmpo-unisex_ss4_p-13365107+u-lnb0jqoc3lavokjfin0j+v-32a1fb591be144f99a6f8c1aada1ce5e.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/milwaukee-bucks/milwaukee-bucks-jordan-statement-edition-swingman-jersey-black-giannis-antetokounmpo-unisex/t-25702927+p-01259273504524+z-9-2766560052?_ref=p-DLP%3Am-GRID%3Ai-r5c1%3Apo-16'
    },
    {
        id: 3,
        name: 'Golden State Warriors Nike Association Edition - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/golden-state-warriors/golden-state-warriors-nike-association-edition-swingman-jersey-white-stephen-curry-unisex_ss4_p-13348801+u-5k7hzqykx13ib75dknin+v-48661c059d8a43bcb09268072750902a.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/golden-state-warriors/golden-state-warriors-nike-association-edition-swingman-jersey-white-stephen-curry-unisex/t-36037330+p-45257059649731+z-9-3736601875?_ref=p-DLP:m-GRID:i-r2c2:po-8'
    },
    {
        id: 4,
        name: 'Chicago Bulls Jordan Statement Edition - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/chicago-bulls/chicago-bulls-jordan-statement-edition-swingman-jersey-black-demar-derozan-unisex_ss4_p-13363627+u-1g6n4m0kg0kmra74hxr5+v-5dd060e7f6194c5d919260b21d8c7ebc.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/chicago-bulls/chicago-bulls-jordan-statement-edition-swingman-jersey-black-demar-derozan-unisex/t-36929567+p-90039251587356+z-9-2856343593?_ref=p-DLP%3Am-GRID%3Ai-r4c0%3Apo-12'
    },
    {
        id: 5,
        name: 'Boston Celtics Nike Icon Edition - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/boston-celtics/boston-celtics-nike-icon-edition-swingman-jersey-kelly-green-jayson-tatum-unisex_ss4_p-13349306+u-15eykfryh8je05mewbr5+v-19cec5b633d847d0a24a79d1b30e1de1.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/boston-celtics/boston-celtics-nike-icon-edition-swingman-jersey-kelly-green-jayson-tatum-unisex/t-14588308+p-23255815540311+z-9-2973948868?_ref=p-DLP%3Am-GRID%3Ai-r3c2%3Apo-11'
    },
    {
        id: 6,
        name: 'Philadelphia 76ers Jordan Statement Edition - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/philadelphia-76ers/philadelphia-76ers-jordan-statement-edition-swingman-jersey-red-joel-embiid-unisex_ss4_p-13363835+u-11cpjsy9v7nb21ptdbbp+v-35babf26709340e8a0dbe9c58778c4ed.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/philadelphia-76ers/philadelphia-76ers-jordan-statement-edition-swingman-jersey-red-joel-embiid-unisex/t-47036489+p-01365817473175+z-9-191680258?_ref=p-DLP%3Am-GRID%3Ai-r0c0%3Apo-0'
    },
    {
        id: 7,
        name: 'Sacramento Kings Nike Icon Edition - Unisex',
        price: 100,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/sacramento-kings/sacramento-kings-nike-icon-edition-swingman-jersey-purple-domantas-sabonis-mens_ss4_p-13317173+u-inbyx7mujbsb7fs8c8qr+v-93849046473a472da1aa4f2b0027c0ee.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/sacramento-kings/sacramento-kings-nike-icon-edition-swingman-jersey-purple-domantas-sabonis-mens/t-14813160+p-56362545180181+z-9-2881658520?_ref=p-DLP%3Am-GRID%3Ai-r7c2%3Apo-23'
    },
    {
        id: 8,
        name: 'Denver Nuggets Nike Association Edition - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/denver-nuggets/denver-nuggets-nike-association-edition-swingman-jersey-white-nikola-jokic-unisex_ss4_p-13348808+u-rfcis36k367hv1l7oc12+v-10d7f9d2c92d402ea4b4f4a61aa957a4.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/denver-nuggets/denver-nuggets-nike-association-edition-swingman-jersey-white-nikola-jokic-unisex/t-14367304+p-3458032620935+z-8-3793748406?_ref=p-DLP%3Am-GRID%3Ai-r2c2%3Apo-8'
    },
    {
        id: 9,
        name: 'Miami Heat Jordan Statement Edition - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/miami-heat/miami-heat-jordan-statement-edition-swingman-jersey-red-jimmy-butler-unisex_ss4_p-13365072+u-gippfentzzpnbqqfu1dl+v-bac1e1f715ff493abc2ec2007811c3f2.jpg?_hv=2&w=340',
        link: 'https://www.nbastore.eu/es/miami-heat/miami-heat-jordan-statement-edition-swingman-jersey-red-jimmy-butler-unisex/t-36032948+p-12257039384402+z-9-198678896?_ref=p-DLP%3Am-GRID%3Ai-r2c0%3Apo-6'
    },
    {
        id: 10,
        name: 'Memphis Grizzlies Nike Dri-FIT City Edition - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6bd43e59-13bc-4bf3-9d83-11b6b2e3a159/ja-morant-memphis-grizzlies-city-edition-camiseta-dri-fit-nba-swingman-zdhNSr.png',
        link: 'https://www.nike.com/es/t/ja-morant-memphis-grizzlies-city-edition-camiseta-dri-fit-nba-swingman-zdhNSr/DO9598-010'
    },
    {
        id: 11,
        name: 'Milwaukee Bucks Nike Icon Edition - Kids',
        price: 69.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/yj263ggi8stxj1frgp8p/icon-edition-swingman-jersey-camiseta-de-la-nba-nino-a-zsmqGL.png',
        link: 'https://www.nike.com/es/t/icon-edition-swingman-jersey-camiseta-de-la-nba-nino-a-zsmqGL/AA4539-323'
    },
    {
        id: 12,
        name: 'Los Angeles Clippers Nike Dri-FIT City Edition - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a53dede-ef7e-4c08-b40f-19cb3c0d373f/kawhi-leonard-los-angeles-clippers-city-edition-camiseta-dri-fit-nba-swingman-L2bRMv.png',
        link: 'https://www.nike.com/es/t/kawhi-leonard-los-angeles-clippers-city-edition-camiseta-dri-fit-nba-swingman-L2bRMv/DO9596-010'
    },
    {
        id: 13,
        name: 'Philadelphia 76ers Nike Dri-FIT City Edition - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37579661-d9cc-4e3d-9541-d73dcea15765/james-harden-philadelphia-76ers-city-edition-camiseta-dri-fit-nba-swingman-tzNtG4.png',
        link: 'https://www.nike.com/es/t/james-harden-philadelphia-76ers-city-edition-camiseta-dri-fit-nba-swingman-tzNtG4/DO9606-107'
    },
    {
        id: 14,
        name: 'Phoenix Suns Nike Dri-FIT City Edition - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e983af3-8d3e-47b1-b0d1-c22daf5cca90/devin-booker-phoenix-suns-city-edition-camiseta-dri-fit-nba-swingman-jPV4nH.png',
        link: 'https://www.nike.com/es/t/devin-booker-phoenix-suns-city-edition-camiseta-dri-fit-nba-swingman-jPV4nH/DO9607-416'
    },
    {
        id: 15,
        name: 'Detroit Pistons Nike Dri-FIT Icon Edition - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6251b22f-b79b-49c5-8771-701680813c25/detroit-pistons-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-jkfc2z.png',
        link: 'https://www.nike.com/es/t/detroit-pistons-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-jkfc2z/DN2004-401'
    },
    {
        id: 16,
        name: 'New Orleans Pelicans Nike Dri-FIT Icon Edition - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f2e466e-a36f-4f90-80e0-a6a157494645/new-orleans-pelicans-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-ZdvdMc.png',
        link: 'https://www.nike.com/es/t/new-orleans-pelicans-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-ZdvdMc/DN2014-419'
    },
    {
        id: 17,
        name: 'Toronto Raptors Nike Dri-FIT Icon Edition - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a11c3942-ef55-435f-a83f-3f9ae50e466c/toronto-raptors-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-tTCWcz.png',
        link: 'https://www.nike.com/es/t/toronto-raptors-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-tTCWcz/DN2023-657'
    },
    {
        id: 18,
        name: 'Utah Jazz Nike Dri-FIT Icon Edition - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3926f867-4821-4ee5-926f-bdffde837d15/utah-jazz-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-ShCR4C.png',
        link: 'https://www.nike.com/es/t/utah-jazz-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-ShCR4C/DN2024-729'
    },
    {
        id: 19,
        name: 'Philadelphia 76ers Nike Icon Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/168629-home_default/james-harden-philadelphia-76ers-22-23-icon-edition-swingman-camiseta.jpg',
        link: 'https://24segons.es/es/product/james-harden-philadelphia-76ers-22-23-icon-edition-swingman-camiseta'
    },
    {
        id: 20,
        name: 'Golden State Warriors Nike Alternative Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/123912-home_default/camiseta-stephen-curry-warriors-swingman-alternative.jpg',
        link: 'https://24segons.es/es/product/camiseta-stephen-curry-warriors-swingman-alternative'
    },
    {
        id: 21,
        name: 'New York Knicks Nike Icon Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/122569-home_default/camiseta-swingman-knicks-rj-barrett.jpg',
        link: 'https://24segons.es/es/product/camiseta-swingman-knicks-rj-barrett'
    },
    {
        id: 22,
        name: 'Los Angeles Clippers Nike Association Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/129011-home_default/swingman-kawhi-leonard-clippers-association.jpg',
        link: 'https://24segons.es/es/product/swingman-kawhi-leonard-clippers-association'
    },
    {
        id: 23,
        name: 'Minnesota Timberwolves Nike Icon Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/129073-home_default/swingman-anthony-towns-timberwolves-icon.jpg',
        link: 'https://24segons.es/es/product/swingman-anthony-towns-timberwolves-icon'
    },
    {
        id: 24,
        name: 'Phoenix Suns Nike Icon Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/131391-home_default/devin-booker-phoenix-suns-20-21-icon-edition-swingman-camiseta.jpg',
        link: 'https://24segons.es/es/product/devin-booker-phoenix-suns-20-21-icon-edition-swingman-camiseta'
    },
    {
        id: 25,
        name: 'Denver Nuggets Nike Icon Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/131397-home_default/nikola-jokic-denver-nuggets-20-21-icon-swingman.jpg',
        link: 'https://24segons.es/es/product/nikola-jokic-denver-nuggets-20-21-icon-swingman'
    },
    {
        id: 26,
        name: 'Dallas Mavericks Nike Association Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/134486-home_default/hombre-camiseta-luka-doncic-dallas-mavericks-association-edition.jpg',
        link: 'https://24segons.es/es/product/hombre-camiseta-luka-doncic-dallas-mavericks-association-edition'
    },

    {
        id: 27,
        name: 'Milwaukee Bucks Nike Statement Edition - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/130973-home_default/swingman-giannis-milwaukee-bucks-statement-2021.jpg',
        link: 'https://24segons.es/es/product/swingman-giannis-milwaukee-bucks-statement-2021'
    },
    {
        id: 28,
        name: 'Cleveland Cavaliers 2003-04 Nike Icon Edition - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/13181-home_default/swingman-lebron-james.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-lebron-james.html'
    },
    {
        id: 29,
        name: 'New York Knicks 1998-99 Nike Icon Edition - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/12823-home_default/swingman-nba-latrell-sprewell-new-yorks-knicks-199899.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-nba-latrell-sprewell-new-yorks-knicks-199899.html'
    },
    {
        id: 30,
        name: 'Denver Nuggets 2005-06 Nike Icon Edition - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/13168-home_default/swingman-carmelo-anthony.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-carmelo-anthony.html'
    },
    {
        id: 31,
        name: 'Portland Trail Blazers 1995-96 Nike Icon Edition - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/12796-home_default/swingman-nba-arvydas-sabonis-portland-trail-blazers.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-nba-arvydas-sabonis-portland-trail-blazers.html'
    },
    {
        id: 32,
        name: 'Golden State Warriors 2009-10 Nike Icon Edition - Kids',
        price: 94.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/12962-home_default/swingman-nba-ninos-stephen-curry-golden-state-warriors.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-nba-ninos-stephen-curry-golden-state-warriors.html'
    },
    {
        id: 33,
        name: 'New Orleans Hornets 2004-05 Nike Icon Edition - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/11102-home_default/swingman-nba-chris-paul-nola-.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-nba-chris-paul-nola-.html'
    },
    {
        id: 34,
        name: 'Orlando Magic 1994-95 Nike Icon Edition - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/9614-home_default/swingman-anfernee-penny-hardaway-orlando-magic.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-anfernee-penny-hardaway-orlando-magic.html'
    },
    {
        id: 35,
        name: 'Phoenix Suns 1996-97 Nike Icon Edition - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/10589-home_default/swingman-steve-nash-phoenix-suns-9697-morada.jpg',
        link: 'https://www.madbasket.com/es/swingman-nba/swingman-steve-nash-phoenix-suns-9697-morada.html'
    },
    {
        id: 36,
        name: 'Detroit Pistons 1994-95 Nike Icon Edition - Unisex',
        price: 109.95,
        seller: 'Madbasket',
        image: 'https://www.madbasket.com/9612-home_default/swingman-grant-hill-detroit-pistons.jpg',
        link: 'https://www.madbasket.com/es/detroit-pistons/swingman-grant-hill-detroit-pistons.html'
    }
];

export default swingmanProducts;
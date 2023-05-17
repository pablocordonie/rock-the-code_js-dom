const products = [
    {
        name: 'Los Angeles Lakers Nike Icon Edition Swingman Jersey - Lebron James - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-icon-edition-swingman-jersey-gold-lebron-james-unisex_ss4_p-13348378+u-fp3otbq191kx828hrd1i+v-5a9c2d0539404bff8535dc183e58a4f2.jpg?_hv=2&w=340'
    },
    {
        name: 'Milwaukee Bucks Jordan Statement Edition Swingman Jersey - Giannis Antetokounmpo - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/milwaukee-bucks/milwaukee-bucks-jordan-statement-edition-swingman-jersey-black-giannis-antetokounmpo-unisex_ss4_p-13365107+u-lnb0jqoc3lavokjfin0j+v-32a1fb591be144f99a6f8c1aada1ce5e.jpg?_hv=2&w=340'
    },
    {
        name: 'Golden State Warriors Nike Association Edition Swingman Jersey - Stephen Curry - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/golden-state-warriors/golden-state-warriors-nike-association-edition-swingman-jersey-white-stephen-curry-unisex_ss4_p-13348801+u-5k7hzqykx13ib75dknin+v-48661c059d8a43bcb09268072750902a.jpg?_hv=2&w=340'
    },
    {
        name: 'Chicago Bulls Jordan Statement Edition Swingman Jersey - DeMar DeRozan - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/chicago-bulls/chicago-bulls-jordan-statement-edition-swingman-jersey-black-demar-derozan-unisex_ss4_p-13363627+u-1g6n4m0kg0kmra74hxr5+v-5dd060e7f6194c5d919260b21d8c7ebc.jpg?_hv=2&w=340'
    },
    {
        name: 'Boston Celtics Nike Icon Edition Swingman Jersey - Jayson Tatum - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/boston-celtics/boston-celtics-nike-icon-edition-swingman-jersey-kelly-green-jayson-tatum-unisex_ss4_p-13349306+u-15eykfryh8je05mewbr5+v-19cec5b633d847d0a24a79d1b30e1de1.jpg?_hv=2&w=340'
    },
    {
        name: 'Philadelphia 76ers Jordan Statement Edition Swingman Jersey - Joel Embiid - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/philadelphia-76ers/philadelphia-76ers-jordan-statement-edition-swingman-jersey-red-joel-embiid-unisex_ss4_p-13363835+u-11cpjsy9v7nb21ptdbbp+v-35babf26709340e8a0dbe9c58778c4ed.jpg?_hv=2&w=340'
    },
    {
        name: 'Sacramento Kings Nike Icon Edition Swingman Jersey - Domantas Sabonis - Mens',
        price: 100,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/sacramento-kings/sacramento-kings-nike-icon-edition-swingman-jersey-purple-domantas-sabonis-mens_ss4_p-13317173+u-inbyx7mujbsb7fs8c8qr+v-93849046473a472da1aa4f2b0027c0ee.jpg?_hv=2&w=340'
    },
    {
        name: 'Denver Nuggets Nike Association Edition Swingman Jersey - Nikola Jokic - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/denver-nuggets/denver-nuggets-nike-association-edition-swingman-jersey-white-nikola-jokic-unisex_ss4_p-13348808+u-rfcis36k367hv1l7oc12+v-10d7f9d2c92d402ea4b4f4a61aa957a4.jpg?_hv=2&w=340'
    },
    {
        name: 'Phoenix Suns Jordan Statement Edition Swingman Jersey - Kevin Durant - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/phoenix-suns/phoenix-suns-jordan-statement-edition-swingman-jersey-black-kevin-durant-unisex_ss4_p-13363804+u-1b9efrdncfko621s2osx+v-1ff413b0833e482fa2689d5bb1296631.jpg?_hv=2&w=340'
    },
    {
        name: 'Miami Heat Jordan Statement Edition Swingman Jersey - Jimmy Butler - Unisex',
        price: 94.95,
        seller: 'NBA Store',
        image: 'https://images.footballfanatics.com/miami-heat/miami-heat-jordan-statement-edition-swingman-jersey-red-jimmy-butler-unisex_ss4_p-13365072+u-gippfentzzpnbqqfu1dl+v-bac1e1f715ff493abc2ec2007811c3f2.jpg?_hv=2&w=340'
    },
    {
        name: 'Memphis Grizzlies City Edition Nike Dri-FIT Swingman Jersey - Ja Morant - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6bd43e59-13bc-4bf3-9d83-11b6b2e3a159/ja-morant-memphis-grizzlies-city-edition-camiseta-dri-fit-nba-swingman-zdhNSr.png'
    },
    {
        name: 'Milwaukee Bucks Icon Edition Nike Swingman Jersey - Giannis Antetokounmpo - Kids',
        price: 69.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/yj263ggi8stxj1frgp8p/icon-edition-swingman-jersey-camiseta-de-la-nba-nino-a-zsmqGL.png'
    },
    {
        name: 'Los Angeles Clippers City Edition Nike Dri-FIT Swingman Jersey - Kawhi Leonard - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a53dede-ef7e-4c08-b40f-19cb3c0d373f/kawhi-leonard-los-angeles-clippers-city-edition-camiseta-dri-fit-nba-swingman-L2bRMv.png'
    },
    {
        name: 'Philadelphia 76ers City Edition Nike Dri-FIT Swingman Jersey - James Harden  - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37579661-d9cc-4e3d-9541-d73dcea15765/james-harden-philadelphia-76ers-city-edition-camiseta-dri-fit-nba-swingman-tzNtG4.png'
    },
    {
        name: 'Phoenix Suns City Edition Nike Dri-FIT Swingman Jersey - Devin Booker - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e983af3-8d3e-47b1-b0d1-c22daf5cca90/devin-booker-phoenix-suns-city-edition-camiseta-dri-fit-nba-swingman-jPV4nH.png'
    },
    {
        name: 'Detroit Pistons Icon Edition Nike Dri-FIT NBA Swingman Jersey - Cade Cunningham - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6251b22f-b79b-49c5-8771-701680813c25/detroit-pistons-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-jkfc2z.png'
    },
    {
        name: 'New Orleans Pelicans Icon Edition Nike Dri-FIT NBA Swingman Jersey - Zion Williamson - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f2e466e-a36f-4f90-80e0-a6a157494645/new-orleans-pelicans-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-ZdvdMc.png'
    },
    {
        name: 'Toronto Raptors Icon Edition Nike Dri-FIT NBA Swingman Jersey - Pascal Siakam - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a11c3942-ef55-435f-a83f-3f9ae50e466c/toronto-raptors-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-tTCWcz.png'
    },
    {
        name: 'Utah Jazz Icon Edition Nike Dri-FIT NBA Swingman - Donovan Mitchell - Unisex',
        price: 99.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3926f867-4821-4ee5-926f-bdffde837d15/utah-jazz-icon-edition-2022-23-camiseta-dri-fit-nba-swingman-ShCR4C.png'
    },
    {
        name: 'Chicago Bulls Icon Edition Nike Dri-FIT NBA Swingman Jersey - Zach LaVine - Kids',
        price: 84.99,
        seller: 'Nike',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/126dfa70-0c60-440c-8ab8-356ae1348152/chicago-bulls-camiseta-dri-fit-nba-swingman-nino-a-VDkq7c.png'
    },
    {
        name: 'New York Knicks City Edition Swingman Jersey - Julius Randle - Unisex',
        price: 94.90,
        seller: 'Basket World',
        image: 'https://basketworld.com/22548-home_default/julius-randle-new-york-knicks-city-edition-swingman-jersey-22-23.jpg'
    },
    {
        name: 'Los Angeles Clippers Icon Edition Swingman Jersey - Paul George - Unisex',
        price: 94.90,
        seller: 'Basket World',
        image: 'https://basketworld.com/22627-home_default/paul-george-los-angeles-clippers-icon-edition-swingman-jersey-22-23.jpg'
    },
    {
        name: 'Utah Jazz Statement Edition Swingman Jersey - Jordan Clarkson - Kids',
        price: 74.90,
        seller: 'Basket World',
        image: 'https://basketworld.com/22169-home_default/jordan-clarkson-utah-jazz-statement-edition-swingman-jersey-22-23-junior.jpg'
    },
    {
        name: 'Miami Heat Classic Edition Swingman Jersey - Tyler Herro - Kids',
        price: 74.90,
        seller: 'Basket World',
        image: 'https://basketworld.com/22129-home_default/tyler-herro-miami-heat-classic-edition-swingman-jersey-22-23-junior.jpg'
    },
    {
        name: 'New York Knicks Statement Edition Swingman Jersey - Derrick Rose - Kids',
        price: 74.90,
        seller: 'Basket World',
        image: 'https://basketworld.com/22103-home_default/derrick-rose-new-york-knicks-statement-edition-swingman-jersey-22-23-junior.jpg'
    },
    {
        name: 'Charlotte Hornets Icon Edition Swingman Jersey - Lamelo Ball - Unisex',
        price: 94.90,
        seller: 'Basket World',
        image: 'https://basketworld.com/21062-home_default/lamelo-ball-charlotte-hornets-icon-edition-swingman-jersey-22-23.jpg'
    },
    {
        name: 'Los Angeles Lakers Association Edition Swingman Jersey - Anthony Davis - Unisex',
        price: 94.90,
        seller: 'Basket World',
        image: 'https://basketworld.com/22291-home_default/anthony-davis-los-angeles-lakers-association-edition-swingman-jersey-22-23.jpg'
    },
    {
        name: 'Alex Caruso Chicago Bulls Icon Edition Swingman Jersey - Unisex',
        price: 94.90,
        seller: 'Basket World',
        image: 'https://basketworld.com/21856-home_default/alex-caruso-chicago-bulls-icon-edition-swingman-jersey-22-23.jpg'
    },
    {
        name: 'Philadelphia 76ers Association Edition Swingman Jersey - James Harden - Kids',
        price: 74.90,
        seller: 'Basket World',
        image: 'https://basketworld.com/21964-home_default/james-harden-philadelphia-76ers-association-edition-swingman-jersey-22-23-junior.jpg'
    },

    {
        name: 'Milwaukee Bucks Icon Edition Swingman Jersey - Giannis Antetokoumpo - Unisex',
        price: 94.90,
        seller: 'Basket World',
        image: 'https://basketworld.com/22287-home_default/giannis-antetokounmpo-milwaukee-bucks-icon-edition-swingman-jersey-22-23.jpg'
    },
    {
        name: 'Boston Celtics Statement Edition Swingman Jersey - Jayson Tatum - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/168652-home_default/camiseta-jayson-tatum-boston-celtics-22-23-statement-edition-swingman.jpg'
    },
    {
        name: 'Cleveland Cavaliers Icon Edition Swingman Jersey - Darius Garland - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/167136-home_default/darius-garland-cleveland-cavaliers-22-23-icon-edition-swingman-camiseta.jpg'
    },
    {
        name: 'Golden State Warriors Statement Edition Swingman Jersey - Stephen Curry - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/165206-home_default/camiseta-stephen-curry-golden-state-warriors-22-23-statement-edition-swingman.jpg'
    },
    {
        name: 'Los Angeles Lakers Statement Edition Swingman Jersey - LeBron James - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/165202-home_default/camiseta-lebron-james-los-angeles-lakers-22-23-statement-edition-swingman.jpg'
    },
    {
        name: 'Miami Heat City Edition Swingman Jersey - Jimmy Butler - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/164790-home_default/jimmy-butler-miami-heat-22-23-city-edition-swingman-camiseta.jpg'
    },
    {
        name: 'Washington Wizards City Edition Swingman Jersey - Kyle Kuzma - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/162713-home_default/camiseta-kyle-kuzma-washington-wizards-22-23-city-edition-swingman.jpg'
    },
    {
        name: 'Portland Trail Blazers City Edition Swingman Jersey - Damian Lillard - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/162703-home_default/camiseta-damian-lillard-portland-trail-blazers-22-23-city-edition-swingman.jpg'
    },
    {
        name: 'New Orleans Pelicans City Edition Swingman Jersey - Zion Williamson - Unisex',
        price: 100,
        seller: '24Segons',
        image: 'https://24segons.es/162705-home_default/camiseta-zion-williamson-new-orleans-pelicans-22-23-city-edition-swingman.jpg'
    },
    {
        name: 'Phoenix Suns Icon Edition Swingman Jersey - Chris Paul - Kids',
        price: 78,
        seller: '24Segons',
        image: 'https://24segons.es/168721-home_default/camiseta-junior-chris-paul-phoenix-suns-22-23-icon-edition-swingman.jpg'
    },
    {
        name: 'Memphis Grizzlies Association Edition Swingman Jersey - Ja Morant - Kids',
        price: 78,
        seller: '24Segons',
        image: 'https://24segons.es/167868-home_default/camiseta-junior-ja-morant-memphis-grizzlies-22-23-association-edition-swingman.jpg'
    },
];
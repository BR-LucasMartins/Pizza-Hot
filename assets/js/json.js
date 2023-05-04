let tradicionaisJson = [
    {id:1, name:'Mussarela', img:'assets/img/pizzas/salgadas/mussarela.png', price:[25.00, 35.00, 45.00, 55.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Queijo mussarela e molho de tomate.'},
    {id:2, name:'Milho e Bacon', img:'assets/img/pizzas/salgadas/milho-com-bacon.png', price:[25.00, 35.00, 45.00, 55.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Queijo mussarela, milho , bacon , e molho de tomate.'},
    {id:3, name:'Calabresa', img:'assets/img/pizzas/salgadas/calabresa.png', price:[25.00, 35.00, 45.00, 55.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Calabresa fatiada, cebola e queijo mussarela.'},
    {id:4, name:'Margherita', img:'assets/img/pizzas/salgadas/marguerita.png', price:[25.00, 35.00, 45.00, 55.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Molho de tomate, queijo mussarela, manjericão e tomate em fatias.'},
    {id:5, name:'Pepperoni', img:'assets/img/pizzas/salgadas/pepperoni.png', price:[25.00, 35.00, 45.00, 55.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Pepperoni fatiado e queijo mussarela.'},
    {id:6, name:'Portuguesa', img:'assets/img/pizzas/salgadas/portuguesa.png', price:[25.00, 35.00, 45.00, 55.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Presunto, mussarela, ovo, cebola, azeitonas e molho de tomate.'},
    {id:7, name:'Vegetariana', img:'assets/img/pizzas/salgadas/vegetariana.png', price:[25.00, 35.00, 45.00, 55.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Molho de Tomate, mussarela, tomate seco, champignon, rúcula e orégano.'},
    {id:8, name:'A moda', img:'assets/img/pizzas/salgadas/moda.png', price:[25.00, 35.00, 45.00, 55.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Molho de tomate , queijo mussarela, presunto , calabresa, bacon, milho, pimentão, tomate, oregáno e azeitona.'}
];


let especiaisJson = [
    {id:1, name:'Quatro queijos', img:'assets/img/pizzas/salgadas/4queijos.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Molho de tomate, mussarela, gorgonzola, parmesão e catupiry.'},
    {id:2, name:'Frango com catupiry', img:'assets/img/pizzas/salgadas/frango.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Frango desfiado, catupiry e milho verde.'},
    {id:3, name:'Lombo com Cream Cheese', img:'assets/img/pizzas/salgadas/lombo-cream.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Molho de Tomate, mussarela, lombo canadense, milho, cream cheese e orégano.'},
    {id:4, name:'Baiana', img:'assets/img/pizzas/salgadas/baiana.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Mussarela, calabresa fatiada, pimenta calabresa, cebola, catupiry e azeitonas.'},
    {id:5, name:'Camarão com Catupiry', img:'assets/img/pizzas/salgadas/camarao-catupiry.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Molho de Tomate, mussarela, catupiry, camarões e orégano.'},   
];


let docesJson = [
    {id:1, name:'Romeu e Julieta', img:'assets/img/pizzas/doces/romeu-julieta.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Queijo mussarela e goiabada derretida.'},
    {id:2, name:'Chocolate e banana', img:'assets/img/pizzas/doces/chocolate-banana.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Creme de avelã , chocolate derretido , fatias de banana e chocolate ralado.'},
    {id:3, name:'Chocolate e morango', img:'assets/img/pizzas/doces/chocolate-morango.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Creme de Leite, lascas de Cchocolate meio amargo e morangos.'},
    {id:4, name:'Chocolate branco', img:'assets/img/pizzas/doces/chocolate-branco.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Lascas de chocolate branco e creme de leite.'},
    {id:5, name:'Chocolate com M&M', img:'assets/img/pizzas/doces/chocolate-mm.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Lascas de chocolate meio amargo, creme de leite com M&M'},
    {id:6, name:'Nutella e marshmallow', img:'assets/img/pizzas/doces/nutella-marshmallow.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Nutella, marshmallows e Chocolate ralado ou em gotas.'},
    {id:7, name:'Coco e abacaxi', img:'assets/img/pizzas/doces/abacaxi.png', price:[35.00, 45.00, 55.00, 65.00], sizes:['Brotinho 25(cm)', 'Média 30(cm)', 'Grande 35(cm)'], description:'Fatias de abacaxi, coco ralado e queijo mussarela.'},   
];


let burguersJson = [
    {id:1, name:'Hamburguer Tradicional', img:'assets/img/hamburgueres/cheeburguer.png', price:[20.00],  description:'Hamburguer bovino , queijo, alface, tomate, cebola e molho especial.'},
    {id:2, name:'Hambúrguer de frango', img:'assets/img/hamburgueres/chiken.png', price:[23.00],  description:'Filé de frango grelhado, alface, tomate e maionese.'},
    {id:3, name:'Vegetariano', img:'assets/img/hamburgueres/vegetariano.png', price:[25.00],  description:'Hambúrguer de soja ou grão de bico, alface, tomate e maionese'},
    {id:4, name:'Bacon Burger', img:'assets/img/hamburgueres/bacon.png', price:[27.00],  description:'Hambúrguer bovino, queijo, bacon, alface, tomate e maionese'},
    {id:5, name:'BBQ Burger', img:'assets/img/hamburgueres/bbq.png', price:[27.00],  description:'Hambúrguer bovino, queijo, bacon fatiado, molho barbecue, cebola e alface'},
    {id:6, name:'Ranch burger', img:'assets/img/hamburgueres/ranch.png', price:[33.00],  description:'2 Hambúrgueres bovino, queijo cheddar, molho ranch, bacon, alface e tomate'},
    {id:7, name:'Tríplice burguer', img:'assets/img/hamburgueres/triple.png', price:[38.00],  description:'3 Hambúrgueres de carne bovina, Queijo cheddar, Bacon crocante, Molho especial, Alface, Tomate e picles.'},

];


let drinksJson = [
    {id:1, name:'Refrigerante Lata (350ml)', img:'assets/img/bebidas/refri-lata.png', price:[5.00, 5.00, 5.00], flavors:['Coca-Cola' , 'Sprite' , 'Fanta'] },
    {id:2, name:'Refrigerante 2L', img:'assets/img/bebidas/refri-2l.png', price:[10.00, 10.00, 10.00], flavors:['Coca-Cola' , 'Sprite' , 'Fanta']},
    {id:3, name:'Suco-Vale 1L', img:'assets/img/bebidas/suco- valle.png', price:[5.00, 5.00, 5.00], flavors:['Laranja' , 'Limão' , 'Maracujá' , 'Uva']},
    {id:4, name:'Heinekein Latão', img:'assets/img/bebidas/heinekein-lata.png', price:[7.00, 7.00, 7.00] },
    {id:5, name:'Heinekein 1L', img:'assets/img/bebidas/heinekein-garrafa.png', price:[10.00, 10.00, 10.00]},
    
];


let promotionsJson = [
    {id:1, name:'2 Pizzas G + 1 Coca-cola 2L', img:'assets/img/outros/2-pizza.png', price:[49.90], type: 'pizza', flavors:['Mussarela' , 'Calabresa' , 'Margherita' , 'Milho e Bacon' , 'Pepperoni', 'Portuguesa'] , description: '2 pizzas grandes tradicionais da sua escolha + 1 coca-cola 2L por R$ 49,90' },
    {id:2, name:'Combo: Hambúrguer + Fritas + Refri', img:'assets/img/outros/combo-1.png', price:[35.90], type: 'burguer', flavors:['Coca-Cola' , 'Sprite' , 'Fanta'] , description: 'Haburguer Tradicional + Porção de fritas média + 1 refirgerante lata de sua escolha.' },
    {id:3, name:'Combo: Ranch Burguer + Fritas + Refri', img:'assets/img/outros/combo-2.png', price:[42.90], flavors:['Coca-Cola' , 'Sprite' , 'Fanta'] , description: 'Ranch Burguer + Porção de fritas média + 1 refirgerante lata de sua escolha.' },
];


let porcoesJson = [
    {id:1, name:'Porção de Fritas', img:'assets/img/outros/fritas.png', price:[8.00, 15.00, 23.00], sizes:['Pequena  100g', 'Média  250g', 'Grande  500g' ] },
    {id:2, name:'Onion Rings', img:'assets/img/outros/onion-rings.png', price:[9.00, 17.00, 28.00], sizes:['Pequena  100g', 'Média  250g', 'Grande  500g'] },
    {id:3, name:'Fritas + Queijo e Bacon', img:'assets/img/outros/batata-queijo.png', price:[17.00, 28.00, 40.00], sizes:[ 'Pequena 100g', 'Média 250g', 'Grande  500g' ]}, 
];
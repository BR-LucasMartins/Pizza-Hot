//Rolar página para o topo
const scrollTopBtn = document.querySelector(".scrollTop");
const rootElement = document.documentElement;
const cartArea = document.querySelector('aside');
const cartButtonDesktop = document.querySelector('.cart-button-desktop');
const cartButtonMobile = document.querySelector('.cart-button');

document.querySelector('.menu-closer').addEventListener('click' , function (){
    hideCart();
});

let request = JSON.parse(localStorage.getItem('pedido')) || [];

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function handleScroll() {
  // Mostra o botão apenas quando a tela é rolada para baixo
  if (rootElement.scrollTop > 900) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
}

scrollTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);


//control behavior button menu on device mobile
const body = document.querySelector("body");
const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');

menu.addEventListener("click" , () => {
    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
      menu.innerHTML = `<i class="ri-close-line"></i> Fechar`;
      body.classList.add('lock-screem');
      sidebar.style.animationName = 'showSidebar';

    }else{
      menu.innerHTML = `<i class="ri-menu-2-line"></i> Menu`;
      body.classList.remove('lock-screem');
      sidebar.style.animationName = 'hideSidebar';
      
    }
})


//Preenche os cards com as informações dos produtos, ele recebe como parametro o json do produto por exmeplo pizza doce ou salgado e a div alvo que será inserido.
function createProductCards(json, target) {
  const productsArea = document.querySelector(`#${target}`);

  json.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('products-item');

    const productLink = document.createElement('a');
    productLink.classList.add("order-button")
    const productJson = JSON.stringify(product);
    productLink.setAttribute('data-json', productJson);

    const productImg = document.createElement('div');
    productImg.classList.add('products-item-img');

    const img = document.createElement('img');
    img.src = product.img;
    img.alt = '';

    productImg.appendChild(img);

    const productAdd = document.createElement('div');
    productAdd.classList.add('products-item-add');
    productAdd.textContent = '+';

    productLink.appendChild(productImg);
    productLink.appendChild(productAdd);

    const productPrice = document.createElement('div');
    productPrice.classList.add('products-item-price');
    productPrice.textContent = product.price[0].toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    const productName = document.createElement('div');
    productName.classList.add('products-item-name');
    productName.textContent = product.name;

    const productDescription = document.createElement('div');
    productDescription.classList.add('products-item-description');
    productDescription.textContent = product.description;

    productItem.appendChild(productLink);
    productItem.appendChild(productPrice);
    productItem.appendChild(productName);
    productItem.appendChild(productDescription);

    productsArea.appendChild(productItem);
  });
}


//executa os códigos dentro das chaves ao carregar o site
document.addEventListener('DOMContentLoaded', () => {



  //Consome o json dos produtos de cada section do site
  createProductCards(tradicionaisJson , 'tradicionais');
  createProductCards(especiaisJson , 'especiais');
  createProductCards(docesJson , 'pizzas-doces');
  createProductCards(promotionsJson , 'promocao');
  createProductCards(burguersJson , 'burgues');
  createProductCards(porcoesJson , 'list-porcoes');
  createProductCards(drinksJson , 'drinks');


//Lógica para adicionar os produtos no modal de pedidos

//seleciona o botão de cada produto
const orderButtons = document.querySelectorAll('.order-button');

//Cada botão clicado envia os dados do produto referente para o modal  de pedidos
orderButtons.forEach(function(button) {
  button.addEventListener('click', function() {

    //reecebe o data-json com os dados do produto selecionado
    const product = JSON.parse(button.dataset.json);
    //Seleciona a div modal de pedidos
    const modal = document.querySelector('.productWindowArea');

    modal.classList.add('open');

    body.classList.add('lock-screem');

    //Dentro da div ele alimenta cada elemento com o respectivo valor do json recebido
    modal.querySelector('img').src = product.img;
    modal.querySelector('h1').textContent = product.name;
    modal.querySelector('.productInfo-desc').textContent = product.description;
    
    //Div com o preço do produto 
    const actualPriceDiv = modal.querySelector('.productInfo-actualPrice span');

    //Aqui defenimos o preço padrão que será alterado de acordo com as opções e quantidades do produto.
    actualPriceDiv.textContent = product.price[0].toFixed(2);

    function createOptionDivs(option, area, optionClass, divClass) {
      if(option){
        //exibe a div caso ela esteja oculta
        area.style.display = 'block';

        //remove todos os elementos filho para não agregar vários elementos a cada click
        optionClass.innerHTML = '';
    
        option.forEach((item, index) => {
          const div = document.createElement('div');
          div.setAttribute('data-key' , index)
          div.classList.add(divClass);
          if(index == 0) {
            div.classList.add('selected');   
          }
          div.textContent = item;
      
          // adiciona evento de clique a cada div
          div.addEventListener('click', () => {
            // remove classe selected de todas as divs
            optionClass.querySelectorAll(`.${divClass}`).forEach(el => {
              el.classList.remove('selected');
            });
            // adiciona classe selected à div clicada
            div.classList.add('selected');

            if(product.price.length > 1 ){

              const price = product.price[index];
              actualPriceDiv.textContent = (price * parseFloat(document.querySelector('.productInfo-qt').textContent )).toFixed(2);  

            }
            
          });
      
          optionClass.appendChild(div);
    
          // adiciona a classe d-block caso haja mais que 5 elementos
          if(optionClass.children.length >= 5){
            optionClass.classList.add('d-block');
          }
        });
    
      }else{
        area.style.display = 'none';
      }
    }
    
    createOptionDivs(product.sizes, modal.querySelector('.productInfo-sizearea'), modal.querySelector('.productInfo-sizes'), 'productInfo-size');
    
    createOptionDivs(product.flavors, modal.querySelector('.productInfo-flavorarea'), modal.querySelector('.productInfo-flavors'), 'productInfo-flavor');
    

    const productQdt = modal.querySelector('.productInfo-qt');
    let qtd = parseInt(productQdt.textContent);
    
    function updateQuantityAndPrice(selectedDataKey) {
      const price = parseFloat(product.price[selectedDataKey]);
      const actualPrice = price * qtd;
      productQdt.textContent = qtd;
      actualPriceDiv.textContent = actualPrice.toFixed(2);
    }
    
    modal.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('productInfo-qtmais')) {
        qtd++;

        
        const selectedDiv = document.querySelector('.productInfo-size .selected');
        const selectedDataKey = selectedDiv ? selectedDiv.getAttribute('data-key') : 0;
        updateQuantityAndPrice(selectedDataKey);

      } else if (target.classList.contains('productInfo-qtmenos')) {
        if (qtd > 1) {
          qtd--;
          const selectedDiv = document.querySelector('.productInfo-size .selected');
          const selectedDataKey = selectedDiv ? selectedDiv.getAttribute('data-key') : 0;
          updateQuantityAndPrice(selectedDataKey);

        }
      }
    });
    
  });
});


const addCartButton = document.querySelector('.productInfo-addButton');

addCartButton.addEventListener('click' , function() {
  closeModalOrder();
  addCart(this);
  document.querySelector('.productInfo-qt').textContent = 1;
});


closeOrderModal('.productInfo-cancelButton');
closeOrderModal('.productInfo-cancelMobileButton')

if(request.length > 0){
  
  if (window.innerWidth > 992) {
    showCart();
  }
  updateCart();
}
//fim do DOMContentLoad

document.querySelector('.cart--finalizar').addEventListener('click', function(){
    finalizeOrder();
});

});


//Close order modal
function closeOrderModal(classDiv){
  document.querySelector(classDiv).addEventListener('click', () => {
    closeModalOrder();

    //set value div qtd as 1
    document.querySelector('.productInfo-qt').textContent = 1;
    
  }); 
}


function addCart(button){
  const product = button.parentNode;
  const name = product.querySelector('h1').textContent;
  const image = document.querySelector('.productBig img').src;
  const sizeArea = product.querySelector('.productInfo-sizearea');
  const flavorsArea = product.querySelector('.productInfo-flavorarea');
  let size = '';
  let flavor = '';
  if(sizeArea.style.display === 'block'){
     size = product.querySelector('.productInfo-size.selected') ? product.querySelector('.productInfo-size.selected').textContent : '';
  }
  
  if(flavorsArea.style.display === 'block'){
    flavor = product.querySelector('.productInfo-flavor.selected') ? product.querySelector('.productInfo-flavor.selected').textContent : '';
  }

  const price = product.querySelector('.productInfo-actualPrice span').textContent;
  const qtd = product.querySelector('.productInfo-qt').textContent;

  const data = {
    name: name,
    image: image,
    price: price,
    qtd: qtd,
    size: size, 
    flavor: flavor
  };

    request.push(data);
    //adiciona os dados no Local Storage
    localStorage.setItem('pedido', JSON.stringify(request));
    
    showCart();
    updateCart();

}


function updateCart() {
  let cartContentHTML = '';
  const priceTotal = document.querySelector('.price-final');
  let sumPrice = 0;
  
  request.forEach(function (product) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart--item');
    cartItem.innerHTML = `<img src="${product.image}">
    <div class="cart--item-nome">
    <p>
    ${product.name}
    ${product.size !== '' ? ` -  ${product.size}` : ''}
    </P>

    ${product.flavor != '' ? 
      `<p> Sabor: ${product.flavor} </P>`
      : ''
    }
    <p> R$ ${product.price} </P>
    </div>
    <div class="cart--item--qtarea">
                <button class="cart--item-qtmenos" ${product.qtd === 1 ? 'disabled' : ''}>-</button>
                <div class="cart--item--qt">  ${product.qtd}</div>
                <button class="cart--item-qtmais">+</button>
    </div>
    <div>
    <i class="ri-delete-bin-line delete-item">
        <div class="popover-icon-delete"> Remover Produto </div>
    </i>
    </div>`;

    cartContentHTML += cartItem.outerHTML;

    sumPrice += parseFloat(product.price);
  });

  const cartItems = document.querySelector('.cart');
  cartItems.innerHTML = cartContentHTML;
  priceTotal.textContent = `R$ ${sumPrice.toFixed(2)}`;

  const qtMenosButtons = document.querySelectorAll('.cart--item-qtmenos');
  qtMenosButtons.forEach(button => {
    const qtDiv = button.nextElementSibling;
    const qt = parseInt(qtDiv.textContent);
    if (qt === 1) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
}



const cartItems = document.querySelector('.cart');

cartItems.addEventListener('click', function(event) {
  const button = event.target;
  if (button.classList.contains('cart--item-qtmais')) {
    const cartItem = button.closest('.cart--item');
    const index = Array.from(cartItems.children).indexOf(cartItem);
    request[index].qtd++;
    request[index].price = (parseFloat(request[index].price) + parseFloat(request[index].price) / (request[index].qtd - 1)).toFixed(2);
  } else if (button.classList.contains('cart--item-qtmenos')) {
    const cartItem = button.closest('.cart--item');
    const index = Array.from(cartItems.children).indexOf(cartItem);
    if (request[index].qtd > 1) {
      request[index].qtd--;
      request[index].price = (parseFloat(request[index].price) - parseFloat(request[index].price) / (request[index].qtd + 1)).toFixed(2);
    } else {
      // Se a quantidade for 1, remova o produto do pedido
      request.splice(index, 1);
    }
  }
  // Atualize o carrinho
  updateCart();
});

//Mostra o carrinho d ecompras
function showCart(){
    cartArea.classList.add('show');
    cartButtonDesktop.style.display = 'none';
    qdtItems();
}

//Esconde o carrinho de compras 
function hideCart(){
  cartArea.classList.remove('show');
  qdtItems();
}


cartButtonDesktop.addEventListener('click' , function(){
  showCart();
});

cartButtonMobile.addEventListener('click' , function(){
  showCart();
});

cartButtonMobile.querySelector('span').textContent = request.length


function qdtItems(){
  document.querySelector('.cart-button-desktop-badge').textContent = request.length;
  cartButtonMobile.querySelector('.badge-mobile').textContent = request.length
}

const btnAddMoreProducts = document.querySelector('.cart--add-more-products');
btnAddMoreProducts.querySelector('.link').addEventListener('click', function(event) {
    event.preventDefault();
    hideCart();
    cartButtonDesktop.style.display = 'flex';
});


function removeItemFromCart(event) {
  const button = event.target.closest('.delete-item');
  if (!button) return;

  const cartItem = button.parentNode;
  const cartItems = cartItem.parentNode;
  const cartIndex = Array.from(cartItems.querySelector('.delete-item')).indexOf(cartItem);

  request.splice(cartIndex, 1);
  localStorage.setItem('pedido', JSON.stringify(request));

  if(request.length === 0){
    hideCart();
  }
  else{
    updateCart();
  }
}

function clearCart() {
  request = [];
  localStorage.removeItem('pedido');
  updateCart();
  hideCart();
}


function finalizeOrder(){

  clearCart();
  Swal.fire(
    'Pedido realizado com sucesso!',
    'Estamos preparando seu pedido e em breve será entregue em sua casa.',
    'success'
  )
}


document.addEventListener('click', removeItemFromCart);

// Seleciona todos os links da lista e converte em um array
const links = Array.from(document.querySelectorAll('ul li a'));

// Percorre cada link do array com o método forEach()
links.forEach(function(link) {

  // Adiciona um evento de clique a cada link
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do link

    // Obtém o atributo href do link
    const href = link.getAttribute('href');

    // Seleciona o elemento alvo com o valor do atributo href
    const target = document.querySelector(href);

    // Rola suavemente para a seção correspondente
    target.scrollIntoView({
      behavior: 'smooth'
    });

    // Fecha a barra lateral e remove a classe lock-screem do elemento body
    menu.classList.remove("active");
    menu.innerHTML = `<i class="ri-menu-2-line"></i> Menu`;
    body.classList.remove('lock-screem');
    sidebar.style.animationName = 'hideSidebar';
    sidebar.style.opacity = '0';
  });
});


function closeModalOrder() {
  body.classList.remove('lock-screem');
  document.querySelector('.productWindowArea').classList.remove('open');
}

  // Define o ano atual na div copyright
let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


//Swiper banner and phones mobile
const swiper = new Swiper('.swiper-banners', {
  loop: true,
  autoplay: {
      delay: 5000,
    },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
});

const swiperPhones = new Swiper('.swiper-phones', {
  loop: true,
  autoplay: {
      delay: 5000,
    },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})



//Menu de localização das unidades
const select = document.querySelector('.tabs-select');
const panels = document.querySelectorAll('.tabs-panel');

select.addEventListener('change', (event) => {
  const selectedValue = event.target.value;
  panels.forEach((panel) => {
    if (panel.id === selectedValue) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
});




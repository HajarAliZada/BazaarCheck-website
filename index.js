const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click',() => {
    sidebar.classList.add('open');
    backdrop.classList.add('show');
});

function closeSidebar(){
    sidebar.classList.remove('open');
    backdrop.classList.remove('show');
}
closeBtn.addEventListener('click',closeSidebar);
backdrop.addEventListener('click',closeSidebar);

//Product data object in product details page
const products = {
    rice:{
        name:"Rice (1 kg)",
        image: "images/rice2.png",
        rating: "4.6 (120 reviews)",
        priceRange:"115 AFN - 145 AFN",
        shops:[
            {name:"Halal Shop",shopId:"shopA", price: 115, distance: "0.8 km", lowest:true},
            {name:"Solaiman Shop",shopId:"shopB", price: 120, distance: "1.2 km", lowest:false},
            {name:"Kefayat SuperMarket",shopId:"shopC", price: 145, distance: "1.5 km", lowest:false}
        ]
    },
      oil: {
    name: "Oil (1 L)",
    image: "images/oil.png",
    rating: "4.3 (95 reviews)",
    priceRange: "160 AFN – 180 AFN",
    shops: [
      { name: "Halal Shop",shopId:"shopA", price: 160, distance: "1.2 km", lowest: true },
      { name: "Kefayat SuperMarket",shopId:"shopC", price: 170, distance: "0.8 km", lowest: false },
      { name: "Rezaiee Market",shopId:"shopD", price: 180, distance: "2.1 km", lowest: false }
    ]
  },
  flour: {
    name: "Flour (1 kg)",
    image: "images/flour.png",
    rating: "4.1 (60 reviews)",
    priceRange: "80 AFN – 95 AFN",
    shops: [
      { name: "Solaiman Shop",shopId:"shopB", price: 80, distance: "1.5 km", lowest: true },
      { name: "Kefayat SuperMarket",shopId:"shopC", price: 90, distance: "0.8 km", lowest: false }
    ]
  },

    sugar: {
    name: "Sugar (1 kg)",
    image: "images/sugar.png",
    rating: "4.1 (60 reviews)",
    priceRange: "70 AFN – 95 AFN",
    shops: [
      { name: "Solaiman Shop",shopId:"shopB", price: 80, distance: "1.5 km", lowest: true },
      { name: "Kefayat SuperMarket",shopId:"shopC", price: 90, distance: "0.8 km", lowest: false },
      { name: "Halal Shop",shopId:"shopA", price: 170, distance: "0.8 km", lowest: false },
      { name: "Rezaiee Market",shopId:"shopD", price: 180, distance: "2.1 km", lowest: false }
    ]
  },

    tea: {
    name: "Tea (100 gr)",
    image: "images/tea.png",
    rating: "4.1 (60 reviews)",
    priceRange: "80 AFN – 95 AFN",
    shops: [
      { name: "Solaiman Shop",shopId:"shopB", price: 80, distance: "1.5 km", lowest: true },
      { name: "Halal Shop",shopId:"shopA", price: 160, distance: "1.2 km", lowest: false },
      { name: "Kefayat SuperMarket",shopId:"shopC", price: 90, distance: "0.8 km", lowest: false }
    ]
  },

};

// The full catalog — every product, at every shop, with its category
const catalog = [
  { product: "Rice (1 kg)",  category: "food",       shop: "Kefayat SuperMarket", price: 115, distance: 0.8, rating: 4.6 },
  { product: "Rice (1 kg)",  category: "food",       shop: "Halal Shop", price: 120, distance: 1.2, rating: 4.3 },
  { product: "Rice (1 kg)",  category: "food",       shop: "Solaiman Shop", price: 135, distance: 1.5, rating: 4.2 },

  { product: "Oil (1 L)",    category: "food",       shop: "Halal Shop", price: 160, distance: 1.2, rating: 4.3 },
  { product: "Oil (1 L)",    category: "food",       shop: "Kefayat SuperMarket", price: 170, distance: 0.8, rating: 4.6 },

  { product: "Flour (1 kg)", category: "food",       shop: "Solaiman Shop", price: 80,  distance: 1.5, rating: 4.2 },
  { product: "Flour (1 kg)", category: "food",       shop: "Kefayat SuperMarketShop C", price: 90,  distance: 0.8, rating: 4.6 },

  { product: "Tea (100 g)",  category: "beverages",  shop: "Halal Shop", price: 138, distance: 1.2, rating: 4.3 },
  { product: "Tea (100 g)",  category: "beverages",  shop: "Kefayat SuperMarket", price: 140, distance: 0.8, rating: 4.6 },

  { product: "Soap Bar",     category: "personal-care", shop: "Kefayat SuperMarket", price: 45, distance: 0.8, rating: 4.6 },
  { product: "Dish Soap",    category: "household",  shop: "Rezaiee Market", price: 60, distance: 2.1, rating: 4.1 }
];

// Only run this logic if we're actually on the search page
const priceTableBody = document.querySelector('.price-table tbody');

if(priceTableBody && document.querySelector('.page-head h1')){

  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get('q');       // e.g. "rice" or null
  const categoryFilter = searchParams.get('category'); // e.g. "food" or null

  // --- Step 4a: filter the catalog based on the URL ---
  let results = catalog;

  if(searchQuery){
    results = results.filter(item =>
      item.product.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if(categoryFilter && categoryFilter !== "all"){
    results = results.filter(item => item.category === categoryFilter);
  }

  // --- Step 4b: update the page heading to reflect what's shown ---
  const heading = document.querySelector('.page-head h1');
  const subheading = document.querySelector('.page-head p');

  if(searchQuery){
    heading.textContent = `Search Results for "${searchQuery}"`;
  } else if(categoryFilter && categoryFilter !== "all"){
    heading.textContent = categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) + " Products";
  } else {
    heading.textContent = "All Products";
  }
  subheading.textContent = `${results.length} result${results.length !== 1 ? 's' : ''} found.`;

  // --- Step 4c: highlight the matching filter link as active ---
  document.querySelectorAll('.filter-item[data-category]').forEach(link => {
    link.classList.remove('active');
    if(link.dataset.category === (categoryFilter || "all")){
      link.classList.add('active');
    }
  });

  // --- Step 4d: render the table (or an empty state) ---
  function renderTable(rows){
    if(rows.length === 0){
      document.querySelector('.table-card').innerHTML = `
        <div class="empty-state">
          <h3>No products found</h3>
          <p>Try a different search term or category.</p>
        </div>
      `;
      return;
    }

    // find the lowest price among current results, to tag it
    const lowestPrice = Math.min(...rows.map(r => r.price));

    let rowsHTML = "";
    rows.forEach(item => {
      rowsHTML += `
        <tr>
          <td>
            <div class="shop-cell">
              <span class="shop-avatar">🏪</span> ${item.shop}
            </div>
          </td>
          <td>${item.product}</td>
          <td class="price-cell">
            ${item.price} AFN
            ${item.price === lowestPrice ? '<span class="lowest-tag">LOWEST</span>' : ''}
          </td>
          <td>${item.distance} km</td>
          <td>⭐ ${item.rating}</td>
          <td><a href="shop.html" class="btn-view">View</a></td>
        </tr>
      `;
    });

    priceTableBody.innerHTML = rowsHTML;
  }

  renderTable(results);

  // --- Step 4e: update the stat boxes based on current results ---
  function renderStats(rows){
    const statRow = document.querySelector('.stat-row');
    if(!statRow) return;

    if(rows.length === 0){
      statRow.style.display = "none";
      return;
    }
    statRow.style.display = "grid";

    const prices = rows.map(r => r.price);
    const cheapest = Math.min(...prices);
    const cheapestShop = rows.find(r => r.price === cheapest).shop;
    const average = Math.round(prices.reduce((sum, p) => sum + p, 0) / prices.length);
    const highest = Math.max(...prices);

    statRow.innerHTML = `
      <div class="stat-box">
        <div class="stat-label">🏷️ Cheapest Price</div>
        <div class="stat-value">${cheapest} AFN <span>at ${cheapestShop}</span></div>
      </div>
      <div class="stat-box">
        <div class="stat-label">📊 Average Price</div>
        <div class="stat-value">${average} AFN</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">📈 Price Range</div>
        <div class="stat-value">${cheapest} – ${highest} AFN</div>
      </div>
    `;
  }

  renderStats(results);

  // --- Step 4f: hook up sorting to work on the CURRENT filtered results ---
  const sortSelect = document.querySelector('.sort-select');
  if(sortSelect){
    sortSelect.addEventListener('change', () => {
      const sorted = [...results]; // copy so we don't mutate the original filtered list
      const value = sortSelect.value;

      sorted.sort((a, b) => {
        if(value === 'price-low')  return a.price - b.price;
        if(value === 'price-high') return b.price - a.price;
        if(value === 'distance')   return a.distance - b.distance;
        if(value === 'rating')     return b.rating - a.rating;
        return 0;
      });

      renderTable(sorted);
    });
  }

}


const params = new URLSearchParams(window.location.search);
const productId = params.get('product');

console.log(productId); 

const data = products[productId];

console.log(data); 

if(data){
  document.querySelector('.product-summary h2').textContent = data.name;
  document.querySelector('.summary-thumb img').src = data.image;
  document.querySelector('.summary-thumb img').alt = data.name;
  document.querySelector('.summary-rating').textContent = "⭐⭐⭐⭐⭐ " + data.rating;
  document.querySelector('.summary-price').textContent = data.priceRange;
  document.title = data.name + " · Bazaar Check";
}
if (data) {
    document.querySelector('.current').textContent = data.name;
}

if(data){
    const tbody = document.getElementById('shopRows');
    let rowsHTML = "";

    data.shops.forEach(shop =>{
        rowsHTML += `
        <tr>
        <td>
        <div class="shop-cell">
        <span class="shop-avatar">🏪</span> ${shop.name}
        </div>
        </td>
        <td class="price-cell">
        ${shop.price} AFN
        ${shop.lowest ? '<span class="lowest-tag">Lowest</span>' : ''}
        </td>
        <td>${shop.distance}</td>
        <td><a href="shop.html?shop=${shop.shopId}" class="btn-view"> View in shop</a></td>
        </tr>
        `;
    });
    tbody.innerHTML = rowsHTML;
}

// favorit button

const favBtn = document.querySelectorAll('.fav-btn');
favBtn.forEach(button => {
    button.addEventListener('click',(e) =>{
        e.preventDefault();
        e.stopPropagation();
        if(button.classList.contains('active')){
            button.innerHTML = '<i class="fa-regular fa-heart simple-heart"></i>';
            button.classList.remove('active');
        } else{
            button.innerHTML = '<img src="images/red-heart.png" class="filled-heart">';
            button.classList.add('active');
        }
    });
});

// favorite button on product details page
const favBtnDetails = document.getElementById('favBtn');
if(favBtnDetails){
    favBtnDetails.addEventListener('click',() =>{
        favBtnDetails.classList.toggle('is-favorited');

        if(favBtnDetails.classList.contains('is-favorited')){
            favBtnDetails.innerHTML = '<img src="images/red-heart.png" class="filled-heart"> Added to favorites';
        } else{ 
            favBtnDetails.innerHTML = '<i class="fa-regular fa-heart simple-heart"></i> Add to favorites';
        }

    });
}

// price alert button on product details page
const alertBtn = document.getElementById('alertBtn');
if(alertBtn){
    alertBtn.addEventListener('click',() =>{
        const target = prompt('Notify me when the price drops below (AFN):');
        if(target){
            alert(`You will be notified when the price drops below ${target} AFN`);
        }
    });
}
    


// Auto fill year in footer
const yearSpan = document.getElementById('year');
if(yearSpan){
    yearSpan.textContent = new Date().getFullYear();
}

// selecting the filter that is clicked
const filterItems = document.querySelectorAll('.filter-item');

filterItems.forEach(item =>{
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.filter-item.active')?.classList.remove('active');
        item.classList.add('active');
    });
});

// toggle filter sidebar
const filterToggle = document.querySelector('.filter-toggle');
const filterPanel = document.querySelector('.filters');
if(filterToggle){
    filterToggle.addEventListener('click',() => {
        filterPanel.classList.toggle('open');
    });
}

const sortSelect = document.querySelector('.sort-select');
const tableBody = document.querySelector('.price-table tbody');

function getPrice(row) {
    return parseInt(row.querySelector('.price-cell').textContent);
}

function getDistance(row) {
    return parseFloat(row.children[3].textContent);
}

function getRating(row) {
    return parseFloat(row.children[4].textContent.replace('⭐', '').trim());
}

if (sortSelect) {
    sortSelect.addEventListener('change', () => {

        const rows = Array.from(tableBody.querySelectorAll('tr'));

        const value = sortSelect.value;

        rows.sort((a, b) => {

            if (value === 'price-low') {
                return getPrice(a) - getPrice(b);
            }

            if (value === 'price-high') {
                return getPrice(b) - getPrice(a);
            }

            if (value === 'distance') {
                return getDistance(a) - getDistance(b);
            }

            if (value === 'rating') {
                return getRating(b) - getRating(a);
            }

            return 0;
        });

        rows.forEach(row => tableBody.appendChild(row));
    });
}

// shop dynemic cards

const shops = {
  shopA: {
    name: "Halal Shop",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJft0LsyEhDLzR8dxZtNvDJk0MuqBWk8TRnx_KeRvYLvVtWVfVpu3Cw2g&s=10",
    rating: "⭐ 4.3 (180 reviews)",
    location: "📍 Kabul, Shahr-e-Naw",
    distance: "🚶 1.2 km away",
    about: "A trusted neighborhood store offering fresh groceries at fair prices.",
    phone: "📞 +93 70 111 2222",
    hours: "🕐 Open 7:00 AM – 9:00 PM",
    products: [
       { id: "rice", name: "Rice (1 kg)", price: 120 },
      { id: "oil", name: "Oil (1 L)", price: 160 },
      { id: "tea", name: "Tea (100 g)", price: 138 },
      {id:"flour", name: "Flour (1 kg)", price: 90 },
      {id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ]
  },
  shopB: {
    name: " Solaiman Shop",
    image: "images/shop.png",
    rating: "⭐ 4.6 (230 reviews)",
    location: "📍 Kabul, Karte Parwan",
    distance: "🚶 0.8 km away",
    about: "Family-run since 2014, Shop C stocks fresh staples daily.",
    phone: "📞 +93 70 123 4567",
    hours: "🕐 Open 7:00 AM – 9:00 PM",
    products: [
      { id: "rice", name: "Rice (1 kg)", price: 120 },
      { id: "oil", name: "Oil (1 L)", price: 160 },
      { id: "tea", name: "Tea (100 g)", price: 138 },
      {id:"flour", name: "Flour (1 kg)", price: 90 },
      {id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ]
  },
  shopC: {
    name: "Kefayat SuperMarket",
    image: "images/shop.png",
    rating: "⭐ 4.7 (250 reviews)",
    location: "📍 Kabul, Poli - Khoshk",
    distance: "🚶 0.9 km away",
    about: "Family-run since 2014, Shop D stocks fresh staples daily.",
    phone: "📞 +93 70 123 4567",
    hours: "🕐 Open 7:00 AM – 9:00 PM",
    products: [
         { id: "rice", name: "Rice (1 kg)", price: 120 },
      { id: "oil", name: "Oil (1 L)", price: 160 },
      { id: "tea", name: "Tea (100 g)", price: 138 },
      {id:"flour", name: "Flour (1 kg)", price: 90 },
      {id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ]
  },

    shopD: {
    name: "Rezaiee Market",
    image: "images/shop.png",
    rating: "⭐ 4.3 (200 reviews)",
    location: "📍 Kabul, Barchi",
    distance: "🚶 1.8 km away",
    about: "Family-run since 2015, Shop B stocks fresh staples daily.",
    phone: "📞 +93 70 123 4567",
    hours: "🕐 Open 7:00 AM – 9:00 PM",
    products: [
      { id: "rice", name: "Rice (1 kg)", price: 120 },
      { id: "oil", name: "Oil (1 L)", price: 160 },
      { id: "tea", name: "Tea (100 g)", price: 138 },
      {id:"flour", name: "Flour (1 kg)", price: 90 },
      {id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ]
  },

    
    shopF: {
    name: "Haji Zaki Shop",
    image: "images/shop.png",
    rating: "⭐ 4.3 (200 reviews)",
    location: "📍 Kabul, Barchi",
    distance: "🚶 1.8 km away",
    about: "Family-run since 2015, Shop B stocks fresh staples daily.",
    phone: "📞 +93 70 123 4567",
    hours: "🕐 Open 7:00 AM – 9:00 PM",
    products: [
           { id: "rice", name: "Rice (1 kg)", price: 120 },
      { id: "oil", name: "Oil (1 L)", price: 160 },
      { id: "tea", name: "Tea (100 g)", price: 138 },
      {id:"flour", name: "Flour (1 kg)", price: 90 },
      {id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ]
  },
  
    shopG: {
    name: "Mahaly Shop",
    image: "images/shop.png",
    rating: "⭐ 4.3 (200 reviews)",
    location: "📍 Kabul, Pole-Sorkh",
    distance: "🚶 1.8 km away",
    about: "Family-run since 2015, Shop B stocks fresh staples daily.",
    phone: "📞 +93 70 123 4567",
    hours: "🕐 Open 7:00 AM – 9:00 PM",
    products: [

      { id: "rice", name: "Rice (1 kg)", price: 120 },
      { id: "oil", name: "Oil (1 L)", price: 160 },
      { id: "tea", name: "Tea (100 g)", price: 138 },
      {id:"flour", name: "Flour (1 kg)", price: 90 },
      {id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ]
  },


};


const shopParams = new URLSearchParams(window.location.search);
const shopId = shopParams.get('shop');
const shopData = shops[shopId];

console.log(shopData);

if(shopData){
  document.getElementById('shopName').textContent = shopData.name;
  document.getElementById('crumbShopName').textContent = shopData.name;
  document.getElementById('shopImage').src = shopData.image;
  document.getElementById('shopImage').alt = shopData.name;
  document.getElementById('shopImage').alt = shopData.name;
  document.getElementById('shopRating').textContent = shopData.rating;
  document.getElementById('shopLocation').textContent = shopData.location;
  document.getElementById('shopDistance').textContent = shopData.distance;
  document.getElementById('shopAbout').textContent = shopData.about;
  document.getElementById('shopPhone').textContent = shopData.phone;
  document.getElementById('shopHours').textContent = shopData.hours;
  document.title = shopData.name + " · Bazaar Check";

   const tbody = document.getElementById('shopProductRows');
  let rowsHTML = "";

  shopData.products.forEach(product => {
    rowsHTML +=
    `
      <tr>
        <td>${product.name}</td>
        <td class="price-cell">${product.price} AFN</td>
        <td><a href="product-details.html?product=${product.id}" class="btn-view">View</a></td>
      </tr>
    `;
  });
  tbody.innerHTML = rowsHTML;
}

/*      CART HELPERS (used on every page) */

function getCart(){
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
}

function saveCart(cartItems){
  localStorage.setItem('cart', JSON.stringify(cartItems));
  updateCartBadge();
}

function addToCart(product, shop, price, image){
  const cart = getCart();

  // check if this exact product+shop combo is already in the cart
  const existing = cart.find(item => item.product === product && item.shop === shop);

  if(existing){
    existing.qty += 1; // already in cart, just bump the quantity
  } else {
    cart.push({ product, shop, price, image, qty: 1 }); // new item
  }

  saveCart(cart);
}

function removeFromCart(product, shop){
  let cart = getCart();
  cart = cart.filter(item => !(item.product === product && item.shop === shop));
  saveCart(cart);
}

function updateCartBadge(){
  const badge = document.getElementById('cartCount');
  if(!badge) return;

  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

// run this on every page load, so the badge is always correct
updateCartBadge();

// cart

document.querySelectorAll('.add-cart-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        const product = button.dataset.product;
        const shop = button.dataset.shop;
        const price = parseInt(button.dataset.price);
        const image = button.dataset.image;

        addToCart(product, shop, price,image);
        const originalText = button.innerHTML;
        button.innerHTML = '<i class = "fa-solid fa-check"></i> Added';

        setTimeout(() => {
          button.innerHTML = originalText;
        }, 2000);
    });
});

// Empty cart JavaScript codes

function showEmptyCartMessage() {
  const container = document.getElementById('cartItemsContainer');

  if(!container) return;
  const cart = getCart();

  if(cart.length === 0){
    container.innerHTML = `
       <div class="cart-empty">
                <div class="cart-empty-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>

                <h3>Your cart is empty</h3>

                <p>You haven't chosen any products yet.</p>

                <a href="index.html" class="empty-cart-btn">
                    <i class="fa-solid fa-bag-shopping"></i>
                    Start Shopping
                </a>
            </div>
    `;
  }
}

// adding the added product cards

function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  if(!container) return;
  const cart = getCart();

  if(cart.length === 0){
    showEmptyCartMessage();
    return;
  }

  container.innerHTML = '';

  cart.forEach(item => {
    const cartItem = document.createElement('div');

    cartItem.className = 'cart-item';

    cartItem.innerHTML = `
         <div class="cart-item-info">
                <h3>${item.product}</h3>
                <p>Shop: ${item.shop}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: ${item.qty}</p>
            </div>

            <button 
                class="remove-cart-btn"
                data-product="${item.product}"
                data-shop="${item.shop}">
                Remove
            </button>
    `;

    container.appendChild(cartItem);
  });
    container.querySelectorAll('.remove-cart-btn').forEach(button => {
        button.addEventListener('click', function () {
            removeFromCart(
                this.dataset.product,
                this.dataset.shop
            );

            renderCart();
        });
    });

}


// calling the empty function
renderCart();
document.addEventListener('DOMContentLoaded', () => {
  updateTopbarUser();
});
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
  backdrop.classList.add("show");
});

function closeSidebar() {
  sidebar.classList.remove("open");
  backdrop.classList.remove("show");
}
closeBtn.addEventListener("click", closeSidebar);
backdrop.addEventListener("click", closeSidebar);
// Dark mode button
/*
const button = document.getElementById("darkModeBtn");
const body = document.body;
if(button){
  button.addEventListener("click", function(){
  body.classList.toggle("dark");

  if(body.classList.contains("dark")){
    button.textContent = "☀️";
  }
  else{
    button.textContent = "🌙";
  }
});
}
*/

//Product data object in product details page
const products = {
  rice: {
    name: "Rice (1 kg)",
    image: "images/rice2.png",
    rating: "4.6 (120 reviews)",
    priceRange: "115 AFN - 145 AFN",
    shops: [
      {
        name: "Halal Shop",
        shopId: "shopA",
        price: 115,
        distance: "0.8 km",
        lowest: true,
      },
      {
        name: "Solaiman Shop",
        shopId: "shopB",
        price: 120,
        distance: "1.2 km",
        lowest: false,
      },
      {
        name: "Kefayat SuperMarket",
        shopId: "shopC",
        price: 145,
        distance: "1.5 km",
        lowest: false,
      },
    ],
  },
  oil: {
    name: "Oil (1 L)",
    image: "images/oil.png",
    rating: "4.3 (95 reviews)",
    priceRange: "160 AFN – 180 AFN",
    shops: [
      {
        name: "Halal Shop",
        shopId: "shopA",
        price: 160,
        distance: "1.2 km",
        lowest: true,
      },
      {
        name: "Kefayat SuperMarket",
        shopId: "shopC",
        price: 170,
        distance: "0.8 km",
        lowest: false,
      },
      {
        name: "Rezaiee Market",
        shopId: "shopD",
        price: 180,
        distance: "2.1 km",
        lowest: false,
      },
    ],
  },
  flour: {
    name: "Flour (1 kg)",
    image: "images/flour.png",
    rating: "4.1 (60 reviews)",
    priceRange: "80 AFN – 95 AFN",
    shops: [
      {
        name: "Solaiman Shop",
        shopId: "shopB",
        price: 80,
        distance: "1.5 km",
        lowest: true,
      },
      {
        name: "Kefayat SuperMarket",
        shopId: "shopC",
        price: 90,
        distance: "0.8 km",
        lowest: false,
      },
    ],
  },

  sugar: {
    name: "Sugar (1 kg)",
    image: "images/sugar.png",
    rating: "4.1 (60 reviews)",
    priceRange: "70 AFN – 95 AFN",
    shops: [
      {
        name: "Solaiman Shop",
        shopId: "shopB",
        price: 80,
        distance: "1.5 km",
        lowest: true,
      },
      {
        name: "Kefayat SuperMarket",
        shopId: "shopC",
        price: 90,
        distance: "0.8 km",
        lowest: false,
      },
      {
        name: "Halal Shop",
        shopId: "shopA",
        price: 170,
        distance: "0.8 km",
        lowest: false,
      },
      {
        name: "Rezaiee Market",
        shopId: "shopD",
        price: 180,
        distance: "2.1 km",
        lowest: false,
      },
    ],
  },

  tea: {
    name: "Tea (100 g)",
    image: "images/tea.png",
    rating: "4.1 (60 reviews)",
    priceRange: "80 AFN – 95 AFN",
    shops: [
      {
        name: "Solaiman Shop",
        shopId: "shopB",
        price: 80,
        distance: "1.5 km",
        lowest: true,
      },
      {
        name: "Halal Shop",
        shopId: "shopA",
        price: 160,
        distance: "1.2 km",
        lowest: false,
      },
      {
        name: "Kefayat SuperMarket",
        shopId: "shopC",
        price: 90,
        distance: "0.8 km",
        lowest: false,
      },
    ],
  },
};

// The full catalog — every product, at every shop, with its category
const catalog = [
  {
    product: "Rice (1 kg)",
    category: "food",
    shop: "Kefayat SuperMarket",
    price: 115,
    distance: 0.8,
    rating: 4.6,
  },
  {
    product: "Rice (1 kg)",
    category: "food",
    shop: "Halal Shop",
    price: 120,
    distance: 1.2,
    rating: 4.3,
  },
  {
    product: "Rice (1 kg)",
    category: "food",
    shop: "Solaiman Shop",
    price: 135,
    distance: 1.5,
    rating: 4.2,
  },

  {
    product: "Oil (1 L)",
    category: "food",
    shop: "Halal Shop",
    price: 160,
    distance: 1.2,
    rating: 4.3,
  },
  {
    product: "Oil (1 L)",
    category: "food",
    shop: "Kefayat SuperMarket",
    price: 170,
    distance: 0.8,
    rating: 4.6,
  },

  {
    product: "Flour (1 kg)",
    category: "food",
    shop: "Solaiman Shop",
    price: 80,
    distance: 1.5,
    rating: 4.2,
  },
  {
    product: "Flour (1 kg)",
    category: "food",
    shop: "Kefayat SuperMarket",
    price: 90,
    distance: 0.8,
    rating: 4.6,
  },

  {
    product: "Tea (100 g)",
    category: "beverages",
    shop: "Halal Shop",
    price: 138,
    distance: 1.2,
    rating: 4.3,
  },
  {
    product: "Tea (100 g)",
    category: "beverages",
    shop: "Kefayat SuperMarket",
    price: 140,
    distance: 0.8,
    rating: 4.6,
  },

  {
    product: "Soap Bar",
    category: "personal-care",
    shop: "Kefayat SuperMarket",
    price: 45,
    distance: 0.8,
    rating: 4.6,
  },
  {
    product: "Dish Soap",
    category: "household",
    shop: "Rezaiee Market",
    price: 60,
    distance: 2.1,
    rating: 4.1,
  },

  {
    product: "Sugar (1 kg)",
    category: "food",
    shop: "Mahaly Shop",
    price: 85,
    distance: 1.2,
    rating: 4.3,
  },
  {
    product: "Sugar (1 kg)",
    category: "food",
    shop: "Solaiman Shop",
    price: 135,
    distance: 1.5,
    rating: 4.2,
  },
];

const productImages = {
  "Rice (1 kg)": "images/rice2.png",
  "Oil (1 L)": "images/oil.png",
  "Flour (1 kg)": "images/flour.png",
  "Tea (100 g)": "images/tea.png",
  "Sugar (1 kg)": "images/sugar.png",
};

//  search page
const priceTableBody = document.querySelector(".price-table tbody");

if (priceTableBody && document.querySelector(".page-head h1")) {
  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get("q");
  const categoryFilter = searchParams.get("category");


  let results = catalog;

  if (searchQuery) {
    results = results.filter((item) =>
      item.product.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  if (categoryFilter && categoryFilter !== "all") {
    results = results.filter((item) => item.category === categoryFilter);
  }


  const heading = document.querySelector(".page-head h1");
  const subheading = document.querySelector(".page-head p");

  if (searchQuery) {
    heading.textContent = `Search Results for "${searchQuery}"`;
  } else if (categoryFilter && categoryFilter !== "all") {
    heading.textContent =
      categoryFilter.charAt(0).toUpperCase() +
      categoryFilter.slice(1) +
      " Products";
  } else {
    heading.textContent = "All Products";
  }
  subheading.textContent = `${results.length} result${results.length !== 1 ? "s" : ""} found.`;


  document.querySelectorAll(".filter-item[data-category]").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.category === (categoryFilter || "all")) {
      link.classList.add("active");
    }
  });
  function renderTable(rows) {
    if (rows.length === 0) {
      document.querySelector(".table-card").innerHTML = `
        <div class="empty-state">
          <h3>No products found</h3>
          <p>Try a different search term or category.</p>
        </div>
      `;
      return;
    }

    const lowestPrice = Math.min(...rows.map((r) => r.price));

    let rowsHTML = "";
    rows.forEach((item) => {
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
            ${item.price === lowestPrice ? '<span class="lowest-tag">LOWEST</span>' : ""}
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

  function renderStats(rows) {
    const statRow = document.querySelector(".stat-row");
    if (!statRow) return;

    if (rows.length === 0) {
      statRow.style.display = "none";
      return;
    }
    statRow.style.display = "grid";

    const prices = rows.map((r) => r.price);
    const cheapest = Math.min(...prices);
    const cheapestShop = rows.find((r) => r.price === cheapest).shop;
    const average = Math.round(
      prices.reduce((sum, p) => sum + p, 0) / prices.length,
    );
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

  
  const sortSelect = document.querySelector(".sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      const sorted = [...results];
      const value = sortSelect.value;

      sorted.sort((a, b) => {
        if (value === "price-low") return a.price - b.price;
        if (value === "price-high") return b.price - a.price;
        if (value === "distance") return a.distance - b.distance;
        if (value === "rating") return b.rating - a.rating;
        return 0;
      });

      renderTable(sorted);
    });
  }
}

const params = new URLSearchParams(window.location.search);
const productId = params.get("product");

console.log(productId);

const data = products[productId];

console.log(data);

if (data) {
  document.querySelector(".product-summary h2").textContent = data.name;
  document.querySelector(".summary-thumb img").src = data.image;
  document.querySelector(".summary-thumb img").alt = data.name;
  document.querySelector(".summary-rating").textContent =
    "⭐⭐⭐⭐⭐ " + data.rating;
  document.querySelector(".summary-price").textContent = data.priceRange;
  document.title = data.name + " · Bazaar Check";
}
if (data) {
  document.querySelector(".current").textContent = data.name;
}

if (data) {
  const tbody = document.getElementById("shopRows");
  let rowsHTML = "";

  data.shops.forEach((shop) => {
    rowsHTML += `
        <tr>
        <td>
        <div class="shop-cell">
        <span class="shop-avatar">🏪</span> ${shop.name}
        </div>
        </td>
        <td class="price-cell">
        ${shop.price} AFN
        ${shop.lowest ? '<span class="lowest-tag">Lowest</span>' : ""}
        </td>
        <td>${shop.distance}</td>
        <td><a href="shop.html?shop=${shop.shopId}" class="btn-view"> View in shop</a></td>
        </tr>
        `;
  });
  tbody.innerHTML = rowsHTML;
}

// favorit button

document.querySelectorAll(".fav-btn").forEach((btn) => {
    const product = btn.dataset.product;
    const shop = btn.dataset.shop;

    // Show existing favorite state only if user is logged in
    if (
        product &&
        shop &&
        isLoggedIn() &&
        isFavorited(product, shop)
    ) {
        btn.classList.add("is-favorited");
        btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        // IMPORTANT:
        // If user is not logged in, stop here.
        if (!isLoggedIn()) {
            requireLogin();
            return;
        }

        const price = parseInt(btn.dataset.price);
        const image = btn.dataset.image;

        const nowFavorited = toggleFavorite(
            product,
            shop,
            price,
            image
        );

        if (nowFavorited) {
            btn.classList.add("is-favorited");
            btn.innerHTML =
                '<i class="fa-solid fa-heart"></i>';
        } else {
            btn.classList.remove("is-favorited");
            btn.innerHTML =
                '<i class="fa-regular fa-heart"></i>';
        }
    });
});

// favorite button on product details page
const favBtnDetails = document.getElementById("favBtn");
if (favBtnDetails) {
  favBtnDetails.addEventListener("click", () => {
    favBtnDetails.classList.toggle("is-favorited");

    if (favBtnDetails.classList.contains("is-favorited")) {
      favBtnDetails.innerHTML =
        '<img src="images/red-heart.png" class="filled-heart"> Added to favorites';
    } else {
      favBtnDetails.innerHTML =
        '<i class="fa-regular fa-heart simple-heart"></i> Add to favorites';
    }
  });
}

// price alert button on product details page
const alertBtn = document.getElementById("alertBtn");
if (alertBtn) {
  alertBtn.addEventListener("click", () => {
    const target = prompt("Notify me when the price drops below (AFN):");
    if (target) {
      alert(`You will be notified when the price drops below ${target} AFN`);
    }
  });
}

// Auto fill year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// selecting the filter that is clicked
const filterItems = document.querySelectorAll(".filter-item");

filterItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".filter-item.active")?.classList.remove("active");
    item.classList.add("active");
  });
});

// toggle filter sidebar
const filterToggle = document.querySelector(".filter-toggle");
const filterPanel = document.querySelector(".filters");
if (filterToggle) {
  filterToggle.addEventListener("click", () => {
    filterPanel.classList.toggle("open");
  });
}

const sortSelect = document.querySelector(".sort-select");
const tableBody = document.querySelector(".price-table tbody");

function getPrice(row) {
  return parseInt(row.querySelector(".price-cell").textContent);
}

function getDistance(row) {
  return parseFloat(row.children[3].textContent);
}

function getRating(row) {
  return parseFloat(row.children[4].textContent.replace("⭐", "").trim());
}

if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    const rows = Array.from(tableBody.querySelectorAll("tr"));

    const value = sortSelect.value;

    rows.sort((a, b) => {
      if (value === "price-low") {
        return getPrice(a) - getPrice(b);
      }

      if (value === "price-high") {
        return getPrice(b) - getPrice(a);
      }

      if (value === "distance") {
        return getDistance(a) - getDistance(b);
      }

      if (value === "rating") {
        return getRating(b) - getRating(a);
      }

      return 0;
    });

    rows.forEach((row) => tableBody.appendChild(row));
  });
}

// shop dynemic cards

const shops = {
  shopA: {
    name: "Halal Shop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJft0LsyEhDLzR8dxZtNvDJk0MuqBWk8TRnx_KeRvYLvVtWVfVpu3Cw2g&s=10",
    rating: "⭐ 4.3 (180 reviews)",
    location: "📍 Kabul, Shahr-e-Naw",
    distance: "🚶 1.2 km away",
    about:
      "A trusted neighborhood store offering fresh groceries at fair prices.",
    phone: "📞 +93 70 111 2222",
    hours: "🕐 Open 7:00 AM – 9:00 PM",
    products: [
      { id: "rice", name: "Rice (1 kg)", price: 120 },
      { id: "oil", name: "Oil (1 L)", price: 160 },
      { id: "tea", name: "Tea (100 g)", price: 138 },
      { id: "flour", name: "Flour (1 kg)", price: 90 },
      { id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ],
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
      { id: "flour", name: "Flour (1 kg)", price: 90 },
      { id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ],
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
      { id: "flour", name: "Flour (1 kg)", price: 90 },
      { id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ],
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
      { id: "flour", name: "Flour (1 kg)", price: 90 },
      { id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ],
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
      { id: "flour", name: "Flour (1 kg)", price: 90 },
      { id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ],
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
      { id: "flour", name: "Flour (1 kg)", price: 90 },
      { id: "sugar", name: "Sugar (1 kg)", price: 85 },
    ],
  },
};

const shopParams = new URLSearchParams(window.location.search);
const shopId = shopParams.get("shop");
const shopData = shops[shopId];

console.log(shopData);

if (shopData) {
  document.getElementById("shopName").textContent = shopData.name;
  document.getElementById("crumbShopName").textContent = shopData.name;
  document.getElementById("shopImage").src = shopData.image;
  document.getElementById("shopImage").alt = shopData.name;
  document.getElementById("shopImage").alt = shopData.name;
  document.getElementById("shopRating").textContent = shopData.rating;
  document.getElementById("shopLocation").textContent = shopData.location;
  document.getElementById("shopDistance").textContent = shopData.distance;
  document.getElementById("shopAbout").textContent = shopData.about;
  document.getElementById("shopPhone").textContent = shopData.phone;
  document.getElementById("shopHours").textContent = shopData.hours;
  document.title = shopData.name + " · Bazaar Check";

  const tbody = document.getElementById("shopProductRows");
  let rowsHTML = "";

  shopData.products.forEach((product) => {
    rowsHTML += `
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

function getCart() {
  const cartData = localStorage.getItem("cart_" + getAuthNamespace());
  return cartData ? JSON.parse(cartData) : [];
}

function saveCart(cartItems) {
  localStorage.setItem(
    "cart_" + getAuthNamespace(),
    JSON.stringify(cartItems)
  );
  updateCartBadge();
}

function addToCart(product, shop, price, image) {
  const cart = getCart();

  const existing = cart.find(
    (item) => item.product === product && item.shop === shop,
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ product, shop, price, image, qty: 1 });
  }

  saveCart(cart);
}

function removeFromCart(product, shop) {
  let cart = getCart();
  cart = cart.filter(
    (item) => !(item.product === product && item.shop === shop),
  );
  saveCart(cart);
}

function updateCartBadge() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;

  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? "flex" : "none";
}

updateCartBadge();

// cart button in homePage

document.querySelectorAll(".add-cart-btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const product = button.dataset.product;
    const shop = button.dataset.shop;
    const price = parseInt(button.dataset.price);
    const image = button.dataset.image;

    addToCart(product, shop, price, image);
    const originalText = button.innerHTML;
    button.innerHTML = '<i class = "fa-solid fa-check"></i> Added';

    setTimeout(() => {
      button.innerHTML = originalText;
    }, 2000);
  });
});

// Empty cart JavaScript codes

function showEmptyCartMessage() {
  const container = document.getElementById("cartItemsContainer");

  if (!container) return;
  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
       <div class="cart-empty">
                <div class="cart-empty-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>

                <h3>Your cart is empty</h3>

                <p>You haven't chosen any products yet.</p>

                <a href="index.html" class="empty-cart-btn">
                   <i class="fa-solid fa-basket-shopping"></i>
                    Start Shopping
                </a>
            </div>
    `;
  }
}

// adding the added product cards

function renderCart() {
  const container = document.getElementById("cartItemsContainer");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    showEmptyCartMessage();
    if (document.getElementById("summaryItemCount")) {
      document.getElementById("summaryItemCount").textContent = "0";
      document.getElementById("summaryProductCount").textContent = "0";
      document.getElementById("summaryTotal").textContent = "0 AFN";
    }
    return;
  }

  container.innerHTML = "";

  cart.forEach((item) => {
    const lineTotal = item.price * item.qty;
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <div class="cart-item-thumb">
        <img src="${item.image}" alt="${item.product}">
      </div>

      <div class="cart-item-info">
        <h5>${item.product}</h5>
        <span>${item.shop} · ${item.price} AFN each</span>
      </div>

      <div class="cart-qty">
        <button class="qty-minus" data-product="${item.product}" data-shop="${item.shop}">−</button>
        <span>${item.qty}</span>
        <button class="qty-plus" data-product="${item.product}" data-shop="${item.shop}">+</button>
      </div>

      <div class="cart-item-price">${lineTotal} AFN</div>

      <button class="cart-remove-btn" data-product="${item.product}" data-shop="${item.shop}">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    container.appendChild(cartItem);
  });

  container.querySelectorAll(".cart-remove-btn").forEach((button) => {
    button.addEventListener("click", function () {
      removeFromCart(this.dataset.product, this.dataset.shop);
      renderCart();
    });
  });

  container.querySelectorAll(".qty-plus").forEach((button) => {
    button.addEventListener("click", function () {
      updateCartQty(this.dataset.product, this.dataset.shop, +1);
    });
  });

  container.querySelectorAll(".qty-minus").forEach((button) => {
    button.addEventListener("click", function () {
      updateCartQty(this.dataset.product, this.dataset.shop, -1);
    });
  });

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalProducts = cart.length;
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const itemCount = document.getElementById("summaryItemCount");
  const productCount = document.getElementById("summaryProductCount");
  const summaryTotal = document.getElementById("summaryTotal");

  if (itemCount) itemCount.textContent = totalItems;
  if (productCount) productCount.textContent = totalProducts;
  if (summaryTotal) summaryTotal.textContent = totalCost + " AFN";
}

function updateCartQty(product, shop, change) {
  const cart = getCart();
  const item = cart.find((i) => i.product === product && i.shop === shop);

  if (item) {
    item.qty += change;
    if (item.qty <= 0) {
      removeFromCart(product, shop);
    } else {
      saveCart(cart);
    }
  }
  renderCart();
}

renderCart();

const clearCartBtn = document.getElementById("clearCartBtn");

if (clearCartBtn) {
  clearCartBtn.addEventListener("click", function () {
    localStorage.removeItem("cart");
    renderCart();
    updateCartBadge();
  });
}

// combination codes

function findBestCombination() {
  console.log("BUTTON CLICKED");
  const cart = getCart();

  if (cart.length === 0) {
    showEmptyCartModal();
    return;
  }

  let bestTotal = 0;
  let originalTotal = 0;
  let resultRows = [];

  cart.forEach((cartItem) => {
    const matches = catalog.filter(
      (entry) => entry.product === cartItem.product,
    );
    let cheapest = matches[0];
    matches.forEach((entry) => {
      if (entry.price < cheapest.price) {
        cheapest = entry;
      }
    });

    const cheapestLineTotal = cheapest.price * cartItem.qty;
    const originalLineTotal = cartItem.price * cartItem.qty;

    bestTotal += cheapestLineTotal;
    originalTotal += originalLineTotal;

    resultRows.push({
      product: cartItem.product,
      bestShop: cheapest.shop,
      bestPrice: cheapest.price,
      qty: cartItem.qty,
      lineTotal: cheapestLineTotal,
    });
  });

  const savings = originalTotal - bestTotal;

  showBestCombinationResult(resultRows, bestTotal, originalTotal, savings);
}

// find combination Modal
function showBestCombinationResult(rows, bestTotal, originalTotal, savings) {
  const modal = document.getElementById("comboModal");
  const body = document.getElementById("comboModalBody");

  let rowsHTML = "";
  rows.forEach((row) => {
    rowsHTML += `
      <div class="combo-row">
        <div>
          <strong>${row.product}</strong>
          <div class="combo-shop">Buy from ${row.bestShop} · ${row.qty} × ${row.bestPrice} AFN</div>
        </div>
        <div><strong>${row.lineTotal} AFN</strong></div>
      </div>
    `;
  });

  let savingsHTML = "";
  if (savings > 0) {
    savingsHTML = `
      <div class="combo-savings">
        <span class="amount">You save ${savings} AFN</span>
        <span class="label">compared to your current shop selections</span>
      </div>
    `;
  } else {
    savingsHTML = `
      <div class="combo-savings">
        <span class="amount">${bestTotal} AFN</span>
        <span class="label">You're already buying at the best prices!</span>
      </div>
    `;
  }

  body.innerHTML = rowsHTML + savingsHTML;
  modal.style.display = "flex";
}

// close Modal property
const findComboBtn = document.getElementById("findComboBtn");
if (findComboBtn) {
  findComboBtn.addEventListener("click", findBestCombination);
}

const closeComboModal = document.getElementById("closeComboModal");
const comboModal = document.getElementById("comboModal");
if (closeComboModal) {
  closeComboModal.addEventListener("click", () => {
    comboModal.style.display = "none";
  });
}
if (comboModal) {
  comboModal.addEventListener("click", (e) => {
    if (e.target === comboModal) {
      comboModal.style.display = "none";
    }
  });
}

// Modal for empty cart for find combination button
function showEmptyCartModal() {
  const modal = document.getElementById("comboModal");
  const body = document.getElementById("comboModalBody");

  body.innerHTML = `
    <div class="empty-cart-message">

      <div class="empty-cart-icon">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>

      <h2>Your Cart is Empty</h2>

      <p>
        You haven't added any products yet.
        Choose some products and come back to find the best combination.
      </p>

      <button class="choose-products-btn" onclick="window.location.href='index.html'">
        <i class="fa-solid fa-bag-shopping"></i>
        Choose Products
      </button>

    </div>
  `;

  modal.style.display = "flex";
}

//========= compare page =============
let compareSelected = [];

function initCompareSelect() {
  const select = document.getElementById("compareProductSelect");
  if (!select) return;

  const uniqueProducts = [...new Set(catalog.map((entry) => entry.product))];

  uniqueProducts.forEach((productName) => {
    const option = document.createElement("option");
    option.value = productName;
    option.textContent = productName;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    const chosen = select.value;
    if (!chosen) return;

    if (compareSelected.length >= 3) {
      alert("You can compare up to 3 products at a time.");
      select.value = "";
      return;
    }

    if (!compareSelected.includes(chosen)) {
      compareSelected.push(chosen);
      renderCompare();
    }

    select.value = "";
  });
}

function removeCompareProduct(productName) {
  compareSelected = compareSelected.filter((p) => p !== productName);
  renderCompare();
}

function renderCompareChips() {
  const chipsContainer = document.getElementById("compareChips");
  if (!chipsContainer) return;

  chipsContainer.innerHTML = "";

  compareSelected.forEach((productName) => {
    const chip = document.createElement("div");
    chip.className = "compare-chip";
    chip.innerHTML = `
      ${productName}
      <button data-product="${productName}"><i class="fa-solid fa-xmark"></i></button>
    `;
    chipsContainer.appendChild(chip);
  });

  chipsContainer.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeCompareProduct(btn.dataset.product);
    });
  });
}

function renderCompareTable() {
  const emptyState = document.getElementById("compareEmpty");
  const tableWrap = document.getElementById("compareTableWrap");
  const hint = document.getElementById("compareHint");

  if (!emptyState || !tableWrap || !hint) return;

  if (compareSelected.length === 0) {
    emptyState.style.display = "block";
    tableWrap.style.display = "none";
    hint.style.display = "none";
    return;
  }

  emptyState.style.display = "none";
  tableWrap.style.display = "block";

  const relevantEntries = catalog.filter((entry) =>
    compareSelected.includes(entry.product),
  );
  const shopNames = [...new Set(relevantEntries.map((entry) => entry.shop))];

  const thead = document.getElementById("compareTableHead");
  let headHTML = "<tr><th>Shop</th>";
  compareSelected.forEach((p) => (headHTML += `<th>${p}</th>`));
  headHTML += "<th>Total</th></tr>";
  thead.innerHTML = headHTML;

  const bestPricePerProduct = {};
  compareSelected.forEach((productName) => {
    const prices = catalog
      .filter((entry) => entry.product === productName)
      .map((entry) => entry.price);
    bestPricePerProduct[productName] = Math.min(...prices);
  });

  // one row per shop

  let bodyHTML = "";
  let bestShopName = null;
  let bestShopTotal = Infinity;
  let bestShopComplete = false;

  shopNames.forEach((shopName) => {
    let rowTotal = 0;
    let hasAllProducts = true;
    let cellsHTML = "";

    compareSelected.forEach((productName) => {
      const match = catalog.find(
        (entry) => entry.shop === shopName && entry.product === productName,
      );

      if (match) {
        rowTotal += match.price;
        const isBest = match.price === bestPricePerProduct[productName];
        cellsHTML += `<td class="${isBest ? "compare-cell-best" : ""}">${match.price} AFN${isBest ? ' <span class="lowest-tag">LOWEST</span>' : ""}</td>`;
      } else {
        hasAllProducts = false;
        cellsHTML += `<td class="compare-cell-empty">Not available</td>`;
      }
    });

    if (hasAllProducts && rowTotal < bestShopTotal) {
      bestShopTotal = rowTotal;
      bestShopName = shopName;
      bestShopComplete = true;
    }

    bodyHTML += `
      <tr data-shop="${shopName}">
        <td><div class="shop-cell"><span class="shop-avatar">🏪</span> ${shopName}</div></td>
        ${cellsHTML}
        <td>${hasAllProducts ? rowTotal + " AFN" : "—"}</td>
      </tr>
    `;
  });

  document.getElementById("compareTableBody").innerHTML = bodyHTML;

  if (bestShopComplete) {
    const winningRow = document.querySelector(
      `tr[data-shop="${bestShopName}"]`,
    );
    if (winningRow) {
      winningRow.classList.add("compare-row-winner");
      winningRow.lastElementChild.classList.add("compare-total-best");
    }

    hint.style.display = "block";
    hint.innerHTML = `<strong>${bestShopName}</strong> has the best total for everything you selected: <strong>${bestShopTotal} AFN</strong>.`;
  } else {
    hint.style.display = "block";
    hint.textContent =
      "No single shop carries all selected products — compare prices individually above.";
  }
}

function renderCompare() {
  renderCompareChips();
  renderCompareTable();
  initCompareSelect();
}

renderCompareTable();
renderCompare();

// favorites helper used in every pages
function getFavorites() {

    const key = "favorites_" + getAuthNamespace();
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : [];
}

function saveFavorites(favItems) {

    const key = "favorites_" + getAuthNamespace();

    localStorage.setItem(key, JSON.stringify(favItems));

    updateFavBadge();
}


function isFavorited(product, shop) {
  const favorites = getFavorites();
  return favorites.some(
    (item) => item.product === product && item.shop === shop,
  );
}

function toggleFavorite(product, shop, price, image) {
  let favorites = getFavorites();
  const alreadySaved = isFavorited(product, shop);

  if (alreadySaved) {
    favorites = favorites.filter(
      (item) => !(item.product === product && item.shop === shop),
    );
  } else {
    favorites.push({ product, shop, price, image });
  }

  saveFavorites(favorites);
  return !alreadySaved;
}

function updateFavBadge() {
  const badge = document.getElementById("favCount");
  if (!badge) return;

  const favorites = getFavorites();
  badge.textContent = favorites.length;
  badge.style.display = favorites.length > 0 ? "flex" : "none";
}

updateFavBadge();

/*         RENDER FAVORITES PAGE      */
function renderFavoritesPage() {
  const container = document.getElementById("favItemsContainer");
  if (!container) return;

  const favorites = getFavorites();

  if (favorites.length === 0) {
    container.innerHTML = `
      <div class="fav-empty">
        <div class="fav-empty-icon"><i class="fa-solid fa-heart"></i></div>
        <h3>No favorites yet</h3>
        <p>Tap the heart on any product to save it here.</p>
        <a href="index.html" class="empty-cart-btn">
          <i class="fa-solid fa-bag-shopping"></i> Browse Products
        </a>
      </div>
    `;
    return;
  }

  let rowsHTML = "";

  favorites.forEach((item) => {
    rowsHTML += `
      <div class="fav-item">
        <div class="fav-item-thumb">
          <img src="${item.image}" alt="${item.product}">
        </div>

        <div class="fav-item-info">
          <h5>${item.product}</h5>
          <span>${item.shop}</span>
        </div>

        <div class="fav-item-price">${item.price} AFN</div>

        <div class="fav-item-actions">
          <button class="fav-add-cart-btn"
                  data-product="${item.product}"
                  data-shop="${item.shop}"
                  data-price="${item.price}"
                  data-image="${item.image}">
            Add to Cart
          </button>

          <button class="fav-remove-btn"
                  data-product="${item.product}"
                  data-shop="${item.shop}">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = rowsHTML;

  // "Add to cart" favorites list
  container.querySelectorAll(".fav-add-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(
        btn.dataset.product,
        btn.dataset.shop,
        parseInt(btn.dataset.price),
        btn.dataset.image,
      );

      const original = btn.textContent;
      btn.textContent = "Added ✓";
      setTimeout(() => {
        btn.textContent = original;
      }, 1200);
    });
  });

  // wire up remove unfavorites buttons
  container.querySelectorAll(".fav-remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleFavorite(btn.dataset.product, btn.dataset.shop);
      renderFavoritesPage();
    });
  });
}

renderFavoritesPage();

/*       CLEAR ALL FAVORITES        */
const clearFavBtn = document.getElementById("clearFavBtn");

if (clearFavBtn) {
  clearFavBtn.addEventListener("click", () => {
    if (getFavorites().length === 0) return;

    if (document.querySelector(".clear-fav-confirm")) return;

    const confirmBox = document.createElement("div");
    confirmBox.className = "clear-fav-confirm";

    confirmBox.innerHTML = `
      <span>Remove all favorites?</span>
      <button class="confirm-yes">Yes</button>
      <button class="confirm-no">Cancel</button>
    `;

    clearFavBtn.insertAdjacentElement("afterend", confirmBox);

    confirmBox.querySelector(".confirm-yes").addEventListener("click", () => {
      saveFavorites([]);
      renderFavoritesPage();

      confirmBox.remove();
    });

    confirmBox.querySelector(".confirm-no").addEventListener("click", () => {
      confirmBox.remove();
    });
  });
}

// =========== Alerts page ============

// Alert Helper used on every page
function getAlerts() {

    const key = "alerts_" + getAuthNamespace();
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : [];
}

function saveAlerts(alertItems) {

    const key = "alerts_" + getAuthNamespace();

    localStorage.setItem(key, JSON.stringify(alertItems));

    updateAlertBadge();
}

function addAlert(product, targetPrice, image) {
  const alerts = getAlerts();

  const existing = alerts.find((a) => a.product === product);
  if (existing) {
    existing.targetPrice = targetPrice;
    existing.enabled = true;
  } else {
    alerts.push({ product, targetPrice, image, enabled: true });
  }
  saveAlerts(alerts);
}

function removeAlert(product) {
  let alerts = getAlerts();

  alerts = alerts.filter((a) => a.product !== product);

  saveAlerts(alerts);
}

// finding the cheapist price from my caltalog
function getCurrentLowestPrice(productName) {
  const matches = catalog.filter((entry) => entry.product === productName);
  if (matches.length === 0) return null;
  return Math.min(...matches.map((entry) => entry.price));
}

function updateAlertBadge() {
  const badge = document.getElementById("alertCount");
  if (!badge) return;

  const alerts = getAlerts();
  const triggeredCount = alerts.filter((a) => {
    const current = getCurrentLowestPrice(a.product);
    return a.enabled && current !== null && current <= a.targetPrice;
  }).length;

  badge.textContent = triggeredCount;
  badge.style.display = triggeredCount > 0 ? "flex" : "none";
}

updateAlertBadge();

/* RENDER ALERTS PAGE */
function renderAlertsPage() {
  const container = document.getElementById("alertItemsContainer");
  if (!container) return;

  const alerts = getAlerts();

  if (alerts.length === 0) {
    container.innerHTML = `
      <div class="alert-empty">
        <div class="alert-empty-icon"><i class="fa-solid fa-bell"></i></div>
        <h3>No price alerts yet</h3>
        <p>Add an alert to get notified when a product drops below your target price.</p>
      </div>
    `;
    return;
  }

  let rowsHTML = "";

  alerts.forEach((alert) => {
    const currentPrice = getCurrentLowestPrice(alert.product);
    const isTriggered =
      alert.enabled &&
      currentPrice !== null &&
      currentPrice <= alert.targetPrice;

    rowsHTML += `
      <div class="alert-item">
        <div class="alert-item-thumb">
          <img src="${alert.image || "images/placeholder.png"}" alt="${alert.product}">
        </div>

        <div class="alert-item-info">
          <h5>${alert.product}
            <span class="alert-status ${isTriggered ? "triggered" : "waiting"}">
              ${isTriggered ? "🎉 Triggered" : "Waiting"}
            </span>
          </h5>
          <span>
            Notify me when price goes below ${alert.targetPrice} AFN
            ${currentPrice !== null ? ` · Current lowest: ${currentPrice} AFN` : ""}
          </span>
        </div>

        <label class="switch">
          <input type="checkbox" data-product="${alert.product}" ${alert.enabled ? "checked" : ""}>
          <span class="slider"></span>
        </label>

        <button class="alert-remove-btn" data-product="${alert.product}">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `;
  });

  container.innerHTML = rowsHTML;

  container.querySelectorAll(".switch input").forEach((input) => {
    input.addEventListener("change", () => {
      toggleAlertEnabled(input.dataset.product);
      renderAlertsPage();
    });
  });

  container.querySelectorAll(".alert-remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeAlert(btn.dataset.product);
      renderAlertsPage();
    });
  });
}

renderAlertsPage();

/*  ADD NEW ALERT MODAL */

const addAlertBtn = document.getElementById("addAlertBtn");

const alertModal = document.getElementById("alertModal");
const closeAlertModal = document.getElementById("closeAlertModal");
const cancelAlertModal = document.getElementById("cancelAlertModal");

const alertProduct = document.getElementById("alertProduct");
const alertTargetPrice = document.getElementById("alertTargetPrice");

const saveAlertModal = document.getElementById("saveAlertModal");
const alertModalError = document.getElementById("alertModalError");

if (addAlertBtn) {
  addAlertBtn.addEventListener("click", () => {
    const uniqueProducts = [...new Set(catalog.map((entry) => entry.product))];
    alertProduct.innerHTML = '<option value="">Select a product</option>';

    uniqueProducts.forEach((productName) => {
      const option = document.createElement("option");

      option.value = productName;
      option.textContent = productName;

      alertProduct.appendChild(option);
    });

    alertProduct.value = "";
    alertTargetPrice.value = "";

    alertModalError.textContent = "";
    alertModalError.classList.remove("show");

    alertModal.classList.add("show");
    setTimeout(() => {
      alertProduct.focus();
    }, 100);
  });
}

function closeAlertModalWindow() {
  alertModal.classList.remove("show");
}

if (closeAlertModal) {
  closeAlertModal.addEventListener("click", closeAlertModalWindow);
}

if (cancelAlertModal) {
  cancelAlertModal.addEventListener("click", closeAlertModalWindow);
}
if (alertModal) {
  alertModal.addEventListener("click", (e) => {
    if (e.target === alertModal) {
      closeAlertModalWindow();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && alertModal.classList.contains("show")) {
    closeAlertModalWindow();
  }
});

if (saveAlertModal) {
  saveAlertModal.addEventListener("click", () => {
    const chosenProduct = alertProduct.value;

    const target = parseInt(alertTargetPrice.value);
    if (!chosenProduct) {
      alertModalError.textContent = "Please select a product.";

      alertModalError.classList.add("show");

      return;
    }

    if (!target || isNaN(target) || target <= 0) {
      alertModalError.textContent = "Please enter a valid target price.";

      alertModalError.classList.add("show");

      return;
    }

    const image = productImages[chosenProduct];
    addAlert(chosenProduct, target, image);

    renderAlertsPage();
    closeAlertModalWindow();
  });
}

// Price History codes
// price history data

const priceHistoryData = {
  "Rice (1 kg)": [
    { date: "1 Aug", avg: 105, low: 95, high: 125 },
    { date: "5 Aug", avg: 110, low: 100, high: 130 },
    { date: "10 Aug", avg: 115, low: 105, high: 135 },
    { date: "15 Aug", avg: 120, low: 110, high: 140 },
    { date: "20 Aug", avg: 125, low: 115, high: 145 },
  ],
  "Oil (1 L)": [
    { date: "1 Aug", avg: 175, low: 165, high: 185 },
    { date: "5 Aug", avg: 172, low: 162, high: 182 },
    { date: "10 Aug", avg: 168, low: 160, high: 178 },
    { date: "15 Aug", avg: 165, low: 158, high: 175 },
    { date: "20 Aug", avg: 165, low: 160, high: 170 },
  ],
  "Flour (1 kg)": [
    { date: "1 Aug", avg: 95, low: 88, high: 100 },
    { date: "5 Aug", avg: 92, low: 85, high: 98 },
    { date: "10 Aug", avg: 88, low: 82, high: 94 },
    { date: "15 Aug", avg: 85, low: 80, high: 90 },
    { date: "20 Aug", avg: 85, low: 80, high: 90 },
  ],
  "Sugar (1 kg)": [
    { date: "1 Aug", avg: 80, low: 75, high: 85 },
    { date: "5 Aug", avg: 82, low: 77, high: 87 },
    { date: "10 Aug", avg: 84, low: 79, high: 89 },
    { date: "15 Aug", avg: 85, low: 80, high: 90 },
    { date: "20 Aug", avg: 85, low: 80, high: 90 },
  ],
  "Tea (100 g)": [
    { date: "1 Aug", avg: 130, low: 125, high: 135 },
    { date: "5 Aug", avg: 132, low: 126, high: 138 },
    { date: "10 Aug", avg: 135, low: 128, high: 140 },
    { date: "15 Aug", avg: 137, low: 130, high: 142 },
    { date: "20 Aug", avg: 139, low: 132, high: 145 },
  ],
};

// Line for graph

function drawHistoryChart(dataPoints) {
  const svg = document.getElementById("historyChart");
  if (!svg) return;

  const chartWidth = 620;
  const chartHeight = 240;
  const paddingLeft = 56; 
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const plotWidth = chartWidth - paddingLeft - paddingRight;
  const plotHeight = chartHeight - paddingTop - paddingBottom;

  const prices = dataPoints.map((p) => p.avg);
  const rawMin = Math.min(...prices);
  const rawMax = Math.max(...prices);

  const niceStep = 10;
  const minPrice = Math.floor(rawMin / niceStep) * niceStep;
  const maxPrice = Math.ceil(rawMax / niceStep) * niceStep;
  const priceRange = maxPrice - minPrice || niceStep;

  const tickCount = 4;
  const ticks = [];
  for (let i = 0; i <= tickCount; i++) {
    ticks.push(minPrice + (priceRange / tickCount) * i);
  }

  function priceToY(price) {
    return (
      paddingTop + plotHeight - ((price - minPrice) / priceRange) * plotHeight
    );
  }
  function indexToX(index) {
    return paddingLeft + (index / (dataPoints.length - 1)) * plotWidth;
  }

  let gridHTML = "";
  let yLabelsHTML = "";

  ticks.forEach((tickValue) => {
    const y = priceToY(tickValue);
    gridHTML += `<line x1="${paddingLeft}" y1="${y.toFixed(1)}" x2="${chartWidth - paddingRight}" y2="${y.toFixed(1)}" stroke="#eef1ef" stroke-width="1"></line>`;
    yLabelsHTML += `<text x="${paddingLeft - 10}" y="${(y + 4).toFixed(1)}" text-anchor="end" font-size="11" fill="#98a2b3">${Math.round(tickValue)}</text>`;
  });


  const coords = dataPoints.map((point, index) => ({
    x: indexToX(index),
    y: priceToY(point.avg),
  }));

  let pathD = "";
  coords.forEach((c, i) => {
    pathD +=
      (i === 0 ? "M" : "L") + c.x.toFixed(1) + "," + c.y.toFixed(1) + " ";
  });

  const baselineY = paddingTop + plotHeight;
  const areaD =
    pathD +
    `L${coords[coords.length - 1].x.toFixed(1)},${baselineY} L${coords[0].x.toFixed(1)},${baselineY} Z`;

  let dotsHTML = "";
  coords.forEach((c, i) => {
    dotsHTML += `
      <circle cx="${c.x.toFixed(1)}" cy="${c.y.toFixed(1)}" r="9" fill="transparent" class="chart-hover-dot" data-value="${dataPoints[i].avg}" data-date="${dataPoints[i].date}"></circle>
      <circle cx="${c.x.toFixed(1)}" cy="${c.y.toFixed(1)}" r="4" fill="#178a4c" stroke="#fff" stroke-width="2" pointer-events="none"></circle>
    `;
  });


  const axisLine = `<line x1="${paddingLeft}" y1="${paddingTop}" x2="${paddingLeft}" y2="${baselineY}" stroke="#d9dedb" stroke-width="1.2"></line>`;
  const axisTitle = `<text x="14" y="${chartHeight / 2}" text-anchor="middle" font-size="11" font-weight="600" fill="#667085" transform="rotate(-90 14 ${chartHeight / 2})">Price (AFN)</text>`;

  svg.setAttribute("viewBox", `0 0 ${chartWidth} ${chartHeight}`);
  svg.innerHTML = `
    ${gridHTML}
    ${axisLine}
    <path d="${areaD}" fill="#e6f7ec" stroke="none"></path>
    <path d="${pathD.trim()}" fill="none" stroke="#178a4c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
    ${dotsHTML}
    ${yLabelsHTML}
    ${axisTitle}
  `;


  const labelsContainer = document.getElementById("historyChartLabels");
  labelsContainer.innerHTML = dataPoints
    .map((p) => `<span>${p.date}</span>`)
    .join("");

  svg.querySelectorAll(".chart-hover-dot").forEach((dot) => {
    const titleEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title",
    );
    titleEl.textContent = `${dot.dataset.date}: ${dot.dataset.value} AFN`;
    dot.appendChild(titleEl);
  });
}

function renderPriceHistoryPage(productName) {
  const dataPoints = priceHistoryData[productName];
  if (!dataPoints) return;

  const title = document.getElementById("historyTitle");
  const crumb = document.getElementById("historyCrumb");
  const subtitle = document.getElementById("historySubtitle");
  if (title) title.textContent = `${productName} — Price History`;
  if (crumb) crumb.textContent = productName;
  if (subtitle)
    subtitle.textContent =
      "Track how prices have changed over the last month across all shops.";
  document.title = `${productName} Price History · Bazaar Check`;


  drawHistoryChart(dataPoints);


  const tbody = document.getElementById("historyTableBody");
  if (tbody) {
    let rowsHTML = "";
    [...dataPoints].reverse().forEach((point) => {
      rowsHTML += `
        <tr>
          <td>${point.date}</td>
          <td>${point.avg} AFN</td>
          <td>${point.low} AFN</td>
          <td>${point.high} AFN</td>
        </tr>
      `;
    });
    tbody.innerHTML = rowsHTML;
  }
}

function initHistoryPage() {
  const select = document.getElementById("historyProductSelect");
  if (!select) return; 

  Object.keys(priceHistoryData).forEach((productName) => {
    const option = document.createElement("option");
    option.value = productName;
    option.textContent = productName;
    select.appendChild(option);
  });

 
  const urlParams = new URLSearchParams(window.location.search);
  const requestedProduct = urlParams.get("product");

  const matchedProduct = Object.keys(priceHistoryData).find((name) =>
    name.toLowerCase().includes((requestedProduct || "").toLowerCase()),
  );

  const startingProduct = matchedProduct || Object.keys(priceHistoryData)[0];
  select.value = startingProduct;

  renderPriceHistoryPage(startingProduct);

  select.addEventListener("change", () => {
    renderPriceHistoryPage(select.value);
  });
}

initHistoryPage();

// Profile page


function getUser() {
    const data = localStorage.getItem("user");

    if (data) {
        return JSON.parse(data);
    }

    return null;
}

function getAuthNamespace() {
  const user = getUser();

  if (user && user.email) {
    return user.email.trim().toLowerCase();
  }

  return "guest";
}

function saveUser(userData){
  localStorage.setItem('user', JSON.stringify(userData));
}


function renderProfilePage() {
    const nameEl = document.getElementById("profileName");


    if (!nameEl) return;

    const user = getUser();

    // NO USER LOGGED IN

if (!user) {
    requireLogin();
    return;
}

    // USER EXISTS

    document.getElementById("profileAvatar").src = user.avatar || "";
    document.getElementById("profileName").textContent = user.name || "";
    document.getElementById("profileEmail").textContent = user.email || "";

    if (user.memberSince) {
        const [year, month] = user.memberSince.split("-");

        const monthNames = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        document.getElementById("profileSince").textContent =
            `Member since ${monthNames[parseInt(month) - 1]} ${year}`;
    } else {
        document.getElementById("profileSince").textContent = "";
    }

    document.getElementById("infoName").textContent = user.name || "";
    document.getElementById("infoEmail").textContent = user.email || "";
    document.getElementById("infoPhone").textContent = user.phone || "";
    document.getElementById("infoLocation").textContent = user.location || "";


    // ACTIVITY

    const favorites = getFavorites();
    const alerts = getAlerts();
    const cart = getCart();

    const activeAlerts = alerts.filter(a => a.enabled).length;

    const cartItemCount = cart.reduce(
        (sum, item) => sum + item.qty,
        0
    );

    const cartValue = cart.reduce(
        (sum, item) => sum + (item.price * item.qty),
        0
    );

    document.getElementById("statFavorites").textContent = favorites.length;
    document.getElementById("statAlerts").textContent = activeAlerts;
    document.getElementById("statCart").textContent = cartItemCount;
    document.getElementById("statCartValue").textContent = cartValue + " AFN";
}
renderProfilePage();

/*  FILL TOPBAR USER INFO  */
const topbarName = document.getElementById("topbarName");
const topbarAvatar = document.getElementById("topbarAvatar");

if (topbarName && topbarAvatar) {

    const user = getUser();

    if (user) {
        topbarName.textContent = user.name || "";
        topbarAvatar.src = user.avatar || "";
    } else {
        topbarName.textContent = "";
        topbarAvatar.src = "";
    }
}

/*  AUTH STATE HELPERS (getUser/saveUser already exist above — reused, not duplicated) */

function isLoggedIn(){
  return getUser() !== null;
}

function logoutUser(){
  localStorage.removeItem('user');
  refreshAfterAuthChange();
}

function syncFavButtonsUI(){
  document.querySelectorAll(".fav-btn").forEach((btn) => {
    const product = btn.dataset.product;
    const shop = btn.dataset.shop;
    if (!product || !shop) return;

    const shouldBeFavorited = isLoggedIn() && isFavorited(product, shop);

    if (shouldBeFavorited) {
      btn.classList.add("is-favorited");
      btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    } else {
      btn.classList.remove("is-favorited");
      btn.innerHTML = '<i class="fa-regular fa-heart simple-heart"></i>';
    }
  });
}

function refreshAfterAuthChange(){
  updateTopbarUser();
  updateCartBadge();
  updateFavBadge();
  updateAlertBadge();
  syncFavButtonsUI();
  renderFavoritesPage();
  renderAlertsPage();
  renderCart();
  renderProfilePage();
}

/* TOPBAR USER DISPLAY (runs on every page) */
function updateTopbarUser(){
  const nameEl = document.getElementById('topbarName');
  const avatarEl = document.getElementById('topbarAvatar');
  const defaultIcon = document.getElementById('topbarDefaultIcon');
  const user = getUser();

  if(nameEl){
    if(user){
      nameEl.textContent = user.name || "My Account";

      if(user.avatar){
        avatarEl.src = user.avatar;
        avatarEl.style.display = "block";
        defaultIcon.style.display = "none";
      } else {
        avatarEl.style.display = "none";
        defaultIcon.style.display = "block";
      }
    } else {
      nameEl.textContent = "Login";
      avatarEl.style.display = "none";
      avatarEl.removeAttribute('src');
      defaultIcon.style.display = "block";
    }
  }

  updateSidebarAuthLink();
}
updateTopbarUser();

function updateSidebarAuthLink(){
  const authLink = document.getElementById('logoutLink');
  if(!authLink) return;

  authLink.innerHTML = isLoggedIn()
    ? '<i class="fa-solid fa-right-from-bracket"></i> Logout'
    : '<i class="fa-solid fa-right-to-bracket"></i> Login';
}

/*  showMessage — reusable login-required popup */
function showMessage(title, text, actionLabel, onAction){
  const modal = document.getElementById('siteMessage');
  if(!modal) return;

  document.getElementById('siteMessageTitle').textContent = title;
  document.getElementById('siteMessageText').textContent = text;

  const actionBtn = document.getElementById('siteMessageActionBtn');
  actionBtn.textContent = actionLabel;


  const freshBtn = actionBtn.cloneNode(true);
  actionBtn.parentNode.replaceChild(freshBtn, actionBtn);
  freshBtn.addEventListener('click', () => {
    modal.style.display = "none";
    if(onAction) onAction();
  });

  modal.style.display = "flex";
}

const siteMessageCloseBtn = document.getElementById('siteMessageCloseBtn');
const siteMessage = document.getElementById('siteMessage');
if(siteMessageCloseBtn){
  siteMessageCloseBtn.addEventListener('click', () => { siteMessage.style.display = "none"; });
}
if(siteMessage){
  siteMessage.addEventListener('click', (e) => {
    if(e.target === siteMessage) siteMessage.style.display = "none";
  });
}

/* requireLogin — call this to protect any action */
function requireLogin(){
  showMessage(
    "You're not logged in",
    "Please log in to your Bazaar Check account to access this feature.",
    "Login Now",
    () => openAuthModal('login')
  );
}

/*  INTERCEPT CLICKS ON PROTECTED LINKS */
document.querySelectorAll('[data-protected="true"]:not(.fav-btn)').forEach(link => {
  link.addEventListener('click', (e) => {
    if(!isLoggedIn()){
      e.preventDefault();
      requireLogin();
    }
  });
});

/*  AUTH MODAL (login/register) */
function openAuthModal(view){
  const modal = document.getElementById('authModal');
  if(!modal) return;

  document.getElementById('authLoginView').style.display = view === 'login' ? 'block' : 'none';
  document.getElementById('authRegisterView').style.display = view === 'register' ? 'block' : 'none';
  modal.style.display = "flex";
}

const authModal = document.getElementById('authModal');
const authModalClose = document.getElementById('authModalClose');
if(authModalClose){
  authModalClose.addEventListener('click', () => { authModal.style.display = "none"; });
}
if(authModal){
  authModal.addEventListener('click', (e) => {
    if(e.target === authModal) authModal.style.display = "none";
  });
}

const switchToRegister = document.getElementById('switchToRegister');
if(switchToRegister){
  switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    openAuthModal('register');
  });
}
const switchToLogin = document.getElementById('switchToLogin');
if(switchToLogin){
  switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    openAuthModal('login');
  });
}

/* ---- Login submit ---- */
const loginSubmitBtn = document.getElementById('loginSubmitBtn');
if(loginSubmitBtn){
  loginSubmitBtn.addEventListener('click', () => {
    const errorBox = document.getElementById('loginError');
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    function showLoginError(msg){
      errorBox.textContent = msg;
      errorBox.style.display = "block";
    }

    if(!email || !password){
      showLoginError("Please enter your email and password.");
      return;
    }

    const existing = JSON.parse(localStorage.getItem('registeredUser') || 'null');

    if(existing && existing.email === email && existing.password === password){
      errorBox.style.display = "none";
      saveUser(existing);
      document.getElementById('authModal').style.display = "none";
      updateTopbarUser();
      renderProfilePage();
    } else {
      showLoginError("Incorrect email or password.");
    }
  });
}

/* ---- Register submit ---- */
const registerSubmitBtn = document.getElementById('registerSubmitBtn');
if(registerSubmitBtn){
  registerSubmitBtn.addEventListener('click', () => {
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const phone = document.getElementById('registerPhone').value.trim();
    const location = document.getElementById('registerLocation').value.trim();

    if(!name || !email || !password){
      alert("Please fill in every field.");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      avatar: registerAvatarData || "",   
      phone,
      location,
      memberSince: new Date().toISOString().slice(0, 7)
    };

    localStorage.setItem('registeredUser', JSON.stringify(newUser));
    saveUser(newUser);
    document.getElementById('authModal').style.display = "none";
    updateTopbarUser();
    renderProfilePage();
    refreshAfterAuthChange();
  });
}

const logoutLink = document.getElementById('logoutLink');

if(logoutLink){
  logoutLink.addEventListener('click', (e) => {
    e.preventDefault();

    if(isLoggedIn()){
      logoutUser();
    } else {
      closeSidebar();
      openAuthModal('login');
    }
  });
}

/* ---- Avatar upload preview ---- */
let registerAvatarData = ""; 

const registerAvatarInput = document.getElementById('registerAvatarInput');
if(registerAvatarInput){
  registerAvatarInput.addEventListener('change', () => {
    const file = registerAvatarInput.files[0];
    if(!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      registerAvatarData = reader.result;
      document.getElementById('avatarPreviewImg').src = registerAvatarData;
      document.getElementById('avatarPreviewImg').style.display = "block";
      document.getElementById('avatarPreviewIcon').style.display = "none";
    };
    reader.readAsDataURL(file);
  });
}


/*  FAQ ACCORDION */
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');

  
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if(openItem !== item){
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = null;
      }
    });

    if(isOpen){
      item.classList.remove('open');
      answer.style.maxHeight = null;
    } else {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

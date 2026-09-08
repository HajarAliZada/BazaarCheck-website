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
        image: "images/rice.png",
        rating: "4.6 (120 reviews)",
        priceRange:"115 AFN - 145 AFN",
        shops:[
            {name:"Shop A", price: 115, distance: "0.8 km", lowest:true},
            {name:"Shop B", price: 120, distance: "1.2 km", lowest:false},
            {name:"Shop C", price: 145, distance: "1.5 km", lowest:false}
        ]
    },
      oil: {
    name: "Oil (1 L)",
    image: "images/oil.png",
    rating: "4.3 (95 reviews)",
    priceRange: "160 AFN – 180 AFN",
    shops: [
      { name: "Shop A", price: 160, distance: "1.2 km", lowest: true },
      { name: "Shop C", price: 170, distance: "0.8 km", lowest: false },
      { name: "Shop D", price: 180, distance: "2.1 km", lowest: false }
    ]
  },
  flour: {
    name: "Flour (1 kg)",
    image: "images/flour.png",
    rating: "4.1 (60 reviews)",
    priceRange: "80 AFN – 95 AFN",
    shops: [
      { name: "Shop B", price: 80, distance: "1.5 km", lowest: true },
      { name: "Shop C", price: 90, distance: "0.8 km", lowest: false }
    ]
  },

    sugar: {
    name: "Sugar (1 kg)",
    image: "images/sugar.png",
    rating: "4.1 (60 reviews)",
    priceRange: "70 AFN – 95 AFN",
    shops: [
      { name: "Shop B", price: 80, distance: "1.5 km", lowest: true },
      { name: "Shop C", price: 90, distance: "0.8 km", lowest: false }
    ]
  },

    tea: {
    name: "Tea (100 gr)",
    image: "images/tea.png",
    rating: "4.1 (60 reviews)",
    priceRange: "80 AFN – 95 AFN",
    shops: [
      { name: "Shop B", price: 80, distance: "1.5 km", lowest: true },
      { name: "Shop C", price: 90, distance: "0.8 km", lowest: false }
    ]
  },

};
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
        <td><a href="shop.html" class="btn-view"> View in shop</a></td>
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


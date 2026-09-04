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

// favorit button

const favBtn = document.querySelectorAll('.fav-btn');
favBtn.forEach(button => {
    button.addEventListener('click',() =>{
        if(button.classList.contains('active')){
            button.innerHTML = '<i class="fa-regular fa-heart simple-heart"></i>';
            button.classList.remove('active');
        } else{
            button.innerHTML = '<img src="images/red-heart.png" class="filled-heart">';
            button.classList.add('active');
        }
    });
});

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

// Sorting functionality
const sortSelect = document.querySelector('.sort-select');
const tableBody = document.querySelector('.price-table tbody');

function getPrice(row){
    return parseInt(row.querySelector('.price-cell').textContent);
}

function getDistance(row){
    return parseFloat(row.children[3].textContent);
}

function getRating(row){
    return parseFloat(row.children[4].textContent);
}

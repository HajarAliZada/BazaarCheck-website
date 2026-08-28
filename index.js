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
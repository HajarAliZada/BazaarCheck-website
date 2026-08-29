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



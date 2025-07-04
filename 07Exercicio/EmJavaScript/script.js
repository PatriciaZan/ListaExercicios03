const hamburger = document.getElementById('hamburger');
const ul = document.getElementById('ul-container');

let statusClick = false;

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    statusClick = !statusClick;
    //console.log(statusClick);
    
    statusClick ? ul.style.display = 'block' : ul.style.display = 'none';
})
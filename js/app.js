
// Toggle Sidebar System 
let checkToggle = false;

const toggle = () => {
    const userIcon = document.getElementById('user-icon');
    const toggleMenu = document.getElementById('toggle-menu');
    const body = document.getElementById('body');
    body.style.transition = '0.5s';
    if (checkToggle) {
        checkToggle = false;
        userIcon.classList.add('fa-user');
        userIcon.classList.remove('fa-times');
        body.style.marginRight = '0';

        toggleMenu.style.visibility = 'hidden';
        toggleMenu.style.right = '-350px';
    }
    else {
        checkToggle = true;
        userIcon.classList.remove('fa-user');
        userIcon.classList.add('fa-times');
        body.style.marginRight = '350px';

        toggleMenu.style.visibility = 'visible';
        toggleMenu.style.right = '0';
    }
}
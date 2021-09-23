
// Toggle Sidebar System 
let checkToggle = false;

const toggle = () => {
    const userIcon = document.getElementById('user-icon');
    const toggleMenu = document.getElementById('toggle-menu');
    const body = document.getElementById('body');
    body.style.transition = '0.5s';
    if (checkToggle) {
        checkToggle = false;
        userIcon.setAttribute('src', 'resources/user-icon.png')
        body.style.marginRight = '0';

        toggleMenu.style.visibility = 'hidden';
        toggleMenu.style.right = '-350px';
    }
    else {
        checkToggle = true;
        userIcon.setAttribute('src', 'resources/close-icon.png');
        body.style.marginRight = '350px';

        toggleMenu.style.visibility = 'visible';
        toggleMenu.style.right = '0';
    }
}
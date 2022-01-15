
// Active Page Checking 
let path = location.pathname;
switch (path) {
    case '/':
    case '/index.html':
        document.getElementById('home').classList.add('active');
        break;
    case '/covid-19.html':
        document.getElementById('covid-19').classList.add('active');
        document.getElementById('category').classList.add('active');
        break;
    case '/allopathic.html':
        document.getElementById('allopathic').classList.add('active');
        document.getElementById('category').classList.add('active');
        break;
    case '/herbal.html':
        document.getElementById('herbal').classList.add('active');
        document.getElementById('category').classList.add('active');
        break;
    case '/homeo.html':
        document.getElementById('homeo').classList.add('active');
        document.getElementById('category').classList.add('active');
        break;
    case '/unani.html':
        document.getElementById('unani').classList.add('active');
        document.getElementById('category').classList.add('active');
        break;
    case '/vaccine.html':
        document.getElementById('vaccine').classList.add('active');
        document.getElementById('category').classList.add('active');
        break;
    case '/devices.html':
        document.getElementById('devices').classList.add('active');
        document.getElementById('category').classList.add('active');
        break;
    case '/health.html':
        document.getElementById('health').classList.add('active');
        document.getElementById('category').classList.add('active');
        break;
    case '/prescription.html':
        document.getElementById('prescription').classList.add('active');
        break;
    case '/about.html':
        document.getElementById('about').classList.add('active');
        break;
}

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
        toggleMenu.style.right = '-27vw';
    }
    else {
        checkToggle = true;
        userIcon.setAttribute('src', 'resources/close-icon.png');
        body.style.marginRight = '27vw';

        toggleMenu.style.visibility = 'visible';
        toggleMenu.style.right = '0';
    }
}
console.log('AN/UG Financial')

// login elements
const loginLogo = document.getElementById('loginLogo');
const loginFormUsername = document.getElementById('loginFormName');
const loginFormPassword = document.getElementById('loginFormPassword');
const loginForm = document.getElementById('loginForm');

// account elements
const mainLogo = document.getElementById('mainLogo');
const welcomeHeader = document.getElementById('welcomeHeader');
const currentBalance = document.getElementById('currentBalance');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = loginFormUsername.value;
    const pass = loginFormPassword.value;
    const currentUser = validateLogin(username, pass);
    if (!currentUser) {
        window.alert('Invalid username or password');
    }
    loadAccount(currentUser);
});

const USERS = {
    admin: {
        user: 'admin',
        pass: '99999',
        displayName: 'Admin',
        currentBalance: '$1,000,000.00'
    },
    tac: {
        user: 'tac',
        pass: '10012009',
        displayName: 'Ty',
        currentBalance: '$900.00'
    },
    moc: {
        user: 'moc',
        pass: '02162013',
        displayName: 'Makenzie',
        currentBalance: '$900.00'
    },
    wnw: {
        user: 'wnw',
        pass: '05012012',
        displayName: 'Whitney',
        currentBalance: '$900.00'
    },
    wew: {
        user: 'wew',
        pass: '05022014',
        displayName: 'Weslyn',
        currentBalance: '$900.00'
    }
};

function validateLogin(username='', pass='') {
    if (!username || !pass) {
        return null;
    }

    const currentUser = USERS[username.toLowerCase()];
    return currentUser ? currentUser : null;
}

function loadAccount(currentUser) {
    welcomeHeader.textContent = `${getWelcomeMessage()} ${currentUser.displayName}`;
    currentBalance.textContent = currentUser.currentBalance;

    loginLogo.classList.add('move-left');
    loginForm.classList.add('move-right');
    setTimeout(() => {
        mainLogo.classList.remove('hidden');
        accountContainer.classList.add('show');
    }, 700);
}

function getWelcomeMessage () {
    const d = new Date();
    const hours = d.getHours();
    if (hours < 12) {
        return 'Good Morning,';
    } else if (hours >= 12 && hours < 17) {
        return 'Good Afternoon,';
    } else if (hours >= 17 && hours <=24) {
        return 'Good Evening,'
    } else {
        return 'Hello,'
    }
}

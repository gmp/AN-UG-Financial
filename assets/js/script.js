console.log('AN/UG Financial')

// login elements
const loginContainer = document.getElementById('loginContainer');
const loginLogo = document.getElementById('loginLogo');
const loginFormUsername = document.getElementById('loginFormName');
const loginFormPassword = document.getElementById('loginFormPassword');
const loginForm = document.getElementById('loginForm');

// account elements
const mainLogo = document.getElementById('mainLogo');
const welcomeHeader = document.getElementById('welcomeHeader');
const currentBalance = document.getElementById('currentBalance');

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
        currentBalance: '$1,000.00'
    },
    moc: {
        user: 'moc',
        pass: '02162013',
        displayName: 'Makenzie',
        currentBalance: '$1,000.00'
    },
    wnw: {
        user: 'wnw',
        pass: '05012012',
        displayName: 'Whitney',
        currentBalance: '$1,000.00'
    },
    wew: {
        user: 'wew',
        pass: '05022014',
        displayName: 'Weslyn',
        currentBalance: '$1,000.00'
    }
};

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

function validateLogin(username='', pass='') {
    if (!username || !pass) {
        return null;
    }

    const currentUser = USERS[username.toLowerCase()];

    if (!currentUser) {
        gtag('event', 'login_attempt', {
            'event_category': 'login',
            'event_label': 'invalid user',
            'value': 0
        });
        return null;
    }

    if (currentUser.pass !== pass.toLowerCase()) {
        gtag('event', 'login_attempt', {
            'event_category': 'login',
            'event_label': 'invalid pass',
            'value': 0
        });
        return null;
    }

    gtag('event', 'login_attempt', {
        'event_category': 'login',
        'event_label': `user:${currentUser.user}`,
        'value': 1
    });

    return currentUser;
}

function loadAccount(currentUser) {
    welcomeHeader.textContent = `${getWelcomeMessage()} ${currentUser.displayName}`;
    currentBalance.textContent = currentUser.currentBalance;

    loginLogo.classList.add('move-left');
    loginForm.classList.add('move-right');
    setTimeout(() => {
        loginContainer.classList.add('hide');
        mainLogo.classList.remove('off-left');
        accountContainer.classList.add('show');
    }, 700);
}

function getWelcomeMessage () {
    const d = new Date();
    const hours = d.getHours();
    if (hours < 12) {
        return 'Good morning,';
    } else if (hours >= 12 && hours < 17) {
        return 'Good afternoon,';
    } else if (hours >= 17 && hours <=24) {
        return 'Good evening,'
    } else {
        return 'Hello,'
    }
}

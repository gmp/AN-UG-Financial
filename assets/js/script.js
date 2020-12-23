console.log('AN/UG Financial')

const logo = document.getElementById('logo');
const loginContainer = document.getElementById('loginContainer')
const loginFormUsername = document.getElementById('loginFormName');
const loginFormPassword = document.getElementById('loginFormPassword');
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Login submit!')
    const username = loginFormUsername.value;
    const pass = loginFormPassword.value;
    console.log('Username:', username);
    console.log('Password:', pass);
    const currentUser = validateLogin(username, pass);
    if (!currentUser) {
        window.alert('Invalid username or password');
    }
    loadAccount(currentUser);
});

const USERS = {
    admin: {
        user: 'admin',
        pass: 'admin',
        displayName: 'Admin',
        currentBalance: '$1,000,000'
    },
    tac: {
        user: 'tac',
        pass: '10012009',
        displayName: 'Ty',
        currentBalance: '$900'
    },
    moc: {
        user: 'moc',
        pass: '02162013',
        displayName: 'Makenzie',
        currentBalance: '$900'
    },
    wnw: {
        user: 'wnw',
        pass: '05012012',
        displayName: 'Whitney',
        currentBalance: '$900'
    },
    wew: {
        user: 'wew',
        pass: '05022014',
        displayName: 'Weslyn',
        currentBalance: '$900'
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
    logo.classList.add('move-left');
    loginContainer.classList.add('move-right');
}

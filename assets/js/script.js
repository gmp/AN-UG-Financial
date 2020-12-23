console.log('AN/UG Financial')

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
        displayName: 'Admin'
    },
    tac: {
        user: 'tac',
        pass: '10012009',
        displayName: 'Ty'
    },
    moc: {
        user: 'moc',
        pass: '02162013',
        displayName: 'Makenzie'
    },
    wnw: {
        user: 'wnw',
        pass: '05012012',
        displayName: 'Whitney'
    },
    wew: {
        user: 'wew',
        pass: '05022014',
        displayName: 'Weslyn'
    }
};

function validateLogin(username='', pass='') {
    if (!username || !pass) {
        return null;
    }

    const currentUser = USERS[username.toLowerCase()];
    return currentUser ? currentUser : null;
}

function loadAccount() {

}

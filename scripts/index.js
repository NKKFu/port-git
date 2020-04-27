const USERNAME = 'nkkfu';

const USER_IMAGE = document.getElementById('USER_IMAGE');
const USER_NAME = document.getElementById('USER_NAME');
const USER_LOGIN = document.getElementById('USER_LOGIN');
const USER_URL = document.getElementById('USER_URL');
const USER_LOCATION = document.getElementById('USER_LOCATION');
const USER_BIO = document.getElementById('USER_BIO');

function loadUserProfile() {
    fetch(`https://api.github.com/users/${USERNAME}`)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                alert('Erro encontrado');
            }
        })
        .then(function (data) {
            USER_IMAGE.setAttribute('src', data.avatar_url);

            USER_NAME.innerHTML = data.name;
            USER_LOGIN.innerHTML = `@${data.login}`;

            USER_URL.innerHTML = data.company;
            USER_LOCATION.innerHTML = data.location;
        });
}

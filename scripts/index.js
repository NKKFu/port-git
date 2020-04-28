const USERNAME = window.location.href.split('#')[1];

const USER_IMAGE = document.getElementById('USER_IMAGE');
const USER_NAME = document.getElementById('USER_NAME');
const USER_LOGIN = document.getElementById('USER_LOGIN');
const USER_URL = document.getElementById('USER_URL');
const USER_LOCATION = document.getElementById('USER_LOCATION');
const USER_BIO = document.getElementById('USER_BIO');

const REPO_HOLDER = document.getElementById('repositories-holder');

function loadUserProfile() {
    // Get user Profile 
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

    // Get user repositories
    fetch(`https://api.github.com/users/${USERNAME}/repos`)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                alert('Erro encontrado');
            }
        })
        .then(function (data) {
            console.log(data);

            for (let i = 0; i < data.length; i++) {
                const repository = data[i];

                const column = document.createElement('div');
                column.classList = 'col-md-12 col-xl-6 my-3 px-3';

                const repoCard = document.createElement('div');
                repoCard.style = "height: 100%; padding: 2rem";
                repoCard.classList = "text-white repo-card";

                const title = document.createElement('h3');
                title.innerHTML = `${repository.name}`;
                repoCard.appendChild(title);

                const description = document.createElement('h6');
                description.style = "color: gray;";
                description.innerHTML = `${repository.description || ''}`;
                repoCard.appendChild(description);

                const marks = document.createElement('h5');
                marks.innerHTML = `🛠 ${repository.language}`;
                marks.classList = "mt-5";
                repoCard.appendChild(marks);

                column.appendChild(repoCard);

                REPO_HOLDER.appendChild(column);
            }
        });
}

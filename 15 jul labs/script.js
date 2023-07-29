

axios.get('http://localhost:3000/api/games')
    .then(response => {
        const games = response.data;
        const gameCards = games.map(game => `
        <div class="col-3">
            <div class="card" style="width: 18rem; margin-top: 2rem;">
                <img src="${game.thumbnail}" class="card-img-top" alt="${game.title}">
                <div class="card-body text-center" style="background-color: rgba(149, 139, 142, 0.8);">
                    <h5 class="card-title">${game.title}</h5>
                    <p class="card-text">${game.short_description}</p>
                    <a href="${game.game_url}" class="btn btn-primary">Play now</a>
                </div>
            </div>
        </div>
        `).join('');

        document.getElementById('games').innerHTML = gameCards;
    })
    .catch(error => console.error('Error fetching data: ', error));


var item = [];
const Games = class {
    async getAllGames() {
        const url = 'http://localhost:3000/games';
        const response = await fetch(url);
        const games = await response.json();
        item = games;
        return games;
    }
    async seachGamesByPublisher(publicher) {
        const url = `http://localhost:3000/games/publisher/${publicher}`;
        const response = await fetch(url);
        const games = await response.json();
        return games;
    }
    async seachGamesByGenre(genre) {
        const url = `http://localhost:3000/games/genre/${genre}`;
        const response = await fetch(url);
        const games = await response.json();
        return games;
    }
    async seachGamesByTitle(gameTitle) {
        const url = `http://localhost:3000/games/title/${gameTitle}`;
        const response = await fetch(url);
        const games = await response.json();
        return games;
    }
}
async function showGames() {
    try {
        var games = await gamesService.getAllGames();
    }
    catch (error) {
        console.log(error);
        showErrorMessage(error);
        return;
    }
    for (let game of games) {
        addGameToPage(game);
    }
}
function addGameToPage(game) {
    var template = document.getElementById("game-template").content.cloneNode(true);
    template.querySelector('#gameTitle').innerText = game.title;
    template.querySelector('#gameText').innerText = game.short_description;
    template.querySelector('#gameGenre').innerText = game.genre;
    template.querySelector('#gameImg').src = game.thumbnail;
    template.querySelector('.game-url').href = game.game_url;
    document.querySelector('#games-list').appendChild(template);
}
function showErrorMessage(error) {
    var errorMessageElement = document.getElementById("error-messages");
    errorMessageElement.style.display = "block";
    errorMessageElement.innerText = "Error: " + error.message;
}

let allGames = [];

window.onload = function() {
    axios.get('http://localhost:3000/api/games')
        .then(response => {
            allGames = response.data;
            renderGames(allGames);
        })
        .catch(error => console.error('Error fetching data: ', error));

    const searchInput = document.getElementById("search-input");

    searchInput.addEventListener("input", function(event) {
        if (searchInput.value.length >= 3) {
            filterGames();
        } else {
            renderGames(allGames);
        }
    });
};


function renderGames(games) {
    const gameCards = games.map(game => `
    <div class="col-3">
        <div class="card" style="width: 18rem; margin-top: 2rem;">
            <img src="${game.thumbnail}" class="card-img-top" alt="${game.title}">
            <div class="card-body text-center" style="background-color: rgba(149, 139, 142, 0.8);">
                <h5 class="card-title">${game.title}</h5>
                <p class="card-text">${game.short_description}</p>
                <a href="${game.game_url}" class="btn btn-primary">Play now</a>
            </div>
        </div>
    </div>
    `).join('');

    document.getElementById('games').innerHTML = gameCards;
}

function filterGames() {
    const searchInput = document.getElementById('search-input').value.toUpperCase();

    if (searchInput.length < 3) {
        renderGames(allGames);
        return;
    }

    const filteredGames = allGames.filter(game => 
        game.title.toUpperCase().includes(searchInput) ||
        game.publisher.toUpperCase().includes(searchInput) ||
        game.genre.toUpperCase().includes(searchInput) 
    );

    renderGames(filteredGames);
}




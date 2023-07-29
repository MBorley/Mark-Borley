import { GamesService } from "../services/games-service.js";

export default class GamesController {
    constructor() {
        this.gamesService = new GamesService();
    }

    getGames(req, res) {
        const publisher = req.query.publisher;
        const genre = req.query.genre;
        const title = req.query.title;

        let games = this.gamesService.getAllGames();

        if (publisher) {
            games = games.filter(game => game.publisher.toLowerCase() == publisher.toLowerCase());
        }

        if (genre) {
            games = games.filter(game => game.genre.toLowerCase() == genre.toLowerCase());
        }

        if (title) {
            games = games.filter(game => game.title.toLowerCase().includes(title.toLowerCase()));
        }

        res.json(games);
    }

    addGame(req, res) {
        const publisher = req.body.publisher;

        
        res.sendStatus(201);
    }

    getGameById(req, res) {
        const gameId = (req.params.id);
        console.log(gameId)
        const game = this.gamesService.getGameById(gameId);
        console.log(game)
        if (game !== undefined) {
            res.json(game);
        } else {
            res.status(404).json({ error: 'Game not found' });
        }
    }
    

    updateGameDetails(req, res) {
        const gameId = req.params.id;

    
    }

    deleteGame(req, res) {
        const gameId = req.params.id;

        
    }
}

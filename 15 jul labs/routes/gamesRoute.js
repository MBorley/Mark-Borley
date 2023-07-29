import { Router } from 'express';
import GamesController from '../controllers/gamesController.js';
const router = Router();
const controller = new GamesController();

router.get('/games', function (req, res) {
    controller.getGames(req,res)
});

router.get('/games/:id', function (req, res) {
    controller.getGameById(req,res)
});


export default router;

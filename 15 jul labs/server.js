import express from 'express';
import cors from "cors";
//import testRoute from './routes/myTestRoute.js';
//import gamesRoute from './routes/gamesRoute.js';
//import calculatorRoute from './routes/calculatorRoute.js'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" };;
import gamesRoute from './routes/gamesRoute.js';


const app = express();
app.use(cors());
app.use('/', express.static('public'))
//app.use('/api', gamesRoute);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);
app.use("/api", gamesRoute)

app.listen(3000, function () {
    console.log("I'm actively listening at PORT 3000.............");
})
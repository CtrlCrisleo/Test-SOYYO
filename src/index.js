import express from "express";
import morgan from "morgan";
import entitiesRoutes from "./routes/entitiesRoutes.js"

const app = express();

/*Settings*/
app.set('port', process.env.PORT || 3000);

/*Midlewares*/
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/*Routes*/
app.use('/api/entities', entitiesRoutes);

/*Starting the server*/
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})
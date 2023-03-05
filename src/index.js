import express from 'express';
import morgan from 'morgan';
import app from './app.js';

/*Settings*/
app.set('port', process.env.PORT || 3000);

/*Midlewares*/
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/*Starting the server*/
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})
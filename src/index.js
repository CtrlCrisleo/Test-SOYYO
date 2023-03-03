import express from "express";
import axios from "axios";

const app = express();
const endpoint = 'https://f56c0ao48b.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/';

/*Settings*/
app.set('port', process.env.PORT || 3000);

app.get('/entities/:startId/:endId', async (req, res) => {
    const{ startId, endId } =req.params;
    console.log(startId);
    console.log(endId);

    if(!Number.isInteger(Number(startId)) || !Number.isInteger(Number(endId))){
        res.status(400).send("Error en validación de datos de entrada");
    }

    try{
        const response = await axios.get(`https://f56c0ao48b.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/${startId}`);
        console.log(response);
        const entities = [];
        let entity =response.data;

        while (entity.entityId <= endId){
            entities.push(entity);
            response = await axios.get(`https://f56c0ao48b.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/${entity.entityId + 1}`);
            entity = response.data;
        }

        entities.sort((a, b) => a.name.localeCompare(b.name));

        res.json(entities);
    }
    catch{
        res.status(500).json({ error: 'Ha ocurrido un error al obtener los datos de las entidades' });
    }
})

/*Starting the server*/
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})
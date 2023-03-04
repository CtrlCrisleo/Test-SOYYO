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
        const response = await axios.get(`${endpoint}${startId}`);
        const entities = [];
        let entity = response.data;
        //res.json(entity.data.entityId);

        while (entity.data.entityId >= startId && entity.data.entityId <= endId){
            //console.log("Enter in the loop");
            entities.push(entity);
            const nextId = entity.data.entityId + 1;
            const nextResponse = await axios.get(`${endpoint}${nextId}`);

            if(!nextResponse.data || entity.entityId >= endId){
                break;
            }

            entity = nextResponse.data;
            //console.log(entity);
        }

        //res.json(entities);
        entities.sort((a, b) => a.data.name.localeCompare(b.data.name));

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
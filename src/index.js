import express from "express";
import axios from "axios";

const app = express();
const endpoint = 'https://f56c0ao48b.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/';

/*Settings*/
app.set('port', process.env.PORT || 3000);

app.get('/entities/:startId/:endId', async (req, res) => {
    const{ startId, endId } = req.params;
    const count = parseInt(endId, 10) - parseInt(startId, 10) + 1;

    if(!Number.isInteger(Number(startId)) || !Number.isInteger(Number(endId))){
        return res.status(400).send("Error en validación de datos de entrada");
    }

    if(startId < 1 || startId > 20 || endId < 1 || endId > 20){
        return res.status(400).send("Error en validación de datos de entrada");
    }

    try{
        const response = await axios.get(`${endpoint}${startId}`);
        const entities = [];
        let entity = response.data;

        while (entity.data.entityId >= startId && entity.data.entityId <= endId){
            entities.push(entity);
            const nextId = entity.data.entityId + 1;
            const nextResponse = await axios.get(`${endpoint}${nextId}`);

            if(!nextResponse.data || entity.entityId >= endId){
                break;
            }

            entity = nextResponse.data;
        }

        entities.sort((a, b) => a.data.name.localeCompare(b.data.name));

        if(entities.length != count){
            throw new Error(`No se encontró una entidad válida asociada al rango ${startId} - ${endId}`);
        }

        res.json(entities);
    }

    catch(error) {
        if(error.message.startsWith('No se encontró una entidad válida asociada al rango')){
            res.status(404).send(error.message);
        }
        else{
            res.status(500).send('Ha ocurrido un error al obtener los datos de las entidades');
        }
    }
})

/*Starting the server*/
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})
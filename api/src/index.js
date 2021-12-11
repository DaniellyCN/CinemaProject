import express from 'express'
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb'


const app = express();
app.use(cors());
app.use(express.json());


const conn = await MongoClient.connect('mongodb+srv://devmonk:d3v@cluster.ru31h.mongodb.net')
const dbSessoes  = await conn.db('ingressos').collection('sessoes')
const dbLugares  = await conn.db('ingressos').collection('lugares')


app.get('/availableDays', async (req, resp) => {
    try {
        let news = new Date().toISOString().slice(0, 10);
        let days = await 
        dbSessoes
        .aggregate([ 
            {
                $match: {
                    data: {
                        $gte: news
                    }
                }
            },
            {
                $group: {
                    _id: '$data' //Agrupa todos os documentos//
                }
            },
            {
                $project: {
                    _id: 0,
                    data: '$_id'
                }
            },
            {
                $limit: 7
            },
            {
                $sort: {
                    data: 1
                }
            }
        ])
        .toArray();


        resp.send(days);

    } catch (e) {
        resp.send(e.toString())
    }
})


app.get('/availableMovies/:date', async (req, resp) => {
    let { date } = req.params;

    let movies = await
        dbSessoes
            .find({ data: date })
            .project({ _id: 0, horarios: 0 })
            .toArray();
    
    resp.send(movies);
})


app.get('/ping', async (req, resp) => {
    resp.send('Bora Trabalhar Dani😥😥😥😥')
})


app.listen(process.env.PORT, () => console.log('server up!'))
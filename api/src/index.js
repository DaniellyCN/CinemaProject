import express from 'express'
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb'


const app = express();
app.use(cors());
app.use(express.json());


const conn = await MongoClient.connect('mongodb+srv://devmonk:d3v@cluster.ru31h.mongodb.net')
const dbSessoes  = await conn.db('ingressos').collection('sessoes')
const dbLugares  = await conn.db('ingressos').collection('lugares')

//rota para Tela 2: Dias disponíveis
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

// rota para Tela 3: Filmes disponíveis para data escolhida
app.get('/availableMovies/:date', async (req, resp) => {
    let { date } = req.params;

    let movies = await
        dbSessoes
            .find({ data: date })
            .project({ _id: 0, horarios: 0 })
            .toArray();
    
    resp.send(movies);
})

//rota para Tela 4: 
app.get('/availableSession/:date/:filme', async (req, resp) => {
    let { filme } = req.params;
    let { date } = req.params;

    let news = new Date().toISOString().slice(0, 10);
 
    let x = await 
    dbLugares
    .aggregate([
        {
            $group: {
                _id: '$hora'
            },
        },

        {
            $project: {
                hora: '$_id',
                _id:0,
                //filme:[{idiomas:1}]
                
            }
        }
    ])
  
    .toArray();
    
    resp.send(x)
})



app.get('/ping', async (req, resp) => {
    resp.send('Bora Trabalhar Dani😥😥😥😥')
})



//rota para Tela 5:Get
app.get('/availableSeats/:date/:movie/:hora/:sala', async (req,resp) =>{
    let {date,movie,hora,sala} = req.params;

  
    let k = await dbSessoes.findOne({data:date,'filme.nome':movie, 'horarios.hora':hora,'horarios.sala':sala});
    //.aggregate([{match:{'horarios.hora':hora}}])

    resp.send(k)
})


//rota para Tela 5: Put
app.put('/reserveSeat/:date/:movie/:hora/:sala', async (req,resp) =>{
    let {situacao} = req.body;

    let ambiente = await dbSessoes.findOne({data:date,'filme.nome':movie, 'horarios.hora':hora,'horarios.sala':sala});

    let atualizar = await dbLugares.updateOne(
        {_id:ambiente._id},
        {$set:{'ambiente.lugar.situacao':'Reservado'}}

    )

    resp.send(atualizar);
})

//rota par Tela 6: post
app.post('/buyTickets', async (req,resp) =>{
    let {tipo,situacao} = req.body;

    let compra = await dbLugares.insertOne(
        //cade o campo de tipo de ingresso,brunex?
    ).toArray();

    resp.send();
})



app.listen(process.env.PORT, () => console.log('server up!'))



import express from 'express'
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb'


const app = express();
app.use(cors());
app.use(express.json());


const conn = await MongoClient.connect('mongodb+srv://devmonk:d3v@cluster.ru31h.mongodb.net')
const dbSessoes  = await conn.db('ingressos').collection('sessoes')
const dbLugares  = await conn.db('ingressos').collection('lugares')



function getDayNumber(data) {
    data = new Date(`${data}T00:00:00`);
    return data.getDate();
}

function getWeekDay(data) {
    let currentDay =  new Date().toISOString().slice(0, 10);;
    if (currentDay === data)
        return 'HOJE'

    data = new Date(`${data}T00:00:00`);
    switch (data.getDay()) {
        case 0: return 'Domingo';
        case 1: return 'Segunda';
        case 2: return 'Terça';
        case 3: return 'Quarta';
        case 4: return 'Quinta';
        case 5: return 'Sexta';
        case 6: return 'Sábado';
    }
}

function getMonthName(data) {
    data = new Date(`${data}T00:00:00`);
    switch (data.getMonth()) {
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro';
        case 10: return 'Novembro';
        case 11: return 'Dezembro';
    }
}

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

        days = days.map(item => {
            return {
                data: item.data,
                mes: getMonthName(item.data),
                diaSemana: getWeekDay(item.data),
                dia: getDayNumber(item.data)
            }
        })

        resp.send(days);

    } catch (e) {
        resp.send(e.toString())
    }
})



// rota para Tela 3: Filmes disponíveis para data escolhida
app.get('/availableMovies/:date', async (req, resp) => {
    try {
        
    
    let { date } = req.params;

    let movies = await
        dbSessoes
            .find({ data: date })
            .project({ _id: 0, horarios: 0 })
            .toArray();
    
    resp.send(movies);

    } catch (error) {
            resp.send({error:'Deu ruim'})
    }
})

//rota para Tela 4: 
app.get('/availableSession/:date/:filme', async (req, resp) => {
    try {
        
   
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
    } catch (error) {
         resp.send({error:'Deu ruim'})   
    }
})



app.get('/ping', async (req, resp) => {
    try {
        
    
    resp.send('Bora Trabalhar Dani😥😥😥😥')

    } catch (error) {
        resp.send({error:'Chorrindo'})
    }
})



//rota para Tela 5:Get
app.get('/availableSeats/:date/:movie/:hora/:sala', async (req,resp) =>{
    try {
        
    
    let {date,movie,hora,sala} = req.params;

  
    let k = await dbSessoes.findOne({data:date,'filme.nome':movie, 'horarios.hora':hora,'horarios.sala':sala});
    //.aggregate([{match:{'horarios.hora':hora}}])

    resp.send(k)
    } catch (error) {
        resp.send({error:'Deu ruim'})    
    }
})


//rota para Tela 5: Put
app.put('/reserveSeat/:date/:movie/:hora/:sala', async (req,resp) =>{
    try {
        
   
    let {situacao} = req.body;

    let ambiente = await dbSessoes.findOne({data:date,'filme.nome':movie, 'horarios.hora':hora,'horarios.sala':sala});

    let atualizar = await dbLugares.updateOne(
        {_id:ambiente._id},
        {$set:{'ambiente.lugar.situacao':'Reservado'}}

    )

    resp.send(atualizar);
    } catch (error) {
        resp.send({error:'Deu ruim'})       
    }
})

//rota par Tela 6: post
app.post('/buyTickets', async (req,resp) =>{
    try {
        
    
    let {tipo,situacao} = req.body;

    let compra = await dbLugares.insertOne(
        //cade o campo de tipo de ingresso,brunex?
    ).toArray();

    resp.send();
    } catch (error) {
        resp.send({error:'Deu ruim'})    
    }
})



app.listen(process.env.PORT, () => console.log('server up!'))



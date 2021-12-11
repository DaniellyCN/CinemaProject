import express from 'express'
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb'


const app = express();
app.use(cors());
app.use(express.json());


const conn = await MongoClient.connect('mongodb+srv://devmonk:d3v@cluster.ru31h.mongodb.net')
const db = await conn.db('livraria').collection('livros')


app.get('/ping', async (req, resp) => {
    resp.send('Bora Trabalhar Dani😥😥😥😥')
})


app.listen(process.env.PORT, () => console.log('server up!'))
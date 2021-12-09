
const express = require('express');
const server = express();


server.get('/',(req,resp) =>{
    let r = {
        status: 'tudo certo'
    }
    resp.send(r)
})



const port = process.env.PORT | 8080
server.listen(port,
    () => console.log(`....: API has started with success on PORT ${port}`));
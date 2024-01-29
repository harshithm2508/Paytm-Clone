const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;



const mainRouter = require('./routes/index');
app.use('api/v1/',mainRouter)


app.use(cors())
app.use(express.json())


app.listen(PORT,()=>{
    console.log(`Server is initialized and running at : ${PORT}`)
})
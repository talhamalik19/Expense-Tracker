const express = require('express')
const connectToMongo =require('./db.js');
const router = require('./router/Router')
const expenseRouter = require('./router/expenseRouter')
const cors = require('cors')

connectToMongo();

const app = express()
app.use(cors({credentials: true, origin: true}))
app.use(express.json())

const port = 8080;

app.use(router)
app.use(expenseRouter)

app.listen(port, () => {
  console.log(`Web Project backend listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


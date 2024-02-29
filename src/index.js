const express = require('express')
const helmet = require('helmet');
const router = require('./routers');

const app = express()
app.use(express.json())
app.use(helmet());
app.get('/api', router)

app.listen(5000)


const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

//Init app
const app = express();

// Middleware
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(require('./routes/routes'));

app.get('/test', (req, res) => res.send(`Server is running on ${PORT}`))

app.all('*', (req, res) => res.send('Access denied'))


//System Running.
mongoose
.connect('mongodb://localhost/greenTest', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT), () => console.log(`Server is running on ${PORT} \nConnted with mongoddb.`))
.catch(() => console.log('Unable to connect with db.'))



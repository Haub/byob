const express = require('express');
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => { 
  response.send('Welcome to BYOB')
});

//works!
app.get('/api/v1/countries', (request, response) => {
  database('countries').select()
    .then((countries) => response.status(200).json(countries))
    .catch((error) => response.status(500).send({error: `Error: ${error.message}`}))
});

app.post('/api/v1/countries', (request, response) => {
  const country = request.body;
  console.log(request.body)
  
  database('countries').insert(country, 'id')
    .then((country) => 
      response.status(201).json({message: `New country with id of ${country[0]} inserted successfully.`}))
    .catch((error) => response.status(500).send({error: `Error: ${error.message}`}))
});

//works!
app.get('/api/v1/demographics', (request, response) => {
  database('demographics').select()
    .then((demographics) => response.status(200).json(demographics))
    .catch((error) => response.status(500).send({error: `Error: ${error.message}`}))
});

app.post('/api/v1/demographics', (request, response) => {
  const demographics = request.body;
  
  database('demographics').insert(demographics, 'id')
    .then((demographicsIds) => response.status(201).json({message: `New demographics with id of ${demographicsIds[0]} inserted successfully.`}))
    .catch((error) => response.status(500).send({error: `Error: ${error.message}`}))
});

app.listen(3000, () => {
  console.log(`BYOB is running on ${app.get('port')}`);
});
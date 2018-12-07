const express = require('express');
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.get('/api/v1/countries', (request, response) => {
  database('countries').select()
    .then((countries) => 
      response.status(200).json(countries)
    )
    .catch((error) => 
      response.status(500).send({
        error: `Error: ${error.message}`
      })
    )
});

app.post('/api/v1/countries', (request, response) => {
  const newCountry = request.body;
  
  for (let requiredParameter of ['dest_country', 'grand_total']) {
    if (!newCountry[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { dest_country: <String>, grand_total: <Number> }. You're missing a "${requiredParameter}" property.` });
    }
  }
  
  database('countries').insert(newCountry, 'id')
    .then((country) => 
      response.status(201).json({
        message: `New country with id of ${country[0]} inserted successfully.`, id: country[0]
      })
    )
    .catch((error) => 
      response.status(500).send({
        error: `Error: ${error.message}`
      })
    )
});

app.get('/api/v1/countries/:id', (request, response) => {
  const { id } = request.params;
  database('countries').where('id', id).select()
    .then(countries => {
      if (countries.length) {
        response.status(200).json(countries);
      } else {
        response.status(404).json({ 
          error: `Could not find countries with id ${id}`
        });
      }
    })
    .catch(error => {
      response.status(500).json({ error: `Error: ${error.message}` });
    });
});

app.delete('/api/v1/countries/:id', (request, response) => {
  const { id } = request.params;
  database('countries').where('id', id).del()
    .then(country => {
      if(!country) {
        response.status(404).json({ 
          error: `Could not find country with id ${id}`
        })   
      }
      response.status(204).send({
        message: `Country with id of ${id} deleted successfully.`
      })
    })
    .catch(error => {
      response.status(500).json({ error: `Error: ${error.message}` });
    });
})

app.put('/api/v1/countries/:id', (request, response) => {
  const { id } = request.params;
  database('countries').where('id', id).update(request.body)
    .then(country => {
      if(!country) {
        response.status(404).json({
          error: `Could not find country with id ${id}`
        })
      }
      response.status(202).json({
        message: `Country with id of ${id} changed successfully.`
      })
    })
    .catch(error => {
      response.status(500).json({ error: `Error: ${error.message}` });
    });
})

app.get('/api/v1/demographics', (request, response) => {
  database('demographics').select()
    .then((demographics) => 
      response.status(200).json(demographics)
    )
    .catch((error) => 
      response.status(500).send({
        error: `Error: ${error.message}`
      })
    )
});

app.post('/api/v1/demographics', (request, response) => {
  const demographics = request.body;
  
  for (let requiredParameter of ['origin_country', 'individual_total', 'total_minors', 'dest_country_id']) {
    if (!demographics[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { origin_country: <String>, individual_total: <String>, total_minors: <String>, dest_country_id: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('demographics').insert(demographics, 'id')
    .then((demographicsIds) => 
      response.status(201).json({
        message: `New demographics with id of ${demographicsIds[0]} inserted successfully.`, id: demographicsIds[0]
      })
    )
    .catch((error) => 
      response.status(500).send({
        error: `Error: ${error.message}`
      })
    )
});

app.get('/api/v1/demographics/:id', (request, response) => {
  const { id } = request.params;

  database('demographics').where('id', id).select()
    .then(demographics => {
      if (demographics.length) {
        response.status(200).json(demographics);
      } else {
        response.status(404).json({ 
          error: `Could not find demographics entry with id ${id}`
        });
      }
    })
    .catch(error => {
      response.status(500).json({ error: `Error: ${error.message}` });
    });
});

app.delete('/api/v1/demographics/:id', (request, response) => {
  const { id } = request.params;
  database('demographics').where('id', id).del()
    .then(country => {
      if(!country) {
        response.status(404).json({ 
          error: `Could not find demographics entry with id ${id}`
        })   
      }
      response.status(204).send({
        message: `New demographics entry with id of ${id} deleted successfully.`
      })
    })
    .catch(error => {
      response.status(500).json({ error: `Error: ${error.message}` });
    });
})

app.put('/api/v1/demographics/:id', (request, response) => {
  const { id } = request.params;
  database('demographics').where('id', id).update(request.body)
    .then(country => {
      if(!country) {
        response.status(404).json({
          error: `Could not find demographics entry with id ${id}`
        })
      }
      response.status(202).json({
        message: `Demographics entry with id of ${id} changed successfully.`
      })
    })
    .catch(error => {
      response.status(500).json({ error: `Error: ${error.message}` });
    });
})

app.listen('port', () => {
  console.log(`BYOB is running on ${app.get('port')}`);
});

module.exports = app;
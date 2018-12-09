process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js');
const expect = chai.expect;
const should = chai.should;
const config = require('../knexfile')['test'];
const database = require('knex')(config);

chai.use(chaiHttp);

describe('Server File', () => {

  beforeEach(() =>
    database.migrate
      .rollback()
      .then(() => database.migrate.latest())
      .then(() => database.seed.run()));

  describe('/api/v1/countries', () => {
    it('should successfully return the countries', (done) => {
      chai.request(app)
        .get('/api/v1/countries')
        .end((error, response) => {
          expect(response).to.have.status(200)
          expect(response.body).to.be.an('array')
          expect(response.body.length).to.equal(1)
        })
      done()
    });

    it('should add a new country when a post request is made', (done) => {
      const newCountry = {
        dest_country: 'La La Land', 
        grand_total: 1200
      }
      
      chai.request(app)
        .post('/api/v1/countries')
        .send(newCountry)
        .end((error, response) => {
          expect(response).to.have.status(201)
          expect(response.body.message).to.equal(`New country with id of ${response.body.id} inserted successfully.`)
        })
      done()
    });

    it('should return 422 if new country is incomplete', (done) => {
      const newCountry = {
        dest_country: 'La La Land'
      }

      chai.request(app)
        .post('/api/v1/countries')
        .send(newCountry)
        .end((error, response) => {
          expect(response).to.have.status(422)
          expect(response.body.error).to.equal('Expected format: { dest_country: <String>, grand_total: <Number> }. You\'re missing a "grand_total" property.')
        })
      done()
    });
  });

  describe('/api/v1/countries/:id', () => {
    it('should successfully return the country with the specified id', (done) => {
      chai.request(app)
        .get('/api/v1/countries/1')
        .end((error, response) => {
          expect(response).to.have.status(200)
          expect(response.body).to.be.an('array')
          expect(response.body.length).to.equal(1)
          expect(response.body[0].dest_country).to.equal('USA')
        })
      done()
    });

    it('should sucessfully delete a country', (done) => {
      chai.request(app)
        .delete('/api/v1/countries/1')
        .end((error, response) => {
          expect(response).to.have.status(202)
          expect(response.body.message).to.equal('Successfully deleted the country with the id of 1.')
        })
      done()
    })

    it('should sucessfully PUT a country', (done) => {
      const countryToPut = {
        dest_country: 'USA',
        grand_total: 100000
      }

      chai.request(app)
        .put('/api/v1/countries/1')
        .send(countryToPut)
        .end((error, response) => {
          expect(response).to.have.status(202)
          expect(response.body.message).to.equal('Country with id of 1 changed successfully.')
        })
      done()
    })
  });

  describe('/api/v1/demographics', () => {
    it('should successfully return the demographics', (done) => {
      chai.request(app)
        .get('/api/v1/demographics')
        .end((error, response) => {
          expect(response).to.have.status(200)
          expect(response.body).to.be.an('array')
          expect(response.body.length).to.equal(3)
        })
      done()
    });

    it('should add a new demographics entry for an origin country when a post request is made', (done) => {
      const newDemographic = {
        origin_country: 'Honduras',
        individual_total: '5000',
        total_minors: '2100',
        dest_country_id: 1,
      }

      chai.request(app)
        .post('/api/v1/demographics')
        .send(newDemographic)
        .end((error, response) => {
          expect(response).to.have.status(201)
          expect(response.body.message).to.equal(`New demographics with id of ${response.body.id} inserted successfully.`)
        })
      done()
    });

    it('should return 422 if new demographic entry is incomplete', (done) => {
      const newDemographic = {
        origin_country: 'Honduras',
        individual_total: '5000'
      }
  
      chai.request(app)
        .post('/api/v1/demographics')
        .send(newDemographic)
        .end((error, response) => {
          expect(response).to.have.status(422)
          expect(response.body.error).to.equal('Expected format: { origin_country: <String>, individual_total: <String>, total_minors: <String>, dest_country_id: <String> }. You\'re missing a "total_minors" property.')
        })
      done()
    });
  });

  describe('/api/v1/dempgraphics/:id', () => {
    it('should successfully return the demographics of the country with the specified id', (done) => {
      chai.request(app)
        .get('/api/v1/demographics/1')
        .end((error, response) => {
          expect(response).to.have.status(200)
          expect(response.body).to.be.an('array')
          expect(response.body.length).to.equal(1)
          expect(response.body[0].origin_country).to.equal('Somalia')
        })
      done()
    });

    it('should sucessfully delete a demographic', (done) => {
      chai.request(app)
        .delete('/api/v1/demographics/1')
        .end((error, response) => {
          expect(response).to.have.status(202)
          expect(response.body.message).to.equal('Successfully deleted the country with the id of 1.')
        })
      done()
    })

    it('should sucessfully PUT a demographic', (done) => {
      const demographic = {
        origin_country: 'Somalia',
        individual_total: 20000,
        total_minors: 2000
      }

      chai.request(app)
        .put('/api/v1/demographics/1')
        .send(demographic)
        .end((error, response) => {
          expect(response).to.have.status(202)
          expect(response.body.message).to.equal('Demographics entry with id of 1 changed successfully.')
        })
      done()
    })
  })
});
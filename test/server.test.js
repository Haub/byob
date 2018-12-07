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
          // data type of the response - array, json, length
          // dig into database and expect response to include all
        })
        done()
    });

    it('should add a new country when a post request is made', (done) => {
      const newCountry = {
        dest_country: 'La La Land', 
        grand_total: '1200'
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
          // check that the error message string is coming through
        })
        done()
    });
  });

  describe('/api/v1/demographics', () => {
    it('should return a 200 status', (done) => {
      chai.request(app)
        .get('/api/v1/demographics')
        .end((error, response) => {
          expect(response).to.have.status(200)
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
        })
        done()
    });

  });

});
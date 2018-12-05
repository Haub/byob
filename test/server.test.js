const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js')
const expect = chai.expect;
chai.use(chaiHttp);

describe('Server File', () => {
  describe('/api/v1/countries', () => {
    it('should return a 200 status', (done) => {
      chai.request(app)
        .get('/api/v1/countries')
        .end((error, response) => {
          expect(response).to.have.status(200)
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
          // expect().to.deep.include(newCountry)
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

    it('should add a new demograhics entry for an origin country when a post request is made', (done) => {
      const newDemographic = {
        dest_country: 'La La Land', 
        grand_total: '1200'
      }
      chai.request(app)
        .post('/api/v1/demographics')
        .send(newDemographic)
        .end((error, response) => {
          expect(response).to.have.status(201)
          // expect().to.deep.include(newCountry)
        })
        done()
    });

    it('should return 422 if new demographic entry is incomplete', (done) => {
      const newDemographic = {
        origin_country: 'Honduras',
        individual_total: '5000',
        total_minors: '2100',
        dest_country_id: 1,
      }

      for (let requiredParameter of ['origin_country', 'individual_total', 'total_minors', 'dest_country_id']) {
        if (!newDemographic[requiredParameter]) {
          return response
            .status(422)
            .send({ error: `Expected format: { title: <String>, author: <String> }. You're missing a "${requiredParameter}" property.` });
        }
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
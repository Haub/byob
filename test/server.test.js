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

 



  });




});
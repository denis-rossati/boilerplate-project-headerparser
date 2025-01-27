const chai = require('chai');

const chaiHttp = require('chai-http');
const chaiMatch = require('chai-match');
const { describe, it } = require('mocha');
const server = require('../../server');

const should = chai.should();
const { expect } = chai;
chai.use(chaiHttp);
chai.use(chaiMatch);

describe('/GET /api/whoami', () => {
  it("should return 'OK' status and a object", (done) => {
    chai.request(server)
      .get('/api/whoami')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should return the IP address', (done) => {
    chai.request(server)
      .get('/api/whoami')
      .end((err, res) => {
        res.body.should.have.property('ipaddress');
        // ngl, I stole it from here: https://stackoverflow.com/questions/5284147/validating-ipv4-addresses-with-regexp
        expect(res.body.ipaddress).to.match(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|::1|::ffff:127.0.0.1$/);
        done();
      });
  });

  it('should return the language of the request header', (done) => {
    chai.request(server)
      .get('/api/whoami')
      .end((err, res) => {
        res.body.should.have.property('language');
        done();
      });
  });

  it('should return the software details from the request header', (done) => {
    chai.request(server)
      .get('/api/whoami')
      .end((err, res) => {
        expect(res.body).to.have.property('software');
        expect(res.body.software).to.equal('node-superagent/3.8.3');
        done();
      });
  });
});

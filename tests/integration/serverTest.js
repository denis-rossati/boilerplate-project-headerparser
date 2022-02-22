const chai = require('chai');

const should = chai.should();
const chaiHttp = require('chai-http');
const chaiMatch = require('chai-match');
const { describe, it } = require('mocha');
const server = require('../../server');

chai.use(chaiHttp);
chai.use(should);
chai.use(chaiMatch);

describe('/GET /api/whoami', () => {
  it('should return the IP address', (done) => {
    chai.request(server)
      .get('/api/whoami')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('ipaddress');
        // ngl, I stole it from here: https://stackoverflow.com/questions/5284147/validating-ipv4-addresses-with-regexp
        res.body.should.have.property('ipaddress').should.match(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
        done();
      });
  });
});

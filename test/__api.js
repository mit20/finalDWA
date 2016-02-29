var request = require('supertest');

describe('API', function(){
    //Variable for server
    var server;
    //opens before test
    beforeEach(function(){
      server = require('../src/server.js');    
    });
    //closes after test
    afterEach(function(){
      server.close();  
    });
    
it('/v1/ should return specified object.', function testHealth(done) {
      request(server)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/, done)
   });
});
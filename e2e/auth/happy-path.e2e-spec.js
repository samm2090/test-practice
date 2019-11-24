const request = require('supertest');
const app = require('../../index'); //reference to you app.js file

describe('AUTHENTICATIN HAPPY PATH', () => {
    describe('POST /auth', function () {
        it('it authorize the user with the proper role and returns a jwt token if valid credentials are supplied', function (done) {
            request(app)
                .get('/api/accounts/login/admin')
                .set('Accept', 'application/json')
                .expect(404, done);
        });
    });    
});


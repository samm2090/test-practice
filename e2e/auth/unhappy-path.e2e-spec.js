const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../index'); //reference to you app.js file

describe('# AUTHENTICATIN UN-HAPPY PATH @un-happy @auth', () => {
    describe('POST /auth', () => {
        it('Authentication fails for admin with incorrect password', (done) => {
            const admin = {
                loginId: 'admin',
                password: 'password',
                role: 'admin'
            };

            request(app)
                .post('/api/auth')
                .send(admin)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
                    expect(res.body).nested.property('internal_error.status').to.equal(401)
                    done();
                });
        });
        it('Authentication fails for admin with incorrect username', (done) => {
            const admin = {
                loginId: 'admin_no_exist',
                password: 'P@ssw0rd!',
                role: 'admin'
            };

            request(app)
                .post('/api/auth')
                .send(admin)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
                    expect(res.body).nested.property('internal_error.status').to.equal(401)
                    done();
                });
        });
        it('Rejects request without password supplied', (done) => {
            const admin = {
                loginId: 'admin',
                role: 'admin'
            };

            request(app)
                .post('/api/auth')
                .send(admin)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
                    expect(res.status).to.equal(500)
                    done();
                });
        });



    });
});

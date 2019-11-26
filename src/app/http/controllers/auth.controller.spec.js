const request = require('supertest');
const app = require('../../../../index');

describe('# AUTHENTICATIN HAPPY PATH @happy @auth', () => {
    describe('POST /auth', function () {
        it('Authenticates admin with valid credentials', function (done) {
            const admin = {
                loginId: 'admin',
                password: 'P@ssw0rd!',
                role: 'admin'
            };
            const res = request(app)
                .post('/api/auth')
                .send(admin)
                .set('Accept', 'application/json');

            res.expect(201, done);

        });

        it('Authenticates client with valid credentials', function (done) {
            const client = {
                loginId: '12345678911',
                password: 'P@ssw0rd!',
                role: 'client'
            };
            const res = request(app)
                .post('/api/auth')
                .send(client)
                .set('Accept', 'application/json');

            res.expect(201, done);

        });

        it('Authenticates investor with valid credentials', function (done) {
            const investor = {
                loginId: 'mazen.elkashef@gmail.com',
                password: 'P@ssw0rd!',
                role: 'investor'
            };
            const res = request(app)
                .post('/api/auth')
                .send(investor)
                .set('Accept', 'application/json');

            res.expect(201, done);

        });

    });
});

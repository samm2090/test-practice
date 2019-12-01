const sinon = require('sinon');
const expect = require('chai').expect;
//const httpMocks = require('node-mocks-http');
const logger = require('../../http/startup/logger');

const authService = require('./auth.service');

describe('# User Service', () => {
    describe('createAuth', () => {
        it.only("should return loginId type ruc for clients", async () => {
            const authToken = await authService.createAuth('admin', 'P@ssw0rd!', 'admin');
            expect(authToken).to.be.true()
        });
        
        /*
        it("should throw for any unknown-role", () => {
            expect(() => {
                userActions.determineLoginIdType('any-unknown-role')
            }).to.throw()

            let spy = sinon.spy(logger, 'error')
            expect(spy.called).to.equal(true)
        });
        */
    });
});

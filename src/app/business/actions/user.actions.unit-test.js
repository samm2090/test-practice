const sinon = require('sinon');
const expect = require('chai').expect;
//const httpMocks = require('node-mocks-http');
const logger = require('../../http/startup/logger');

const userActions = require('./user.actions');

describe('# User Actions', () => {
    describe('determineLoginIdType', () => {
        it("should return loginId type ruc for clients", () => {
            const userIdType = userActions.determineLoginIdType('client');
            expect(userIdType).to.equal('ruc')
        });
        it("should return loginId type username for admins", () => {
            const userIdType = userActions.determineLoginIdType('client');
            expect(userIdType).to.equal('ruc')
        });
        it("should return loginId type email for investors", () => {
            const userIdType = userActions.determineLoginIdType('client');
            expect(userIdType).to.equal('ruc')
        });
        it("should throw for any unknown-role", () => {
            expect(() => {
                userActions.determineLoginIdType('any-unknown-role')
            }).to.throw()
        });
        
    });
});

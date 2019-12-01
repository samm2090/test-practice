const sinon = require('sinon');
const expect = require('chai').expect;
const authController = require('./auth.controller');
const authService = require('../../business/services/auth.service');
const httpMocks = require('node-mocks-http');

describe('# Auth Controller', () => {
    describe('POST /auth', () => {
        it("should respond", (done) => {
            let req,res,spy;
    
            res = httpMocks.createResponse();
            req = httpMocks.createRequest({
                body: {
                    loginId: '12345678911',
                    password: 'P@ssw0rd!11',
                    role: 'client'
                }
            });
            
            spy = authService.createAuth = sinon.spy();
            //res = sinon.mock()
            authController.createAuth(req, res).then((response) => {
                expect(spy.calledOnce).to.equal(true);
                //expect(spy).to.throw()
                done()
            });

          });    

          it("should respond", (done) => {
            let req,res,stub;
    
            res = httpMocks.createResponse();
            req = httpMocks.createRequest({
                body: {
                    loginId: '12345678911',
                    password: 'P@ssw0rd!11',
                    role: 'client'
                }
            });
            
            stub = authService.createAuth = sinon.stub().throws();
            //res = sinon.mock()
                authController.createAuth(req, res).then((response) => {
                    expect(stub.calledOnce).to.equal(true);
                    expect(stub).to.throw();
                    done()
                }).catch(ex => {
                    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                    done()
                });


          });   
        

    });
});

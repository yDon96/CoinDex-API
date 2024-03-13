import {faker} from "@faker-js/faker";
import sinon, {SinonSandbox} from "sinon";
import chai, {expect} from "chai";
import chaiHttp from 'chai-http';
import {default as server} from '../../../app/index'
import * as service from '../../../app/coins/v1/domain/coins.service'
import BadRequestError from "../../../models/errors/BadRequestError";

chai.use(chaiHttp);
//1. unit under test
describe('Coins Get Endpoints', function () {
    const baseEndpoint = '/api/v1/coins';

    // 2. scenario
    describe('Retrieve Specific Coin', function () {
        let sandbox: SinonSandbox;
        let id: string;
        beforeEach(() => {
            sandbox = sinon.createSandbox();
            id = faker.string.uuid();
        });

        afterEach(() => {
            sandbox.restore();
        });

        //3. expectation
        it('When we request coin with id, then the retrieve coin status is approval',
            (done) => {
                // @ts-ignore
                sandbox.stub(service, "findById").resolves(null);
                chai.request(server) //Arrange
                    .get(baseEndpoint + '/' + id)  //Act
                    .end((err: any, res: any) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        done();
                    }) //Assert
            });

        // 3. expectation
        it('When we request coin with id, then the retrieve coin response is well-formed',
            (done) => {
                //Arrange
                const response = {
                    quantity: faker.number.int(),
                    year: faker.string.sample(),
                    name: faker.string.sample(),
                    type: faker.string.sample(),
                }

                // @ts-ignore
                sandbox.stub(service, "findById").resolves(response);


                chai.request(server)
                    .get(baseEndpoint + '/' + id) //Act
                    .end((err: any, res: any) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.have.property('body');
                        expect(res.body).includes.all.keys(['year', 'name', 'type', 'quantity']);
                        expect(res.body).to.deep.equal(response);
                        done();
                    }) //Assert
            });

        // 3. expectation
        it('When we request coin with id and some generic error raise, then should return Internal server Error',
            (done) => {

                //Arrange
                sandbox.stub(service, "findById").throws(new Error());

                chai.request(server)
                    .get(baseEndpoint + '/' + id) //Act
                    .end((err: any, res: any) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(500);
                        done();
                    }) //Assert

            });
        //3. expectation
        it('When we request coin with an invalid id, then should return bad request',
            (done) => {
                //Arrange
                const customId = faker.string.uuid();
                chai.request(server)
                    .get(baseEndpoint + '/' + customId) //Act
                    .end((err: any, res: any) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(400);
                        expect(res).to.have.property('body');
                        // expect(res.body.message).to.have.property('body');
                        done();
                    }) //Assert

            });
        //3. expectation
        it('When we request coin with a valid non-existing Id, then should return resource not found',
            (done) => {
                //Arrange
                const customId = faker.database.mongodbObjectId();

                const error = new BadRequestError({code: 404, message: "No values found."});

                sandbox.stub(service, "findById").callsFake((index) => {
                    expect(index).to.be.eq(customId);
                    throw error;
                });

                chai.request(server)
                    .get(baseEndpoint + '/' + customId) //Act
                    .end((err: any, res: any) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(404);
                        expect(res).to.have.property('body');
                        // expect(res.body.message).to.have.property('body');
                        done();
                    }) //Assert

            });
        // //3. expectation
        // it(
        //     'When we request all bank accounts, then the retrieve bank accounts request present HTTP headers as expected',
        //     ()=> {
        //         //Arrange
        //
        //         //Act
        //
        //         //Assert
        //
        //     });
        //
        // //3. expectation
        // it(
        //     'When we request all bank accounts with invalid values in HTTP headers, then the retrieve bank accounts should return Bad Request',
        //     ()=> {
        //         //Arrange
        //
        //         //Act
        //
        //         //Assert
        //
        //     });
    });

    // 2. scenario
    describe('Retrieve all Coins', function () {
        let sandbox: SinonSandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
        });

        afterEach(() => {
            sandbox.restore();
        });

        //3. expectation
        it('When we request coins, then the retrieve coins status is approval',
            (done) => {
                // @ts-ignore
                sandbox.stub(service, "findAll").resolves(null);
                chai.request(server) //Arrange
                    .get(baseEndpoint)  //Act
                    .end((err: any, res: any) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        done();
                    }) //Assert
            });

        // 3. expectation
        it('When we request coins, then the retrieve coins response is well-formed',
            (done) => {
                //Arrange
                const response = {
                    quantity: faker.number.int(),
                    year: faker.string.sample(),
                    name: faker.string.sample(),
                    type: faker.string.sample(),
                }

                // @ts-ignore
                sandbox.stub(service, "findAll").resolves(response);


                chai.request(server)
                    .get(baseEndpoint) //Act
                    .end((err: any, res: any) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.have.property('body');
                        expect(res.body).includes.all.keys(['year', 'name', 'type', 'quantity']);
                        expect(res.body).to.deep.equal(response);
                        done();
                    }) //Assert
            });

        // 3. expectation
        it('When we request coins and some generic error raise, then should return Internal server Error',
            (done) => {

                //Arrange
                sandbox.stub(service, "findAll").throws(new Error());

                chai.request(server)
                    .get(baseEndpoint) //Act
                    .end((err: any, res: any) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(500);
                        done();
                    }) //Assert

            });

        //3. expectation
        it('When we request coins and result is empty, then should return resource not found',
            (done) => {
                //Arrange

                const error = new BadRequestError({code: 404, message: "No values found."});

                sandbox.stub(service, "findAll").callsFake(() => {
                    throw error;
                });

                chai.request(server)
                    .get(baseEndpoint) //Act
                    .end((err: any, res: any) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(404);
                        expect(res).to.have.property('body');
                        done();
                    }) //Assert

            });

    });

});
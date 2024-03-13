import {faker} from "@faker-js/faker";
import sinon, {SinonSandbox} from "sinon";
import {expect} from "chai";
import {Coin} from "../../../models/db/coin.model";
import {findAll, findById} from "../../../app/coins/v1/domain/coins.service";
import {CoinMapper} from "../../../mappers/CoinMapper";

//1. unit under test
describe('Coins service', function () {

    // 2. scenario
    describe('findById', function () {
        let sandbox: SinonSandbox;
        beforeEach(() => {
            sandbox = sinon.createSandbox();
        });

        afterEach(() => {
            sandbox.restore();
        });

        //3. expectation
        it('When we request coin with invalid id, then should throw Bad Request Error',
            async () => {
                //Arrange
                const id = faker.string.uuid()
                //Act
                try {
                    await findById(id);
                    throw new Error('Function did not throw an error as expected');
                } catch (error: any) {
                    //Assert
                    expect(error.message).to.equal('Invalid Id');
                    expect(error.statusCode).to.equal(400);
                }

            });

        //3. expectation
        it('When we request coin with valid non-existing id, then should throw Not Found Error',
            async () => {
                //Arrange
                // @ts-ignore
                sandbox.stub(Coin, "findById").returns({
                    exec: sinon.stub().resolves(null)
                });
                const id = faker.database.mongodbObjectId();
                //Act
                try {
                    await findById(id)
                    throw new Error('Function did not throw an error as expected');
                } catch (error: any) {
                    //Assert
                    expect(error.message).to.equal('Resource Not Found');
                    expect(error.statusCode).to.equal(404);
                }
            });

        //3. expectation
        it('When we request coin with valid id, then the retrieve coin object',
            async () => {
                //Arrange
                const response = 'Response Ok'
                // @ts-ignore
                sandbox.stub(Coin, "findById").returns({
                    exec: sinon.stub().resolves(response)
                });

                // @ts-ignore
                sandbox.stub(CoinMapper, "parseToDto").returns(response);
                const id = faker.database.mongodbObjectId();
                //Act
                const result = await findById(id);
                expect(result).to.equal(response);
            });
    });

    // 2. scenario
    describe('findAll', function () {
        let sandbox: SinonSandbox;
        beforeEach(() => {
            sandbox = sinon.createSandbox();
        });

        afterEach(() => {
            sandbox.restore();
        });

        //3. expectation
        it('When we request coins but result is empty, then should throw Not Found Error',
            async () => {
                //Arrange
                // @ts-ignore
                sandbox.stub(Coin, "find").returns({
                    exec: sinon.stub().resolves(null)
                });
                //Act
                try {
                    await findAll()
                    throw new Error('Function did not throw an error as expected');
                } catch (error: any) {
                    //Assert
                    expect(error.message).to.equal('Resource Not Found');
                    expect(error.statusCode).to.equal(404);
                }
            });

        //3. expectation
        it('When we request coin with valid id, then the retrieve coin object',
            async () => {
                //Arrange
                const response = ['Response Ok']
                // @ts-ignore
                sandbox.stub(Coin, "find").returns({
                    exec: sinon.stub().resolves(response)
                });
                // @ts-ignore
                sandbox.stub(CoinMapper, "parseToDto").callsFake((val) => val);
                //Act
                const result = await findAll();
                expect(result).to.deep.equal(response);
            });
    });

});
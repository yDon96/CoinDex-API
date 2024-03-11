import {expect} from "chai";
import BadRequestError from "../../models/errors/BadRequestError";

//1. unit under test
// 2. scenario
describe('Test BadRequest Error class', () => {

    // 3. expectation
    it('when created without params, should have 400 status code and "Bad request" as message',
        () => {
            //Arrange
            //Act
            const error = new BadRequestError()
            //Assert
            expect(error.statusCode).to.equal(400);
            expect(error.message).to.equal('Bad request');
        });

    // 3. expectation
    it('when created with only status code, should have same status code and "Bad request" as message',
        () => {
            //Arrange
            //Act
            const error = new BadRequestError({code: 401})
            //Assert
            expect(error.statusCode).to.equal(401);
            expect(error.message).to.equal('Bad request');
        });

    // 3. expectation
    it('when created with only message, should have 400 status code and same message',
        () => {
            //Arrange
            //Act
            const error = new BadRequestError({message: 'Custom Bad request'})
            //Assert
            expect(error.statusCode).to.equal(400);
            expect(error.message).to.equal('Custom Bad request');
        });

});
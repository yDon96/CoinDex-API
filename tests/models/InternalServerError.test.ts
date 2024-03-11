import {expect} from "chai";
import InternalServerError from "../../models/errors/InternalServerError";

//1. unit under test
// 2. scenario
describe('Test InternalServer Error class', () => {

    // 3. expectation
    it('when created without params, should have 500 status code and "Internal Server Error" as message',
        () => {
            //Arrange
            //Act
            const error = new InternalServerError()
            //Assert
            expect(error.statusCode).to.equal(500);
            expect(error.message).to.equal('Internal Server Error');
        });

    // 3. expectation
    it('when created with only status code, should have same status code and "Internal Server Error" as message',
        () => {
            //Arrange
            //Act
            const error = new InternalServerError({code: 501})
            //Assert
            expect(error.statusCode).to.equal(501);
            expect(error.message).to.equal('Internal Server Error');
        });

    // 3. expectation
    it('when created with only message, should have 500 status code and same message',
        () => {
            //Arrange
            //Act
            const error = new InternalServerError({message: 'Custom Internal Server Error'})
            //Assert
            expect(error.statusCode).to.equal(500);
            expect(error.message).to.equal('Custom Internal Server Error');
        });

});
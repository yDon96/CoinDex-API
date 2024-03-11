import {globalErrorHandler} from "../../middleware/globalErrorHandler";
import sinon, {SinonSandbox} from "sinon";
import {expect} from "chai";
import BadRequestError from "../../models/errors/BadRequestError";
import {ANetworkError} from "../../models/errors/ANetworkError";

//1. unit under test
// 2. scenario
describe('Test Global Error Handler', () => {
    let sandbox: SinonSandbox;
    let req: any;
    let next: any;
    let res: any;


    beforeEach(() => {
        sandbox = sinon.createSandbox();
        next = sinon.stub();
        res = {
            status: sinon.stub(),
            json: sinon.stub()
        };
        req = sinon.stub();
    });

    afterEach(() => {
        sandbox.restore();
    });

    // 3. expectation
    it('when err input is empty, should respond with Internal Server Error',
        () => {
            //Arrange
            const error = new Error()
            //Act
            globalErrorHandler(error, req, res, next)
            //Assert
            expect(res.status.calledOnceWithExactly(500)).to.be.true;
            expect(res.json.calledOnceWithExactly({
                message: 'Internal Server Error',
                error: error
            })).to.be.true;

            expect(next.notCalled).to.be.true;
            expect(req.notCalled).to.be.true;

        });

    // 3. expectation
    it('when err input has no status code but a message, should respond with 500 status code and original message',
        () => {
            //Arrange
            const message = 'Custom Error'
            const error = new Error(message)
            //Act
            globalErrorHandler(error, req, res, next)
            //Assert
            expect(res.status.calledOnceWithExactly(500)).to.be.true;
            expect(res.json.calledOnceWithExactly({
                message: message,
                error: error
            })).to.be.true;

            expect(next.notCalled).to.be.true;
            expect(req.notCalled).to.be.true;
        });

    // 3. expectation
    it('when err is well defined, should respond with it',
        () => {
            //Arrange
            const error = new BadRequestError()
            //Act
            globalErrorHandler(error, req, res, next)
            //Assert
            expect(res.status.calledOnceWithExactly(400)).to.be.true;
            expect(res.json.calledOnceWithExactly({
                message: "Bad request",
                error: error
            })).to.be.true;

            expect(next.notCalled).to.be.true;
            expect(req.notCalled).to.be.true;
        });
});
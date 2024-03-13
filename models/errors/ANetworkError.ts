export type CustomErrorContent = {
    message: string,
    context?: { [key: string]: any }
};

export abstract class ANetworkError extends Error {
    abstract readonly statusCode: number;
    abstract readonly errors: CustomErrorContent[];
    abstract readonly logging: boolean;

    protected constructor(message: string) {
        super(message);

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, ANetworkError.prototype);
    }
}
import BaseError from '@services/error/BaseError.ts';

export default class ForbiddenError extends BaseError {
    constructor(message: string = 'Forbidden') {
        super(message);
        this.name = 'ForbiddenError';
    }
}

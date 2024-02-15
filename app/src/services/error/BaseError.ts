export default class BaseError extends Error {
    public readonly recoverPath: string;
    constructor(message: string, recoverPath?: string) {
        super(message);
        this.message = message;
        this.recoverPath = recoverPath ?? '';
    }
}

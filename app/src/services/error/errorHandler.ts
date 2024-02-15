import BaseError from "@services/error/BaseError.ts";

export function getErrorType(error: Error): string {
    return error.constructor.name;
}

export const handleError = (error: Error) => {
    if (isBaseError(error)) {
        handleBaseErrorByDefault(error as BaseError);
        return;
    }
    console.error('Error: ', error);
};

function handleBaseErrorByDefault(error: BaseError): void {
    console.error('BaseError',error);
}

export function isError(error: unknown): boolean {
    return error instanceof Error;
}

export function isBaseError(error: Error): boolean {
    return error instanceof BaseError;
}
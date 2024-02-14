export function getErrorType(error: Error): string {
    return error.constructor.name;
}

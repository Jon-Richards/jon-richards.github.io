/**
 * @fileoverview
 * Contains a class for validating response status codes from the API.
 */

interface SupportedStatusCodes {
    /** OK */
    OK: 200;
    /** No content */
    NO_CONTENT: 204;
    /** Bad Request */
    BAD_REQUEST: 400;
    /** Unauthorized */
    UNAUTHORIZED: 401;
    /** Forbidden */
    FORBIDDEN: 403;
    /** Not found */
    NOT_FOUND: 404;
    /** Method not allowed */
    METHOD_NOT_ALLOWED: 405;
    /** Internal server error */
    INTERNAL_SERVER_ERROR: 500;
    /** Service unavailable */
    SERVICE_UNAVAILABLE: 503;
}

/** Stores and validates a response's status code from the API. */
export class Status {
    /** Lookup table for all expected status codes. */
    static readonly SUPPORTED_STATUS_CODES: SupportedStatusCodes = {
        OK: 200,
        NO_CONTENT: 204,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        METHOD_NOT_ALLOWED : 405,
        INTERNAL_SERVER_ERROR: 500,
        SERVICE_UNAVAILABLE: 503
    };

    /** The status code as recieved from the API. */
    readonly code: number;

    constructor(
        /** The status code from the API response. */
        status: number
    ) {
        if (!this.checkIfSupported(status)) {
            console.warn(`Received unexpected status code in API response: ${status}`);
        }
        if (this.checkIfError(status)) {
            console.warn(`Recieved error status code in API response: ${status}`);
        }
        this.code = status;
    }

    /** 
     * Validates the provided status code.
     * @param code The response status code to validate.
     * @return If the provided status code has an expected value.
     */
    private checkIfSupported( code: Status['code'] ): boolean {
        return (
            code === Status.SUPPORTED_STATUS_CODES.OK || 
            code === Status.SUPPORTED_STATUS_CODES.NO_CONTENT || 
            code === Status.SUPPORTED_STATUS_CODES.BAD_REQUEST ||
            code === Status.SUPPORTED_STATUS_CODES.UNAUTHORIZED ||
            code === Status.SUPPORTED_STATUS_CODES.FORBIDDEN ||
            code === Status.SUPPORTED_STATUS_CODES.NOT_FOUND ||
            code === Status.SUPPORTED_STATUS_CODES.METHOD_NOT_ALLOWED ||
            code === Status.SUPPORTED_STATUS_CODES.INTERNAL_SERVER_ERROR ||
            code === Status.SUPPORTED_STATUS_CODES.SERVICE_UNAVAILABLE
        );
    }

    /**
     * Validates if the provided status code should be considered an error.
     * @param code The response status code to validate.
     * @return If the provided status code should be considered an error.
     */
    private checkIfError( code: Status['code'] ): boolean {
        return (
            !this.checkIfSupported(code) || 
            (
                code !== Status.SUPPORTED_STATUS_CODES.OK && 
                code !== Status.SUPPORTED_STATUS_CODES.NO_CONTENT
            )
        );
    }

    /** Checks if this status code is of an expected value. */
    get isSuported(): boolean {
        return this.checkIfSupported(this.code);
    }

    /** Determines if the status code should be handled as an error. */
    get isError(): boolean {
        return this.checkIfError(this.code);
    }

    /** Returns the lookup table of expected status codes. */
    get expectedCodes(): SupportedStatusCodes {
        return Status.SUPPORTED_STATUS_CODES;
    }
}
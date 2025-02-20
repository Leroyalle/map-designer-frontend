interface ErrorResponse {
  message: string;
  error?: string;
  statusCode?: number;
  [key: string]: unknown;
}

export class FetchError extends Error {
  public readonly statusCode?: number;
  public readonly error?: string;
  public readonly data: ErrorResponse;

  constructor(errorData: ErrorResponse) {
    super(errorData.message);
    this.name = '';
    this.statusCode = errorData.statusCode;
    this.error = errorData.error;
    this.data = errorData;
  }
}

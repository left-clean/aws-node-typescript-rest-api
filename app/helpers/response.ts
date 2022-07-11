export enum StatusCode {
  success = 200,
  badRequest = 400,
}

class Result {
  private statusCode: number;
  private data: any;

  constructor(statusCode: number, data?: any) {
    this.statusCode = statusCode;
    this.data = data;
  }

  /**
   * Serverless: According to the API Gateway specs, the body content must be stringified
   */
  bodyToString() {
    return {
      statusCode: this.statusCode,
      body: JSON.stringify({ ...this.data }),
    };
  }
}

export class Response {
  static success(data: object): {
    statusCode: number;
    body: string;
  } {
    const result = new Result(StatusCode.success, data);

    return result.bodyToString();
  }

  static badRequest(message: string): {
    statusCode: number;
    body: string;
  } {
    const result = new Result(StatusCode.badRequest, message);
    return result.bodyToString();
  }
}

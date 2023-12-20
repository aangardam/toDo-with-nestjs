export class ResponseResultSuccess {
  constructor(
    public statusCode: number,
    public message: string,
    public data?: any,
    public total?: any,
  ) {}
}

export class ResponseResultError {
  constructor(
    public statusCode: number,
    public message: string,
  ) {}
}

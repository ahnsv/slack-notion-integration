export class IntegrationEnvironmentError extends Error {
  public constructor(message: string) {
    super(message);
  }
}

export class ClientInitializationError extends Error {
  public constructor(message: string) {
    super(message);
  }
}

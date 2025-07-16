export class Hello {
  public sayHello(): string {
    return "Hello, World!";
  }

  public fetchAcmeDotCom(): Promise<Response> {
    // Make an http call to google.com using fetch and return the response body
    return fetch("https://www.acme.com");
  }
}

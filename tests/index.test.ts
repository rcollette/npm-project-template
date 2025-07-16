import { Hello } from "../src/index.js";
import nock from "nock";

describe("Hello Class", () => {
  let hello: Hello | null;
  let phrase: string | null;
  let response: Response | null;

  afterAll(() => {
    hello = null;
    phrase = null;
    response = null;
  });

  beforeAll(() => {});

  beforeEach(() => {
    hello = new Hello();
  });

  afterEach(() => {
    expect(nock.isDone()).toBe(true);
    nock.cleanAll();
  });

  describe("sayHello()", () => {
    beforeEach(() => {
      phrase = hello!.sayHello();
    });
    it("should return a phrase", () => {
      expect(phrase).toBe("Hello, World!");
    });
  });
  describe("fetchAcmeDotCom()", () => {
    beforeEach(async () => {
      // Arrange
      nock("https://www.acme.com").get("/").reply(200, "ACME Home Page");
      response = await hello!.fetchAcmeDotCom();
    });
    it("should return a response", async () => {
      // Assert
      expect(response).toBeInstanceOf(Response);
      expect(response!.status).toBe(200);
      await expect(response!.text()).resolves.toBe("ACME Home Page");
    });
  });
});

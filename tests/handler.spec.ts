import lambdaTester from "lambda-tester";

import { hello } from "../app/handler";
import { StatusCode } from "../app/helpers/response";

describe("Handler -> hello [GET]", () => {
  it("success", async () => {
    const result = await lambdaTester(hello)
      .event({})
      .expectResult((result: any): any => result);

    expect(StatusCode.success).toEqual(result.statusCode);
  });
});

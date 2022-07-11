import { Response, StatusCode } from "../../../app/helpers/response";

describe("Response", () => {
  it("statusCode = 200", async () => {
    const response = Response.success({});
    expect(StatusCode.success).toEqual(response.statusCode);
  });

  it("statusCode = 400", async () => {
    const response = Response.badRequest("");
    expect(StatusCode.badRequest).toEqual(response.statusCode);
  });
});

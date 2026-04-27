import { api } from "@/src/api/client";
import { loginService } from "../authService";


jest.mock("@/src/api/client", () => ({
  api: {
    post: jest.fn(),
  },
}));

describe("loginService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call login endpoint and return data", async () => {
    const mockBody = {
      email: "test@test.com",
      password: "1234",
    };

    const mockResponse = {
      data: {
        token: "fake-jwt-token",
        user: {
          id: 1,
          name: "Gabriel",
          email: "test@test.com",
        },
      },
    };

    (api.post as jest.Mock).mockResolvedValue(mockResponse);

    const result = await loginService(mockBody);

    
    expect(api.post).toHaveBeenCalledWith(
      "https://qf5k9fspl0.execute-api.us-east-1.amazonaws.com/default/login",
      JSON.stringify(mockBody)
    );

    
    expect(result).toEqual(mockResponse.data);
  });

  it("should handle api error", async () => {
    const mockBody = {
      email: "test@test.com",
      password: "wrong",
    };

    (api.post as jest.Mock).mockRejectedValue(new Error("Login failed"));

    await expect(loginService(mockBody)).rejects.toThrow("Login failed");

    expect(api.post).toHaveBeenCalled();
  });
});
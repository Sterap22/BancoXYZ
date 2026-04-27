import { api } from "@/src/api/client";
import { getBalance, getTransfers, makeTransfer } from "../bankService";

// mock del api
jest.mock("@/src/api/client", () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
  },
}));

describe("bankService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // getBalance 
  it("should return balance data", async () => {
    const mockResponse = {
      data: {
        accountBalance: 1000,
        currency: "BRL",
      },
    };

    (api.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await getBalance();

    expect(api.get).toHaveBeenCalledWith(
      "https://2k0ic4z7s5.execute-api.us-east-1.amazonaws.com/default/balance"
    );

    expect(result).toEqual(mockResponse.data);
  });

  // getTransfers> all transferes in list
  it("should return transfers list", async () => {
    const mockResponse = {
      data: {
        transfers: [
          {
            value: 100,
            currency: "BRL",
            date: "2026-04-27",
            payeer: {
              name: "Juan",
              document: "123",
            },
          },
        ],
      },
    };

    (api.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await getTransfers();

    expect(api.get).toHaveBeenCalledWith(
      "https://n0qaa2fx3c.execute-api.us-east-1.amazonaws.com/default/transferList"
    );

    expect(result).toEqual(mockResponse.data.transfers);
  });

  // send money
  it("should send transfer request", async () => {
    const mockBody = {
      value: 100,
      currency: "BRL",
      payeerDocument: "123456",
      transferDate: "2026-04-27",
    };

    const mockResponse = {
      data: { status: "success" },
    };

    (api.post as jest.Mock).mockResolvedValue(mockResponse);

    const result = await makeTransfer(mockBody);

    expect(api.post).toHaveBeenCalledWith(
      "https://ofqx4zxgcf.execute-api.us-east-1.amazonaws.com/default/transfer",
      JSON.stringify(mockBody)
    );

    expect(result).toEqual(mockResponse);
  });
});
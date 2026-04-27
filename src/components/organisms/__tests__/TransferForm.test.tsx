import { fireEvent, render, waitFor } from "@testing-library/react-native";
import TransferForm from "../TransferForm";

describe("TransferForm", () => {
  it("renders correctly", () => {
    const { getByText } = render(<TransferForm onSubmit={() => {}} />);

    expect(getByText("Transferir dinero")).toBeTruthy();
  });

  it("shows validation errors when empty", async () => {
    const { getByText } = render(
      <TransferForm onSubmit={jest.fn()} />
    );

    fireEvent.press(getByText("Enviar transferencia"));

   await waitFor(() => {
    expect(getByText("Debe ser mayor a 0")).toBeTruthy();
    expect(getByText("Cuenta requerida")).toBeTruthy();
    });
  });

  it("submits correct values", async () => {
    const mockSubmit = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <TransferForm onSubmit={mockSubmit} />
    );

    fireEvent.changeText(
      getByPlaceholderText("Ej: 100.00"),
      "100"
    );

    fireEvent.changeText(
      getByPlaceholderText("Número de documento"),
      "12345678900"
    );

    fireEvent.press(getByText("Enviar transferencia"));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          value: 100,
          payeerDocument: "12345678900",
          currency: "BRL",
        }),
        expect.anything()
      );
    });
  });
});
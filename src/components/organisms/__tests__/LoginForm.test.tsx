import { fireEvent, render, waitFor } from "@testing-library/react-native";
import LoginForm from "../LoginForm";

describe("LoginForm", () => {
  it("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <LoginForm onSubmit={() => {}} />
    );

    expect(getByText("BancoXYZ")).toBeTruthy();
    expect(getByText("Accede a tu cuenta")).toBeTruthy();
    expect(getByPlaceholderText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
  });

  it("shows validation errors when empty", async () => {
  const { getByText, getAllByText } = render(
    <LoginForm onSubmit={jest.fn()} />
  );

  fireEvent.press(getByText("Ingresar"));

  await waitFor(() => {
    const errors = getAllByText("Requerido");
    expect(errors.length).toBe(2);
  });
});

  it("shows email validation error", async () => {
    const { getByPlaceholderText, getByText } = render(
      <LoginForm onSubmit={jest.fn()} />
    );

    fireEvent.changeText(getByPlaceholderText("Email"), "correo-mal");
    fireEvent.changeText(getByPlaceholderText("Password"), "1234");

    fireEvent.press(getByText("Ingresar"));

    await waitFor(() => {
      expect(getByText("Email inválido")).toBeTruthy();
    });
  });

  it("submits correct data", async () => {
    const mockSubmit = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <LoginForm onSubmit={mockSubmit} />
    );

    fireEvent.changeText(
      getByPlaceholderText("Email"),
      "test@test.com"
    );

    fireEvent.changeText(
      getByPlaceholderText("Password"),
      "1234"
    );

    fireEvent.press(getByText("Ingresar"));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(
        {
          email: "test@test.com",
          password: "1234",
        },
        expect.anything()
      );
    });
  });
});
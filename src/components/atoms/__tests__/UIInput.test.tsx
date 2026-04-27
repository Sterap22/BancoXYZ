import { fireEvent, render } from "@testing-library/react-native";
import UIInput from "../UIInput";

describe("UIInput", () => {
  it("updates value correctly", () => {
    const mockFn = jest.fn();

    const { getByPlaceholderText } = render(
      <UIInput placeholder="Monto" onChangeText={mockFn} />
    );

    fireEvent.changeText(getByPlaceholderText("Monto"), "100");

    expect(mockFn).toHaveBeenCalledWith("100");
  });
});
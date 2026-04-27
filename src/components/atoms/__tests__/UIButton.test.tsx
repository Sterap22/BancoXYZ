import { fireEvent, render } from "@testing-library/react-native";
import UIButton from "../UIButton";

describe("UIButton", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <UIButton title="Click me" onPress={() => {}} />
    );

    expect(getByText("Click me")).toBeTruthy();
  });

  it("calls onPress", () => {
    const mockFn = jest.fn();

    const { getByText } = render(
      <UIButton title="Press" onPress={mockFn} />
    );

    fireEvent.press(getByText("Press"));

    expect(mockFn).toHaveBeenCalled();
  });
});
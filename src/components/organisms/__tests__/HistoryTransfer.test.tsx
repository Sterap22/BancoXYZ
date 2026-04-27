import { fireEvent, render } from "@testing-library/react-native";
import HistoryTransfer from "../HistoryTransfer";

describe("HistoryTransfer", () => {
  const mockSetSearch = jest.fn();

  const mockData = [
    {
      payeer: {
        name: "Juan Perez",
        document: "123456",
      },
      currency: "BRL",
      value: 100,
      date: "2026-04-27",
    },
  ];

  it("renders empty state when no transfers", () => {
    const { getByText } = render(
      <HistoryTransfer
        search=""
        setSearch={mockSetSearch}
        filtered={[]}
      />
    );

    expect(getByText("No hay transferencias")).toBeTruthy();
  });

  it("renders list of transfers", () => {
    const { getByText } = render(
      <HistoryTransfer
        search=""
        setSearch={mockSetSearch}
        filtered={mockData}
      />
    );

    expect(getByText("Juan Perez")).toBeTruthy();
    expect(getByText("BRL 100")).toBeTruthy();
    expect(getByText("Doc: 123456")).toBeTruthy();
    expect(getByText("2026-04-27")).toBeTruthy();
  });

  it("updates search input", () => {
    const { getByPlaceholderText } = render(
      <HistoryTransfer
        search=""
        setSearch={mockSetSearch}
        filtered={[]}
      />
    );

    fireEvent.changeText(
      getByPlaceholderText("Buscar por nombre"),
      "Juan"
    );

    expect(mockSetSearch).toHaveBeenCalledWith("Juan");
  });

  it("renders header title", () => {
    const { getByText } = render(
      <HistoryTransfer
        search=""
        setSearch={mockSetSearch}
        filtered={[]}
      />
    );

    expect(getByText("Historial")).toBeTruthy();
  });
});
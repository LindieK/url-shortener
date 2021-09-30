import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders Nav component", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("header-nav")).toBeInTheDocument();
  });
  it("renders HeroSection", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("hero")).toBeInTheDocument();
  });
  it("renders StatsSection component", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("stats")).toBeInTheDocument();
  });
  it("renders BoostSection component", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("boost")).toBeInTheDocument();
  });
  it("renders Footer component", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("footer")).toBeInTheDocument();
  });
});

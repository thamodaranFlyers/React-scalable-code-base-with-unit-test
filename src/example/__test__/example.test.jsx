import { fireEvent, render, screen } from "@testing-library/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { store } from "../../store";
import { Example } from "../example";

describe("A truthy statement", () => {
  const dispatch = vi.fn();
  dispatch.mockReturnValue(vi.fn());
  const reactRedux = { useDispatch, useSelector };
  const useDispatchMock = vi.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useDispatchMock.mockClear();
  });
  const dummyDispatch = vi.fn();
  useDispatchMock.mockReturnValue(dummyDispatch);

  test("renders", () => {
    render(
      <Provider store={store}>
        <Example />
      </Provider>
    );
    expect(screen.getByText("Example 1")).toBeDefined();
  });

  test("Example one button click", () => {
    render(
      <Provider store={store}>
        <Example />
      </Provider>
    );
    const exampleBtnOne = screen.getByTestId("example-one");
    fireEvent.click(exampleBtnOne);
    expect(exampleBtnOne).toBeInTheDocument();
  });
  test("Example two button click", () => {
    render(
      <Provider store={store}>
        <Example />
      </Provider>
    );
    const exampleBtnTwo = screen.getByTestId("example-two");
    fireEvent.click(exampleBtnTwo);
    expect(exampleBtnTwo).toBeInTheDocument();
  });
  test("Example three button click", () => {
    render(
      <Provider store={store}>
        <Example />
      </Provider>
    );
    const exampleBtnThree = screen.getByTestId("example-three");
    fireEvent.click(exampleBtnThree);
    expect(exampleBtnThree).toBeInTheDocument();
  });
});

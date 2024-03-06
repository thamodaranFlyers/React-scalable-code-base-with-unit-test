import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, test } from "vitest";
import App from "../App";
import { store } from "../store";

describe("App truthy statement", () => {
  test("Render App", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";

import SupermarketPage from "../SupermarketPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders supermarket page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SupermarketPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("supermarket-datatable")).toBeInTheDocument();
    expect(screen.getByRole("supermarket-add-button")).toBeInTheDocument();
});

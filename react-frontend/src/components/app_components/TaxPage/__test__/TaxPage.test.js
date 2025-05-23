import React from "react";
import { render, screen } from "@testing-library/react";

import TaxPage from "../TaxPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders tax page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TaxPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("tax-datatable")).toBeInTheDocument();
    expect(screen.getByRole("tax-add-button")).toBeInTheDocument();
});

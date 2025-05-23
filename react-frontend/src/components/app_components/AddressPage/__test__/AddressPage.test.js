import React from "react";
import { render, screen } from "@testing-library/react";

import AddressPage from "../AddressPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders address page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddressPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("address-datatable")).toBeInTheDocument();
    expect(screen.getByRole("address-add-button")).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";

import OrderItemPage from "../OrderItemPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders orderItem page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OrderItemPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("orderItem-datatable")).toBeInTheDocument();
    expect(screen.getByRole("orderItem-add-button")).toBeInTheDocument();
});

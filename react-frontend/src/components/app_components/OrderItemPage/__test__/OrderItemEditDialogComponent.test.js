import React from "react";
import { render, screen } from "@testing-library/react";

import OrderItemEditDialogComponent from "../OrderItemEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders orderItem edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OrderItemEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("orderItem-edit-dialog-component")).toBeInTheDocument();
});

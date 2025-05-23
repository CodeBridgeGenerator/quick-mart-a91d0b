import React from "react";
import { render, screen } from "@testing-library/react";

import OrderItemCreateDialogComponent from "../OrderItemCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders orderItem create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OrderItemCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("orderItem-create-dialog-component")).toBeInTheDocument();
});

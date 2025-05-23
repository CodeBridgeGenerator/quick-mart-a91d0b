import React from "react";
import { render, screen } from "@testing-library/react";

import SupportTicketEditDialogComponent from "../SupportTicketEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders supportTicket edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SupportTicketEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("supportTicket-edit-dialog-component")).toBeInTheDocument();
});

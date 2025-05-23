import React from "react";
import { render, screen } from "@testing-library/react";

import SupportTicketPage from "../SupportTicketPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders supportTicket page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SupportTicketPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("supportTicket-datatable")).toBeInTheDocument();
    expect(screen.getByRole("supportTicket-add-button")).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";

import AdminPage from "../AdminPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders admin page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AdminPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("admin-datatable")).toBeInTheDocument();
    expect(screen.getByRole("admin-add-button")).toBeInTheDocument();
});

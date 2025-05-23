import React from "react";
import { render, screen } from "@testing-library/react";

import CouponPage from "../CouponPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders coupon page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CouponPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("coupon-datatable")).toBeInTheDocument();
    expect(screen.getByRole("coupon-add-button")).toBeInTheDocument();
});

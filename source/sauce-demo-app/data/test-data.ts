import { fail } from "assert";

export const testdata = {
    validUser: {
        username: "standard_user", 
        password: "secret_sauce"
    },
    invalidUser: {
        username: "standard_user1",
        password: "secret_sauce1"
    },
    lockedOutUser: {
        username: "locked_out_user",
        password: "secret_sauce"
    },
    checkoutInfo: {
        firstName: "John",
        lastName: "Doe",
        postalCode: "12345"
    },
    items: {
        item1: "Sauce Labs Fleece Jacket",
        item2: "Sauce Labs Onesie",
        item3: "Sauce Labs Bike Light"
    },
    orderMessage: {
        successMessage: "Thank you for your order!",
        failMessage: "Order could not be completed.",
    }
};      
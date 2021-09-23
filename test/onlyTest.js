import {Selector} from 'testcafe'

const developerName  = Selector("#developer-name")
const osOption = Selector("#macos")
const submit = Selector("#submit-button")


fixture("Only fixture")
    .page("https://devexpress.github.io/testcafe/example");

    test.only("First only Test", async t  => {
        await t 
            .typeText(developerName, "TAU")
            .click(osOption)
            .click(submit);
    });

    test("Not only Test", async t  => {
        await t 
            .typeText(developerName, "TAU")
            .click(osOption)
            .click(submit);
    });


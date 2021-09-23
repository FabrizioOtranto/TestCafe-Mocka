import {Selector} from 'testcafe'

const developerName  = Selector("#developer-name")
const osOption = Selector("#macos")
const submit = Selector("#submit-button")


fixture("Skip fixture")
    .page("https://devexpress.github.io/testcafe/example");

    test.skip("First skip Test", async t  => {
        await t 
            .typeText(developerName, "TAU")
            .click(osOption)
            .click(submit);
    });

    test("Not Skip Test", async t  => {
        await t 
            .typeText(developerName, "TAU")
            .click(osOption)
            .click(submit);
    });

    test("Not Skip Test2", async t  => {
        await t 
            .maximizeWindow()
            .typeText(developerName, "TAU")
            .click(osOption)
            .click(submit);
    });



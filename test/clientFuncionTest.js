import {Selector, ClientFunction} from 'testcafe'

const developerName  = Selector("#developer-name")
const osOption = Selector("#macos")
const submit = Selector("#submit-button")
const getPageURL = ClientFunction(() => window.location.href)


fixture("Client Function fixture")
    .page("https://devexpress.github.io/testcafe/example");

    test("First Selector Test", async t  => {
        await t 
            .typeText(developerName, "TAU")
            .click(osOption)
            .click(submit)
            .expect(getPageURL()).contains('thank-you');
    });


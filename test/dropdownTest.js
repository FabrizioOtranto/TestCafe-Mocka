import {Selector} from 'testcafe'

const developerName  = Selector("#developer-name")
const osOption = Selector("#macos")
const submit = Selector("#submit-button")
const InterfaceSelect  = Selector("select#preferred-interface")
const interfaceOption = InterfaceSelect.find("option");


fixture("dropdown fixture")
    .page("https://devexpress.github.io/testcafe/example");

    test("select dropdown Test", async t  => {
        await t 
            .typeText(developerName, "TAU")
            .click(osOption)
            .click(InterfaceSelect)
            .click(interfaceOption.withText('Both'))
            .click(submit);
    });


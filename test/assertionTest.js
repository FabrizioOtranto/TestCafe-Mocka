import {Selector} from 'testcafe'

const developerName  = Selector("#developer-name")
const osOption = Selector("#macos")
const submit = Selector("#submit-button")


fixture("Selector fixture")
    .page("https://devexpress.github.io/testcafe/example");

    test("First Selector Test", async t  => {
        await t 

            .expect(developerName.value).eql('','input is empty')
            .typeText(developerName, "TAU")
            .expect(developerName.value).eql('TAU','input contains "TAU"')
            .click(osOption)
            .click(submit);
    });


import {Selector} from 'testcafe'

fixture("Naviate Example")
    .page("https://devexpress.github.io/testcafe/example");

    test("navigate test", async t  => {
        await t 
            .navigateTo("http://www.google.com");

    });


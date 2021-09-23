import {Selector} from 'testcafe'

const populate = Selector('input#populate')

fixture("Hover fixture")
    .page("https://devexpress.github.io/testcafe/example");

    test
    ("Hover Test", async t  => {
        await t 
            .setTestSpeed(0.1)
            .hover(populate);
    });


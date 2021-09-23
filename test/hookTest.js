
fixture("Hook Fixture")
    .page("https://devexpress.github.io/testcafe/example")
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .setTestSpeed(0.5)
            .setPageLoadTimeout(0)
    })

    test("Hook Test", async t  => {
        await t 
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });



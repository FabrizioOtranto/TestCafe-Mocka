
fixture("Screenshot Fixture")
    .page("https://devexpress.github.io/testcafe/example")
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .setTestSpeed(0.5)
            .setPageLoadTimeout(0)
    })

    test("Screenshot whole Page", async t  => {
        await t 
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .takeScreenshot()
            .click("#submit-button")
            
    });

    test("Screenshot Element", async t  => {
        await t 
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .takeElementScreenshot(".col-2")
            .click("#submit-button")
            .takeScreenshot();
    });



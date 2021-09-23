fixture("Speed fixture")
    .page("https://www.google.com/");

    test.page("https://devexpress.github.io/testcafe/example")
    ("Set Speed Test", async t  => {
        await t 
        .setTestSpeed(0.5)
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });

    test.page("https://devexpress.github.io/testcafe/example")
    ("Set Speed Test 2", async t  => {
        await t 
        .setTestSpeed(0.01)
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });


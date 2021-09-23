fixture.meta("version","1")("First fixture")
    .page("https://www.google.com/");

    test.meta("env","production")
    .page("https://devexpress.github.io/testcafe/example")
    ("First Test with meta", async t  => {
        await t 
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });

    fixture.meta("version","1")("First fixture")
    .page("https://www.google.com/");

    test
    .page("https://devexpress.github.io/testcafe/example")
    ("Second Test", async t  => {
        await t 
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });



fixture("Set Page TimeOUt Fixture")
    .page("https://devexpress.github.io/testcafe/");

    test("Set Page TimeOUt Test", async t  => {
        await t 
            .setPageLoadTimeout(0)
            .navigateTo("https://devexpress.github.io/testcafe/example");

    });


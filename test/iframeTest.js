import {Selector} from 'testcafe'

const iFrameName = Selector("iframe#mce_0_ifr")
const textArea = Selector("body#tinymce.mce-content-body")

fixture("iFrame fixture")
.page("https://the-internet.herokuapp.com/iframe")

test("First iFrame Test", async t => {
    await t
        .switchToIframe(iFrameName)
        .click(textArea)
        .pressKey("ctrl+a delete")
        .typeText(textArea, "Hello from TAU")
        .expect(textArea.innerText).contains("TAU")
        .switchToMainWindow();

})
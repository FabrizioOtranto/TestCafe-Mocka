import {Selector} from 'testcafe'

const fileUpload  = Selector("input#file-upload")
const uploadFileButton = Selector("input#file-submit.button")



fixture("dropdown fixture")
    .page("https://the-internet.herokuapp.com/upload");

    test("File Upload Test", async t  => {
        await t 

            .setFilesToUpload(fileUpload,"../../upload/logo.png")
            .clearUpload(fileUpload)
            .setFilesToUpload(fileUpload,"../../upload/logo.png")
            .click(uploadFileButton)
    });


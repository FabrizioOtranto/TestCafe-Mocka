import {Selector} from 'testcafe'

const triedCheckBox = Selector('label').withText("I have tried TestCafe")
const slider = Selector("#slider")

fixture("Drag fixture")
    .page("https://devexpress.github.io/testcafe/example");

    test
    ("Drag Test", async t  => {
        await t 
            .setTestSpeed(0.5)
            .click(triedCheckBox)
            .drag(slider, 368,0,{offsetX:10, offsetY:10});
            
    });


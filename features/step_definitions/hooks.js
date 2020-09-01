const { Before, After, setWorldConstructor } = require('cucumber');
const { CustomWorld } = require('./world.js');

setWorldConstructor(CustomWorld);

Before(async function () {
    await this.browser.get('file:///home/elia/Projects/bdd/dist/index.html');
});

After(async function () {
    if (this.closeAfterTest) {
        await this.browser.close();
    }
});
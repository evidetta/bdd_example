const { setDefaultTimeout } = require('cucumber');
const { Builder } = require('selenium-webdriver');

const firefox = require('selenium-webdriver/firefox');

class CustomWorld {
    constructor(opts) {

        const options = new firefox.Options();

        this.headless = opts.parameters.headless;
        this.closeAfterTest = opts.parameters.closeAfterTest;

        if (this.headless === true) {
            options.addArguments("-headless");
        }

        this.browser = new Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(options)
            .build();

        setDefaultTimeout(60 * 1000);
    }

    lookupID(string) {
        switch (string) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                return "btnValue" + string;
            case "+":
                return "btnOpAdd";
            case "-":
                return "btnOpSubtract";
            case "*":
                return "btnOpMultiply";
            case "/":
                return "btnOpDivide";
            case "=":
                return "btnOpEqual";
            default:
                throw "button not found";
        }
    }
}

module.exports = {
    CustomWorld: CustomWorld
}
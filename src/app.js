import 'bootstrap';
import $ from "jquery";
import 'popper.js';

import './scss/app.scss';

$().ready(() => {

    let buffer = "";
    let val = 0;
    let mode = 'INPUT';

    const display = $("#txtDisplay");

    function processInput(value) {
        if (buffer === "") {
            buffer = value;
        } else {
            buffer += value;
        }

        display.val(buffer);
    }

    function processStream() {
        if (buffer == "") {
            buffer = display.val();
        }

        const v = parseInt(buffer);

        if (isNaN(v)) {
            throw "Not a number"
        }

        switch (mode) {
            case "INPUT":
                val = v;
                break;
            case "ADDITION":
                val += v;
                break;
            default:
                throw "Unknown mode";
        }

        display.val(val);
        buffer = "";
    }

    function doProcessStream(m) {
        processStream();
        mode = m;
    }

    $(".btn-value").click((event) => {
        processInput(event.target.innerText);
    });

    $("#btnOpAdd").click(() => {
        doProcessStream("ADDITION");
    });

    $("#btnOpEqual").click(() => {
        doProcessStream("INPUT");
    });

    $(window).keyup((event) => {
        event.preventDefault();
        $("button").blur();

        switch (event.key) {
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
                processInput(event.key);
                break;
            case "+":
                doProcessStream("ADDITION");
                break;
            case "Enter":
            case "=":
                doProcessStream("INPUT");
                break;
            default:
                break;
        }
    });

});
import 'bootstrap';
import $ from "jquery";
import 'popper.js';

import './scss/app.scss';

import {Mode} from "./mode"
import {InputProcessor} from "./input_processor"

$(window).ready(() => {

    const display = $("#txtDisplay");
    const buttons = $("button");

    const inputProcessor = new InputProcessor(display);

    $(".btn-value").click((event : any) => {
        inputProcessor.processToken(event.target.innerText);
    });

    $("#btnOpAdd").click(() => {
        inputProcessor.processOperation(Mode.ADDITION);
    });

    $("#btnOpEqual").click(() => {
        inputProcessor.processOperation(Mode.INPUT);
    });

    $(window).keyup((event : any) => {
        event.preventDefault();
        buttons.blur();

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
                inputProcessor.processToken(event.key);
                break;
            case "+":
                inputProcessor.processOperation(Mode.ADDITION);
                break;
            case "Enter":
            case "=":
                inputProcessor.processOperation(Mode.INPUT);
                break;
            default:
                break;
        }
    });

});
import {Mode} from "./mode"

export class InputProcessor {
    private _buffer: string;
    private _val: number;
    private _mode: Mode;

    private _display : JQuery<HTMLElement>;

    constructor(display : JQuery<HTMLElement>) {
        this._buffer = "";
        this._val = 0;
        this._mode = Mode.INPUT;

        this._display = display;
    }

    processToken(val: string) {
        if (this._buffer === "") {
            this._buffer = val;
        } else {
            this._buffer += val;
        }

        this._display.val(this._buffer);
    }

    processOperation(mode : Mode) {
        if (this._buffer === "") {
            this._buffer = <string>this._display.val();
        }

        const v = parseInt(this._buffer);

        if (isNaN(v)) {
            throw new Error("Not a number");
        }

        switch (this._mode) {
            case Mode.INPUT:
                this._val = v;
                break;
            case Mode.ADDITION:
                this._val += v;
                break;
            default:
                throw new Error("Unknown mode");
        }

        this._display.val(this._val);
        this._buffer = "";
        this._mode = mode;
    }
}
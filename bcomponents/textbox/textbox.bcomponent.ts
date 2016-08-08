import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplayType, DisplaySize} from '../bcomponent';

@Component({
    selector: "textbox-bcomponent",
    templateUrl: "textbox.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['placeholder', 'model', 'size', 'frontText', 'backText', 'frontClick', 'backClick', 'frontType', 'backType'])
})
export class TextboxBComponent extends BComponent {
    public placeholder: string;
    public model: string;
    public size: DisplaySize;
    public frontText: string;
    public backText: string;
    public frontClick: () => void;
    public backClick: () => void;
    public frontType: DisplayType = "default";
    public backType: DisplayType = "default";

    public frontClass: string;
    public backClass: string;
    public groupClass: string;

    constructor() {
        super("form-control");
    }

    private isNull = (value: any): boolean => {
        return value == null;
    }

    ngOnChildChanges = () => {
        this.frontClass = "btn btn-" + this.frontType;
        this.backClass = "btn btn-" + this.backType;

        this.groupClass = "input-group";
        if(!this.isNull(this.size)) {
            this.groupClass += " input-group-" + this.size;
        }
    }
}
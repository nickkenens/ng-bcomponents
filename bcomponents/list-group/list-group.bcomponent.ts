import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';
import {BadgeBComponent} from '../badge/badge.bcomponent';

export class ListGroupItem {
    public text: string;
    public badge: BadgeBComponent;
    public link: string;
    public active: boolean;

    constructor(text: string, badge: BadgeBComponent = null, link: string = "", active: boolean = false) {
        this.text = text;
        this.badge = badge;
        this.link = link;
        this.active = active;
    }

    public hasBadge = (): boolean => {
        return this.badge !== null;
    }
}

@Component({
    selector: "list-group-bcomponent",
    templateUrl: "list-group.bcomponent.html",
    directives: [BComponentAttributes, BadgeBComponent],
    inputs: BComponentInputs.concat(['items', 'linked'])
})
export class ListGroupBComponent extends BComponent {
    public items: ListGroupItem[];
    public linked: boolean = false;

    constructor() {
        super("list-group");
    }
}
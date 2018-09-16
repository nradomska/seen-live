import {Component, OnInit, Output, EventEmitter} from '@angular/core'


@Component({
    moduleId: module.id,
    selector: 'ns-floating-button',
    templateUrl: 'floating-button.component.html',
    styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {

    @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    onButtonClicked() {
        this.buttonClicked.emit();
    }

}

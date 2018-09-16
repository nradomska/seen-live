import {Component, OnInit, Input} from '@angular/core'
import {RouterExtensions} from 'nativescript-angular/router'


@Component({
    moduleId: module.id,
    selector: 'ns-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

    @Input() showBackButton: boolean;
    @Input() title: string;

    constructor(private routerExtensions: RouterExtensions,) {
    }

    ngOnInit() {
    }

    goBack() {
        this.routerExtensions.back();
    }
}

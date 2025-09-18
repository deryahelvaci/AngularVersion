import { Component, Input} from '@angular/core'

@Component({
    selector:'ikp-checkbox',
    templateUrl:'./ikp-checkbox.component.html'
})
export class CheckBoxComponent {

    @Input() disabled: boolean;
    @Input() model: any;
    @Input() required: boolean = false;
    @Input() onChangeAction: any;
    @Input() label: string;
    @Input() value: boolean;

    onChange(value: any){
        this.onChangeAction();
    }

    constructor() {}
}
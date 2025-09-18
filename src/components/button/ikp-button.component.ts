import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ikp-button',
    templateUrl: './ikp-button.component.html'
})
export class IkpButtonComponent {

    @Input() className: string = "button";
    @Input() disabled: boolean = false;
    @Input() text: string;
    @Output() onClickAction: EventEmitter<any> = new EventEmitter();

    onButtonClick(){
        if(!this.disabled)
            this.onClickAction.emit();
    }
}
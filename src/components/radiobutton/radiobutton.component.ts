import { Component, Input, forwardRef, Output,EventEmitter } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ListTypeModel } from '../../model/common/list-type.model';

export const RADIO_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true
}

@Component({
    selector:'ikp-radiobutton',
    templateUrl:'./radiobutton.component.html',
    providers:[RADIO_VALUE_ACCESSOR]
})
export class RadioButtonComponent implements ControlValueAccessor{

    @Input() valueList: Array<ListTypeModel>;
    @Input() disabled: boolean;
    @Input() floatingLabel: boolean;
    @Input() model: any;
    @Input() required: boolean = false;
    @Input() label: string;
    @Input() name: string;


    @Output() onSelectionChange: EventEmitter<any> = new EventEmitter();

    private onTouchedCallback: () => void;
    private onChangeCallback: (_:any) => void;
 
    constructor() {}

    innerValue:any;
    isDisabled: boolean;

    get value(): any {
        return this.innerValue;
    }

    @Input() set value(newValue: any){
        if(newValue !== this.innerValue){
            this.innerValue = newValue;
            this.onChangeCallback(newValue);
        }
    }

    onBlur() {
        this.onTouchedCallback();
    }

    writeValue(value:any): void {
        if((value) && (this.innerValue !== value)){
            this.innerValue = value;
        }
    }

    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    onChange(value: any){
      this.innerValue = value;
      this.onSelectionChange.emit(value);
    }
}
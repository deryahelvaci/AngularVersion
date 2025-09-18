import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'; 
import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';

export const TEXTBOX_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR, 
    useExisting: forwardRef(() => TextAreaComponent),
    multi: true
};
@Component ( {
    selector: 'ikp-text-area', 
    templateUrl: './ikp-text-area.component.html', 
    //styleUrls: [ './ikp-textbox.component.scss'], 
    providers: [TEXTBOX_VALUE_ACCESSOR]
})

export class TextAreaComponent implements ControlValueAccessor {

    private onTouchedCallback!: () => void;
    private onChangeCallback!: (_: any) => void;
    
    @Input () disabled: boolean = false;
    @Input () model?: any;
    @Input () required: boolean = false;
    @Input () autoSize: boolean = false;
    @Input () cols: number;
    @Input () rows: number;
    @Input () floatingLabel: string;
    @Input () maxLength: number;
    
    @Output () valuechange = new EventEmitter();

    constructor() { }
    innerValue: string;
    isDisabled: boolean;

    get value(): string {
        return this.innerValue;
    };

    set value(newValue: string) {
        if (newValue !== this.innerValue) {
            if (newValue != " "){
             this.innerValue = newValue;}
            else{
            this.innerValue = undefined;
            }
        this.onChangeCallback(this.innerValue);
        this.valuechange.emit(this.innerValue);
        }
    }

    checkRequired(){
        return this.required && (!this.innerValue || this.innerValue == undefined || this.innerValue == null || this.innerValue == '');
    }

   onBlur(){
    this.onTouchedCallback();
   }  

    writeValue(value: any): void {
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
        this.disabled = isDisabled;
    }
}
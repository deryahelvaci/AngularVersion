import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'; 
import { Component, Input, forwardRef, SimpleChanges, Output, EventEmitter } from '@angular/core';

export const TEXTBOX_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR, 
    useExisting: forwardRef(() => IkpTextboxComponent),
    multi: true
};
@Component ( {
    selector: 'ikp-textbox', 
    templateUrl: './ikp-textbox.component.html', 
    //styleUrls: [ './ikp-textbox.component.scss'], 
    providers: [TEXTBOX_VALUE_ACCESSOR]
})

export class IkpTextboxComponent implements ControlValueAccessor {

    private onTouchedCallback!: () => void;
    private onChangeCallback!: (_: any) => void;
    
    @Input () className: string = "primary";
    @Input () model: any;
    @Input () type: string = "text";
    @Input () size: string;
    @Input () required: boolean;
    @Input () disabled: boolean = false;
    @Input () floatingLabel: string;
    @Input () format: string;
    @Input () maxLength: number;
    @Input () showCalenderIcon: boolean = false;
    @Input () isEmail: boolean;
    @Input () autocomplete: string = "garbage";
    
    @Output () valuechange = new EventEmitter();
    @Output () onClickAction = new EventEmitter();
    @Output () onKeyPressEvent = new EventEmitter();
    @Output () onPasteEvent = new EventEmitter();
    @Output () onBlurEvent = new EventEmitter();

    constructor() { 
    }
    
    innerValue: string;

    get value(): string {
        return this.innerValue;
    };
    set value(newValue: string) {
        if (newValue == " ")
        {
            newValue = null
        }
        if (newValue !== this.innerValue) {
            if (newValue != " "){
             this.innerValue = newValue;}
            else{
            this.innerValue = "";
            }
        if(this.isEmail){
            this.innerValue = this.innerValue?.toLocaleLowerCase() ?? "";
        }
        this.onChangeCallback(this.innerValue);
        this.valuechange.emit(this.innerValue);
        }
        else {
            this.innerValue='';
            this.onChangeCallback(this.innerValue);
            this.valuechange.emit(this.innerValue);
        }
    }

   onBlur(event:any){
    this.onBlurEvent.emit(event);
   }  

    writeValue(value: any): void {
        if((value) && (this.innerValue !== value)){
            this.innerValue = value;
        }else{
            this.innerValue = null;
        }
    }

    checkRequired(){
     return this.required && (!this.innerValue || this.innerValue == undefined || this.innerValue == null || this.innerValue == '');
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
    
    onKeyPress(event : any){
     this.onKeyPressEvent.emit(event);
    }

    onPaste(event : any){
      this.onPasteEvent.emit(event);
    }
}
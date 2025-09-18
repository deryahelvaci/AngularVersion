import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IkpTextboxComponent } from './textbox/ikp-textbox.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { TextAreaComponent } from "./text-area/ikp-text-area.component";
import { IkpButtonComponent } from "./button/ikp-button.component";
import { CheckBoxComponent } from "./checkbox/ikp-checkbox.component";
import { FloatingLabelModule } from '@progress/kendo-angular-label';

@NgModule({
    imports: [
        InputsModule,
        FormsModule,
        TextBoxModule,
        CommonModule,
        FloatingLabelModule
    ],
    exports: [
        IkpTextboxComponent,
        TextAreaComponent,
        IkpButtonComponent,
        CheckBoxComponent
    ],
    declarations: [
        IkpTextboxComponent,
        TextAreaComponent,
        IkpButtonComponent,
        CheckBoxComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
}
)

export class ComponentModule {}
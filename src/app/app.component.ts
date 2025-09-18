import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { ComponentModule } from '../components/components.module';
import { CommonModule } from '@angular/common';
import { FloatingLabelModule } from '@progress/kendo-angular-label';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule,
    InputsModule,
    TextBoxModule,
    ComponentModule,
    FloatingLabelModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kolektif-test';
  isim = 'Derya';
}

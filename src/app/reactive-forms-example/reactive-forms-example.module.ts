import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationBorderModule } from '../validation-border/validation-border.module';
import { ReactiveFormsExampleComponent } from './reactive-forms-example.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ValidationBorderModule],
  declarations: [ReactiveFormsExampleComponent],
  exports: [ReactiveFormsExampleComponent]
})
export class ReactiveFormsExampleModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValidationBorderModule } from '../validation-border/validation-border.module';
import { TemplateFormsExampleComponent } from './template-forms-example.component';

@NgModule({
  imports: [CommonModule, FormsModule, ValidationBorderModule],
  declarations: [TemplateFormsExampleComponent],
  exports: [TemplateFormsExampleComponent]
})
export class TemplateFormsExampleModule {}

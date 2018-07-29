import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValidationBorderDirective } from './validation-border.directive';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { ValidationBorderConfig, VALIDATION_BORDER_CONFIG } from './public_api';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ValidationBorderDirective],
  exports: [ValidationBorderDirective]
})
export class ValidationBorderModule {
  static forRoot(config: ValidationBorderConfig): ModuleWithProviders {
    return {
      ngModule: ValidationBorderModule,
      providers: [{ provide: VALIDATION_BORDER_CONFIG, useValue: config }]
    };
  }
}

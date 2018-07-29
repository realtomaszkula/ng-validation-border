import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Inject, Input, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ValidationBorderConfig, VALIDATION_BORDER_CONFIG } from './public_api';

@Directive({
  selector: '[appValidationBorder]'
})
export class ValidationBorderDirective {
  private readonly colors: {
    VALID: string;
    INVALID: string;
    PENDING: string;
    DISABLED: string;
  };

  @Input('appValidationBorderWidth') borderWidth: string;
  @Input('appValidationBorderStyle') borderStyle: string;

  @HostBinding('style.border-style')
  get borderStyleCss() {
    return this.showBorder ? this.borderStyle : null;
  }

  @HostBinding('style.border-width')
  get borderWidthCss() {
    return this.showBorder ? this.borderWidth : null;
  }

  @HostBinding('style.border-color')
  get borderColorCss() {
    return this.showBorder ? this.colors[this.ngControl.status] : null;
  }

  get showBorder() {
    return this.ngControl.dirty || this.ngControl.touched;
  }

  constructor(
    @Self() private ngControl: NgControl,
    @Inject(VALIDATION_BORDER_CONFIG) config: ValidationBorderConfig
  ) {
    this.colors = config.colors;
    this.borderWidth = config.borderWidth;
    this.borderStyle = config.borderStyle;
  }
}

import { InjectionToken } from '@angular/core';

export interface ValidationBorderConfig {
  borderWidth: string;
  borderStyle: string;
  colors: {
    VALID: string;
    INVALID: string;
    PENDING: string;
    DISABLED: string;
  };
}

export const VALIDATION_BORDER_CONFIG = new InjectionToken<
  ValidationBorderConfig
>('Validation Border Config');

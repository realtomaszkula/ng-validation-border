import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms-example',
  template: `
  <h1> Template Forms </h1>
  <input [(ngModel)]="value" required appValidationBorder>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class TemplateFormsExampleComponent {
  value = '';
}

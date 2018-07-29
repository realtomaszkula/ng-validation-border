import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-template-forms-example></app-template-forms-example>
  <app-reactive-forms-example></app-reactive-forms-example>
  `,
  styles: [
    `
      :host {
        display: block;
        max-width: 400px;
        margin: 0 auto;
      }
    `
  ]
})
export class AppComponent {}

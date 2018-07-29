import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ReactiveFormsExampleModule } from './reactive-forms-example/reactive-forms-example.module';
import { TemplateFormsExampleModule } from './template-forms-example/template-forms-example.module';
import { ValidationBorderModule } from './validation-border';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsExampleModule,
    TemplateFormsExampleModule,
    BrowserAnimationsModule,
    ValidationBorderModule.forRoot({
      borderStyle: 'solid',
      borderWidth: '3px',
      colors: {
        VALID: 'green',
        INVALID: 'red',
        PENDING: 'yellow',
        DISABLED: 'silver'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

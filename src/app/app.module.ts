import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { AddFormComponent } from './forms/add-form/add-form.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [AppComponent, FormsComponent, AddFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

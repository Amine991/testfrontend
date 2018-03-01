import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { UpdateComponent } from './update/update.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';


@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    ,RouterModule,ToastModule.forRoot(),],
    
  providers: [AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqrtPipe } from './app.sqrt';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTxtDirective } from './change-txt.directive';
// import { HomeComponent } from './home/home.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    SqrtPipe,
    ChangeTxtDirective,
    RoutingComponent
    // HomeComponent,
    // ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

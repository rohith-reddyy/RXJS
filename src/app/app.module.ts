import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    SubscribeComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntityContainerComponent } from './entity-container/entity-container.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { OrgViewComponent } from './org-view/org-view.component';
import { GenericViewComponent } from './generic-view/generic-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntityContainerComponent,
    PersonViewComponent,
    OrgViewComponent,
    GenericViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }

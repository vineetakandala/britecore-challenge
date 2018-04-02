import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import {AppRoutingModule} from './app-routing.module';
import { LinesComponent } from './lines/lines.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FieldTypesComponent } from './lines/field-types/field-types.component';
import { FieldTypeComponent } from './lines/field-types/field-type/field-type.component';
import { FieldDetailsComponent } from './lines/field-details/field-details.component';
import { FieldGroupsComponent } from './lines/field-groups/field-groups.component';
import { FieldGroupComponent } from './lines/field-groups/field-group/field-group.component';
import { TagGroupComponent } from './lines/tag-group/tag-group.component';
import { TagsComponent } from './lines/tag-group/tags/tags.component';
import {FieldTypeService} from './lines/field-types/field-type.service';
import {TagGroupService} from './lines/tag-group/tag-group.service';
import {FormsModule} from '@angular/forms';
import {FieldDetailsService} from './lines/field-details/field-details.service';
import {FieldGroupService} from './lines/field-groups/field-group.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    LinesComponent,
    UnderConstructionComponent,
    ErrorPageComponent,
    FieldTypesComponent,
    FieldTypeComponent,
    FieldDetailsComponent,
    FieldGroupsComponent,
    FieldGroupComponent,
    TagGroupComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FieldTypeService,
    TagGroupService,
    FieldDetailsService,
    FieldGroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

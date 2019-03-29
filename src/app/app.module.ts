import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { RouterModule, Routes } from '@angular/router';
import { DnaFormComponent } from './dna-form/dna-form.component';
import { DnaValidatorDirective } from './Directives/dna-validator.directive';
import { IdValidatorDirective } from './Directives/id-validator.directive';
import { RnaFormComponent } from './rna-form/rna-form.component';
import { ProteinFormComponent } from './protein-form/protein-form.component';
import { RnaValidatorDirective } from './Directives/rna-validator.directive';
import { ProteinValidatorDirective } from './Directives/protein-validator.directive';
import { AgeValidatorDirective } from './Directives/age-validator.directive';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { LengthValidatorDirective } from './Directives/length-validator.directive';
//Cookies
import {CookieService} from 'ngx-cookie-service';
import { PatientSearchComponent } from './patient-search/patient-search.component';
// Pagination
import { NgxPaginationModule } from 'ngx-pagination';
// Font Awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const appRoutes: Routes = [
  {path:'patient-form', component:PatientFormComponent},
  {path:'dna-form', component:DnaFormComponent},
  {path:'rna-form', component:RnaFormComponent},
  {path:'protein-form', component:ProteinFormComponent},
  {path:'patient-search', component:PatientSearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    DnaFormComponent,
    DnaValidatorDirective,
    IdValidatorDirective,
    RnaFormComponent,
    ProteinFormComponent,
    RnaValidatorDirective,
    ProteinValidatorDirective,
    AgeValidatorDirective,
    LengthValidatorDirective,
    PatientSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgxMyDatePickerModule.forRoot(),
    NgxPaginationModule, //pagination
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

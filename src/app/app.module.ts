import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



import { AppComponent } from './app.component';
import { NavBarComponent } from './landing-page/nav-bar/nav-bar.component';
import { LandingBodyComponent } from './landing-page/landing-body/landing-body.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { GoalsComponent } from './goals/goals/goals.component';
import { TravelsComponent } from './travels/travels/travels.component';
import { ChecklistComponent } from './checklist/checklist/checklist.component';
import { NextTravelComponent } from './next-travel/next-travel/next-travel.component';


const appRoutes: Routes = [
  {path: '', component: LandingBodyComponent},
  {path: 'goals', component: GoalsComponent},
  {path: 'travels', component: TravelsComponent},
  {path: 'checklist', component: ChecklistComponent},
  {path: 'next', component: NextTravelComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingBodyComponent,
    FooterComponent,
    GoalsComponent,
    TravelsComponent,
    ChecklistComponent,
    NextTravelComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class AppBootstrapModule {}


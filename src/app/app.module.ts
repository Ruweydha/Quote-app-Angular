import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { FormsModule } from '@angular/forms';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesComponent } from './quotes/quotes.component';
import { VotesDirective } from './votes.directive';
import { DurationPipe } from './duration.pipe';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesFormComponent,
    QuotesDetailsComponent,
    QuotesComponent,
    VotesDirective,
    DurationPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

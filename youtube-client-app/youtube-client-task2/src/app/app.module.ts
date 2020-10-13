import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './pipes/filter.pipe';
import { ColorDirective } from './directives/color.directive';
import { SortPipe } from './pipes/sort.pipe';
import { SortDatePipe } from './pipes/sort-date.pipe';
import { SortViewsPipe } from './pipes/sort-views.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FilterBoxComponent,
    SearchBoxComponent,
    SearchItemComponent,
    SearchResultComponent,
    FilterPipe,
    ColorDirective,
    SortPipe,
    SortDatePipe,
    SortViewsPipe
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

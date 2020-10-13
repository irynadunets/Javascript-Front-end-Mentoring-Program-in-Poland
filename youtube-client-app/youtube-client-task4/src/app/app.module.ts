import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LoginComponent } from './core/components/login/login.component';
import { FilterBoxComponent } from './core/components/filter-box/filter-box.component';
import { SearchBoxComponent } from './core/components/search-box/search-box.component';
import { SearchResultComponent } from './youtube/components/search-result/search-result.component';
import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './youtube/pipes/filter.pipe';
import { ColorDirective } from './youtube/directives/color.directive';
import { SortPipe } from './youtube/pipes/sort.pipe';
import { SortDatePipe } from './youtube/pipes/sort-date.pipe';
import { SortViewsPipe } from './youtube/pipes/sort-views.pipe';
import { MainComponent } from './youtube/pages/main/main.component';
import { HomeComponent } from './auth/pages/home/home.component';
import { InformationComponent } from './youtube/pages/information/information.component';
import { ErrorComponent } from './auth/pages/error/error.component';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { LoginService } from './auth/services/login.service';
import { AuthGuard } from './core/guards/auth.guard';
import { ParamInterceptor } from './youtube/services/youtube.interceptor';

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
    SortViewsPipe,
    MainComponent,
    HomeComponent,
    InformationComponent,
    ErrorComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,    
  ],
  providers: [
    AuthGuard,
    LoginService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ParamInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

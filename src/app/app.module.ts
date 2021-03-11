import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PathPipe } from './pipes/path.pipe';
import { DocviewerComponent } from './components/docviewer/docviewer.component';
import { NoCacheHeadersInterceptor } from './HttpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PagenotfoundComponent,
    SidenavComponent,
    ToolbarComponent,
    PathPipe,
    DocviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoCacheHeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

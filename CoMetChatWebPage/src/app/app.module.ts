import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { InfobarComponent } from './pages/infobar/infobar.component';
import { ChatpageComponent } from './pages/chatpage/chatpage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './core/interceptor/-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InfobarComponent,
    ChatpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorInterceptor,
    multi:true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

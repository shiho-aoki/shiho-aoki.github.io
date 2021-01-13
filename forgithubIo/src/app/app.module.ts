import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WorkComponent } from './work/work.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFireModule } from '@angular/fire';
import { MypageComponent } from './mypage/mypage.component';

@NgModule({
  //Register declarations (=components) and pipes that is declared in the module
  declarations: [
    AppComponent,
    AboutmeComponent,
    WorkComponent,
    HeaderComponent,
    OverviewComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    MypageComponent
  ],
  // Import another modules in my module
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  // Specify that registered in another module as imports
  exports: [],
  // Register services specified in the module
  providers: [],
  // Specify the component became the entry point of the app 
  bootstrap: [AppComponent],
})
export class AppModule { }
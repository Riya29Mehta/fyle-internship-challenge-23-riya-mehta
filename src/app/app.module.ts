import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { GithubAppComponent } from './Components/github-app/github-app.component';
import { GithubProfileComponent } from './Components/github-profile/github-profile.component';
import { GithubProfileCardComponent } from './Components/github-profile-card/github-profile-card.component';
import { GithubRepositoriesComponent } from './Components/github-repositories/github-repositories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GithubProfileComponent,
    GithubProfileCardComponent,
    GithubRepositoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

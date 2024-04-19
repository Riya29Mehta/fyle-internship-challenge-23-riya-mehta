import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    const dataURL= `https://api.github.com/users/${githubUsername}`;
    return this.httpClient.get<any>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
    );    
  }
  
  getRepositories(githubUsername:string){
    const dataURL= `https://api.github.com/users/${githubUsername}/repos`;
    return this.httpClient.get<any>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
    );    
  }
  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
  private handleErrors(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent {
  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepositories!: any[];
  public errorMessage!: string;

  constructor(private githubService: ApiService) {}

  public searchUser() {
    // to get the github profile
    this.githubService.getUser(this.githubUserQuery).subscribe(
      (data: any) => {
        this.githubProfile = data;
        this.getRepos();
      },
      (error: any) => {
        this.errorMessage = error.message; // Use error.message to get the error message
      }
    );
  }

  public getRepos(){
    this.githubService.getRepositories(this.githubUserQuery).subscribe(
      (repo:any)=>{
        this.githubRepositories=repo;
      },
      (err:any)=>{
        this.errorMessage=err.message;
      }
    );
  }
}

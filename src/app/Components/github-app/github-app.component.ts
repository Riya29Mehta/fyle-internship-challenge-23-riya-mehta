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
  public currentPage=1;
  public totalPages=10;
  public reposAvailable=true;

  constructor(private githubService: ApiService) {}

  public searchUser() {
    // to get the github profile
    this.githubService.getUser(this.githubUserQuery).subscribe(
      (data: any) => {
        this.githubProfile = data;
        this.loadRepos();

      },
      (error: any) => {
        this.errorMessage = error.message; // Use error.message to get the error message
      }
    );
  }
  public loadRepos(){
    this.githubService.getRepositories(this.githubUserQuery, this.currentPage).subscribe(
      (repo:any)=>{
        this.githubRepositories=repo;
        if(this.githubRepositories.length==0){
          this.reposAvailable=false;
        }
      },
      (err:any)=>{
        this.errorMessage=err.message;
      }
    );
  }

  public nextPage() {
    this.currentPage++;
    this.loadRepos();
  }

  public prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadRepos();
    }
  }


}

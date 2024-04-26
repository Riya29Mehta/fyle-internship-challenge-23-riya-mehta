import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {
  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepositories!: any[];
  public errorMessage!: string;
  public currentPage!: number;
  public totalPages=10;
  public reposAvailable=true;
  public showSkeleton=true;

  constructor(private githubService: ApiService) {}
  ngOnInit(): void {
    const storedQuery = localStorage.getItem('githubUserQuery');
    if (storedQuery) {
      this.githubUserQuery = storedQuery;
      this.searchUser(); // Fetch user data
    }

    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      this.currentPage = parseInt(storedPage, 10);
      this.loadRepos(); // Fetch repositories
    }
  }

  public searchUser() {
    // to get the github profile
    this.showSkeleton=true;
    localStorage.setItem('githubUserQuery', this.githubUserQuery);

    this.githubService.getUser(this.githubUserQuery).subscribe(
      (data: any) => {
        this.currentPage=1;
        this.githubProfile = data;
        this.loadRepos();
        this.reposAvailable=true;
        this.showSkeleton=false;

      },
      (error: any) => {
        this.errorMessage = error.message; // Use error.message to get the error message
        this.showSkeleton=false;
      }
    );
  }
  public loadRepos(){
    this.githubService.getRepositories(this.githubUserQuery, this.currentPage).subscribe(
      (repo:any)=>{
        this.githubRepositories=repo;
        localStorage.setItem('currentPage', this.currentPage.toString());
        if(this.githubRepositories.length==0){
          this.reposAvailable=false;
          this.currentPage--;
          this.loadRepos();
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
      this.reposAvailable=true;
    }
  }


}

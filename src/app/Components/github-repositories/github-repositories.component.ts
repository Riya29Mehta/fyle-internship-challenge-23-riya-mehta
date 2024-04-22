import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-repositories',
  templateUrl: './github-repositories.component.html',
  styleUrls: ['./github-repositories.component.scss']
})
export class GithubRepositoriesComponent {
  @Input() githubRepositories !: any;
  ngOnInit(){
    // throw new Error('Method not implemented.');

  }
}

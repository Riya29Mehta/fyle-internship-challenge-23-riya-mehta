import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent {
  @Input() githubProfile:any;
  @Input() githubRepositories:any;
  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

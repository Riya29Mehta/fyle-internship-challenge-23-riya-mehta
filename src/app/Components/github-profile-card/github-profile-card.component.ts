import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrls: ['./github-profile-card.component.scss']
})
export class GithubProfileCardComponent {
  @Input() githubProfile:any;
  @Input() githubRepositories:any;
  constructor() { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}

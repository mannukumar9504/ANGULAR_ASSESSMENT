import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  theme: string = 'night';
  constructor() {}

  changeTheme() {
    this.theme = this.theme === 'night' ? 'day':  'night';

    const body = document.getElementsByTagName('body')[0];
    console.log("body.classlist===>",body.classList.contains('dark-theme'));
    if (body.classList.contains('dark-theme')){
      body.classList.remove('dark-theme');
    } else {
      body.classList.add('dark-theme');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit(): void {}

  toMovies(): void {
    this.router.navigate(['movies']);
  }

  /**
   * navigates to user profile
   */
  toProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
   * logs out users, clears local storage to reset token and user
   */
  logout(): void {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
}

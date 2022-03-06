import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(val=> {
      if(val instanceof NavigationEnd){
        let url=val.urlAfterRedirects}

      })
  }

  onLogin(data: any){
console.log(data);

    this.authService.login(data.username, data.password);
    if(this.authService.isAuthenticated){
      console.log(this.authService.isAuthenticated)
      this.authService.saveAuthLocalUser()
this.router.navigate([''])
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { Router } from '@angular/router';

// Import the model
import { User } from './../../../model/user.model';
import { CurrentUser } from './../../../model/currentUser';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user = new User('', '', '', '');
  shared: SharedService;
  message: string;

  constructor(private authService: AuthService,
              private router: Router) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
  }

  login() {
    // console.log('login  --->');

    this.message = '';
    this.authService.login(this.user).subscribe((userAuthentication: CurrentUser) => {
        console.log(userAuthentication);

        this.shared.token = userAuthentication.token;
        this.shared.user = userAuthentication.user;
        this.shared.showTemplate.emit(true);
        this.router.navigate(['/music']);
    } , err => {
      this.shared.token = null;
      this.shared.user = null;
      this.shared.showTemplate.emit(false);
      this.message = 'Erro ';
    });
  }

  cancelLogin() {
    this.message = '';
    this.user = new User('', '', '', '');
    window.location.href = '/login';
    window.location.reload();
  }

  getFormGroupClass(isInvalid: boolean, isDirty: boolean): {} {
    return {
      'form-group': true,
      'has-error' : isInvalid  && isDirty,
      'has-success' : !isInvalid  && isDirty
    };
  }

}

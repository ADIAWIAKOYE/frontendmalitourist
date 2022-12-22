import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/connexion.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private route: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    console.log("------------------"+this.form.username);
    console.log("------------------"+this.form.password);
    this.authService.login(this.form.username, this.form.password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

       

        this.reloadPage();
        
        if (this.isLoggedIn == true) {
          this.route.navigateByUrl("/region");
        }
      },

      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
   
  }

  reloadPage(): void {
    window.location.reload();
  }

}

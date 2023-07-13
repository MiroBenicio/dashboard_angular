import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LocalStorageService } from 'src/app/local-storage.service';
import {
  ActivatedRoute,
  NavigationStart,
  NavigationExtras,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private storageService: LocalStorageService,
    public router: Router
  ) {}
  email = '';
  senha = '';

  login(): void {
    this.authService.login(this.email, this.senha).subscribe({
      next: (res) => {
        let response = JSON.parse(JSON.stringify(res));
        this.storageService.set('token', response.data);
        this.router.navigate(['influencerList']);
      },
      error: () => {
        alert('Email ou Senha Inválidos');
      },
    });
  }
  ngOnInit(): void {}
}

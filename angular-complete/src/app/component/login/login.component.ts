import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService,private router: Router) {}

  ngOnInit(): void {}

  async login() {
    if (this.email == '') {
      alert('Please enter email');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    try {
      await this.auth.login(this.email, this.password);
      // Đăng nhập thành công, chuyển hướng đến trang-chu
      this.router.navigate(['/trang-chu']);
    } catch (error) {
      // Xử lý lỗi nếu cần
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials and try again.');
    }

    this.email = '';
    this.password = '';
  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
}

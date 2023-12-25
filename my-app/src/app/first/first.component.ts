import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = ''; // Property to store success message

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      () => {
        // ... xử lý khi đăng nhập thành công
      },
      (error: HttpErrorResponse) => {  // Chỉ định rõ kiểu cho tham số error
        this.errorMessage = "Incorrect Email or Password";
      }
    );
  }
}

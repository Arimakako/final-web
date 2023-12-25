import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient, private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<User>(`http://localhost:9992/user/login`, { email, password }).pipe(
      catchError(error => {
        return throwError(error);
      })
      ).subscribe(user => {
        // ... Các đoạn mã trước đó
    
        if (user.isProfileComplete) {
          // Điều hướng dựa trên trạng thái hồ sơ
          this.router.navigate(['/']); // hoặc trang bạn mong muốn
        } else {
          this.router.navigate(['/profile']); // Người dùng cần hoàn thành hồ sơ
        }
      });
    }
  }
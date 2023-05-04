import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  password: string = '';
  @Output() loginSuccess = new EventEmitter<void>();

  submit() {
    if (this.password === '1234') {
      this.loginSuccess.emit();
    } else {
      alert('Incorrect password, please try again.');
    }
  }
}

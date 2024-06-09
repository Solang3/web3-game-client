import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule] // Importa los módulos necesarios
})
export class LoginComponent implements OnInit {
  account: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.checkAccount();
  }

  async checkAccount() {
    const account = await this.authService.getAccount();
    this.account = account !== undefined ? account : null;
  }

  async connectWallet() {
    const account = await this.authService.connectWallet();
    this.account = account !== undefined ? account : null;
  }
}

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import detectEthereumProvider from '@metamask/detect-provider';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  provider: any;
  account: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.init();
  }

  async init() {
    if (isPlatformBrowser(this.platformId)) {
      this.provider = await detectEthereumProvider();
      if (this.provider) {
        console.log('MetaMask is available');
      } else {
        console.error('MetaMask not found');
      }
    } else {
      console.error('This code should run in the browser.');
    }
  }

  async connectWallet(): Promise<string | null> {
    if (this.provider) {
      try {
        const accounts = await this.provider.request({ method: 'eth_requestAccounts' });
        this.account = accounts[0];
        console.log('Connected account:', this.account);
        return this.account;
      } catch (error) {
        console.error('User rejected the request');
        return null;
      }
    }
    return null;
  }

  async getAccount(): Promise<string | null> {
    return this.account;
  }
}

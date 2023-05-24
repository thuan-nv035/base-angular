import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!: string;

  constructor() { }

  isAuthenticated(): boolean {
    // Add your authentication logic here
    // Return true if the user is authenticated, false otherwise
    return false
  }

  getAuthToken(): string {
    // Return the authorization token from storage or any other source
    return this.token
  } 

  refreshToken(): void {
    // Implement token refresh logic if needed
  }
}

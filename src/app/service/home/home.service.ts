import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from '../config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient, private apiConfigService: ApiConfigService) {}

  makeRequest() {
    const url = this.apiConfigService.getBaseUrl() + '/api/endpoint';
    // Use the constructed URL for your HTTP request
    this.http.get(url).subscribe(
      response => {
        // Handle the response
      },
      error => {
        // Handle errors
      }
    );
  }
}

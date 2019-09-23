import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadMainChattingService {
  baseUrl = 'http://localhost:3000/chats'

  constructor(private http: HttpClient) {}

  submitMainChat(url: string, model: any) {
    return this.http.post(url, model)
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BotManagerService {

  private apiUrl = 'http://192.168.1.11:8000/wechat-manager/openAweChat/openClient';

  constructor(private http: HttpClient) {
  }

  addBot() {
    return this.http.get(this.apiUrl);
  }
}

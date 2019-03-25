import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BotManagerService {

  private apiUrl = 'http://127.0.0.1:8000/wechat-manager/openAweChat/openBotManager';

  private getListUrl = 'http://127.0.0.1:8000/wechat-manager/botManagerController/getAllBot';

  private loginUrl = 'http://127.0.0.1:8000/wechat-manager/openAweChat/openClient';

  constructor(private http: HttpClient) {
  }

  addBot() {
    return this.http.get(this.apiUrl);
  }

  getBotList() {
    return this.http.get(this.getListUrl);
  }

  loginBot() {
    return this.http.get(this.loginUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { BotManagerService } from './bot-manager.service';
import {Bot, ResultBean} from '../result-bean';
import {DialogService} from '../../component/dialog';

@Component({
  selector: 'app-bot-manager',
  templateUrl: './bot-manager.component.html',
  styleUrls: ['./bot-manager.component.scss']
})
export class BotManagerComponent implements OnInit {

  bots: Bot[];

  constructor(private service: BotManagerService,
              private dialog: DialogService) { }

  ngOnInit() {
    console.log('init bot managerCompoent');
    this.service.getBotList().subscribe((bots: ResultBean<Bot[]>)  => {
        this.bots = bots.data;
    });
  }
  // 添加bot函数
  onAdd() {
    this.service.addBot().subscribe(
      (data) => console.log(data)
    );
  }
  onGetQrcode(bot: Bot) {
    this.dialog.alert({
      title: '二维码',
      message: bot.botClientId,
      closeButton: '确定'
    })
    console.log(bot.pid);
  }

}

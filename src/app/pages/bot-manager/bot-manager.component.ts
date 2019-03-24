import { Component, OnInit } from '@angular/core';
import { BotManagerService } from './bot-manager.service';

@Component({
  selector: 'app-bot-manager',
  templateUrl: './bot-manager.component.html',
  styleUrls: ['./bot-manager.component.scss']
})
export class BotManagerComponent implements OnInit {

  bots: any[] = [];

  constructor(private service: BotManagerService) { }

  ngOnInit() {
  }
  // 添加bot函数
  onAdd() {
    this.service.addBot().subscribe(
      (data) => console.log(data)
    );
  }

  onQuery() {
    this.service.getBotList().subscribe( bots => {
        this.bots = bots.data;
    });
  }

}

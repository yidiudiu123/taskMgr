import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  priorities = [
    {
      lable: '紧急',
      value: 1
    },
    {
      lable: '重要',
      value: 2
    },
    {
      lable: '普通',
      value: 3
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

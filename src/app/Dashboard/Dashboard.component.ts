import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  button = ['Summary', 'Details', 'Aggregators'];
  activeButton: string | null = null;

  setActiveButton(button: string) {
    console.log('in')
    this.activeButton = button;
    console.log(this.activeButton)
  }

}

import { Component, OnInit } from '@angular/core';
import { Messages } from '../shared/constants/messages';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private messages = new Messages();
  aboutPage = this.messages.aboutPage;
  infor = this.messages.infor
  constructor() { }

  ngOnInit(): void {
  }

}

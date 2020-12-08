import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { MESSAGES } from '../shared/constants/messages';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  pageName = '';
  info = '';
  constructor() { }

  ngOnInit(): void {
    this.pageName = _.get(MESSAGES, 'HOME.PAGE_NAME');
    this.info = _.get(MESSAGES, 'HOME.INFO');
  }

}

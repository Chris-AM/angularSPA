import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { MESSAGES } from '../shared/constants/messages';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  aboutPage = '';
  why_page = '';
  constructor() { }

  ngOnInit(): void {
    this.aboutPage = _.get(MESSAGES, 'ABOUT.ABOUT_PAGE');
    this.why_page = _.get(MESSAGES, 'ABOUT.WHY_PAGE');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  socialList = [{
    url: 'https://github.com/singhnitin2004',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg',
    style: ''
  }, {
    url: 'mailto:singhnitin2004@gmail.com',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/gmail.svg',
    style: 'filter: invert(32%) sepia(77%) saturate(1154%) hue-rotate(334deg) brightness(94%) contrast(91%);'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}

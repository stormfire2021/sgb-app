import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {

  imageURL: string = 'assets/livro.jpg';
  isHidePanel = true;
  constructor() {}

  getBackgroundImage() {
    return {
      'background-image': 'url(assets/livro.jpg)',
     'background-position': 'center',
      'background-size': 'cover',
      'height': '100vh',
    };
  }


  ngOnInit(): void {
  }

}

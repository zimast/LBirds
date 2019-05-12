import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bird-image',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {

  @Input() public birdImagePath: string;

  constructor() { }

  ngOnInit() {
    
  }

}

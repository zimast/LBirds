import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bird-radio-options',
  templateUrl: './bird-radio-options.component.html',
  styleUrls: ['./bird-radio-options.component.css']
})
export class BirdRadioOptionsComponent implements OnInit {

  @Input() optionsControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public incorrectString: boolean = false;
  public displayOptions: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public showHelp(): void {
    this.displayOptions = true;
  }

  public hideHelp(): void {
    this.displayOptions = true;
  }

}

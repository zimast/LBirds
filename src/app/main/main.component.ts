import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public incorrectString: boolean = false;
  public displayOptions: boolean = false;
  public birdQuestionForm: FormGroup = null;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setupForm();
  }

  public showHelp(): void {
    this.displayOptions = true;
  }

  public correct() {
    console.log(this.birdQuestionForm.value);    
  }

  private setupForm(): void {
    this.birdQuestionForm = this.formBuilder.group({
      birdNameOptions: [''],
      birdNameString: ['']
    })
  }

}

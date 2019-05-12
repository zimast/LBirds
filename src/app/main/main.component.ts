import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetRandomBirdService, Bird } from '../services/get-random-bird.service';
import { GetRandomBirdNameOptionsService } from '../services/get-random-bird-name-options.service';

const pocet_vsetkych_vtakov: number = 100;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public incorrectString: boolean = false;
  public displayOptions: boolean = false;
  public birdQuestionForm: FormGroup = null;
  public correctionForm: FormGroup = null;
  public correctAnswers: number = 0;
  public badAnswers: number = 0;
  public correctAnswersWithHelp: number = 0;

  public bird: Bird = null;
  public birdImagePath: string = '';

  public valueToCheck: string;

  // TEMP
  private howManyBirdsWeHave: number = 1;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly getRandomBirdService: GetRandomBirdService,
    private readonly getRandomBirdNameOptionsService: GetRandomBirdNameOptionsService,
  ) { }

  ngOnInit() {
    this.setupForm();
    this.bird = this.getRandomBirdService.giveMeBird();
    this.birdImagePath = '../../assets/images/' + this.bird.latinName + '/' + this.getRandomBirdService.getRndInteger(1, this.bird.numberOfImages) + '.jpg';
  }

  public showHelp(): void {
    this.displayOptions = true;
  }

  public correct() {
    console.log(this.birdQuestionForm.value);

    if (this.displayOptions) {
      this.valueToCheck = this.birdQuestionForm.value.birdNameOptions;
    } else {
      this.valueToCheck = this.birdQuestionForm.value.birdNameString;
    }

    if (this.bird.name === this.valueToCheck) {
      this.correctAnswers++;
      this.birdQuestionForm.reset();
      this.bird = this.getRandomBirdService.giveMeBird();
      this.birdImagePath = '../../assets/images/' + this.bird.latinName + '/' + this.getRandomBirdService.getRndInteger(1, this.bird.numberOfImages) + '.jpg';
    } else {
      this.incorrectString = true;
    }
  }

  public itWasCorrect() {
    this.correctAnswers++;
    this.incorrectString = false;
    this.birdQuestionForm.reset();
    this.bird = this.getRandomBirdService.giveMeBird();
    this.birdImagePath = '../../assets/images/' + this.bird.latinName + '/' + this.getRandomBirdService.getRndInteger(1, this.bird.numberOfImages) + '.jpg';
  }

  public itWasIncorrect() {
    this.badAnswers++;
    this.incorrectString = false;
    this.birdQuestionForm.reset();
    this.bird = this.getRandomBirdService.giveMeBird();
    this.birdImagePath = '../../assets/images/' + this.bird.latinName + '/' + this.getRandomBirdService.getRndInteger(1, this.bird.numberOfImages) + '.jpg';
  }

  private setupForm(): void {
    this.birdQuestionForm = this.formBuilder.group({
      birdNameOptions: [''],
      birdNameString: ['']
    })
  }

}

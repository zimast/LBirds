import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdRadioOptionsComponent } from './bird-radio-options.component';

describe('BirdRadioOptionsComponent', () => {
  let component: BirdRadioOptionsComponent;
  let fixture: ComponentFixture<BirdRadioOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdRadioOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdRadioOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

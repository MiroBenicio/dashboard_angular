import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerFormComponent } from './influencer-form.component';

describe('InfluencerFormComponent', () => {
  let component: InfluencerFormComponent;
  let fixture: ComponentFixture<InfluencerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

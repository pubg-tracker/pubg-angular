import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteMatchesComponent } from './favourite-matches.component';

describe('FavouriteMatchesComponent', () => {
  let component: FavouriteMatchesComponent;
  let fixture: ComponentFixture<FavouriteMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

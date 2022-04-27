import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPlayersComponent } from './global-players.component';

describe('GlobalPlayersComponent', () => {
  let component: GlobalPlayersComponent;
  let fixture: ComponentFixture<GlobalPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

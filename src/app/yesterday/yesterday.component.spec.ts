import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesterdayComponent } from './yesterday.component';

describe('YesterdayComponent', () => {
  let component: YesterdayComponent;
  let fixture: ComponentFixture<YesterdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YesterdayComponent]
    });
    fixture = TestBed.createComponent(YesterdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

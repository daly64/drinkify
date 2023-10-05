import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearchebarComponent } from './search-bar.component';

describe('ShearchebarComponent', () => {
  let component: ShearchebarComponent;
  let fixture: ComponentFixture<ShearchebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShearchebarComponent]
    });
    fixture = TestBed.createComponent(ShearchebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

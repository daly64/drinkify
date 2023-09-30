import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailScreenComponent } from './recipe-detail-screen.component';

describe('RecipeDetailScreenComponent', () => {
  let component: RecipeDetailScreenComponent;
  let fixture: ComponentFixture<RecipeDetailScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailScreenComponent]
    });
    fixture = TestBed.createComponent(RecipeDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

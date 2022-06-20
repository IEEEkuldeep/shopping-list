import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListPreviewComponent } from './shopping-list-preview.component';

describe('ShoppingListPreviewComponent', () => {
  let component: ShoppingListPreviewComponent;
  let fixture: ComponentFixture<ShoppingListPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

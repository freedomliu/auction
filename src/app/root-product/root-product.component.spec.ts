import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootProductComponent } from './root-product.component';

describe('RootProductComponent', () => {
  let component: RootProductComponent;
  let fixture: ComponentFixture<RootProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

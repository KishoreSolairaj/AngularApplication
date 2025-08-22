import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplefilterComponent } from './simplefilter.component';

describe('SimplefilterComponent', () => {
  let component: SimplefilterComponent;
  let fixture: ComponentFixture<SimplefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplefilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimplefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

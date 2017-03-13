import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBcComponent } from './search-bc.component';

describe('SearchBcComponent', () => {
  let component: SearchBcComponent;
  let fixture: ComponentFixture<SearchBcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

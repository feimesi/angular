import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableshComponent } from './tablesh.component';

describe('TableshComponent', () => {
  let component: TableshComponent;
  let fixture: ComponentFixture<TableshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

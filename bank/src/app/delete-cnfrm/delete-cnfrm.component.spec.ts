import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCnfrmComponent } from './delete-cnfrm.component';

describe('DeleteCnfrmComponent', () => {
  let component: DeleteCnfrmComponent;
  let fixture: ComponentFixture<DeleteCnfrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCnfrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCnfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

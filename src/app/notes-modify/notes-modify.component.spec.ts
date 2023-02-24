import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesModifyComponent } from './notes-modify.component';

describe('NotesModifyComponent', () => {
  let component: NotesModifyComponent;
  let fixture: ComponentFixture<NotesModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

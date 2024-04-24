import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCommentComponent } from './see-comment.component';

describe('SeeCommentComponent', () => {
  let component: SeeCommentComponent;
  let fixture: ComponentFixture<SeeCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingEmployessComponent } from './updating-employess.component';

describe('UpdatingEmployessComponent', () => {
  let component: UpdatingEmployessComponent;
  let fixture: ComponentFixture<UpdatingEmployessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [UpdatingEmployessComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatingEmployessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

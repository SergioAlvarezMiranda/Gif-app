import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayImageComponent } from './lay-image.component';

describe('LayImageComponent', () => {
  let component: LayImageComponent;
  let fixture: ComponentFixture<LayImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
